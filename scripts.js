document.addEventListener('DOMContentLoaded', function() {
    // Get the current date
    var currentDate = new Date();

    // Check if it's a specific date (15th August, 26th January, or 25th March)
    if ((currentDate.getMonth() === 7 && currentDate.getDate() === 15)) {
        // Show celebration animation for 15th August (Independence Day)
        startCelebrationAnimation("Independence Day", "balloon");
    } else if ((currentDate.getMonth() === 0 && currentDate.getDate() === 26)) {
        // Show celebration animation for 26th January (Republic Day)
        startCelebrationAnimation("Republic Day", "flower");
    } else if ((currentDate.getMonth() === 2 && currentDate.getDate() === 25)) {
        // Show celebration animation for 25th March (Another Celebration)
        startCelebrationAnimation("Another Celebration", "firework");
    }
});

// Function to start the celebration animation
function startCelebrationAnimation(celebrationName, type) {
    // Create celebration animation elements
    var celebrationAnimation = document.getElementById('celebration-animation');
    var items = createItems(50, type); // Create 50 items of the specified type

    // Append items to celebration animation
    items.forEach(function(item) {
        celebrationAnimation.appendChild(item);
    });

    // Show celebration message
    showCelebrationMessage(celebrationName);

    // Remove celebration animation after 10 seconds
    setTimeout(function() {
        celebrationAnimation.innerHTML = ''; // Clear celebration animation
    }, 10000); // 10 seconds
}

// Function to create a celebration item element
function createItem(type) {
    var item = document.createElement('div');
    item.classList.add(type);
    item.style.left = Math.random() * 100 + 'vw'; // Random horizontal position
    item.style.animationDuration = Math.random() * 5 + 5 + 's'; // Random animation duration (5-10 seconds)
    return item;
}

// Function to create multiple celebration items
function createItems(numItems, type) {
    var items = [];
    for (var i = 0; i < numItems; i++) {
        items.push(createItem(type));
    }
    return items;
}

// Function to show the celebration message
function showCelebrationMessage(celebrationName) {
    // Display the celebration message at the top of the page
    var celebrationMessage = document.createElement('div');
    celebrationMessage.textContent = "Today is " + celebrationName + "!";
    celebrationMessage.classList.add('celebration-message');
    document.body.appendChild(celebrationMessage);

    // Remove the celebration message after 10 seconds
    setTimeout(function() {
        celebrationMessage.remove();
    }, 10000); // 10 seconds
}

            


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
