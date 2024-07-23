// and or operator :

// && -- AND (all condition hav to br TRUE) to get true
// || -- OR (among all conditions ONLY ONE CONDITION have to be TRUE) to get true

let firstName = "Soham";
let age = 20;

// if(firstName[0] === "S"){
//     console.log("Your name starts with S");
// }

// if(age > 18){
//     console.log("Your age is above 18");
// }

if(firstName[0] === "S" && age > 18){
    console.log("Name starts with H and age above 18");
}
else{
    console.log("inside else");
}


if(firstName[0] === "S" || age > 18){
    console.log("inside if");
}
else{
    console.log("inside else");
}