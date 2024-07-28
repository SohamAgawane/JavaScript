// Nested Destructuring :

const users = [
    {user_id : 1 ,firstName : "John",gender:"male"},
    {user_id : 2 ,firstName : "Mike",gender:"male"},
    {user_id : 3 ,firstName : "Lara",gender:"Female"}
];

// const [user1, user2, user3] = users;
// console.log(user1);

const [{firstName: user1firstName}, , {gender}] = users;
console.log(user1firstName);
console.log(gender);