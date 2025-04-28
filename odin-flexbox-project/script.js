console.log("Hello, World!");
let name = "Ohm";
let goal = "Learning Javascript for Fullstack Development.";
console.log(name);
console.log(goal);
console.log(23+97);
console.log(1+2+3+4+5+6);
console.log((4+6+9) /77);
let a = 10;
console.log(a);
a = 25;
console.log(a);
let b = 7 * a;
console.log(b);
const max = 57;
const actual = max - 13;
const percentage = actual / max;
console.log(percentage);
let hex = 0xFF;
console.log(hex);
function add7(num){
    return num + 7;
}
console.log(add7(8));
function multiply(num1, num2){
    return num1 * num2;
}
console.log(multiply(3,4));
function capitalize1st(word){
    return word[0].toUpperCase() + word.slice(1).toLowerCase();
}
console.log(capitalize1st("nugget"));
console.log(capitalize1st("mOnKeY"));
console.log(capitalize1st("CHICKEN"));
function lastLetter(phrase){
    return phrase.charAt(phrase.length - 1);
}
console.log(lastLetter("mongolian barbecue is so good"));

let answer = parseInt(prompt("Please enter the number you would like to FizzBuzz up to: "));

for (let i = 1; i <= answer; i++){
    if (i % 5 === 0 && i % 3 === 0){
        console.log("FizzBuzz");
    } else if (i % 5 === 0){
        console.log("Buzz");
    } else if (i % 3 === 0){
        console.log("Fizz");
    } else {
        console.log(i);
    }
        
}