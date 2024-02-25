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


const	body = document.querySelector('body')
const twitter = document.querySelector('.twitter')

twitter.addEventListener("mouseover", function () {
    body.classList.add('linked')
},false)

twitter.addEventListener("mouseout", function () {
    body.classList.remove('linked')
}, false)


let startBtn = document.getElementById('start'); 
let stopBtn = document.getElementById('stop'); 
let resetBtn = document.getElementById('reset'); 
  
let hour = 00; 
let minute = 00; 
let second = 00; 
let count = 00; 
  
startBtn.addEventListener('click', function () { 
    timer = true; 
    stopWatch(); 
}); 
  
stopBtn.addEventListener('click', function () { 
    timer = false; 
}); 
  
resetBtn.addEventListener('click', function () { 
    timer = false; 
    hour = 0; 
    minute = 0; 
    second = 0; 
    count = 0; 
    document.getElementById('hr').innerHTML = "00"; 
    document.getElementById('min').innerHTML = "00"; 
    document.getElementById('sec').innerHTML = "00"; 
    document.getElementById('count').innerHTML = "00"; 
}); 
  
function stopWatch() { 
    if (timer) { 
        count++; 
  
        if (count == 100) { 
            second++; 
            count = 0; 
        } 
  
        if (second == 60) { 
            minute++; 
            second = 0; 
        } 
  
        if (minute == 60) { 
            hour++; 
            minute = 0; 
            second = 0; 
        } 
  
        let hrString = hour; 
        let minString = minute; 
        let secString = second; 
        let countString = count; 
  
        if (hour < 10) { 
            hrString = "0" + hrString; 
        } 
  
        if (minute < 10) { 
            minString = "0" + minString; 
        } 
  
        if (second < 10) { 
            secString = "0" + secString; 
        } 
  
        if (count < 10) { 
            countString = "0" + countString; 
        } 
  
        document.getElementById('hr').innerHTML = hrString; 
        document.getElementById('min').innerHTML = minString; 
        document.getElementById('sec').innerHTML = secString; 
        document.getElementById('count').innerHTML = countString; 
        setTimeout(stopWatch, 10); 
    } 
}
