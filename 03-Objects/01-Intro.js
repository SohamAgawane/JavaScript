// Objects :
//  Objects are used when grouping multiple sets of data that belong together using labels.
//  Objects are used to store key value pairs.
//  Objects don't have index

//  object = { key : value }

// How to create objects -
const person = {name:"Soham", age:20};
console.log(person);    //{ name: 'Soham', age: 20 }


// How to access data from objects -
// 1) DOT notation
console.log(person.name);
console.log(person.age);

// 2) BRACKATE notation
console.log(person["name"]); 
console.log(person["age"]); 


// Array in object -
let boy = {
    name: "Ram",
    age: 14,
    hobbies: ["Cricket", "Football", "Tennis"]
};
console.log(boy);

console.log(boy.hobbies);


// How to add key value pair to objects -
boy.city = "Pune";
console.log(boy);

