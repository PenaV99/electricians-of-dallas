const hamMenu = document.querySelector(".hamburger-menu");
const menu = document.querySelector(".hidden-menu");
hamMenu.addEventListener('click', () => {
    hamMenu.classList.toggle('active');
    menu.classList.toggle('active');
});
