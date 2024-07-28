// Iterate objects :

const person = {
    name: "Soham",
    age: 20,
    hobbies: ["Footabll", "Cricket", "Watching Movies"]
};

// for in loop -

for(let key in person) {
    
    console.log(key);  // name age hobbies
    
    console.log(person[key]);   // Soham 20 [ 'Footabll', 'Cricket', 'Watching Movies' ]

    // Key value pair -
    console.log(`${key} : ${person[key]}`); // name : Soham  -  age : 20  -  hobbies : Footabll,Cricket,Watching Movies

    console.log(key," : " , person[key]);  // name  :  Soham  -  age  :  20  -  hobbies  :  [ 'Footabll', 'Cricket', 'Watching Movies' ]
}


console.log(Object.keys(person));  // [ 'name', 'age', 'hobbies' ]

// for of loop -

for(let key of Object.keys(person)) {
    console.log(key);  // name - age - hobbies
}