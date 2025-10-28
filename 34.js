 // objects in js

// Non primitive ==> you can store multiple data type

// object uses key value pair
// left side is key
// right side is value
// to access value add key
//after every value add ,
//key : value
//ex:fname : "afnaan"

let person = {
    fname : "afnaan",
    phone : 9573503729,
    age : 10,
    isalive : true,
    isSleeping : null,
    health : undefined

};

// how to access object key
//1. dot notation

console.log(person.fname);
console.log(person.age);

//2. using bracket notation

console.log(person["fname"]);
console.log(person["age"]);

