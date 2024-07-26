// Push, Pop, Shift & Unshift :

//Push-- add new item in the end

//Pop -- remove last element + return removed element

let fruit = ["apple","mango","banana"];
console.log(fruit);

//push 
fruit.push("grapes");
console.log(fruit);

//pop
let poppedFruit = fruit.pop();
console.log(fruit);
console.log(poppedFruit); // returns removed element


//Unshift -- add element in the starting

//shift -- remove staring element + return removed element

let city = ["Mumbai","Pune","Delhi"];
console.log(city);

//Unshift
city.unshift("Baramati");
city.unshift("Kolhapur");
console.log(city);

//shift
city.shift();
console.log(city);