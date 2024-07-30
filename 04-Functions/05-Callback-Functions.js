// Callback Functions :
//      A callback is a function passed as an argument to another function.

// // function -
// function greet(name, callback) {
//     console.log("Hi" + " " + name);
//     callback();
// }

// // callback function -
// function callMe() {
//     console.log("I am callback function");
// }

// // passing function as an argument 
// greet("Soham", callMe);


const calculate = (a, b, operation) => {
    return operation(a,b);
}

//// method 1 -

const addition = calculate(3, 4, function (num1, num2) {
    return num1 + num2;
});

console.log(addition);


//// method 2 -

const substraction = (a, b) => a - b;

const subResult = calculate(8, 3, substraction);

console.log(subResult);


//// method 3 -

function multiplication(a, b) {
    return a*b;
}

const mulResult = calculate(2, 4, multiplication);

console.log(mulResult);