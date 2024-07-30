// Arrow Functions :
//      The arrow function is one of the features introduced in the ES6 version of JavaScript. 
//      It allows you to create function in a cleaner way compared to regular function.


// () => expression

// (parameter1, parameter2) => expression

// () => {
//     statements
// }

// (parameter1, parameter2) => {
//     statements
// }


// function greet() {
//     console.log("Hello World");
// }
// greet();

// Converting this function into arrow function -

const greet = () => {
    console.log("Hello World");
};
greet();


const hello = (count) => {
    for(let i=0; i<count; i++){
        console.log("Hello");
    }
};
hello(3);


const square = (num) => num * num;
console.log(square(3));