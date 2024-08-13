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

const details = document.querySelectorAll('details');

details.forEach(item => {
  item.addEventListener('click', (e) => {
    e.preventDefault();
    
    const openItem = document.querySelector('details[open]');
      
    if (openItem) openItem.open = false;
    
    if (openItem !== item) item.open = true 
  })
})