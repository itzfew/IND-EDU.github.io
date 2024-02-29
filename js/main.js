let isMobileNav = false;

function setupCloseButtonListener() {
    const closeButtonSelectors = getCloseButtonElements();
    closeButtonSelectors.forEach(value => {
        value.addEventListener('click', (evt => onCloseButtonClick(value)))
    });
}

function getCloseButtonElements() {
    return document.querySelectorAll('.exit-button');
}


function onCloseButtonClick(value) {
    const targetSelector = value.dataset.exitTarget;
    hideElement(targetSelector);
}

function hideElement(targetSelector) {
    getElementById(targetSelector).classList.add('hidden');
}

function getElementById(elementId) {
    return document.getElementById(elementId);
}



function toggleMobileNav() {
    if(header.classList.contains('focus-nav')){
        closeMobileNav();
    }else{
        openMobileNav();
    }
}
function openMobileNav() {
    isMobileNav = true;
    header.classList.add('focus-nav');
}

function closeMobileNav() {
    isMobileNav = false;
    header.classList.remove('focus-nav');
}

function registerNavigationEvents(){
    const nav = document.querySelectorAll('nav ul li a');

    const openButtonNav = document.querySelector('header .mobile-nav .toggle-nav');

    nav.forEach(function(elm) {
        elm.addEventListener("click", toggleActiveClass);
    });


    openButtonNav.addEventListener('click', (e) => {
       toggleMobileNav()
    });

    window.addEventListener('scroll', (e) => {
        const scroll = document.documentElement.scrollTop;
        const nav = getElementById('main-header');

        if(scroll > nav.scrollHeight){
            nav.classList.add('scrolled');
        }else {
            nav.classList.remove('scrolled');
        }


    });
}


function toggleActiveClass(ev){
    ev.preventDefault();

    const item = ev.target.parentNode; // li
    const target = getElementById(ev.target.getAttribute("href").substr(1));

    // return if already current
    if (Classie.has(item, 'active')) {
        return false;
    }

    // remove current
    Classie.remove(document.querySelector('.active'), 'active');

    // set current
    Classie.add(item, 'active');

    if(isMobileNav){
        closeMobileNav();
    }

    const headingOffset = 80;
    window.scrollTo(0, target.offsetTop - headingOffset);
}

class Classie {
    static has(elm, classString) {
        if(elm == null)
            return
        return elm.classList.contains(classString);
    }

    static add(elm, classString) {
        if(elm == null)
            return
        return elm.classList.add(classString);
    }

    static remove(elm, classString) {
        if(elm == null)
            return
        return elm.classList.remove(classString);
    }
}

EpSlider = 1;
prevEpSlider = EpSlider;
function nextEp(){
    EpSlider += 1
    if(EpSlider >= 3)
        EpSlider = 1;
    getElementById("ep" + EpSlider).style.opacity = 1;
    getElementById("ep" + prevEpSlider).style.opacity = 0;

    getElementById("episode-number").innerHTML  = "No. #" + EpSlider;

    prevEpSlider = EpSlider;

}

function prevEp(){
    prevSlide = slideCounter;
    slideCounter -= 1;
    moveSlide(1);
}
MIN_SlIDES = 1;
MAX_SLIDES = 2;
function next(){
    clearInterval(autoSlider);
    slideCounter += 1;
    prevSlide = slideCounter - 1;
    moveSlide();
}
function moveSlide(int){


    if(prevSlide < MIN_SlIDES )
        prevSlide = MAX_SLIDES;

    if(slideCounter > MAX_SLIDES)
        slideCounter = MIN_SlIDES;

    if(slideCounter < MIN_SlIDES)
        slideCounter = MAX_SLIDES;

    getElementById("slide" + prevSlide).style.opacity = 0;
    getElementById("p" + prevSlide).classList.remove("pActive");
    getElementById("slide" + slideCounter).style.opacity = 1;
    getElementById("p" + slideCounter).classList.add("pActive");

    console.log(prevSlide, slideCounter);
    autoSlider = setInterval(next, 4000)
}

initPage();


let deferredPrompt;

// Listen for the beforeinstallprompt event
window.addEventListener('beforeinstallprompt', (e) => {
  // Prevent the default behavior of the event
  e.preventDefault();
  // Store the event for later use
  deferredPrompt = e;
  // Show the install button or prompt
  showInstallButton();
});

// Function to show the install button or prompt
function showInstallButton() {
  // Select the install button element from your HTML
  const installButton = document.getElementById('installButton');
  // Display the install button
  installButton.style.display = 'block';

  // Add an event listener to the install button
  installButton.addEventListener('click', (e) => {
    // Hide the install button
    installButton.style.display = 'none';
    // Show the installation prompt
    deferredPrompt.prompt();
    // Wait for the user's choice
    deferredPrompt.userChoice.then((choiceResult) => {
      // Reset the deferredPrompt variable
      deferredPrompt = null;
    });
  });
}


    function toggleMenu() {
    var menu = document.getElementById("menu");
    menu.classList.toggle("show-menu");
}

// JavaScript for handling cell clicks and modal close
document.addEventListener("DOMContentLoaded", function() {
    var closeButtons = document.getElementsByClassName("close");
    for (var i = 0; i < closeButtons.length; i++) {
        closeButtons[i].addEventListener("click", function() {
            closeModal();
        });
    }
});

function handleCellClick(cellId, title, description, link) {
    // Get the modal element
    var modal = document.getElementById("myModal");

    // Get the modal content elements
    var modalTitle = document.getElementById("modal-title");
    var modalDescription = document.getElementById("modal-description");
    var modalButtons = document.getElementById("modal-buttons");

    // Set the modal content based on the clicked cell
    modalTitle.textContent = title;
    modalDescription.textContent = description;

    // Set up buttons
    modalButtons.innerHTML = '<button class="modal-button" onclick="openLink(\'' + link + '\')">Open</button>' +
                              '<button class="modal-button" onclick="closeModal()">Back</button>';

    // Open the modal
    modal.style.display = "block";
}

function openLink(link) {
    // Open the link
    window.open(link, "_blank");
}

function closeModal() {
    // Get the modal element
    var modal = document.getElementById("myModal");

    // Close the modal
    modal.style.display = "none";
}
