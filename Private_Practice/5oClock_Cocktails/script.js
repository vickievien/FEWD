console.log('hello');
// let searchCocktailName = ;
// let filterGlassType = ;
// let filterIngredient = ;
// let searchRandom = ;
// const inputValue = document.querySelector('#input').value;
// const inputValue = 'random.php'

// async function cocktailRun() {
    
//     let randomUrl = `https://thecocktaildb.com/api/json/v1/1/random.php`
    
    
//     const randomResponse = await fetch(randomUrl);
//     const randomData = await randomResponse.json();
//     console.log(randomData);
//     console.log(randomData.drinks[0].strDrinkThumb);


//     let downUrl = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=16991`
    
    
//     // const downResponse = await fetch(downUrl);
//     // const downData = await downResponse.json();
//     // console.log(downData);
//     // console.log(downData.drinks[0].strDrinkThumb);

//     // document.querySelector('.welcome').style.backgroundImage = `url('${downData.drinks[0].strDrinkThumb}')`
//     // document.querySelector('.welcome').style.backgroundSize = "cover";


    

//     // let url = `https://thecocktaildb.com/api/json/v1/1/${inputValue}`

//     // let url = `https://thecocktaildb.com/api/json/v1/1/lookup.php?i=11007`
    
//     // array.forEach(element => {
        
//     // });
//     // const div = document.createElement('div');
//     // div.classList.add('div');
//     // document.querySelector('body').appendChild(div);

//     // const img
// }

// cocktailRun();

// GLASSTYPE FUNCTION


// RANDOM CARD SECTION
const magicMe = async() => {


    document.querySelector('.random-section').classList.toggle('display');    

    let randomUrl = `https://thecocktaildb.com/api/json/v1/1/random.php`;
    const randomResponse = await fetch(randomUrl);
    const randomData = await randomResponse.json();
    console.log(randomData);

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
document.querySelector('#magic').addEventListener('click', magicMe);


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