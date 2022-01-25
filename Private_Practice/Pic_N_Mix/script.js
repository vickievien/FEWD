// CLICK TO NEXT STEPS

function nextSection(e) {
    e.preventDefault();
    // console.log('Hello');

    document.querySelector('.title-page').classList.remove('display');
    document.querySelector('.pick-candy-section').classList.add('display');
};
    
document.querySelector('.title-page-btn').addEventListener('click', nextSection);

// CLICK TO INCREASE/DECREASE WEIGHT

// ROUND 3 - WEB STEPS: MIDWAY ONLY

// let plusMinusWidgets = document.querySelectorAll('.counter-wrap');
// let resultEl = document.querySelectorAll('.resultSet');

// for (let i=0; i<plusMinusWidgets.length; i++) {
//     plusMinusWidgets[i].querySelector('.minus').addEventListener('click', clickMeChange);
//     plusMinusWidgets[i].querySelector('.plus').addEventListener('click', clickMeChange);
//     plusMinusWidgets[i].querySelector('.candy-weight').addEventListener('change', changeMeWeight);
//     console.log('loop is listening')
// };

// let weightEl = document.querySelector('.candy-weight');

// function clickMeChange(e) {
//     if (e.target.className.match('.minus')) {
//         weightEl.value = Number(weightEl.value) - 0.5;
//         console.log(weightEl.value);
//     } else if (e.target.className.match('.plus')) {
//         weightEl.value = Number(weightEl.value) + 0.5;
//         console.log(weightEl.value);
//     }
//     triggerEvent(weightEl, "change");
// };

// function changeMeWeight(e) {
//     resultEl.value = 0;

//     for (let i=0; i<plusMinusWidgets.length; i++) {
//         resultEl.value = Number(result.value) + Number(plusMinusWidgets[i].querySelector('.candy-weight').value)
//     };
// };

// function triggerEvent(el, type){
//     if ('createEvent' in document) {
//         let e = new Event('HTMLEvents');
//         el.dispatchEvent(e);
//      } else {
//         let e = document.createEventObject();
//         e.eventType = type;
//         el.fireEvent('on'+e.eventType, e);
//      }
//  }


// ROUND 2

// function weightChange(e) {
//     let weight = 0.0;
//     if (e.target.className.match('plus')) {
//         weight += 0.5;
//         this.parentElement.querySelector('.candy-weight').innerText = `${weight}/lb`;
//         console.log('added me');
//     } else if (e.target.className.match('minus')) {
//         weight -= 0.5;
//         this.parentElement.querySelector('.candy-weight').innerText = `${weight}/lb`;
//         console.log('subtracted me');
//     }
// };

// let pluses = document.querySelectorAll('.plus');
// let minuses = document.querySelectorAll('.minus');

// pluses.forEach(n => {
//     n.addEventListener('click', weightChange);
//     // console.log('add click')
// });

// minuses.forEach(n => {
//     n.addEventListener('click', weightChange);
//     // console.log('minus click');
// });


// ROUND 1 - WORKS BUT NOT INDIVIDUAL DIV
const weightDisp = document.querySelectorAll('.candy-weight')



let weight = 0;

function weightGain() {
    weight += 0.5;
    this.parentElement.querySelector('.candy-weight').innerText = `${weight} lb`;
    console.log('click weight gain')
};

function weightLoss() {
    weight -= 0.5;
    this.parentElement.querySelector('.candy-weight').innerText = `${weight} lb`;
    console.log('click weight loss')
};

let pluses = document.querySelectorAll('.plus');
let minuses = document.querySelectorAll('.minus');

pluses.forEach(n => {
    n.addEventListener('click', weightGain);
    // console.log('add click')
});

minuses.forEach(n => {
    n.addEventListener('click', weightLoss);
    // console.log('minus click');
});



// ROUND 5
// function wrapMeUp() {
//     let weight = 0;

//     function weightGain() {
//         weight += 0.5;
//         this.parentElement.querySelector('.candy-weight').innerText = `${weight} lb`;
//         console.log('click weight gain')
//     };
    
//     function weightLoss() {
//         weight -= 0.5;
//         this.parentElement.querySelector('.candy-weight').innerText = `${weight} lb`;
//         console.log('click weight loss')
//     };
    
//     let pluses = document.querySelectorAll('.plus');
//     let minuses = document.querySelectorAll('.minus');
    
//     pluses.forEach(n => {
//         n.addEventListener('click', weightGain);
//         // console.log('add click')
//     });
    
//     minuses.forEach(n => {
//         n.addEventListener('click', weightLoss);
//         // console.log('minus click');
//     });


// };


// let plusMinusWidgets = document.querySelectorAll('.counter-wrap');

// plusMinusWidgets.forEach(n =>{
//     n.addEventListener('click', wrapMeUp);
// });
