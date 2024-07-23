//undefined : variable created but value is not assigned
let firstName;
console.log(typeof firstName);

firstName = "Soham";
console.log(typeof firstName);

//null :
let myVariable = null;
console.log(typeof myVariable); //typeof null === 'object';

//BigInt :
let myNumber = BigInt(12);
let safeMyNumber = 123n;
console.log(myNumber + safeMyNumber);

//console.log(Number.MAX_SAFE_INTEGER); //How many integers you can store in javascript