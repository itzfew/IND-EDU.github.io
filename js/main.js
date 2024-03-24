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

// MenuController.java
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class MenuController {

    // Define a boolean variable to track the menu state
    private boolean isMenuOpen = false;

    // Define a method to toggle the menu state
    @GetMapping("/toggleMenu")
    public String toggleMenu() {
        // Toggle the menu state
        isMenuOpen = !isMenuOpen;
        // Return a message indicating the current state of the menu
        return "Menu is " + (isMenuOpen ? "open" : "closed");
    }
}


