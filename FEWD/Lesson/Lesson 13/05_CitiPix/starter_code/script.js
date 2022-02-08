// When I click SELECT A CITY BOX,
//     create a drop down.
//     This drop down will append the Array.

// When I click CountQueuingStrategy,
//     the background will change to match the city.


// 1. append array to drop down list
// 2. listen for addEventListener, 'click' to Option
// 3. to add drop down list
// 4. listen for addEventListener, 'click' to individual city, and change bg
//     - add new class for each city
//     - toggle class when 'click' on 'CITY'


// const pets = ["cat", "dog", "iguana", "guinea pig", "rabbit", "hedge hog", "parakeet"]

// for (let i = 0; i < pets.length; i++) {
//   let createLi = document.createElement('li');
//   createLi.innerText = pets[i];
//   document.querySelector('#exercise-five').append(createLi);
// };


// const cities = ['New York City', 'San Francisco', 'Los Angeles', 'Austin', 'Sydney']

// for (let i=0; i<cities.length; i++) {
//     let addOpt = document.createElement('option');
//     addOpt.innerText = cities[i];
//     document.querySelector('#city-type').appendChild(addOpt);
//     addOpt.value = cities[i].toLowerCase();
// }

// function changeCityPic() {
//     let selectedCity = document.querySelector('#city-type').value;

//     if (selectedCity === 'new york city') {
//         document.body.setAttribute('class', 'nyc');
//     } else if (selectedCity === 'san francisco') {
//         document.body.setAttribute('class', 'sf');
//     } else if (selectedCity === 'los angeles') {
//         document.body.setAttribute('class', 'la');
//     } else if (selectedCity === 'austin') {
//         document.body.setAttribute('class', 'austin');
//     } else if (selectedCity === 'sydney') {
//         document.body.setAttribute('class', 'sydney');
//     }
// }

// document.querySelector('#city-type').addEventListener('change', changeCityPic);




const cities = ['New York City', 'San Francisco', 'Los Angeles', 'Austin', 'Sydney']

const citiesClass = ['nyc', 'sf', 'la', 'austin', 'sydney']

for (let i=0; i<cities.length; i++) {
    let addOpt = document.createElement('option');
    addOpt.innerText = cities[i];
    document.querySelector('#city-type').appendChild(addOpt);
    addOpt.value = citiesClass[i].toLowerCase();
}

function changeCityPic() {
    let selectedCity = document.querySelector('#city-type').value;

    document.body.setAttribute('class', selectedCity);
}

document.querySelector('#city-type').addEventListener('change', changeCityPic);

// // Create an array of city names
// const cityList = ["New York","San Francisco","Los Angeles","Austin","Sydney"];
// const cityClassList = ['nyc','sf','la','austin','sydney'];

// const combinedCityList = [
//     ["New York","nyc"],
//     ["San Francisco","sf"],
//     ["Los Angeles","la"],
//     ["Austin","austin"],
//     ["Sydney","sydney"]
// ]

// // Create a function that changes the background of the page
// function changeDaikon(){
//     let selectedCity = document.querySelector("#city-type").value;

//         document.body.setAttribute('class',selectedCity);

// }


// document.addEventListener('DOMContentLoaded', function(event) {

//     // For each city name
//     for(let i=0; i<cityList.length; i++){
//         // Add an option for that city

//             // Create option element
//             let newOption = document.createElement('option');

//             // Add the option text
//             newOption.innerText = combinedCityList[i][0];

//             // Add the value to the option
//             newOption.value = combinedCityList[i][1].toLowerCase();


//             // Add option to select
//             document.querySelector("#city-type").append(newOption);

//     }
    

//     // Add a change event to the select
//     document.querySelector("#city-type").addEventListener('change',changeDaikon);

// });