// Spread Operator :

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

const newArray = [...array1, ...array2];
console.log(newArray);

// spread operator in objects :
const obj1 = {
    key1: "cat",
    key2: "dog"
};
const obj2 = {
    key3: "tiger",
    key4: "lion"
};
const newObject = {...obj1, ...obj2};
console.log(newObject);

// Adding new key - 
const newObject2 = {...obj1, ...obj2, key10: "horse"};
console.log(newObject2);