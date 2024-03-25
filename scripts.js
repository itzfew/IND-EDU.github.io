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


<script>
    // Replace 'YOUR_CHANNEL_ID' with your YouTube channel ID
    const channelID = 'YOUR_CHANNEL_ID';
    const rssFeedURL = `https://www.youtube.com/feeds/videos.xml?channel_id=UCesoR53UGW3yM7owERXa4RQ`;

    // Fetch the RSS feed
    fetch(rssFeedURL)
        .then(response => response.text())
        .then(data => {
            // Parse the XML data
            const parser = new DOMParser();
            const xmlDoc = parser.parseFromString(data, 'text/xml');
            const entries = xmlDoc.getElementsByTagName('entry');

            // Get information about the latest video
            const latestVideo = {
                title: entries[0].getElementsByTagName('title')[0].textContent,
                description: entries[0].getElementsByTagName('media:description')[0].textContent,
                videoURL: entries[0].getElementsByTagName('link')[0].getAttribute('href')
            };

            // Embed the latest video on the webpage
            const embedContainer = document.getElementById('latest-video-container');
            const iframe = document.createElement('iframe');
            iframe.setAttribute('width', '560');
            iframe.setAttribute('height', '315');
            iframe.setAttribute('src', latestVideo.videoURL.replace('/watch?v=', '/embed/'));
            iframe.setAttribute('frameborder', '0');
            iframe.setAttribute('allowfullscreen', '');

            const titleElement = document.createElement('h3');
            titleElement.textContent = latestVideo.title;

            const descriptionElement = document.createElement('p');
            descriptionElement.textContent = latestVideo.description;

            embedContainer.appendChild(titleElement);
            embedContainer.appendChild(descriptionElement);
            embedContainer.appendChild(iframe);
        })
        .catch(error => console.error('Error fetching RSS feed:', error));
</script>
