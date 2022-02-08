
function randoRestaurant() {
    let random = Math.ceil(Math.random() *4);
    console.log(random);
    if (random === 1) {
        document.querySelector('.result-output').innerText = 'SUGARFISH';
    } else if (random === 2) {
        document.querySelector('.result-output').innerText = 'Joey DTLA';
    } else if (random === 3) {
        document.querySelector('.result-output').innerText = 'Daikokuya Little Tokyo';
    } else {
        document.querySelector('.result-output').innerText = 'HAMA SUSHI';
    }
};

document.querySelector('.img-control').addEventListener('click', randoRestaurant);