// Object inside Array :

const users = [
    {user_id : 1 ,firstName : "John",gender:"male"},
    {user_id : 2 ,firstName : "Mike",gender:"male"},
    {user_id : 3 ,firstName : "Paul",gender:"male"}
];

for(let value of users) {

    console.log(value);

    console.log(value.user_id);

    console.log(value.firstName);
}