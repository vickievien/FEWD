// Each random number RETURNS different restaurant

// When I click this, a RANDOM number will be drawn and will RETURN a restaurant

function randoRestaurant() {
    let random = Math.ceil(Math.random() *5);
    console.log(random);
    if (random === 1) {
        return '1st restaurant';
    } else if (random === 2) {
        return '2nd restaurant';
    } else if (random === 3) {
        return '3rd restaurant';
    } else if (random === 4) {
        return '4th restaurant';
    } else {
        return '5th restaurant';
    }
};

console.log(randoRestaurant());

document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.img-control').addEventListener('click', randoRestaurant());
    document.querySelector('.result-input').innerTEXT = randoRestaurant();
});