//  rules for naming variables 

// 1) you cannot start with number 

// 1value = "Soham";  (invalid)
// value1 = "Soham";  (valid)

var value1 = 2;
console.log(value1 + 3);

// 2) you can use only undersore _ or dollar $ symbol 

// first_name (valid)
// _firstname (valid)

// first$name (valid)
// $firstname (valid)

var sport1_name = "football";
console.log(sport1_name);

var sport2$name = "cricket";
console.log(sport2$name);

// 3) you cannot use spaces 
// var first_name = "soham"; // snake case writing 
// var firstName = "soham"; // camel case writing 
// first name (invalid)

// convention 
// start with small letter and use camelCase 
//Eg - myNameIsSoham
//     firstName
//     sohamAgawane