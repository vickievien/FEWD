// Toggle the navigation
let nav = document.querySelectorAll('.trulia-nav-mobilehide');
console.log(nav);

function openSesame() {
  nav.forEach(n => {
    console.log(n);
    n.classList.toggle('trulia-nav-mobilehide-show');
  })  
}

let burger = document.querySelector('.trulia-nav-toggle');
burger.addEventListener('click', openSesame);



//Toggle featured card

let truliaCards = document.querySelectorAll(".trulia-grid-item");
console.log(truliaCards);

document.addEventListener('DOMContentLoaded', function(event) {

  function toggleFeatured () {
    for (let q = 0; q < truliaCards.length; q++) {
      truliaCards[q].classList.remove('trulia-featured-grid-item');
    }
    this.classList.add('trulia-featured-grid-item');
  }
  
  for (let i=0; i < truliaCards.length; i++) {
    truliaCards[i].addEventListener('click', toggleFeatured);
  }

  });  



