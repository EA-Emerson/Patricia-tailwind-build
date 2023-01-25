var burger = document.getElementById('burger');
var menu = document.getElementById('menu');
var nav = document.getElementById('nav');

burger.addEventListener('click', (e) => {
    e.preventDefault();
    
    if (menu.classList.contains('hidden')) {
        menu.classList.remove('hidden');
        burger.src=('img/menu close.png');
        nav.classList.add('navBorder')
    }
    else{
        menu.classList.add('hidden');
        burger.src = ('img/menu-button-of-three-horizontal-lines.png');
    }
})
