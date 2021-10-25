
function randoRestaurant() {
    let random = Math.ceil(Math.random() *5);
    console.log(random);
    if (random === 1) {
        document.querySelector('.result-output').innerText = '1st restaurant';
    } else if (random === 2) {
        document.querySelector('.result-output').innerText = '2nd restaurant';
    } else if (random === 3) {
        document.querySelector('.result-output').innerText = '3rd restaurant';
    } else if (random === 4) {
        document.querySelector('.result-output').innerText = '4th restaurant';
    } else {
        document.querySelector('.result-output').innerText = '5th restaurant';
    }
};

document.querySelector('.img-control').addEventListener('click', randoRestaurant);