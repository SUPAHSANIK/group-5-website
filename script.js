/**
 * Script for handling responsive navigation menu toggle.
 *
 * It listens for a click on the '.menu-toggle' button and toggles the
 * 'open' class on the 'nav ul' element to show or hide the menu.
 * It also handles closing the menu when a navigation link is clicked.
 */
document.addEventListener('DOMContentLoaded', () => {
    // Select the hamburger/close button and the list of navigation links
    const menuToggle = document.querySelector('.menu-toggle');
    const navUl = document.querySelector('nav ul');

    if (menuToggle && navUl) {
        // 1. Handle Menu Toggle Click
        menuToggle.addEventListener('click', () => {
            // Toggle the 'open' class on the navigation list
            navUl.classList.toggle('open');

            // Change the button text/icon for better accessibility and feedback
            if (navUl.classList.contains('open')) {
                menuToggle.innerHTML = '✕'; // Close icon
                menuToggle.setAttribute('aria-expanded', 'true');
            } else {
                menuToggle.innerHTML = '☰'; // Menu icon
                menuToggle.setAttribute('aria-expanded', 'false');
            }
        });

        // 2. Close Menu on Link Click (for better mobile UX)
        const navLinks = navUl.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                // Only execute if the menu is currently open
                if (navUl.classList.contains('open')) {
                    navUl.classList.remove('open');
                    menuToggle.innerHTML = '☰';
                    menuToggle.setAttribute('aria-expanded', 'false');
                }
            });
        });
    } else {
        console.error('Mobile menu elements (.menu-toggle or nav ul) not found.');
    }
});