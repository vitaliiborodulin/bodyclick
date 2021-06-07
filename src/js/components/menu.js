var hamburger = document.querySelector('.header__mobile');
var menu = document.getElementById('menu');
var menuItems = document.querySelectorAll('.menu__list a');
var closeMenuBtn = document.querySelector('#menu .btn-close');


hamburger.addEventListener('click', function (e) {
    e.preventDefault();
    menu.classList.add('active');
  });

for(var j = 0; j < menuItems.length; j++){
  menuItems[j].addEventListener('click', closeMenu);
}

function closeMenu() {
  menu.classList.remove('active');
}

// overlay.addEventListener('click', closeMenu);
closeMenuBtn.addEventListener('click', closeMenu);