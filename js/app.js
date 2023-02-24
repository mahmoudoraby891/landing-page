/*
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
 */

/*
 * Define Global Variables
 *
 */
const sections = document.querySelectorAll('section');
const fragment = document.createDocumentFragment();
const unorderedList = document.getElementById("navbar__list");

/**
 * End Global Variables
 * Start Helper Functions
 *
 */
document.addEventListener('DOMContentLoaded', humburger);
document.addEventListener('DOMContentLoaded', addNavBar);

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// build the nav
function addNavBar() {
    for (const section of sections) {
        const listItem = document.createElement('li');
        const listLink = document.createElement('a');
        const sectionTitle = section.getAttribute('data-nav');
        listLink.setAttribute('href', `#${section.id}`);
        listLink.classList.add('menu__link');
        listLink.innerText = sectionTitle;
        listItem.appendChild(listLink);
        fragment.append(listItem);
    };
    unorderedList.appendChild(fragment);
}

// Add class 'active' to section when near top of viewport
window.addEventListener ("scroll", activeSection);
function activeSection (section) {
    sections.forEach(section =>{
        const links = document.querySelectorAll('a.menu__link')
        const sectionTitle = section.getAttribute('data-nav');
        if (section.getBoundingClientRect().top >= 0 &&
        section.getBoundingClientRect().top <= 300) {
            section.classList.add('your-active-class');
            links.forEach(link =>{
                if(link.textContent === sectionTitle){
                    link.classList.add('your-active-link');
                    }
                else{
                    link.classList.remove('your-active-link');
                }});
            }
        else {
            section.classList.remove('your-active-class');
        }
    })}

// Scroll to anchor ID using scrollTO event
window.addEventListener('click', scrollToSection);
function scrollToSection(evt) {
    const link = document.getElementsByTagName('a').getAttribute('href');
    evt.preventDefault();
    window.scrollTo({behavior: "smooth"});
}

/**
 * End Main Functions
 * Begin Events
 *
 *
 *
 *
 *
 * */

// Create humburger menu for responsive mode
function humburger() {
    const listItem = document.createElement('li');
    const humburger = document.createElement('a');
    humburger.setAttribute('href', `#unorderedList`);
    humburger.setAttribute('onclick', `openNav()`);
    humburger.classList.add('icon');
    listItem.appendChild(humburger);
    unorderedList.appendChild(listItem);
    humburger.addEventListener('click', openNav);
    function openNav(){
        const a = document.getElementById('navbar');
        if (a.className === "navbar__menu") {
            a.className += " responsive";
          } else {
            a.className = "navbar__menu";
          }
    }
    }