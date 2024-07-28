// Computed Properties :

const key1 = "objkey1";
const key2 = "objkey2";

const value1 = "myvalue1";
const value2 = "myvalue2";

//QUE => const obj = {
//     objkey1 : "myvalue1",
//     objkey2 : "myvalue2",
// }


// method 1 -
const obj ={
    [key1] : value1,
    [key2] : value2
};

console.log(obj);  // { objkey1: 'myvalue1', objkey2: 'myvalue2' }

// method 2 - 
const obj1 = {
    [key1] : value1,
    [key2] : value2
};

console.log(obj1);  // { objkey1: 'myvalue1', objkey2: 'myvalue2' }

