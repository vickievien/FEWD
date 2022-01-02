/*
 * DOTS: Level Two
 *
 */
let score = 0;
let arenaEl = document.querySelector('.js-arena');
let scoreDisplay = document.querySelector('.js-score');

arenaEl.addEventListener('click', function() {
  if ( e.target.classList.contains('js-ball') ) {
    score += 10;
    if ( score < 100 ) {
      scoreDisplay.innerText = score;
    } else {
      declareWinner();
    }
  }
})

function declareWinner() {
  document.body.classList.add('game-over');
}
