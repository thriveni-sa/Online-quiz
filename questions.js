/**
 * questions.js
 * Comprehensive Question Bank for Online Quiz App
 * Contains 8 subjects, each with 10 high-quality, beginner-friendly multiple-choice questions (80 questions total).
 * Each question has:
 * - id: unique identifier
 * - question: the question text
 * - options: array of exactly 4 strings
 * - correctIndex: 0-based index of the single correct answer
 * - explanation: brief educational explanation for the review screen
 */

const subjectQuestionBank = {
  // -------------------------------------------------------------
  // 1. COMPUTER SCIENCE
  // -------------------------------------------------------------
  "computer-science": [
    {
      id: "cs-1",
      question: "What does CPU stand for in computer hardware?",
      options: [
        "Central Processing Unit",
        "Control Processing Unit",
        "Computer Personal Unit",
        "Central Performance Unit"
      ],
      correctIndex: 0,
      explanation: "CPU stands for Central Processing Unit and is often described as the brain of the computer."
    },
    {
      id: "cs-2",
      question: "Which type of memory is volatile and loses its contents when power is turned off?",
      options: [
        "Read-Only Memory (ROM)",
        "Hard Disk Drive (HDD)",
        "Random Access Memory (RAM)",
        "Solid State Drive (SSD)"
      ],
      correctIndex: 2,
      explanation: "RAM (Random Access Memory) is temporary, volatile storage used by active programs."
    },
    {
      id: "cs-3",
      question: "Which number system uses only the digits 0 and 1?",
      options: [
        "Decimal",
        "Binary",
        "Octal",
        "Hexadecimal"
      ],
      correctIndex: 1,
      explanation: "Binary (base 2) uses only 0s and 1s, which represent the electrical off/on states in digital circuits."
    },
    {
      id: "cs-4",
      question: "Which data structure operates on a First-In, First-Out (FIFO) principle?",
      options: [
        "Stack",
        "Queue",
        "Tree",
        "Graph"
      ],
      correctIndex: 1,
      explanation: "A Queue works on FIFO (First-In, First-Out), like a line of people waiting at a counter."
    },
    {
      id: "cs-5",
      question: "What does HTTP stand for in networking?",
      options: [
        "Hypertext Transfer Protocol",
        "High Technical Transfer Program",
        "Hyperlink Text Translation Protocol",
        "Host Terminal Transfer Procedure"
      ],
      correctIndex: 0,
      explanation: "HTTP (Hypertext Transfer Protocol) is the foundational protocol used for transmitting web pages over the Internet."
    },
    {
      id: "cs-6",
      question: "Which of the following is an open-source operating system?",
      options: [
        "Microsoft Windows",
        "macOS",
        "Linux",
        "iOS"
      ],
      correctIndex: 2,
      explanation: "Linux is a free, open-source operating system kernel created by Linus Torvalds."
    },
    {
      id: "cs-7",
      question: "What is the time complexity to access an element in an array by its index?",
      options: [
        "O(n)",
        "O(1)",
        "O(log n)",
        "O(n²)"
      ],
      correctIndex: 1,
      explanation: "Array elements are stored in contiguous memory, allowing constant time O(1) direct access by index."
    },
    {
      id: "cs-8",
      question: "What software program translates entire high-level source code into machine code before execution?",
      options: [
        "Compiler",
        "Interpreter",
        "Assembler",
        "Debugger"
      ],
      correctIndex: 0,
      explanation: "A compiler translates the entire high-level source code into machine code or an executable file at once."
    },
    {
      id: "cs-9",
      question: "In computing measurements, how many bits make up one byte?",
      options: [
        "4 bits",
        "8 bits",
        "16 bits",
        "32 bits"
      ],
      correctIndex: 1,
      explanation: "1 Byte is strictly made up of 8 bits."
    },
    {
      id: "cs-10",
      question: "Which data structure operates on a Last-In, First-Out (LIFO) principle?",
      options: [
        "Queue",
        "Array",
        "Stack",
        "Linked List"
      ],
      correctIndex: 2,
      explanation: "A Stack follows LIFO (Last-In, First-Out), just like a stack of plates."
    }
  ],

  // -------------------------------------------------------------
  // 2. C PROGRAMMING
  // -------------------------------------------------------------
  "c-programming": [
    {
      id: "c-1",
      question: "Who is credited with creating the C programming language?",
      options: [
        "James Gosling",
        "Dennis Ritchie",
        "Bjarne Stroustrup",
        "Guido van Rossum"
      ],
      correctIndex: 1,
      explanation: "Dennis Ritchie developed C in the early 1970s at Bell Laboratories."
    },
    {
      id: "c-2",
      question: "Which function is the starting entry point of every C program?",
      options: [
        "start()",
        "init()",
        "main()",
        "run()"
      ],
      correctIndex: 2,
      explanation: "Every C program begins execution in the main() function."
    },
    {
      id: "c-3",
      question: "Which format specifier is used with printf() to display an integer in C?",
      options: [
        "%f",
        "%c",
        "%d",
        "%s"
      ],
      correctIndex: 2,
      explanation: "%d (or %i) is the format specifier for signed decimal integers in C."
    },
    {
      id: "c-4",
      question: "What symbol is used in C to get the memory address of a variable?",
      options: [
        "*",
        "&",
        "%",
        "#"
      ],
      correctIndex: 1,
      explanation: "The ampersand (&) is the address-of operator in C."
    },
    {
      id: "c-5",
      question: "Which header file must be included to use printf() and scanf() in C?",
      options: [
        "<stdlib.h>",
        "<math.h>",
        "<stdio.h>",
        "<conio.h>"
      ],
      correctIndex: 2,
      explanation: "<stdio.h> stands for Standard Input Output header and defines printf and scanf."
    },
    {
      id: "c-6",
      question: "In C, which character represents the null terminator that ends a string?",
      options: [
        "\\n",
        "\\0",
        "\\t",
        ";"
      ],
      correctIndex: 1,
      explanation: "\\0 is the null character indicating the end of a string in C."
    },
    {
      id: "c-7",
      question: "What is a pointer in C?",
      options: [
        "A variable that stores the memory address of another variable",
        "A keyword used to declare functions",
        "A loop statement",
        "An array with fixed size"
      ],
      correctIndex: 0,
      explanation: "A pointer is a variable whose value is the memory address of another variable."
    },
    {
      id: "c-8",
      question: "Which keyword is used to exit immediately from a loop in C?",
      options: [
        "continue",
        "exit",
        "break",
        "return"
      ],
      correctIndex: 2,
      explanation: "The break statement terminates the enclosing loop or switch statement immediately."
    },
    {
      id: "c-9",
      question: "What is the return type of a function that returns nothing in C?",
      options: [
        "int",
        "null",
        "empty",
        "void"
      ],
      correctIndex: 3,
      explanation: "void specifies that a function does not return any value."
    },
    {
      id: "c-10",
      question: "Which operator is used in C to compare two values for equality?",
      options: [
        "=",
        "==",
        ":=",
        "equals"
      ],
      correctIndex: 1,
      explanation: "== is the relational equality operator; single = is used for assignment."
    }
  ],

  // -------------------------------------------------------------
  // 3. PYTHON PROGRAMMING
  // -------------------------------------------------------------
  "python-programming": [
    {
      id: "py-1",
      question: "Who created the Python programming language?",
      options: [
        "Guido van Rossum",
        "Brendan Eich",
        "Tim Berners-Lee",
        "Linus Torvalds"
      ],
      correctIndex: 0,
      explanation: "Guido van Rossum created Python in the late 1980s and released it in 1991."
    },
    {
      id: "py-2",
      question: "Which keyword is used to define a function in Python?",
      options: [
        "function",
        "fun",
        "def",
        "define"
      ],
      correctIndex: 2,
      explanation: "The 'def' keyword is used to declare a function in Python."
    },
    {
      id: "py-3",
      question: "Which of the following data types in Python is immutable?",
      options: [
        "List",
        "Dictionary",
        "Set",
        "Tuple"
      ],
      correctIndex: 3,
      explanation: "Tuples cannot be modified after creation, making them immutable."
    },
    {
      id: "py-4",
      question: "How do you write a single-line comment in Python?",
      options: [
        "// this is a comment",
        "# this is a comment",
        "/* this is a comment */",
        "<!-- this is a comment -->"
      ],
      correctIndex: 1,
      explanation: "The hash symbol (#) marks the start of a single-line comment in Python."
    },
    {
      id: "py-5",
      question: "What is the output of print(type([])) in Python?",
      options: [
        "<class 'tuple'>",
        "<class 'list'>",
        "<class 'dict'>",
        "<class 'set'>"
      ],
      correctIndex: 1,
      explanation: "Square brackets [] represent a Python list."
    },
    {
      id: "py-6",
      question: "Which built-in function returns the number of items in a list or string in Python?",
      options: [
        "size()",
        "count()",
        "len()",
        "length()"
      ],
      correctIndex: 2,
      explanation: "len() returns the length of collections, strings, lists, tuples, and dictionaries."
    },
    {
      id: "py-7",
      question: "What is the correct file extension for standard Python files?",
      options: [
        ".pt",
        ".pyt",
        ".py",
        ".python"
      ],
      correctIndex: 2,
      explanation: "Standard Python source files use the .py file extension."
    },
    {
      id: "py-8",
      question: "Which operator is used for integer floor division in Python?",
      options: [
        "/",
        "//",
        "%",
        "^"
      ],
      correctIndex: 1,
      explanation: "// divides and rounds down to the nearest whole integer (floor division)."
    },
    {
      id: "py-9",
      question: "Which keyword is used to handle exceptions in Python along with 'try'?",
      options: [
        "catch",
        "except",
        "handle",
        "error"
      ],
      correctIndex: 1,
      explanation: "Python uses 'try' and 'except' blocks to handle exceptions."
    },
    {
      id: "py-10",
      question: "What does the range(3) function generate in Python?",
      options: [
        "1, 2, 3",
        "0, 1, 2, 3",
        "0, 1, 2",
        "3, 2, 1"
      ],
      correctIndex: 2,
      explanation: "range(3) produces sequence values starting at 0 up to, but not including, 3 (0, 1, 2)."
    }
  ],

  // -------------------------------------------------------------
  // 4. JAVA PROGRAMMING
  // -------------------------------------------------------------
  "java-programming": [
    {
      id: "java-1",
      question: "What company originally developed the Java programming language?",
      options: [
        "Microsoft",
        "Sun Microsystems",
        "Apple",
        "IBM"
      ],
      correctIndex: 1,
      explanation: "Java was originally developed by Sun Microsystems, which was later acquired by Oracle."
    },
    {
      id: "java-2",
      question: "What does JVM stand for in the Java ecosystem?",
      options: [
        "Java Virtual Machine",
        "Java Variable Manager",
        "Java Visual Model",
        "Java Verified Module"
      ],
      correctIndex: 0,
      explanation: "JVM stands for Java Virtual Machine, which executes compiled Java bytecode."
    },
    {
      id: "java-3",
      question: "Which keyword is used in Java to inherit a class?",
      options: [
        "implements",
        "inherits",
        "extends",
        "super"
      ],
      correctIndex: 2,
      explanation: "The 'extends' keyword is used to derive a subclass from a parent class in Java."
    },
    {
      id: "java-4",
      question: "Which method is the starting point of any standalone Java application?",
      options: [
        "public void start()",
        "public static void main(String[] args)",
        "public void init()",
        "static void run()"
      ],
      correctIndex: 1,
      explanation: "public static void main(String[] args) is the required entry point method in Java."
    },
    {
      id: "java-5",
      question: "Which primitive data type is used in Java to store true or false values?",
      options: [
        "bool",
        "binary",
        "boolean",
        "bit"
      ],
      correctIndex: 2,
      explanation: "In Java, the full word 'boolean' is the primitive type for true/false."
    },
    {
      id: "java-6",
      question: "What is the extension of a compiled Java bytecode file?",
      options: [
        ".java",
        ".class",
        ".jvm",
        ".obj"
      ],
      correctIndex: 1,
      explanation: "The Java compiler (javac) compiles .java source files into .class bytecode files."
    },
    {
      id: "java-7",
      question: "Which keyword is used in Java to create a new instance of an object?",
      options: [
        "create",
        "alloc",
        "new",
        "instance"
      ],
      correctIndex: 2,
      explanation: "The 'new' operator allocates memory dynamically and invokes the constructor."
    },
    {
      id: "java-8",
      question: "Which OOP concept involves bundling data and methods inside a single class and restricting direct access?",
      options: [
        "Polymorphism",
        "Inheritance",
        "Encapsulation",
        "Abstraction"
      ],
      correctIndex: 2,
      explanation: "Encapsulation hides internal object state and allows access only through public methods."
    },
    {
      id: "java-9",
      question: "Which keyword makes a variable's value constant and unchangeable in Java?",
      options: [
        "const",
        "static",
        "final",
        "immutable"
      ],
      correctIndex: 2,
      explanation: "A 'final' variable can only be initialized once and cannot be reassigned."
    },
    {
      id: "java-10",
      question: "What statement is used to print output to the console in Java?",
      options: [
        "Console.Write()",
        "System.out.println()",
        "echo()",
        "print.line()"
      ],
      correctIndex: 1,
      explanation: "System.out.println() prints a line of text to the standard output console."
    }
  ],

  // -------------------------------------------------------------
  // 5. GENERAL KNOWLEDGE
  // -------------------------------------------------------------
  "general-knowledge": [
    {
      id: "gk-1",
      question: "Which planet in our solar system is known as the 'Red Planet'?",
      options: [
        "Venus",
        "Mars",
        "Jupiter",
        "Saturn"
      ],
      correctIndex: 1,
      explanation: "Mars appears red due to large amounts of iron oxide (rust) on its surface."
    },
    {
      id: "gk-2",
      question: "What is the capital city of France?",
      options: [
        "Berlin",
        "Madrid",
        "Rome",
        "Paris"
      ],
      correctIndex: 3,
      explanation: "Paris is the capital and largest city of France."
    },
    {
      id: "gk-3",
      question: "Which is the largest and deepest ocean on Earth?",
      options: [
        "Atlantic Ocean",
        "Indian Ocean",
        "Pacific Ocean",
        "Arctic Ocean"
      ],
      correctIndex: 2,
      explanation: "The Pacific Ocean is both the largest and deepest ocean on Earth."
    },
    {
      id: "gk-4",
      question: "Who painted the famous masterpiece known as the Mona Lisa?",
      options: [
        "Vincent van Gogh",
        "Pablo Picasso",
        "Leonardo da Vinci",
        "Michelangelo"
      ],
      correctIndex: 2,
      explanation: "The Mona Lisa was painted by the Italian Renaissance artist Leonardo da Vinci."
    },
    {
      id: "gk-5",
      question: "How many continents are there on Earth?",
      options: [
        "5",
        "6",
        "7",
        "8"
      ],
      correctIndex: 2,
      explanation: "There are 7 recognized continents: Asia, Africa, North America, South America, Antarctica, Europe, and Australia."
    },
    {
      id: "gk-6",
      question: "Which is the longest river in the world by general consensus?",
      options: [
        "Amazon River",
        "Nile River",
        "Yangtze River",
        "Mississippi River"
      ],
      correctIndex: 1,
      explanation: "The Nile River in northeastern Africa is traditionally recognized as the longest river in the world."
    },
    {
      id: "gk-7",
      question: "In which country did the Olympic Games originate?",
      options: [
        "Italy",
        "Greece",
        "Egypt",
        "China"
      ],
      correctIndex: 1,
      explanation: "The ancient Olympic Games originated in Olympia, Greece in 776 BC."
    },
    {
      id: "gk-8",
      question: "What is the hardest naturally occurring mineral on Earth?",
      options: [
        "Gold",
        "Diamond",
        "Iron",
        "Quartz"
      ],
      correctIndex: 1,
      explanation: "Diamond has a rating of 10 on the Mohs scale, making it the hardest natural mineral."
    },
    {
      id: "gk-9",
      question: "Which currency is officially used in Japan?",
      options: [
        "Yuan",
        "Won",
        "Yen",
        "Baht"
      ],
      correctIndex: 2,
      explanation: "The Yen (¥) is the official currency of Japan."
    },
    {
      id: "gk-10",
      question: "How many colors are traditionally visible in a primary rainbow?",
      options: [
        "5",
        "6",
        "7",
        "8"
      ],
      correctIndex: 2,
      explanation: "A rainbow has 7 colors: Red, Orange, Yellow, Green, Blue, Indigo, and Violet (ROYGBIV)."
    }
  ],

  // -------------------------------------------------------------
  // 6. MATHEMATICS
  // -------------------------------------------------------------
  "mathematics": [
    {
      id: "math-1",
      question: "What is the value of 15 multiplied by 8?",
      options: [
        "110",
        "120",
        "125",
        "130"
      ],
      correctIndex: 1,
      explanation: "15 × 8 = 120."
    },
    {
      id: "math-2",
      question: "What is the square root of 144?",
      options: [
        "11",
        "12",
        "13",
        "14"
      ],
      correctIndex: 1,
      explanation: "12 × 12 = 144, so √144 = 12."
    },
    {
      id: "math-3",
      question: "What is the smallest prime number?",
      options: [
        "0",
        "1",
        "2",
        "3"
      ],
      correctIndex: 2,
      explanation: "2 is the smallest prime number and also the only even prime number."
    },
    {
      id: "math-4",
      question: "What is the sum of the interior angles of any triangle?",
      options: [
        "90 degrees",
        "180 degrees",
        "270 degrees",
        "360 degrees"
      ],
      correctIndex: 1,
      explanation: "The interior angles of any triangle in Euclidean geometry always sum to 180°."
    },
    {
      id: "math-5",
      question: "If a circle has a radius of 7 cm, what is its diameter?",
      options: [
        "3.5 cm",
        "14 cm",
        "21 cm",
        "49 cm"
      ],
      correctIndex: 1,
      explanation: "Diameter is twice the radius: 2 × 7 = 14 cm."
    },
    {
      id: "math-6",
      question: "What is the value of 2 raised to the power of 5 (2⁵)?",
      options: [
        "10",
        "25",
        "32",
        "64"
      ],
      correctIndex: 2,
      explanation: "2 × 2 × 2 × 2 × 2 = 32."
    },
    {
      id: "math-7",
      question: "What is 25% of 200?",
      options: [
        "25",
        "50",
        "75",
        "100"
      ],
      correctIndex: 1,
      explanation: "25% is one-quarter (1/4). 200 ÷ 4 = 50."
    },
    {
      id: "math-8",
      question: "Solve the linear equation for x: 3x + 9 = 24",
      options: [
        "x = 3",
        "x = 5",
        "x = 7",
        "x = 9"
      ],
      correctIndex: 1,
      explanation: "3x = 24 - 9 = 15; therefore x = 15 / 3 = 5."
    },
    {
      id: "math-9",
      question: "What is the perimeter of a rectangle with length 10 cm and width 4 cm?",
      options: [
        "14 cm",
        "28 cm",
        "40 cm",
        "80 cm"
      ],
      correctIndex: 1,
      explanation: "Perimeter = 2 × (length + width) = 2 × (10 + 4) = 2 × 14 = 28 cm."
    },
    {
      id: "math-10",
      question: "What is the mathematical term for the average of a set of numbers?",
      options: [
        "Median",
        "Mode",
        "Mean",
        "Range"
      ],
      correctIndex: 2,
      explanation: "The arithmetic mean is calculated by dividing the sum of values by their count."
    }
  ],

  // -------------------------------------------------------------
  // 7. SCIENCE
  // -------------------------------------------------------------
  "science": [
    {
      id: "sci-1",
      question: "What is the chemical formula for water?",
      options: [
        "CO₂",
        "H₂O",
        "O₂",
        "NaCl"
      ],
      correctIndex: 1,
      explanation: "Water is composed of two hydrogen atoms and one oxygen atom (H₂O)."
    },
    {
      id: "sci-2",
      question: "Which gas do plants primarily absorb during the process of photosynthesis?",
      options: [
        "Oxygen",
        "Nitrogen",
        "Carbon Dioxide",
        "Hydrogen"
      ],
      correctIndex: 2,
      explanation: "Plants take in Carbon Dioxide (CO₂) and release Oxygen (O₂) during photosynthesis."
    },
    {
      id: "sci-3",
      question: "What is the basic biological unit of life in all living organisms?",
      options: [
        "Atom",
        "Tissue",
        "Cell",
        "Organ"
      ],
      correctIndex: 2,
      explanation: "The cell is the fundamental structural and functional unit of life."
    },
    {
      id: "sci-4",
      question: "Which organelle is famously known as the 'powerhouse of the cell'?",
      options: [
        "Nucleus",
        "Ribosome",
        "Mitochondria",
        "Endoplasmic Reticulum"
      ],
      correctIndex: 2,
      explanation: "Mitochondria generate most of the chemical energy needed by the cell (ATP)."
    },
    {
      id: "sci-5",
      question: "What is the chemical symbol for the element Gold?",
      options: [
        "Ag",
        "Au",
        "Fe",
        "Pb"
      ],
      correctIndex: 1,
      explanation: "Gold's symbol Au comes from the Latin word 'Aurum'."
    },
    {
      id: "sci-6",
      question: "What force pulls objects toward the center of the Earth?",
      options: [
        "Friction",
        "Magnetism",
        "Gravity",
        "Tension"
      ],
      correctIndex: 2,
      explanation: "Gravity is the fundamental force that attracts objects with mass toward each other."
    },
    {
      id: "sci-7",
      question: "At sea level, at what temperature does pure water boil in Celsius?",
      options: [
        "90°C",
        "100°C",
        "120°C",
        "212°C"
      ],
      correctIndex: 1,
      explanation: "Pure water boils at 100°C (which corresponds to 212°F) under standard atmospheric pressure."
    },
    {
      id: "sci-8",
      question: "Which part of the human blood is primarily responsible for carrying oxygen?",
      options: [
        "White Blood Cells",
        "Red Blood Cells",
        "Platelets",
        "Plasma"
      ],
      correctIndex: 1,
      explanation: "Red blood cells contain hemoglobin, which binds to and transports oxygen throughout the body."
    },
    {
      id: "sci-9",
      question: "What type of energy is stored in an object due to its position or height?",
      options: [
        "Kinetic Energy",
        "Potential Energy",
        "Thermal Energy",
        "Nuclear Energy"
      ],
      correctIndex: 1,
      explanation: "Gravitational potential energy is stored in an object because of its elevated position."
    },
    {
      id: "sci-10",
      question: "Which planet is closest to the Sun in our solar system?",
      options: [
        "Mercury",
        "Venus",
        "Earth",
        "Mars"
      ],
      correctIndex: 0,
      explanation: "Mercury is the closest planet to the Sun."
    }
  ],

  // -------------------------------------------------------------
  // 8. WEB DEVELOPMENT
  // -------------------------------------------------------------
  "web-development": [
    {
      id: "web-1",
      question: "What does HTML stand for in web development?",
      options: [
        "Hyper Text Markup Language",
        "High Technical Modern Language",
        "Hyperlink Text Machine Learning",
        "Home Tool Markup Language"
      ],
      correctIndex: 0,
      explanation: "HTML stands for HyperText Markup Language, the standard language for documents designed to be displayed in a web browser."
    },
    {
      id: "web-2",
      question: "Which HTML tag is used to create a clickable hyperlink?",
      options: [
        "<link>",
        "<a>",
        "<href>",
        "<url>"
      ],
      correctIndex: 1,
      explanation: "The <a> (anchor) tag defines a hyperlink when paired with the 'href' attribute."
    },
    {
      id: "web-3",
      question: "What does CSS stand for?",
      options: [
        "Creative Style Sheets",
        "Computer Style System",
        "Cascading Style Sheets",
        "Colorful Style Standard"
      ],
      correctIndex: 2,
      explanation: "CSS stands for Cascading Style Sheets, used to style and lay out web pages."
    },
    {
      id: "web-4",
      question: "Which CSS property is used to change the background color of an element?",
      options: [
        "color",
        "bgcolor",
        "background-color",
        "surface-color"
      ],
      correctIndex: 2,
      explanation: "The 'background-color' property sets the background color of an element in CSS."
    },
    {
      id: "web-5",
      question: "What does the DOM stand for in JavaScript web development?",
      options: [
        "Document Object Model",
        "Data Object Manager",
        "Digital Output Mechanism",
        "Direct Object Method"
      ],
      correctIndex: 0,
      explanation: "The DOM (Document Object Model) is a programming interface that represents HTML pages as tree structures."
    },
    {
      id: "web-6",
      question: "Which JavaScript method is commonly used to select an element by its unique ID?",
      options: [
        "document.queryId()",
        "document.getElementById()",
        "document.selectId()",
        "document.find()"
      ],
      correctIndex: 1,
      explanation: "document.getElementById('idName') returns the element that matches the specified ID."
    },
    {
      id: "web-7",
      question: "Which CSS layout model was created specifically to align items in a one-dimensional row or column?",
      options: [
        "CSS Grid",
        "Flexbox",
        "Float",
        "Table layout"
      ],
      correctIndex: 1,
      explanation: "Flexbox (Flexible Box Layout) is designed for 1-dimensional layouts along a row or column."
    },
    {
      id: "web-8",
      question: "Which HTML attribute specifies an alternate text for an image if the image cannot be displayed?",
      options: [
        "title",
        "description",
        "src",
        "alt"
      ],
      correctIndex: 3,
      explanation: "The 'alt' attribute provides alternative text for accessibility and when an image fails to load."
    },
    {
      id: "web-9",
      question: "In modern JavaScript, which keyword declares a variable that can be reassigned?",
      options: [
        "const",
        "let",
        "fixed",
        "immutable"
      ],
      correctIndex: 1,
      explanation: "'let' declares a block-scoped variable that can be updated, whereas 'const' cannot be reassigned."
    },
    {
      id: "web-10",
      question: "Which HTTP status code indicates a successful request in web development?",
      options: [
        "200 OK",
        "404 Not Found",
        "500 Internal Server Error",
        "301 Moved Permanently"
      ],
      correctIndex: 0,
      explanation: "HTTP 200 OK indicates that the request has succeeded."
    }
  ]
};

// Metadata for the 8 subjects (icons, titles, descriptions, theme accents)
const subjectsMetadata = [
  {
    id: "computer-science",
    name: "Computer Science",
    icon: "💻",
    description: "Hardware, architecture, memory, number systems, and algorithms.",
    tag: "Core CS"
  },
  {
    id: "c-programming",
    name: "C Programming",
    icon: "⚡",
    description: "Pointers, memory management, syntax, functions, and control flow.",
    tag: "Systems"
  },
  {
    id: "python-programming",
    name: "Python Programming",
    icon: "🐍",
    description: "Data types, loops, lists, functions, and Pythonic fundamentals.",
    tag: "Language"
  },
  {
    id: "java-programming",
    name: "Java Programming",
    icon: "☕",
    description: "OOP concepts, JVM, classes, interfaces, and syntax.",
    tag: "Object-Oriented"
  },
  {
    id: "general-knowledge",
    name: "General Knowledge",
    icon: "🌍",
    description: "World geography, history, planet Earth, culture, and trivia.",
    tag: "Trivia"
  },
  {
    id: "mathematics",
    name: "Mathematics",
    icon: "📐",
    description: "Arithmetic, algebra, geometry, primes, and mental math.",
    tag: "Logic & Math"
  },
  {
    id: "science",
    name: "Science",
    icon: "🔬",
    description: "Physics, chemistry, biology, the human body, and cells.",
    tag: "Natural Science"
  },
  {
    id: "web-development",
    name: "Web Development",
    icon: "🌐",
    description: "HTML5, CSS3, DOM manipulation, Flexbox, and JavaScript basics.",
    tag: "Front-End"
  }
];

// If running in Node.js environment during automated tests, export the objects
if (typeof module !== "undefined" && module.exports) {
  module.exports = { subjectQuestionBank, subjectsMetadata };
}
