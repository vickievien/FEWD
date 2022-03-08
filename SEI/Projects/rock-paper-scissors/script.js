let mePick;
let compPick;
let choice = ['rock', 'paper', 'scissors']


console.log(compPick);


function myChoice() {
    mePick = this.getAttribute('class');
    console.log(mePick);
    
    compPick = choice[Math.floor(Math.random() * choice.length)];
    console.log(compPick);

    let addP = document.createElement('p');
    addP.innerText = `You chose ${mePick}. The computer chose ${compPick}.`
    document.querySelector('body').appendChild(addP);

    let resultP = document.createElement('p');
    document.querySelector('body').appendChild(resultP);

    if (mePick === 'rock') {
        if (compPick === 'paper') {
            resultP.innerText = "Computer wins."
        } else if (compPick === 'scissors') {
            resultP.innerText = "You win!"
        } else {
            resultP.innerText = "It's a tie."
        }
    } else if (mePick === 'paper') {
        if (compPick === "rock") {
            resultP.innerText = "You win!"
        } else if (compPick === 'scissors') {
            resultP.innerText = "Computer wins."
        } else {
            resultP.innerText = "It's a tie."
        }
    } else if (mePick === 'scissors') {
        if (compPick === 'rock') {
            resultP.innerText = "Computer wins."
        } else if (compPick === 'paper') {
            resultP.innerText = "You win!"
        } else {
            resultP.innerText = "It's a tie."
        }
    }










}

const buttons = document.querySelectorAll('button');

buttons.forEach(n => {
    n.addEventListener('click', myChoice);
});




//COMPARE THE CHOICES - WIN OR TIE

//TELL WHAT HAPPENED