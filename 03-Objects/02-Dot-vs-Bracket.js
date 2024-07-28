// Difference betweeen dot and bracket notation -

const key = "email";

let person = {
    name: "Ram",
    age: 14,
    gender: "male",
    "person hobbies": ["Cricket", "Football", "Tennis"]
};

// Note :  console.log(person.person hobbies); -->we cannot write like this bcz it is ERROR. You should always write it inside inverted commas (" ") if you want to add space between them.

console.log(person["person hobbies"]);

// Note : In such cased use Bracket Notation.

person.key = "xyz@gmail.com"
console.log(person);