document.addEventListener('DOMContentLoaded', () => {
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const navbarMenu = document.querySelector('.navbar ul');
    const sidebarHamburgerMenu = document.querySelector('.sidebar-hamburger-menu');
    const sidebar = document.querySelector('.sidebar');
    const container = document.querySelector('.container');

    // Navbar Hamburger Menu
    if (hamburgerMenu && navbarMenu) {
        hamburgerMenu.addEventListener('click', () => {
            hamburgerMenu.classList.toggle('active'); // Change hamburger icon to X
            navbarMenu.classList.toggle('active'); // Show or hide the dropdown menu
        });
    }

    // Sidebar Hamburger Menu
    if (sidebarHamburgerMenu && sidebar) {
        sidebarHamburgerMenu.addEventListener('click', () => {
            sidebarHamburgerMenu.classList.toggle('active'); // Change sidebar hamburger icon to X
            sidebar.classList.toggle('active'); // Show or hide the sidebar
            container.classList.toggle('sidebar-active'); // Adjust container margin
        });
    }
});