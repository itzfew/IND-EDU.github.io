document.addEventListener('DOMContentLoaded', function() {
    // Get the current date
    var currentDate = new Date();

    // Check if it's a specific date (15th August, 26th January, or 25th March)
    if ((currentDate.getMonth() === 7 && currentDate.getDate() === 15) || 
        (currentDate.getMonth() === 0 && currentDate.getDate() === 26) || 
        (currentDate.getMonth() === 2 && currentDate.getDate() === 25)) {
        // Show celebration animation for 15th August, 26th January, or 25th March
        startCelebrationAnimation();
    }
});

// Function to start the celebration animation
function startCelebrationAnimation() {
    // Create celebration animation elements
    var celebrationAnimation = document.getElementById('celebration-animation');

    // Balloons
    var balloons = createBalloons(50); // Create 50 balloons
    balloons.forEach(function(balloon) {
        celebrationAnimation.appendChild(balloon);
    });

    // Confetti
    var confetti = createConfetti(100); // Create 100 confetti particles
    confetti.forEach(function(particle) {
        celebrationAnimation.appendChild(particle);
    });

    // Flowers
    var flowers = createFlowers(20); // Create 20 flowers
    flowers.forEach(function(flower) {
        celebrationAnimation.appendChild(flower);
    });

    // Remove celebration animation after 10 seconds
    setTimeout(function() {
        celebrationAnimation.innerHTML = ''; // Clear celebration animation
    }, 10000); // 10 seconds
}

// Function to create a balloon element
function createBalloon() {
    var balloon = document.createElement('div');
    balloon.classList.add('balloon');
    balloon.style.left = Math.random() * 100 + 'vw'; // Random horizontal position
    balloon.style.animationDuration = Math.random() * 5 + 5 + 's'; // Random animation duration (5-10 seconds)
    return balloon;
}

// Function to create multiple balloons
function createBalloons(numBalloons) {
    var balloons = [];
    for (var i = 0; i < numBalloons; i++) {
        balloons.push(createBalloon());
    }
    return balloons;
}

// Function to create a confetti particle
function createConfettiParticle() {
    var particle = document.createElement('div');
    particle.classList.add('confetti');
    particle.style.left = Math.random() * 100 + 'vw'; // Random horizontal position
    particle.style.animationDuration = Math.random() * 3 + 2 + 's'; // Random animation duration (2-5 seconds)
    return particle;
}

// Function to create multiple confetti particles
function createConfetti(numParticles) {
    var confetti = [];
    for (var i = 0; i < numParticles; i++) {
        confetti.push(createConfettiParticle());
    }
    return confetti;
}

// Function to create a flower element
function createFlower() {
    var flower = document.createElement('div');
    flower.classList.add('flower');
    flower.style.left = Math.random() * 100 + 'vw'; // Random horizontal position
    flower.style.animationDuration = Math.random() * 5 + 5 + 's'; // Random animation duration (5-10 seconds)
    return flower;
}

// Function to create multiple flowers
function createFlowers(numFlowers) {
    var flowers = [];
    for (var i = 0; i < numFlowers; i++) {
        flowers.push(createFlower());
    }
    return flowers;
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
