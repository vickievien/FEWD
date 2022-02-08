console.log('I work in terminal');


// SECTION 1

// Concatenation uses '+' to connect different strings and variables together, while string interpolation or template literals uses back ticks with ${} to string it together. See example below:

const firstName = 'Vickie';
let favColor = 'pink';
let favFood = 'pasta';

// let concat = firstName + ' loves ' + favColor + ' and ' favFood;
console.log('My name is ' + firstName + ' and I love ' + favColor + ' and ' + favFood);
console.log(`My name is ${firstName} and I love ${favColor} and ${favFood}`);

// DRY stands for 'Don't Repeat Yourself' - it's prone to errors and takes up extra time when there are different loops to help iterate over the same thing.

// They're all used to store variables. Var is dated. Let allows you to change what the stored value will be. Const, like 'constant' will not be changed. For example, your name most likely wouldn't change so you would const myName = 'Vickie'.

// SECTION 2
const a = 4
const b = 53
const c = 57
const d = 16
const e = 'Kelvin'
const f = false

console.log(a < b);
console.log(c > d);
console.log('Name' === 'Name');
console.log(a < b < c);
console.log(a === a != d);
console.log(e != 'Kevin');
console.log(48 == '48');
console.log(f != e);

let g = 0;
console.log(g);

g = b + c;
console.log(g);

// for g, I used let, so that it could be re-defined from 0 to 'b+c'.
// I assume you'll receive an error without the word 'const/let/var' to create a variable.
// 10 = g returns: SyntaxError: Invalid left-hand side in assignment

// SECTION 3
// The code is an infinite loop. There isn't anything within the loop to tell it to stop. Essentially, it will ALWAYS be "true". Usually afte the console.log line, there should be code that tells it when to exit the loop - in this case it should return "false" so that it exits.

// The second loop is not an infinite loop because I don't think you can change runProgram = false since it's a const. I'm thinking if it was 'let' in the first place, then it would continue looping, changing from true to false.

let letters = 'A'
let i = 0

// Create a loop that will run as long as i is less than 20
while (i < 20) {
    // Add 'A' to the variable letters for each loop;
    letters += 'A'
    // Since i starts at 0, increase i by 1 each time
    i++
    // Repeat code until i is no longer less than 20
}

// Expected Code: A(20x) as a string.
console.log(letters);
// I initially had 21x, but then thought I counted the A's incorrectly, but I was right originally: 0-19 is 20x plus the A already in 'letters' (20 + 1)

// SECTION 4
// Mostly you use for loops when you know how many times to iterate over, while 'while' loops are used when there isn't a given # of times of when to loop over. They both iterate and loop.

//The first part 'let i=0' is what you start at.
// The second is stating repeat this code until this part no longer evaluates to true (so it'll go from 0 to 99 which is looping 100x).
// After each loop, increase i by 1.

for (let i=0; i < 1000; i++) {
    // console.log(i);
};

// \ is used to for parenthesis when writing string, in order to tell the computer/program that the " ' " is a parenthesis, not to end the string.

for (let i = 999; i>-1; i--) {
    // console.log(i);
}

for (let i =1; i<11; i++) {
    console.log(`The value of i is: ${i} of 10`);
}

// SECTION 5 IS IN terminal_homework.bash file