
// ToDo
// When the user submits the search form, make an API request to open weather api's search endpoint
// https://api.openweathermap.org/data/2.5/weather?q=CITY&APPID=KEY
// Icon URL - refer to docs on how to use
// https://openweathermap.org/img/wn/####@2x.png  - replace #### with icon code
// Display the results in the #weather-results div
// Each new search should erase the previous results

const myApiKey = "8440b2bca0044da0e62368b7c1817224";

async function handleWeatherRequest(e) {
  e.preventDefault();
  console.log('hello');
  // get user input value from textbox
  let cityInput = document.querySelector('input[name=city]').value;
  cityInput = cityInput.replace(/[^0-9A-Za-z ]/gi, '');

  // build the url address with YOUR personal API key and the users input city
  const cityUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&APPID=${myApiKey}`
  
  // make an API call using fetch() and capture the response in a variable
  const retrieved = await fetch(cityUrl);

  // convert the response to a readable json format with .json()
  const gotData = await retrieved.json();
  console.log(gotData);
  // print your data to the console to see its format, dont forget to delete later
  // console.log(gotData.main.temp);
  // console.log(convertKtoC(gotData.main.temp));

  // Write a separate function to convert the temps from the default units (Kelvin) to a more readable F or C 
  function convertKtoC(kelvin) { 
    let celsius = kelvin - 273.15;
    celsius = Math.round(celsius);
    return celsius;
  }

  let mainTempC = convertKtoC(gotData.main.temp);
  
  // build the icon src
  // const iconSrc = `http://openweathermap.org/img/wn/${}@2x.png`;
  // create icon img tag
  
  // add icon url as src
  
  // clear out previous icon img
  
  // print all results to dom
  
  // append icon img to dom
  
}




// Attach an event listener to the submit button
document.querySelector('input[type=submit]').addEventListener('click', handleWeatherRequest);

