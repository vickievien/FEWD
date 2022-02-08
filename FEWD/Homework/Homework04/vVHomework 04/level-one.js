/*
 * DOTS: Level One
 *
 */
let score = 0;
let ballDisplay = document.querySelector('.js-ball');
let scoreDisplay = document.querySelector('.js-score');


function declareWinner() {
  document.body.classList.add('game-over');
}

function addPoints() {
  score += 10;
  console.log(score);
  if (score < 100) {
    scoreDisplay.textContent = score;
  } else {
    declareWinner()
  }
}

ballDisplay.addEventListener("click", addPoints);

