// object methods 

//1. entries method
// Object.entries() in javascript is a build in method that returns an array of key value pairs from an object.

let person = {
    fname : "afnan",
    age : 20,
    isAlive : true
};

let output = Object.entries(person)
console.log(output);

let arr = [ [ 'fname', 'afnan' ], [ 'age', 20 ], [ 'isAlive', true ] ]
// index no     00       01          10    11          20       21

console.log(arr[1][1]);



//2. Object.keys
// returns an array of keys(property name) of the object 

let user = {
    fname : "afnaan",
    age :  20 ,
    city : "hyd"
}

console.log(Object.keys(user));



//3. Object.values
// returns an array of values of the object


let user1 = {
    fname : "afnaan",
    age : 20 ,
    city : "hyderabad",

}

console.log(Object.values(user1));
