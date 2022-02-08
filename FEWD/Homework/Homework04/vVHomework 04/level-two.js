/*
 * DOTS: Level Two
 *
 */
let score = 0;
let arenaEl = document.querySelector('.js-arena');
let ballDisplay1 = document.querySelector('.js-arena .js-ball:first-child');
let ballDisplay2 = document.querySelector('.js-arena .js-ball:nth-child(2)');
let ballDisplay3 = document.querySelector('.js-arena .js-ball:nth-child(3)');
let scoreDisplay = document.querySelector('.js-score');

function declareWinner() {
  document.body.classList.add('game-over');
}

// function increaseScore() {
//   score += 10;
//   console.log(score);
//   if (score < 100) {
//     scoreDisplay.innerText = score;
//     } else {
//       declareWinner()
//     }
// };

// ballDisplay1.addEventListener('click', increaseScore);
// ballDisplay2.addEventListener('click', increaseScore);
// ballDisplay3.addEventListener('click', increaseScore);


// arenaEl.addEventListener('click', function(e) {
//   if (e.target.classList.contains('js-ball')) {
//       score += 10;
//       console.log(score);
//       if (score < 100) {
//         scoreDisplay.innerText = score;
//       } else {
//         declareWinner()
//       }
//     }
//   }
// );



// This code was already part of the starter code but it was confusing so I commented it out.
arenaEl.addEventListener('click', function(e) {
  console.log(e);
  if (e.target.classList.contains('js-ball') ) {
    score += 10;
    if ( score < 100 ) {
      scoreDisplay.innerText = score;
    } else {
      declareWinner();
    }
  }
});