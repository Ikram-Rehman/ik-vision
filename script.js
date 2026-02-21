// script.js 

// Hamburger Menu Toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('open');
});

// Smooth Scroll
const links = document.querySelectorAll('a[href^="#"]');
links.forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
    });
});

// Dark/Light Mode Toggle
const toggleButton = document.getElementById('mode-toggle');
const body = document.body;

toggleButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
});

// Form Validation
const form = document.getElementById('form');
form.addEventListener('submit', function(e) {
    e.preventDefault();
    const email = form.elements['email'].value;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert('Please enter a valid email address.');
    } else {
        // Form can be submitted or processed further
        alert('Form submitted successfully!');
    }
});

// Animations
const animatedElements = document.querySelectorAll('.animate');
window.addEventListener('scroll', () => {
    animatedElements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
            el.classList.add('fade-in');
        }
    });
});

