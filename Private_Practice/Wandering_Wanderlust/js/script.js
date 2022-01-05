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

let cityCards = document.querySelectorAll('.ww-main-attract-card');
let cityItems = document.querySelectorAll('.city-item');


for (let i=0; i<cityCards.length; i++) {
    for (let j=0; j<cityItems.length; j++) {
        for (q=0; q<filters.length; q++) {
            console.log('nested loop working');
            if (j.classList.contains(filters[q])) {
                i.setAttribute('class', filters[q]);
                console.log('nested loop working');
            } else {
            };
        };
    };
};


// cityCards.forEach(n => {
//     cityItems.forEach(p => {
//         filters.forEach(i => {
//             p.classList.contains(filters[i]) = n.setAttribute('class', filters[i]);
//         });
//     });
//     for (let i=0; i<cityItems.length; i++) {
//         n.cityItems[i].classList.contains(filters[i]).setAttribute('class', filters[i]);
//     };
// });


function filterMe() {
    console.log('filterMe is working');
    let selectedFilter = this.value;

    document.querySelectorAll('.ww-main-attract-card').forEach(n => {
        let cityItem = document.querySelectorAll('.city-item');

        cityItem.forEach(q => {
            if (q.contains(selectedFilter)) {
                n.style.display = 'block';
            } else {
                n.style.display = 'none';
            }


        })


    });


};

document.querySelector('#city-filter').addEventListener('change', filterMe);


// This is for the photo gallery
let thumbPic = document.querySelectorAll('.thumb-gal-pic');
console.log(thumbPic);

function applyBig () {
    document.querySelector('.big-gal-pic').setAttribute('src', this.getAttribute('src'));

    document.querySelector('.big-gal-pic').setAttribute('alt', this.getAttribute('alt'));

    document.querySelector('.big-gal-title').innerHTML = this.getAttribute('alt');
    
    document.querySelector('.big-gal-subtitle').innerHTML = this.parentElement.querySelector('.hidden-gal-subtitle').innerText;
}

thumbPic.forEach(n => {
    n.addEventListener('click', applyBig);
});


