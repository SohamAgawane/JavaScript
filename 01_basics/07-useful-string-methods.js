// trim() -- remove extra spaces ifthere is not any character
// toUpperCase() -- all capital letters
// toLowerCase() -- all small letters
// slice() -- take some character from string

let lastName = "    RonALdo    ";

console.log(lastName.length);

lastName = lastName.trim();
console.log(lastName);
console.log(lastName.length);


lastName = console.log(lastName.toUpperCase());
console.log(lastName);


lastName = console.log(lastName.toLowerCase());
console.log(lastName);


// start index
// end index

lastName = "Ronaldo";
let newString = lastName.slice(0,4);
console.log(newString);