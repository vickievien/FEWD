

let vvBtns = document.querySelectorAll('.vv-btn');

function alertMe(e) {
    e.preventDefault();
    alert('More to come!');
};

vvBtns.forEach(n => {
    n.addEventListener('click', alertMe);
});

// let buttons = document.querySelectorAll(".vv-btn");

// for (let i=0; i<buttons.length; i++) {
// buttons[i].addEventListener("click", function() {
//   alert("Hello World!");
// });
// };