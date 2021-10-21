



// Create a function that determines the computer choice.  It should return one of the three values: 'rock', 'paper', or 'scissors'
function computerChoice() {
    let choice = Math.floor(Math.random() * 3);

    if (choice === 1) {
        return 'rock';
    } else if (choice === 2) {
        return 'paper';
    } else {
        return 'scissor';
    }
};


/* Create a function that compares the user's selection to the computer's selection.  It should then output the opponent's choice to #computerSelection and display who is the winner.

 */
function compare(me, opponent) {
    document.querySelector('#computerSelection').innerText=opponent;
    if (me === opponent) {
        return 'This is a tie.';
    } else if (me === 'rock' && opponent === 'paper') {
        return 'The computer won.';
    }else if (me === 'rock' && opponent === 'scissor') {
        return 'You win.';
    }else if (me === 'paper' && opponent === 'rock') {
        return 'You win.';
    }else if (me === 'paper' && opponent === 'scissor') {
        return 'The computer won.';
    }else if (me === 'scissor' && opponent === 'rock') {
        return 'The computer won.';
        } else {
            return 'You win';
        }
};



// jQuery( document ).ready(function() {

    // Bind a click event onto each of the three buttons.  It should run the compare function and then put the result to the #decsision id in the html


    document.querySelector('#scissors').addEventListener('click', function() {
        let tijeras = compare('scissor', computerChoice());
        document.querySelector('#decision').innerText=tijeras;
    });

    document.querySelector('#paper').addEventListener('click', function() {
        let papel = compare('paper', computerChoice());
        document.querySelector('#decision').innerText=papel;
    });

    document.querySelector('#rock').addEventListener('click', function() {
        let roca = compare('rock', computerChoice());
        document.querySelector('#decision').innerText=roca;
    });
