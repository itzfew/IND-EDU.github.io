const question = document.getElementById('question');
const options = document.querySelectorAll('.option');
const explanation = document.getElementById('explanation');

// Sample questions and answers
const questions = [
  {
    question: "What is the capital of France?",
    options: ["Paris", "London", "Berlin", "Rome"],
    answer: "Paris",
    explanation: "Paris is the capital city of France."
  },
  // Add more questions here
];

let currentQuestion = 0;

// Load question
function loadQuestion() {
  question.textContent = questions[currentQuestion].question;
  options.forEach((option, index) => {
    option.textContent = questions[currentQuestion].options[index];
    option.addEventListener('click', checkAnswer);
  });
}

// Check selected answer
function checkAnswer(event) {
  const selectedOption = event.target;
  const correctAnswer = questions[currentQuestion].answer;
  const explanationText = questions[currentQuestion].explanation;

  if (selectedOption.textContent === correctAnswer) {
    selectedOption.style.backgroundColor = 'green';
    explanation.style.display = 'block';
    explanation.textContent = "Correct! " + explanationText;
  } else {
    selectedOption.style.backgroundColor = 'red';
    options.forEach(option => {
      if (option.textContent === correctAnswer) {
        option.style.backgroundColor = 'green';
      }
    });
    explanation.style.display = 'block';
    explanation.textContent = "Incorrect. The correct answer is: " + correctAnswer + ". " + explanationText;
  }

  // Disable further clicks after answer is selected
  options.forEach(option => {
    option.removeEventListener('click', checkAnswer);
  });

  // Move to next question after a delay
  setTimeout(nextQuestion, 2000);
}

// Load next question
function nextQuestion() {
  // Reset styles
  options.forEach(option => {
    option.style.backgroundColor = '';
  });
  explanation.style.display = 'none';
  
  // Move to next question or show result if all questions are done
  currentQuestion++;
  if (currentQuestion < questions.length) {
    loadQuestion();
  } else {
    question.textContent = "Quiz complete!";
    options.forEach(option => {
      option.style.display = 'none';
    });
  }
}

// Initial load
loadQuestion();
