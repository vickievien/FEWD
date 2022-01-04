let meCho = {
    cur: null
  };

  let compCho = {
    cur: null
  };
  
const options = ['rock', 'paper', 'scissor'];

const solution = document.createElement('p');
document.querySelector('body').appendChild(solution);

function compareChoices(e) {
    e.preventDefault();
    
    meCho.cur = this.innerText.toLowerCase();
    console.log(meCho.cur);
    
    compCho.cur = options[Math.floor(Math.random() * 3)];
    console.log(compCho.cur);
    
    
    if (meCho.cur === compCho.cur) {
        solution.innerHTML = `I chose ${meCho.cur} and computer chose ${compCho.cur}. It is a tie. Let us play again!`;
        } else if (meCho.cur === options[0]) {
            if (compCho.cur === options[1]) {
                solution.innerHTML = `I chose ${meCho.cur} and computer chose ${compCho.cur}. Computer wins.`;
            } else {
                solution.innerHTML = `I chose ${meCho.cur} and computer chose ${compCho.cur}. I win!`;
            }
        } else if (meCho.cur === options[1]) {
            if (compCho.cur === options[0]) {
                solution.innerHTML = `I chose ${meCho.cur} and computer chose ${compCho.cur}. I win!`;
            } else {
                solution.innerHTML = `I chose ${meCho.cur} and computer chose ${compCho.cur}. Computer wins.`;
            }
        } else if (meCho.cur === options[2]) {
            if (compCho.cur === options[0]) {
                solution.innerHTML = `I chose ${meCho.cur} and computer chose ${compCho.cur}. Computer wins.`;
            } else {
                solution.innerHTML = `I chose ${meCho.cur} and computer chose ${compCho.cur}. I win!`;
        }
    }

}


let buttons = document.querySelectorAll('.button');

buttons.forEach(n => {
    n.addEventListener('click', compareChoices)
});






    // const meText = document.createElement('p');
    // meText.innerHTML = meCho.cur = options[ran()];
    // document.querySelector('body').appendChild(meText);

    // const compText = document.createElement('p');
    // compText.innerHTML = compCho.cur = options[ran()];
    // document.querySelector('body').appendChild(compText);