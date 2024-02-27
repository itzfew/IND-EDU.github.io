// Define variables to store name and email
let userName = "";
let userEmail = "";

// Function to start the quiz after getting user details
function startQuiz() {
  // Get user details from input fields
  userName = document.getElementById('name').value.trim();
  userEmail = document.getElementById('email').value.trim();

  // Check if name and email are provided
  if (userName === "" || userEmail === "") {
    alert("Please enter your name and email to start the quiz.");
    return;
  }

  // Add user details to Firestore
  db.collection("users").add({
    name: userName,
    email: userEmail
  })
  .then((docRef) => {
    console.log("User details written with ID: ", docRef.id);
    // Proceed with the quiz
    showQuestion();
  })
  .catch((error) => {
    console.error("Error adding user details: ", error);
    // Handle errors if necessary
  });
}

// Call startQuiz() function when a start button is clicked
const startButton = document.getElementById('start-button');
startButton.addEventListener('click', startQuiz);
