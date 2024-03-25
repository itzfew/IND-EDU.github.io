


document.addEventListener('DOMContentLoaded', function() {
    const booksCatalogue = document.querySelector('.books-catalogue');

    
    // Simulated data for demonstration
    const books = [
        {
            title: 'NCERT PUNCH',
            image: 'img/webshop/NCERT PUNCH Pw.png',
            description: 'Free Physics Wallah NCERT Punch',
            downloadLink: 'https://adrinolinks.com/NCERT_PUNCH_2024/'
        },
        {
            title: '36 Years PYQ NEET',
            image: 'img/webshop/NEET 36 years Pyq.png',
            description: '36 Years PYQS For Neet.',
            downloadLink: 'https://adrinolinks.com/33_YEARS_PAPERS_NEET'
        },
        // Add more book objects as needed
    ];
    
    // Function to create book post HTML
    function createBookPost(book) {
        const bookPost = document.createElement('div');
        bookPost.classList.add('book-post');

        bookPost.innerHTML = `
            <img src="${book.image}" alt="${book.title}">
            <p>${book.description}</p>
            <a href="${book.downloadLink}" class="download-button">Download</a>
        `;

        booksCatalogue.appendChild(bookPost);
    }

    // Populate books catalogue
    books.forEach(book => createBookPost(book));
});

document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const menuItems = document.querySelector('.menu-items');

    menuToggle.addEventListener('click', function() {
        menuItems.classList.toggle('active');
    });
});


document.getElementById('share-btn').addEventListener('click', function() {
    // Share text along with the link to your website
    var shareText = "Check out this amazing website!";
    var shareUrl = window.location.href;

    // Check if the Web Share API is supported
    if (navigator.share) {
        // Share using the Web Share API
        navigator.share({
            title: document.title,
            text: shareText,
            url: shareUrl
        })
        .then(() => console.log('Successful share'))
        .catch((error) => console.log('Error sharing:', error));
    } else {
        // Fallback for browsers that do not support the Web Share API
        alert("Your browser does not support the Web Share API. Please use the built-in share options of your browser.");
    }
});

document.addEventListener('DOMContentLoaded', function() {
    // Get the current date
    var currentDate = new Date();

    // Format the date as desired (e.g., "March 25, 2024")
    var formattedDate = currentDate.toLocaleDateString('en-US', { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    });

    // Display the formatted date at the top of the website
    var latestDateElement = document.getElementById('latest-date');
    latestDateElement.textContent = "Latest Date: " + formattedDate;
});


// Function to toggle chatbot popup
function toggleChat() {
  var chatPopup = document.getElementById("chatPopup");
  chatPopup.style.display === "none" ? chatPopup.style.display = "block" : chatPopup.style.display = "none";
}


// Function to send message and receive a reply
function sendMessage(message, isUserMessage) {
  var chatMessages = document.getElementById("chatMessages");
  
  // Create message element
  var messageElement = document.createElement("div");
  messageElement.textContent = message;
  
  // Apply different styling based on whether it's a user message or a bot message
  if (isUserMessage) {
    messageElement.classList.add("user-message");
  } else {
    messageElement.classList.add("bot-message");
  }
  
  // Append message to chat messages container
  chatMessages.appendChild(messageElement);
  
  // If it's a bot message and contains FAQ, make it clickable
  if (!isUserMessage && message.includes("FAQ:")) {
    var faq = message.split(":")[1].trim(); // Extract FAQ
    messageElement.addEventListener("click", function() {
      handleFaqClick(faq);
    });
  }
  
  // Scroll to the bottom of the chat messages container
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Function to handle click on FAQ item
function handleFaqClick(faq) {
  sendMessage("User: " + faq, true); // Send FAQ as a user message
  sendMessage(getFaqReply(faq), false); // Get bot's reply for the clicked FAQ
}

// Function to get bot's reply based on user input
function getBotReply(userInput) {
  // Example: If user says "Hi", bot replies with a greeting
  if (userInput.toLowerCase() === "hi") {
    return "Bot: Hello there! How can I assist you today? FAQ: What are your services?";
  } else if (userInput.toLowerCase() === "what are your services?") {
    return "Bot: Our services include A, B, and C. FAQ: How can I sign up?";
  } else {
    // Add more logic for other user inputs
    return "Bot: I didn't understand. Please ask another question.";
  }
}

// Function to get bot's reply for the clicked FAQ
function getFaqReply(faq) {
  // Example: provide different responses based on the clicked FAQ
  switch (faq) {
    case "How can I sign up?":
      return "Bot: You can sign up by visiting our website and clicking on the sign-up button.";
    default:
      return "Bot: I'm sorry, I don't have an answer for that right now.";
  }
}

// Example usage:
sendMessage("Bot: Welcome to the chat! How can I assist you today?", false); // Bot initiates the conversation
