// typeof operator --give datatype of any variable

// Type casting -- change dataType of any variables 
// ans = String(x) or Number(y);

let age = 22;
let firstName = "Soham";

console.log(typeof age); //Number
console.log(typeof firstName); //String

// Convert number to string :
console.log(typeof (age + ""));

// Convert string to number :
let myStr = +"34"; //add + sign before the string
console.log(typeof myStr);

let years = 18;
years = String(age);
console.log(typeof years);