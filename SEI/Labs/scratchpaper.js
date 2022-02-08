let color;

if(color === "green") {
    console.log('Go')
}else if (color === "yellow") {
    console.log('Slow')
} else if (color === "red") {
    console.log('Stop')
} else {
    console.log('Whatever')
};

console.log('I work');

for (let i=0; i<15; i++) {
    // console.log('hi');
};

for (let i=0; i<30; i++) {
    // console.log('YEP!');
};

let some_num = Math.floor(Math.random()*100);
console.log(some_num);

for (let i=0; i<10; i++) {
    if(some_num < 10) {
        // console.log("That's a small number");
    } else if (some_num > 20) {
        // console.log("That's a big number");
    } else {
        // console.log("That's a medium-sized number");
    }
};

// PEANUT BUTTER JELLY TIME
// Go to store.
// Buy bread, pb, jelly. 
// Go home.
// Grab plate.
// Get bread.
// Open bread bag.
// Take two slices out.
// Put on plate, side by side.
// Do following twice: one for each jar (pb and jelly)
// - Open jar
// - Get knife
// - Use knife to get (pb/jelly)
// - Spread
// Put bread slices together, jelly and pb side towards each other
// Cut diagonal slices
// Serve.


// B&L PART 2
// if weekday, console.log give me weekend
// if weekend, console.log I like weekend
let fave_day = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

for (let i=0; i<fave_day.length; i++) {
    if(i===0 || i===6) {
        console.log(`Today is ${fave_day[i]}. I like the weekend.`)        
    } else {
        console.log(`Today is ${fave_day[i]}. Give me a good 'ol weekday.`)
    }
}