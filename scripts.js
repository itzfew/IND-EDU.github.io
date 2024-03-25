// Function to start the celebration animation
function startCelebrationAnimation(celebrationName) {
    // Create celebration animation elements
    var celebrationAnimation = document.getElementById('celebration-animation');
    var items = createItems(50); // Create 50 items of random types

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

// Function to create a random celebration item element
function createRandomItem() {
    var randomType = Math.floor(Math.random() * 3); // Generate random number between 0 and 2
    var type;
    switch(randomType) {
        case 0:
            type = "balloon";
            break;
        case 1:
            type = "flower";
            break;
        case 2:
            type = "firework";
            break;
    }
    return createItem(type);
}

// Function to create multiple celebration items
function createItems(numItems) {
    var items = [];
    for (var i = 0; i < numItems; i++) {
        items.push(createRandomItem());
    }
    return items;
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
