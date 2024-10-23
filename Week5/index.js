//console.log("hello world")
//alert('Hello, World');
//window.document.write('<p>Welcome to CSEN 60</p>');
// document.append('<p>This should come after h1</p>');

//TODO: fix this function

// /**
//  * @description this function add 2 numbers
//  * @param {*} a 
//  * @param {*} b 
//  * @returns  
//  */
// function add(a,b) {
//     reutrn a + b;
// }

var x = 100;
/*let x => declaration */
/*x = 2 => initialization */
if (true) {
var x = 200; // Same variable!
}
console.log(x); // Outputs: 200

let y
console.log(y);

let greeting = "Hello, world!";
let response = `The time is ${new Date()}`;
console.log(response)

const age= 12;
if (age>18) {
    console.log("you are of age");
}  else {
    console.log(`You aren't of age, please wait ${18 - age} years`)
}


let person = {
    name: "John",
    age: 30,
    isStudent: false
};

console.log(person.age);

console.log(typeof(person.age));

alert("This is an alert box!");

// Strict equality -- 1. Is this the same type? 2. Is this the same value?
console.log(3 === '3'); // false

// Loose equality 
console.log(3 == '3'); // true