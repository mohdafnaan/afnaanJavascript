/* 
JSON methods in javaScript

javascript provides two main global methods under the JSON objects : 

1. JSON.stringify()converts object -> JSON string

2. JSON.parse()
converts a JSON string -> javaScript object*/



let person = {
    fullname : "afnaan",
    age : 20,
    isALive: true, 
    isSleeping : null
};

console.log(person);
console.log(typeof person);

let final = JSON.stringify(person);
console.log(final);
console.log(typeof final);

let person1 = `{
    fullname : "afnaan",
    age : 20,
    isALive: true, 
    isSleeping : null
}`;
console.log(person1);
console.log(typeof person1);
let final1 = JSON.parse(final);
console.log(final1);
console.log(typeof final1);