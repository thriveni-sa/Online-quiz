/**
 * script.js
 * Online Quiz App - Main Application Logic
 * Structured across 5 Phases for beginners:
 * 1. State Management
 * 2. DOM Elements & Initialization
 * 3. Phase 1: Subject Selection Logic
 * 4. Phase 2 & 3: Quiz Game Engine (Question loader, timer, scoring, options)
 * 5. Phase 4: Results, Scorecard, Review & Restart Handlers
 */

// ==============================================================
// 1. APPLICATION STATE
// Variables that hold current quiz information
// ==============================================================
const QUESTIONS_PER_QUIZ = 10;
const TIME_PER_QUESTION = 15; // 15 seconds per question

let selectedSubjectId = null;        // ID of currently picked subject
let activeQuestions = [];            // 10 shuffled questions for the active quiz
let currentQuestionIndex = 0;        // 0 to 9
let userScore = 0;                   // Number of correct answers
let timeRemaining = TIME_PER_QUESTION; // Countdown counter
let timerInterval = null;            // Reference to setInterval
let autoAdvanceTimeout = null;       // Timeout reference for automatic transition
let hasAnsweredCurrentQuestion = false; // Flag to lock answering more than once

// Stores user's history for results & review:
// { questionId, questionText, options, correctIndex, userSelectedIndex, status: 'correct'|'wrong'|'unanswered', explanation }
let quizHistory = [];

// ==============================================================
// 2. DOM ELEMENT REFERENCES
// ==============================================================
// Screens
const subjectScreen = document.getElementById("subject-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");

// Phase 1: Subject Selection Elements
const subjectsGrid = document.getElementById("subjects-grid");
const startQuizBtn = document.getElementById("start-quiz-btn");
const selectionHint = document.getElementById("selection-hint");
const selectedStatusBar = document.getElementById("selected-status-bar");
const selectedSubjectLabel = document.getElementById("selected-subject-label");

// Phase 3: Active Quiz Elements
const quizSubjectIcon = document.getElementById("quiz-subject-icon");
const quizSubjectName = document.getElementById("quiz-subject-name");
const currentQuestionNumEl = document.getElementById("current-question-num");
const totalQuestionsNumEl = document.getElementById("total-questions-num");
const timerBadgeEl = document.getElementById("timer-badge");
const timerCountEl = document.getElementById("timer-count");
const progressBarFillEl = document.getElementById("progress-bar-fill");
const questionTextEl = document.getElementById("question-text");
const optionsContainerEl = document.getElementById("options-container");
const feedbackAlertEl = document.getElementById("feedback-alert");
const liveScoreEl = document.getElementById("live-score");
const nextBtn = document.getElementById("next-btn");
const nextBtnText = document.getElementById("next-btn-text");

// Phase 4: Results Elements
const resultSubjectTag = document.getElementById("result-subject-tag");
const resultBadgeIconEl = document.getElementById("result-badge-icon");
const performanceMessageEl = document.getElementById("performance-message");
const performancePillEl = document.getElementById("performance-pill");
const finalScoreEl = document.getElementById("final-score");
const finalPercentageEl = document.getElementById("final-percentage");
const countCorrectEl = document.getElementById("count-correct");
const countWrongEl = document.getElementById("count-wrong");
const countUnansweredEl = document.getElementById("count-unanswered");
const playAgainBtn = document.getElementById("play-again-btn");
const changeSubjectBtn = document.getElementById("change-subject-btn");
const toggleReviewBtn = document.getElementById("toggle-review-btn");
const reviewContainerEl = document.getElementById("review-container");
const reviewListEl = document.getElementById("review-list");

// ==============================================================
// 3. PHASE 1: SUBJECT SELECTION SCREEN
// ==============================================================

/**
 * Initializes and renders the 8 subject cards into the grid
 */
function renderSubjectCards() {
  subjectsGrid.innerHTML = "";

  subjectsMetadata.forEach((subject) => {
    const card = document.createElement("div");
    card.classList.add("subject-card");
    card.setAttribute("role", "radio");
    card.setAttribute("aria-checked", "false");
    card.setAttribute("tabindex", "0");
    card.dataset.subjectId = subject.id;

    card.innerHTML = `
      <div class="subject-card-top">
        <div class="subject-icon">${subject.icon}</div>
        <span class="subject-tag">${subject.tag}</span>
      </div>
      <h3 class="subject-title">${escapeHtml(subject.name)}</h3>
      <p class="subject-desc">${escapeHtml(subject.description)}</p>
      <div class="subject-select-check">
        <span class="check-circle">✓</span>
        <span class="check-label">Click to select</span>
      </div>
    `;

    // Click handler to select subject
    card.addEventListener("click", () => selectSubject(subject.id));

    // Keyboard accessibility (Enter or Space to select)
    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        selectSubject(subject.id);
      }
    });

    subjectsGrid.appendChild(card);
  });
}

/**
 * Handles selecting one subject at a time
 * @param {string} subjectId - The unique ID of the chosen subject
 */
function selectSubject(subjectId) {
  selectedSubjectId = subjectId;

  // Find metadata for the chosen subject
  const subject = subjectsMetadata.find((s) => s.id === subjectId);

  // Update card visual highlight classes
  const cards = subjectsGrid.querySelectorAll(".subject-card");
  cards.forEach((card) => {
    if (card.dataset.subjectId === subjectId) {
      card.classList.add("selected");
      card.setAttribute("aria-checked", "true");
      card.querySelector(".check-label").textContent = "Selected";
    } else {
      card.classList.remove("selected");
      card.setAttribute("aria-checked", "false");
      card.querySelector(".check-label").textContent = "Click to select";
    }
  });

  // Update status bar & hint
  selectedStatusBar.style.display = "flex";
  selectedSubjectLabel.textContent = `${subject.icon} ${subject.name}`;
  selectionHint.textContent = `Ready! Click "Start Quiz" to begin the ${subject.name} challenge.`;

  // Enable Start Quiz button
  startQuizBtn.disabled = false;
}

// ==============================================================
// 4. PHASE 2 & 3: QUIZ GAME LOGIC
// ==============================================================

/**
 * Shuffles an array randomly using the Fisher-Yates algorithm
 * Creates a shallow clone so original questions.js bank is never mutated.
 * @param {Array} array - Original questions array
 * @returns {Array} Shuffled copy of the array
 */
function shuffleQuestions(array) {
  const clone = array.map((item) => ({ ...item }));
  for (let i = clone.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [clone[i], clone[j]] = [clone[j], clone[i]];
  }
  return clone;
}

/**
 * Starts the quiz for the currently selected subject
 */
function startQuiz() {
  if (!selectedSubjectId) return;

  const subject = subjectsMetadata.find((s) => s.id === selectedSubjectId);
  const rawQuestions = subjectQuestionBank[selectedSubjectId];

  if (!rawQuestions || rawQuestions.length === 0) {
    alert("Questions for this subject are currently unavailable.");
    return;
  }

  // Phase 2: Load and shuffle 10 questions for this subject
  activeQuestions = shuffleQuestions(rawQuestions).slice(0, QUESTIONS_PER_QUIZ);

  // Reset quiz state
  currentQuestionIndex = 0;
  userScore = 0;
  quizHistory = [];
  liveScoreEl.textContent = "0";

  // Update subject indicator in header
  quizSubjectIcon.textContent = subject.icon;
  quizSubjectName.textContent = subject.name;
  totalQuestionsNumEl.textContent = QUESTIONS_PER_QUIZ;

  // Screen transition: Show quiz screen, hide others
  subjectScreen.style.display = "none";
  resultScreen.style.display = "none";
  quizScreen.style.display = "block";

  // Load first question
  loadQuestion(currentQuestionIndex);
}

/**
 * Renders the question at the specified index
 * @param {number} index - Index of the question (0 to 9)
 */
function loadQuestion(index) {
  clearTimers();
  hasAnsweredCurrentQuestion = false;

  const currentQ = activeQuestions[index];

  // 1. Update Question Tracker
  currentQuestionNumEl.textContent = index + 1;

  // 2. Update Progress Bar
  const progressPercent = ((index + 1) / QUESTIONS_PER_QUIZ) * 100;
  progressBarFillEl.style.width = `${progressPercent}%`;

  // 3. Render Question Text
  questionTextEl.textContent = currentQ.question;

  // 4. Render 4 Options
  optionsContainerEl.innerHTML = "";
  const optionLetters = ["A", "B", "C", "D"];

  currentQ.options.forEach((optText, optIdx) => {
    const button = document.createElement("button");
    button.classList.add("option-btn");
    button.setAttribute("type", "button");
    button.setAttribute("data-index", optIdx);
    button.id = `option-${optIdx}`;

    button.innerHTML = `
      <span class="option-letter">${optionLetters[optIdx]}</span>
      <span class="option-text">${escapeHtml(optText)}</span>
      <span class="option-status-icon" aria-hidden="true"></span>
    `;

    button.addEventListener("click", () => handleOptionSelection(optIdx));
    optionsContainerEl.appendChild(button);
  });

  // 5. Reset Feedback message
  feedbackAlertEl.textContent = "";
  feedbackAlertEl.className = "feedback-alert";

  // 6. Next button setup
  nextBtn.disabled = true;
  if (index === QUESTIONS_PER_QUIZ - 1) {
    nextBtnText.textContent = "Finish Quiz";
  } else {
    nextBtnText.textContent = "Next Question";
  }

  // 7. Start 15-second countdown timer
  startTimer();
}

/**
 * Starts the 15-second per-question timer
 */
function startTimer() {
  clearTimers();
  timeRemaining = TIME_PER_QUESTION;
  updateTimerUI();

  timerInterval = setInterval(() => {
    timeRemaining--;
    updateTimerUI();

    // Timer expires
    if (timeRemaining <= 0) {
      clearTimers();
      handleTimeOut();
    }
  }, 1000);
}

/**
 * Updates timer badge and applies warning styling when <= 5 seconds
 */
function updateTimerUI() {
  timerCountEl.textContent = timeRemaining;
  if (timeRemaining <= 5) {
    timerBadgeEl.classList.add("warning");
  } else {
    timerBadgeEl.classList.remove("warning");
  }
}

/**
 * Handles user selecting an answer option
 * Enforces single answer selection per question (cannot be answered twice)
 * @param {number} selectedIndex - The option index clicked (0 to 3)
 */
function handleOptionSelection(selectedIndex) {
  if (hasAnsweredCurrentQuestion) return;

  clearTimers();
  hasAnsweredCurrentQuestion = true;

  const currentQ = activeQuestions[currentQuestionIndex];
  const isCorrect = selectedIndex === currentQ.correctIndex;

  // Disable all options immediately to lock in choice
  disableAllOptions();

  const optionButtons = optionsContainerEl.querySelectorAll(".option-btn");
  const selectedButton = optionButtons[selectedIndex];
  const correctButton = optionButtons[currentQ.correctIndex];

  if (isCorrect) {
    // Correct Answer: +1 point
    userScore++;
    liveScoreEl.textContent = userScore;

    selectedButton.classList.add("selected-correct");
    selectedButton.querySelector(".option-status-icon").textContent = "✓";

    feedbackAlertEl.textContent = "Correct! Well done! 🎉";
    feedbackAlertEl.className = "feedback-alert correct";

    recordHistory(selectedIndex, "correct");
  } else {
    // Incorrect Answer: 0 points
    selectedButton.classList.add("selected-wrong");
    selectedButton.querySelector(".option-status-icon").textContent = "✕";

    // Reveal correct answer so user learns
    correctButton.classList.add("reveal-correct");
    correctButton.querySelector(".option-status-icon").textContent = "✓";

    feedbackAlertEl.textContent = `Incorrect! The correct answer was: "${currentQ.options[currentQ.correctIndex]}"`;
    feedbackAlertEl.className = "feedback-alert wrong";

    recordHistory(selectedIndex, "wrong");
  }

  // Enable Next Question button
  nextBtn.disabled = false;
}

/**
 * Handles question timeout when 15 seconds expire without an answer
 * Awards 0 points, marks as unanswered, and automatically advances
 */
function handleTimeOut() {
  if (hasAnsweredCurrentQuestion) return;
  hasAnsweredCurrentQuestion = true;

  const currentQ = activeQuestions[currentQuestionIndex];

  // Disable options
  disableAllOptions();

  // Reveal correct answer in green
  const optionButtons = optionsContainerEl.querySelectorAll(".option-btn");
  const correctButton = optionButtons[currentQ.correctIndex];
  if (correctButton) {
    correctButton.classList.add("reveal-correct");
    correctButton.querySelector(".option-status-icon").textContent = "✓";
  }

  feedbackAlertEl.textContent = `Time's up! The correct answer was: "${currentQ.options[currentQ.correctIndex]}"`;
  feedbackAlertEl.className = "feedback-alert timeout";

  // Record unanswered history (-1 represents no selection)
  recordHistory(-1, "unanswered");

  // Enable Next button immediately so user can advance manually
  nextBtn.disabled = false;

  // Automatically advance to the next question after a brief 1.5s pause
  autoAdvanceTimeout = setTimeout(() => {
    handleNextQuestion();
  }, 1500);
}

/**
 * Helper to disable all option buttons for the current question
 */
function disableAllOptions() {
  const buttons = optionsContainerEl.querySelectorAll(".option-btn");
  buttons.forEach((btn) => {
    btn.disabled = true;
  });
}

/**
 * Records an answer in the quiz history array
 */
function recordHistory(selectedIndex, status) {
  const currentQ = activeQuestions[currentQuestionIndex];
  quizHistory.push({
    questionNum: currentQuestionIndex + 1,
    questionText: currentQ.question,
    options: currentQ.options,
    correctIndex: currentQ.correctIndex,
    userSelectedIndex: selectedIndex,
    status: status,
    explanation: currentQ.explanation || ""
  });
}

/**
 * Moves to next question or shows results if last question
 */
function handleNextQuestion() {
  clearTimers();

  if (currentQuestionIndex + 1 < QUESTIONS_PER_QUIZ) {
    currentQuestionIndex++;
    loadQuestion(currentQuestionIndex);
  } else {
    showResults();
  }
}

/**
 * Clears all active intervals and timeouts to avoid background memory leaks
 */
function clearTimers() {
  if (timerInterval) {
    clearInterval(timerInterval);
    timerInterval = null;
  }
  if (autoAdvanceTimeout) {
    clearTimeout(autoAdvanceTimeout);
    autoAdvanceTimeout = null;
  }
}

// ==============================================================
// 5. PHASE 4: RESULTS & RESTART LOGIC
// ==============================================================

/**
 * Calculates final scores and renders the Result Screen
 */
function showResults() {
  clearTimers();

  // Transition to results screen
  quizScreen.style.display = "none";
  resultScreen.style.display = "block";

  // Current Subject Tag
  const subject = subjectsMetadata.find((s) => s.id === selectedSubjectId);
  resultSubjectTag.textContent = `${subject.icon} ${subject.name}`;

  // Scoring Calculations
  const percentage = Math.round((userScore / QUESTIONS_PER_QUIZ) * 100);
  finalScoreEl.textContent = userScore;
  finalPercentageEl.textContent = `${percentage}%`;

  // Metric tallies
  const correctCount = quizHistory.filter((item) => item.status === "correct").length;
  const wrongCount = quizHistory.filter((item) => item.status === "wrong").length;
  const unansweredCount = quizHistory.filter((item) => item.status === "unanswered").length;

  countCorrectEl.textContent = correctCount;
  countWrongEl.textContent = wrongCount;
  countUnansweredEl.textContent = unansweredCount;

  // Performance message and badge based on score percentage
  let badgeIcon = "🏆";
  let pillText = "Mastermind";
  let messageText = "Outstanding performance! You mastered this subject with flying colors!";

  if (percentage === 100) {
    badgeIcon = "👑";
    pillText = "Perfect Score!";
    messageText = "Flawless victory! You answered all 10 questions correctly!";
  } else if (percentage >= 80) {
    badgeIcon = "🌟";
    pillText = "Excellent!";
    messageText = "Great job! You have demonstrated strong expertise in this subject.";
  } else if (percentage >= 50) {
    badgeIcon = "👍";
    pillText = "Good Effort!";
    messageText = "Good effort! You passed, and reviewing the tricky questions will make you even stronger.";
  } else {
    badgeIcon = "💡";
    pillText = "Keep Learning!";
    messageText = "Don't worry! Review the explanations below and try again to improve your score.";
  }

  resultBadgeIconEl.textContent = badgeIcon;
  performancePillEl.textContent = pillText;
  performanceMessageEl.textContent = messageText;

  // Build the detailed review list
  buildReviewList();

  // Reset review section visibility
  reviewContainerEl.style.display = "none";
  toggleReviewBtn.querySelector("#review-btn-text").textContent = "Review Questions & Answers";
}

/**
 * Builds the question-by-question review cards
 */
function buildReviewList() {
  reviewListEl.innerHTML = "";

  quizHistory.forEach((item) => {
    const card = document.createElement("div");
    card.classList.add("review-item");

    let statusClass = "is-wrong";
    let userAnsText = "";

    if (item.status === "correct") {
      statusClass = "is-correct";
      userAnsText = `Your answer: <strong>${escapeHtml(item.options[item.userSelectedIndex])} (Correct)</strong>`;
    } else if (item.status === "unanswered") {
      statusClass = "is-unanswered";
      userAnsText = `Your answer: <strong>None (Timed Out)</strong>`;
    } else {
      statusClass = "is-wrong";
      userAnsText = `Your answer: <strong>${escapeHtml(item.options[item.userSelectedIndex])} (Incorrect)</strong>`;
    }

    card.classList.add(statusClass);

    card.innerHTML = `
      <div class="review-q-num">Question ${item.questionNum} of 10</div>
      <div class="review-q-text">${escapeHtml(item.questionText)}</div>
      <div class="review-ans">
        <p class="review-user-ans">${userAnsText}</p>
        <p class="review-correct-ans">Correct answer: <strong>${escapeHtml(item.options[item.correctIndex])}</strong></p>
        ${item.explanation ? `<p class="review-explanation">Explanation: ${escapeHtml(item.explanation)}</p>` : ""}
      </div>
    `;

    reviewListEl.appendChild(card);
  });
}

/**
 * Toggles the review list section visibility
 */
function toggleReviewSection() {
  const isHidden = reviewContainerEl.style.display === "none";
  if (isHidden) {
    reviewContainerEl.style.display = "block";
    toggleReviewBtn.querySelector("#review-btn-text").textContent = "Hide Review";
    reviewContainerEl.scrollIntoView({ behavior: "smooth" });
  } else {
    reviewContainerEl.style.display = "none";
    toggleReviewBtn.querySelector("#review-btn-text").textContent = "Review Questions & Answers";
  }
}

/**
 * Play Again: restarts the quiz with the same subject
 */
function playAgain() {
  clearTimers();
  startQuiz();
}

/**
 * Choose Another Subject: returns back to the Phase 1 Subject Selection screen
 */
function chooseAnotherSubject() {
  clearTimers();

  // Reset state
  activeQuestions = [];
  currentQuestionIndex = 0;
  userScore = 0;
  quizHistory = [];

  // Show Subject screen, hide others
  quizScreen.style.display = "none";
  resultScreen.style.display = "none";
  subjectScreen.style.display = "block";

  // Scroll to top
  window.scrollTo({ top: 0, behavior: "smooth" });
}

/**
 * Utility helper to sanitize and safely escape strings
 */
function escapeHtml(text) {
  if (typeof text !== "string") return text;
  const div = document.createElement("div");
  div.textContent = text;
  return div.innerHTML;
}

// ==============================================================
// 6. INITIALIZATION & EVENT LISTENERS
// ==============================================================
startQuizBtn.addEventListener("click", startQuiz);
nextBtn.addEventListener("click", handleNextQuestion);
playAgainBtn.addEventListener("click", playAgain);
changeSubjectBtn.addEventListener("click", chooseAnotherSubject);
toggleReviewBtn.addEventListener("click", toggleReviewSection);

// Render the 8 subject cards on page load
renderSubjectCards();
