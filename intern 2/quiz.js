// Define your questions and other variables here
const questions = [
  {
    question: "What is the capital of France?",
    options: ["Berlin", "Madrid", "Paris", "Rome"],
    correctAnswer: "Paris",
  },
  {
    question: "Which programming language is this quiz written in?",
    options: ["Java", "Python", "JavaScript", "C++"],
    correctAnswer: "JavaScript",
  },
  {
    question: "Which is the longest statue in the world?",
    options: ["Statue of Liberty", "Statue of Unity", "Rio Statue", "The Statue of Babylon"],
    correctAnswer: "Statue of Unity",
  },
  {
    question: "Who is the CM of Telangana?",
    options: ["KCR", "KTR", "Revanth Reddy", "Sethakka"],
    correctAnswer: "Revanth Reddy",
  },
  {
    question: "What is the capital of Tripura?",
    options: ["Ishzwal", "Imphal", "Kohima", "Agartala"],
    correctAnswer: "Agartala",
  },
  {
    question: "Which programming language is a low-level language?",
    options: ["Java", "Python", "JavaScript", "C++"],
    correctAnswer: "Python",
  },
  // Add more questions as needed
];

let currentQuestionIndex = 0;
let score = 0;

// Retrieving elements from HTML
const questionContainer = document.getElementById("question-container");
const optionsContainer = document.getElementById("options-container");
const resultContainer = document.getElementById("result-container");
const resultText = document.getElementById("result");
const resultImage = document.getElementById("result-image");
const nextButton = document.getElementById("next-button");

// Function to start the quiz
function startQuiz() {
  showQuestion();
}

// Function to display a question
function showQuestion() {
  const currentQuestion = questions[currentQuestionIndex];
  questionContainer.innerHTML = `<p>${currentQuestion.question}</p>`;
  optionsContainer.innerHTML = "";
  currentQuestion.options.forEach((option, index) => {
    const button = document.createElement("button");
    button.innerText = option;
    button.addEventListener("click", () => checkAnswer(option));
    optionsContainer.appendChild(button);
  });

  // Show options container
  optionsContainer.classList.remove("hide");
  resultContainer.classList.add("hide");

  // Hide next button on the last question
  if (currentQuestionIndex === questions.length - 1) {
    nextButton.classList.add("hide");
  } else {
    nextButton.classList.remove("hide");
  }
}

// Function to check the selected answer
function checkAnswer(selectedOption) {
  const currentQuestion = questions[currentQuestionIndex];
  if (selectedOption === currentQuestion.correctAnswer) {
    score++;
  }
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showResult();
  }
}

// Function to display the result
function showResult() {
  questionContainer.classList.add("hide");
  optionsContainer.classList.add("hide");
  nextButton.classList.add("hide");

  resultText.innerText = `Your Score: ${score} out of ${questions.length}`;

  // Display result image based on the score
  if (score >= questions.length / 2) {
    resultImage.src = "images/image1.png"; // Path to the win image
  } else {
    resultImage.src = "images/lose.jpg"; // Path to the lose image
  }

  // Show result container
  resultContainer.classList.remove("hide");
  document.getElementById('next-button').style.display = 'none';
}

// Function to handle the next question or show the result
function nextQuestion() {
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showResult();
  }
}

// Start the quiz when the page loads
window.onload = startQuiz;
