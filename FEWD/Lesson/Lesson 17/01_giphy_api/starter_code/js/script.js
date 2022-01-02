
// ToDo
// When the user submits the search form, make an API request to Giphy's search endpoint
// https://api.giphy.com/v1/gifs/search?api_key="YOURAPIKEY"&q="SEARCHSTRING"
// Display the results in the #giphy-results div provided in the html
// Each new search should replace the previous search results
// CSS Bonus: Use flex or grid properties to display the results in a responsive, clean layout



const apiKey = "";

async function giphySearch(e) {
  
  // prevent the page from submitting/reloading
  e.preventDefault();
  
  // get the user input from the form
  let searchTerm = document.querySelector("input[name=search-term]").value;
  searchTerm = searchTerm.replace(/[^0-9A-Za-z ]/gi, '');
  
  // make an API call using fetch() - include your API key and the user's search term (template strings are your friend)
  // async function letsGetData() {
    const apiUrl = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${searchTerm}`;
    const retrieved = await fetch(apiUrl);
   
    // convert your response data into .json()
    const gotData = await retrieved.json();
    console.log(gotData);
  // }

  // clear out all gifs from previous searches
  const giphyResultDiv = document.querySelector("#giphy-results");
  giphyResultDiv.innerHTML = "";
  
  // use a loop to create and append each image to the dom
  for(let i=0; i<gotData.data.length; i++) {
    const newPicTag = document.createElement("img");
    newPicTag.setAttribute('src',gotData.data[i].images.fixed_width.url);
    giphyResultDiv.appendChild(newPicTag);
  }
}

// dont forget your event listener
document.querySelector("input[type=submit]").addEventListener('click', giphySearch);
