// Functions :
//   A function is a block of code that performs a specific task. Dividing a complex problem into smaller chunks makes your program easy to understand and reusable.

function name(parameter1, parameter2, parameter3) {
    // code to be executed
    return something
}

// Sum of two number -
function sum(a, b) {
    const sum = a + b;
    console.log("Sum of two numbers",a, "&", b, "is", sum);
    return sum;
}

sum(2, 4);
sum(4, 5);

function sumTwoNumbers(number1, number2) {
    let number3 = number1 + number2;
    console.log(number3);
    return number3;
}
sumTwoNumbers(2, 4);


// input - String
// output - firstCharacter
function firstCharacter(String) {
    return String[0];
}
console.log(firstCharacter("Soham"));


// input - array, target (number)
// output - index of target if target present in array
function findTarget(array, target) {
    for(let i=0; i<array.length; i++){
        if(array[i]===target){
            return i;
        }
    }
    reuturn -1;
}
const myArray = [1,3,8,9]
const ans = findTarget(myArray, 8);
console.log(ans);
