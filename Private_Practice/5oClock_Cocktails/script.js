// RANDOM CARD SECTION
const magicMe = async() => {

    let randomUrl = `https://thecocktaildb.com/api/json/v1/1/random.php`;
    const randomResponse = await fetch(randomUrl);
    const randomData = await randomResponse.json();
    console.log(randomData);

    // RANDOM FRONT CARD
    const randomFrontCard = document.querySelector('.random-front-wrapper');
    const randomAlcoholType = document.querySelector('.random-alc-type');
    const randomCocktailName = document.querySelector('.random-cocktail-name');
    const randomGlassType = document.querySelector('.random-glass-type-name');

    randomFrontCard.style.backgroundImage = `url('${randomData.drinks[0].strDrinkThumb}')`;
    randomAlcoholType.innerText = randomData.drinks[0].strAlcoholic.toLowerCase();
    randomCocktailName.innerText = randomData.drinks[0].strDrink;
    randomGlassType.innerText = randomData.drinks[0].strGlass.toLowerCase();

    document.querySelector('.random-glass-icon').className = 'random-glass-icon';

    // UPDATE GLASS ICON
    if (randomData.drinks[0].strGlass.toLowerCase() === 'champagne flute') {
        document.querySelector('.random-glass-icon').classList.add('fas', 'fa-glass-cheers')
    } else if(randomData.drinks[0].strGlass.toLowerCase() === 'wine glass') {
        document.querySelector('.random-glass-icon').classList.add('fas', 'fa-wine-glass')
    } else if(randomData.drinks[0].strGlass.toLowerCase() === 'cocktail glass') {
        document.querySelector('.random-glass-icon').classList.add('fas', 'fa-cocktail')
    } else if (randomData.drinks[0].strGlass.toLowerCase() === 'coffee mug' || randomData.drinks[0].strGlass.toLowerCase() === 'irish coffee cup') {
        document.querySelector('.random-glass-icon').classList.add('fas', 'fa-coffee')
    } else{
        document.querySelector('.random-glass-icon').classList.add('fas', 'fa-glass-whiskey')
    };

    console.log(randomData.drinks[0].strGlass.toLowerCase());
}
magicMe();

const displayRandom = () => {
    document.querySelector('.random-section').classList.toggle('display');    
}
document.querySelector('#magic').addEventListener('click', displayRandom);

document.querySelector('.random-button').addEventListener('click', magicMe);


// 2. FLIPPING SKILL CARDS
function flipRandom() {
    console.log(this);
    this.classList.toggle('flip');
}
document.querySelector('.random-cards-container').addEventListener('click', flipRandom);







// https://www.thecocktaildb.com/images/media/drink/qxvypq1468924331.jpg



// Search by ingredient
// www.thecocktaildb.com/api/json/v1/1/filter.php?i=Gin

// Filter by Glass
// www.thecocktaildb.com/api/json/v1/1/filter.php?g=Cocktail_glass

// Search cocktail by name
// www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita

// Lookup a random cocktail
// www.thecocktaildb.com/api/json/v1/1/random.php