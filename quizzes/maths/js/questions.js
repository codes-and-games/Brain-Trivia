let questions = [
  {
    numb: 1,
    question:
      "An integer can be",
    answer: "Both Positive & Negative",
    options: ["Only Positive", "Only Negative", "Both Positive & Negative", "None of the above"],
  },
  {
    numb: 2,
    question: "A rational number can be represented in the form of:",
    answer: "p/q",
    options: ["p/q", "pq", "p+q", "p-q"],
  },
  {
    numb: 3,
    question: "Which of the following is not a linear equation in one variable?",
    answer: "33(x+y) = 0",
    options: ["33z+5 = 0", "33(x+y) = 0", "33x+5 = 0", "33y+5 = 0"],
  },
  {
    numb: 4,
    question:
      "The solution of 2x-3=7 is:",
    answer: "5",
    options: ["5", "7", "12", "11"],
  },
  {
    numb: 5,
    
    question:
      "The solution of 2y + 9 = 4 is:",
    answer: "-5/2",
    options: ["9/2", "4/9", "-2/5", "-5/2"],
  },
  {
    numb: 6,
    question:
      "The solution of y/5 = 10 is:",
    answer: "50",
    options: ["15", "10", "50", "5"],
  },

  {
    numb: 7,
    question:
      "What should be added to -7/3 to get 3/7?",
    answer: "58/21",
    options: ["21/58", "58/21", "47/21", "50/21"],
  },

  {
    numb: 8,
    question: "The perimeter of the rectangle is 20cm. If the length of the rectangle is 6cm, then its breadth will be:",
    answer: "4 cm",
    options: ["4 cm", "6 cm", "10 cm", "14 cm"],
  },

  {
    numb: 9,
    question: "The age of the father is three times the age of the son. If the age of the son is 15 years old, then the age of the father is",
    answer: "45 years",
    options: ["50 years", "55 years", "40 years", "45 years"],
  },

  {
    numb: 10,
    question: "The difference between two whole numbers is 66. The ratio of the two numbers is 2: 5. The two numbers are:",
    answer: "110 and 44",
    options: [
      "60 and 6",
      "100 and 33",
      "110 and 44",
      "99 and 33",
    ],
  },

  {
    numb: 11,
    question:
      "Three consecutive integers add up to 51. The integers are:",
    answer: "16,17,18",
    options: [
      "16,17,18",
      "15,16,17",
      "17,18,19",
      "18,19,20",
    ],
  },

  {
    numb: 12,
    question:
      "The solution for 3m = 5m – (8/5) is:",
    answer: "4/5",
    options: ["8/5", "4/5", "5/4", "4/3"],
  },

  {
    numb: 13,
    question:
      "What is the value of x if x + 9 = 12?",
    answer: "3",
    options: ["2", "3", "8", "6"],
  },

  {
    numb: 14,
    question:
      "If a number is divided by 8 it gives 6 as the value. Find the number.",
    answer: "48",
    options: [
      "36",
      "42",
      "48",
      "52",
    ],
  },

  {
    numb: 15,
    question: "Solve 2x + 9 = 4.",
    answer: "X = -5/2",
    options: [
      "X = 6",
      "X = -5/2",
      "X = -3/2",
      "X = -9/2",
    ],
  },
  {
    numb: 16,
    question: "Find the value of x if 2x + 10 = 76.",
    answer: "32",
    options: ["33", "7.6", "66", "32"],
  },
  {
    numb: 17,
    question: "The perimeter of a rectangle is 40 cm. If its width is 10 cm, then find the length.",
    answer: "10",
    options: ["10", "20", "30", "40"],
  },
  {
    numb: 18,
    question:
      "If x is an even number, then the next even number is:",
    answer: "x+2",
    options: [
      "x+1",
      "x+2",
      "x+3",
      "x+4",
    ],
  },
  {
    numb: 19,
    question:
      "The difference between the two numbers is 30. If the bigger number is x, then what is the smaller number?",
    answer: "x-30",
    options: ["x-30", "30-x", "30x", "None"],
  },
  {
    numb: 20,
    question: "When a number is added to itself, it becomes 24. What is the number?",
    answer: "12",
    options: [
      "2",
      "4",
      "12",
      "21",
    ],
  },
  {
    numb: 21,
    question: "Area of a triangle with base (b) and height (h) is:",
    answer: "1/2*b*h",
    options: [
      "b*h",
      "1/2*b*h",
      "2b*h",
      "None of these",
    ],
  },
  {
    numb: 22,
    question:
      "Area of the square with side-length ‘a’ is:",
    answer: "a^2",
    options: [
      "2a",
      "4a",
      "a/2",
      "a^2",
    ],
  },
  {
    numb: 23,
    question:
      "The area of a parallelogram with length (l) and breadth (b) is:",
    answer: "lb",
    options: ["1/2lb", "2lb", "lb", "None of these"],
  },
  {
    numb: 24,
    question:
      "The innermost chamber of respiratory system into which air can be drawn is the",
    answer: "πr²",
    options: ["1/2πr²", "πr²", "2πr²", "4πr²"],
  },
  {
    numb: 25,
    question: "1 cm is equal to how many millimeters?",
    answer: "10",
    options: ["10", "1", "100", "1000"],
  },
  {
    numb: 26,
    question: "Surface area of cube of edge ‘a’ is",
    answer: "6a²",
    options: [
      "2a²",
      "4a²",
      "6a²",
      "3a²",
    ],
  },
  {
    numb: 27,
    question:
      "1 litre is equal to how many cubic centimeters?",
    answer: "1000 cu.cm",
    options: [
      "1 cu.cm",
      "10 cu.cm",
      "100 cu.cm",
      "1000 cu.cm",
    ],
  },
  {
    numb: 28,
    question: "The area of a rhombus whose diagonals are of lengths 10 cm and 8.2 cm is:",
    answer: "41 cm2",
    options: [
      "41 cm2",
      "82 cm2",
      "410 cm2",
      "820 cm2",
    ],
  },
  {
    numb: 29,
    question:
      "A cuboid has ______ pairs of identical faces.",
    answer: "3",
    options: [
      "2",
      "3",
      "4",
      "5",
    ],
  },
  {
    numb: 30,
    question:
      "All six faces of a cube are: ",
    answer: "Identical",
    options: [
      "Identical",
      "Different",
      "Circular",
      "Rectangular",
    ],
  },
];
