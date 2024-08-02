window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.nav-menu-hamburger'),
    menuItem = document.querySelectorAll('.nav-menu-hamburger__list-item'),
    hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('nav-menu-hamburger_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('nav-menu-hamburger_active');
        })
    })
})