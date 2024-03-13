document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.querySelector('.menu-toggle');
    const navBar = document.querySelector('.navbar');
    toggleButton.addEventListener('click', function () {
        navBar.classList.toggle('active'); // Toggle 'active' class
    });
});