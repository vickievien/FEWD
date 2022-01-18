// Toggle Nav Burger
function toggleBurgerNav() {
    let targetNav = document.querySelector('.ww-nav-list').classList.toggle('ww-nav-list-toggle');
};

let burger = document.querySelector('.ww-nav-burger');
burger.addEventListener('click', toggleBurgerNav);


//This is for the cities filter
const filters = ['Culture', 'Cuisine', 'Cityscape', 'Nature', 'Nightlife'];

for (let i=0; i<filters.length; i++) {
    let addFiltOpt = document.createElement('option');
    addFiltOpt.innerText = filters[i];
    document.querySelector('#city-filter').appendChild(addFiltOpt);
    addFiltOpt.value = filters[i].toLowerCase();
};

function filterMe() {
    console.log('filterMe is working');
    let selectedFilter = this.value;

    document.querySelectorAll('.ww-main-attract-card').forEach(n => {
        if (n.classList.contains(selectedFilter) || selectedFilter === 'all') {
            n.style.display = 'grid-item';
        } else {
            n.style.display = 'none';
        }
    });
};

document.querySelector('#city-filter').addEventListener('change', filterMe);