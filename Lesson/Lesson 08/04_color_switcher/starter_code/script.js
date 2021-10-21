// When the #grayButton is clicked, the color scheme of the page should change to more of a "dark mode" feel, with gray backgrounds and white text throughout.

//IF GRAYBUTTON IS CLICKED, THEN BACKGROUND TURNS DARK AND TEXT TURNS WHITE

let grayButton = document.getElementById("grayButton");
let body = document.querySelector("body");
let whiteButton = document.getElementById("whiteButton");

function darkModeAssemble() {
    body.classList.add("darkmode");
}

function removeDarkMode() {
    body.classList.remove("darkmode");
}

grayButton.addEventListener("click", darkModeAssemble);
whiteButton.addEventListener("click", removeDarkMode);


// The #whiteButton should bring things back to the "light mode" color scheme with white backgrounds and dark text
// Try to do this by setting styles (.style)
// Remember to try one step at a time, testing each stage as you go!