// Toggle Nav Burger
function toggleBurgerNav() {
    let targetNav = document.querySelector('.ww-nav-list').classList.toggle('ww-nav-list-toggle');
};

let burger = document.querySelector('.ww-nav-burger');
burger.addEventListener('click', toggleBurgerNav);


// Slide down caption
function slideDown() {
    const thisParentWrap = this.parentElement.parentElement.parentElement;

    thisParentWrap.querySelector('.food-caption').classList.toggle('show-cap')
}

const arrows = document.querySelectorAll('.fa-angle-down');

arrows.forEach(n => {
    n.addEventListener('click', slideDown)
});


//Filter section
const filter = ['Seafood', 'Meat', 'Veggie'];
for (let i=0; i<filter.length; i++) {
    const addFilterOpt = document.createElement('option');
    addFilterOpt.innerText = filter[i];
    document.querySelector('#food-filter').appendChild(addFilterOpt);
    addFilterOpt.value = filter[i].toLowerCase();
}

function filterMe() {
    const selectedFilter = this.value;
    console.log(selectedFilter)
    const foodCards = document.querySelectorAll('.ww-food-card-container');

    foodCards.forEach(n => {
        if (n.classList.contains(selectedFilter)) {
            n.style.display = 'grid-item'
        } else {
            n.style.display = 'none';
        }
    });
}

document.querySelector('#food-filter').addEventListener('change', filterMe);