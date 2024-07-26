//Primitive vs reference data types

//Primitve - saved in stack
//example - number,string,boolean,null,undefined,symbols

// let num1 = 7;
// let num2 = num1;

// console.log("value of num1 is", num1); //7
// console.log("value of num2 is", num2); //7

// num1++;

// console.log("after incrementing in num1");
// console.log("value of num1 is", num1); //8
// console.log("value of num2 is", num2); //7


//Reference (array is reference type) - saved in stack + heap 
//examples - array,object,function,collection,dates

let array1 = ["item1", "item2"];
let array2 = array1;
console.log("array1", array1);  // [ 'item1', 'item2' ]
console.log("array2", array2);  // [ 'item1', 'item2' ]

array1.push("item3");

console.log("after pushing element to array1");
console.log("array1", array1);  // [ 'item1', 'item2', 'item3' ]
console.log("array2", array2);  // [ 'item1', 'item2', 'item3' ] 