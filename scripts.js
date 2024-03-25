


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

// Function to send message and receive a reply
function sendMessage() {
  var userInput = document.getElementById("userInput").value;
  var chatMessages = document.getElementById("chatMessages");
  
  // User message
  var userMessageElement = document.createElement("div");
  userMessageElement.textContent = "You: " + userInput;
  chatMessages.appendChild(userMessageElement);
  
  // Bot reply
  var botReplyElement = document.createElement("div");
  var botReply = getBotReply(userInput); // Get bot's reply based on user input
  botReplyElement.textContent = "Bot: " + botReply;
  
  // If bot's reply contains a list of FAQs, add click event listeners to each FAQ item
  if (botReply.includes("FAQs:")) {
    var faqs = botReply.split(":")[1].trim().split(","); // Extract FAQs
    faqs.forEach(function(faq) {
      var faqElement = document.createElement("div");
      faqElement.textContent = faq.trim();
      faqElement.classList.add("faq");
      faqElement.addEventListener("click", function() {
        handleFaqClick(faq.trim());
      });
      botReplyElement.appendChild(faqElement);
    });
  }
  
  chatMessages.appendChild(botReplyElement);
  document.getElementById("userInput").value = "";
}

// Function to handle click on FAQ item
function handleFaqClick(faq) {
  var chatMessages = document.getElementById("chatMessages");
  var botReplyElement = document.createElement("div");
  botReplyElement.textContent = "Bot: " + getFaqReply(faq); // Get bot's reply for the clicked FAQ
  chatMessages.appendChild(botReplyElement);
}

// Function to get bot's reply based on user input
function getBotReply(userInput) {
  // Simple example: if user says "Hi", bot replies with a list of FAQs
  if (userInput.toLowerCase() === "hi") {
    return "Bot: Here are some FAQs: FAQ 1, FAQ 2, FAQ 3";
  } else {
    // Add more logic for other user inputs
    return "Bot: I didn't understand. Please ask another question.";
  }
}

// Function to get bot's reply for the clicked FAQ (replace with your logic)
function getFaqReply(faq) {
  // Example: provide different responses based on the clicked FAQ
  switch (faq) {
    case "FAQ 1":
      return "Answer to FAQ 1.";
    case "FAQ 2":
      return "Answer to FAQ 2.";
    case "FAQ 3":
      return "Answer to FAQ 3.";
    default:
      return "I'm sorry, I don't have an answer for that.";
  }
}
