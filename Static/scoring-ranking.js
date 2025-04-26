// Mobile Responsive and Interactive JavaScript

// Toggle mobile menu
const menuToggle = document.querySelector('.hamburger-menu');
const navMenu = document.querySelector('.navbar ul');

menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active'); // Toggle the visibility of the menu
    menuToggle.classList.toggle('active'); // Change hamburger icon to "X"
});

// Close menu when a link is clicked
const navLinks = document.querySelectorAll('.navbar ul li a');

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active'); // Close the menu
        menuToggle.classList.remove('active'); // Reset the hamburger icon
    });
});

// Responsive behavior for resizing
window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        navMenu.classList.remove('active'); // Ensure menu is visible on desktop
        menuToggle.classList.remove('active'); // Reset hamburger icon
    }
});

// Interactive feature: Scroll to top button
const scrollToTopBtn = document.querySelector('.scroll-to-top');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollToTopBtn.classList.add('visible'); // Show the button when scrolled down
    } else {
        scrollToTopBtn.classList.remove('visible'); // Hide the button when at the top
    }
});

scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Smooth scrolling to the top
    });
});

// Smooth sliding animation for sections
const sections = document.querySelectorAll('section');

const revealSections = () => {
    const triggerBottom = window.innerHeight * 0.8; // Trigger point for animation

    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;

        if (sectionTop < triggerBottom) {
            section.classList.add('visible'); // Add visible class to animate
        } else {
            section.classList.remove('visible'); // Remove visible class if out of view
        }
    });
};

window.addEventListener('scroll', revealSections);
window.addEventListener('load', revealSections); // Trigger on page load