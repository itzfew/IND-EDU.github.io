JavaScript (script.js):
```javascript
const quizData = [
  {
    question: "What is the capital of France?",
    options: ["Paris", "London", "Berlin", "Madrid"],
    answer: 0
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Mars", "Venus", "Jupiter", "Saturn"],
    answer: 0
  },
  {
    question: "What is the largest ocean in the world?",
    options: ["Pacific Ocean", "Atlantic Ocean", "Indian Ocean", "Arctic Ocean"],
    answer: 0
  }
];

const quizContainer = document.getElementById("quiz-container");
const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const timerElement = document.getElementById("timer");
const nextButton = document.getElementById("next-btn");

let currentQuestion = 0;
let score = 0;
let timeLeft = 10;
let timer;

function startQuiz() {
  quizContainer.style.display = "block";
  nextButton.style.display = "none";
  showQuestion();
  startTimer();
}

function showQuestion() {
  const question = quizData[currentQuestion];
  questionElement.innerText = question.question;
  optionsElement.innerHTML = "";

  for (let i = 0; i < question.options.length; i++) {
    const option = document.createElement("li");
    option.innerText = question.options[i];
    option.onclick = checkAnswer;
    optionsElement.appendChild(option);
  }
}

function checkAnswer() {
  const selectedOption = this.innerText;
  const question = quizData[currentQuestion];

  if (selectedOption === question.options[question.answer]) {
    score++;
  }

  showAnswer(question.answer);
  clearInterval(timer);
  nextButton.style.display = "block";
}

function showAnswer(answerIndex) {
  const options = optionsElement.getElementsByTagName("li");

  for (let i = 0; i < options.length; i++) {
    if (i === answerIndex) {
      options[i].style.backgroundColor = "green";
    } else {
      options[i].style.backgroundColor = "red";
    }
  }
}

function startTimer() {
  timeLeft = 10;
  timerElement.innerText = `Time left: ${timeLeft}s`;
  timer = setInterval(updateTimer, 1000);
}

function updateTimer() {
  timeLeft--;

  if (timeLeft >= 0) {
    timerElement.innerText = `Time left: ${timeLeft}s`;
  } else {
    clearInterval(timer);
    checkAnswer();
  }
}

function showNextQuestion() {
  currentQuestion++;

  if (currentQuestion < quizData.length) {
    showQuestion();
    startTimer();
    nextButton.style.display = "none";
  } else {
    endQuiz();
  }
}

function endQuiz() {
  quizContainer.innerHTML = `
    <h1>Quiz Completed</h1>
    <p>Your score: ${score}/${quizData.length}</p>
    <button onclick="location.reload()">Restart</button>
  `;
}

nextButton.addEventListener("click", showNextQuestion);

startQuiz();
```
