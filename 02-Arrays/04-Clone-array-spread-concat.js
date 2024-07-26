// Clone Array :

// let array1 = ["item1","item2"];
// let array2 = array1;

// console.log(array1 === array2);  // True


// let array1 = ["item1","item2"];
// let array2 = ["item1","item2"];

// console.log(array1 === array2);  // False

let array1 = ["item1","item2"];

// let array2 = ["item1","item2"]; 


//Slice - 

// let array2 = array1.slice(0); 


//Concat -  

// let array2 = [].concat(array1);


//Spread Operator -

let array2 = [...array1];

array1.push("item3");

console.log(array1 === array2);  // False
