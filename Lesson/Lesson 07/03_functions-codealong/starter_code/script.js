// Let's create 4 functions!

// 1. Square of a number

// Create a function called `squared` that takes one argument
// The function will return the argument times itself (the square of the number)


function squared(a){
    return a * a;
}

console.log(squared(2));
console.log(squared(5));
console.log(squared(-3));

console.log("2 squared is equal to " + squared(2));

// BONUS: Check if the argument is a number first! (Hint: conditionals - if statements)

// 2. Get string length!

// Create a function called `stringLength` that returns the length of a string (how many characters?)
// So: stringLength("hello") would return 5

function stringLength(measureMe){
    let myLength = measureMe.length;
    return myLength;
}

console.log(stringLength("testing"))
console.log(stringLength("This is a longer string."))


// 3. Add two numbers together

// Create a function called addNumbers
// Takes two arguments and returns the sum of those arguments

function addNumbers (a,b){
    return a + b;
}

console.log(addNumbers(4, 2));
console.log(addNumbers(6, 3));


// 4. Create a function called sayHello
// Takes one argument
// Returns a string that is the combination of "Hello, " + the argument passed into the function
// So sayHello("Paul") would return "Hello, Paul";

function bestFriend(x) {
    return x + ", will you be my best friend?";
}

console.log(bestFriend("Vickie"));

// function sayHello(name) {
//     return "Hello, " + name;
// }

// console.log(sayHello("Vickie"));

// function sayHello(victim){
//     return "Hello, " + victim;
// }

// console.log(sayHello("Paul"));


function calcSales(unitA, unitB, unitC) {
    return unitA * 2 + unitB * 3 + unitC * 4;
}

console.log(calcSales(1, 2, 3));



// let x = "Vickie is here to stay";
// function countSpace(x) {
//     return countSpace;
// }

// console.log(countSpace(x));
