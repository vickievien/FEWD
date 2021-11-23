// Toggle Nav Burger
function toggleBurgerNav() {
    let targetNav = document.querySelector('.ww-nav-list').classList.toggle('ww-nav-list-toggle');
}

let burger = document.querySelector('.ww-nav-burger');
burger.addEventListener('click', toggleBurgerNav);


  