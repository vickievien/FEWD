// Try making the traffic light work - Think through the problem BEFORE you code!
// You'll use addEventListener and getElementById if you're doing it right...

let stopButton = document.querySelector("#stopButton");
let slowButton = document.querySelector("#slowButton");
let goButton = document.querySelector("#goButton");

// console.log(stopButton);
// console.log(slowButton);
// console.log(goButton);

function addRedLight() {
    stopLight.classList.toggle("redLightColor");
    slowLight.classList.remove("yellowLightColor");
    goLight.classList.remove("greenLightColor");
}

function addYellowLight() {
    slowLight.classList.toggle("yellowLightColor");
    stopLight.classList.remove("redLightColor");
    goLight.classList.remove("greenLightColor");
}
function addGreenLight () {
    goLight.classList.toggle("greenLightColor");
    stopLight.classList.remove("redLightColor");
    slowLight.classList.remove("yellowLightColor");
}

stopButton.addEventListener("click", addRedLight);
slowButton.addEventListener("click", addYellowLight);
goButton.addEventListener("click", addGreenLight);



    // && function {
    // slowLight.classList.remove("yellowLightColor")
    // }
    // && function {    
    // goLight.classList.remove("greenLightColor");
    // }
