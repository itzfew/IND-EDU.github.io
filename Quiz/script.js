const questions = [
  {
    question: "What is the capital of France?",
    options: ["Paris", "London", "Berlin", "Rome"],
    answer: "Paris",
    explanation: "Paris is the capital city of France."
  },
  {
    question: "What is the largest ocean on Earth?",
    options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
    answer: "Pacific Ocean",
    explanation: "The Pacific Ocean is the largest ocean on Earth."
  },
  // Add more questions here
];
 
let currentQuestion = 0;
let totalMarks = 0;

const questionElements = document.getElementsByClassName('question');
const optionsLists = document.getElementsByClassName('options');
const explanationElements = document.getElementsByClassName('explanation');

function loadQuestion(index) {
  questionElements[index].textContent = questions[index].question;
  optionsLists[index].innerHTML = "";
  questions[index].options.forEach((option, optionIndex) => {
    const li = document.createElement('li');
    li.textContent = option;
    li.classList.add('option');
    li.addEventListener('click', () => checkAnswer(option, index));
    optionsLists[index].appendChild(li);
  });
}

function checkAnswer(selectedOption, index) {
  const correctAnswer = questions[index].answer;
  const explanationText = questions[index].explanation;
  const options = optionsLists[index].getElementsByTagName('li');

  options.forEach(option => {
    option.classList.remove('wrong', 'correct');
    if (option.textContent === correctAnswer) {
      option.classList.add('correct');
    } else if (option.textContent === selectedOption) {
      option.classList.add('wrong');
    }
    option.removeEventListener('click', () => checkAnswer(selectedOption, index));
  });

  explanationElements[index].style.display = 'block';
  if (selectedOption === correctAnswer) {
    explanationElements[index].textContent = "Correct! " + explanationText;
    totalMarks += 4;
  } else {
    explanationElements[index].textContent = "Incorrect. The correct answer is: " + correctAnswer + ". " + explanationText;
    totalMarks -= 1;
  }

  // Disable further clicks after answer is selected
  options.forEach(option => {
    option.removeEventListener('click', () => checkAnswer(selectedOption, index));
  });

  // Move to next question after a delay
  setTimeout(() => {
    nextQuestion(index);
  }, 2000);
}

function nextQuestion(index) {
  if (index < questions.length - 1) {
    loadQuestion(index + 1);
  } else {
    showResult();
  }
}

function showResult() {
  const resultContainer = document.createElement('div');
  resultContainer.textContent = "Total Marks: " + totalMarks;
  document.body.appendChild(resultContainer);
}

// Load initial question
loadQuestion(0);
