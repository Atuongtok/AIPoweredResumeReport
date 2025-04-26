document.addEventListener("DOMContentLoaded", () => {
    // Hamburger Menu Toggle
    function toggleMenu() {
        const navLinks = document.querySelector(".navbar ul");
        const hamburger = document.querySelector(".hamburger-menu");

        navLinks.classList.toggle("active"); // Toggle menu visibility
        hamburger.classList.toggle("active"); // Toggle hamburger icon to X
    }

    document.querySelector(".hamburger-menu").addEventListener("click", toggleMenu);

    // Close the menu when any link is clicked
    document.querySelectorAll(".navbar ul li a").forEach(link => {
        link.addEventListener("click", () => {
            const navLinks = document.querySelector(".navbar ul");
            const hamburger = document.querySelector(".hamburger-menu");

            navLinks.classList.remove("active"); // Hide the menu
            hamburger.classList.remove("active"); // Reset the hamburger icon
        });
    });
});

