/*
javaSCript Es6 (also known as ECMAscript 2015 or ECMAscript) is the sixth edition of Javascript intriduced innjune 2015.

ECMAscript (european computer manufactures association script) is the standard specification of javascript to ensure compatibility in all browsers and environment

this tutorial provides a sumarry of commonly used features and syntax of Es6.
*/


// 1. let and const

// 2.  Arrow functions

// 3. template literals

// 4. defaut parameters

function sayHEllo(name = "guest", age  = 0){
    console.log(`my name is ${name} and my age is ${age}`);
}
sayHEllo();


//5. destructing assignment.

let person = {
    Fname : "afnaan",
    age : 10,
    isAlive : true,
    isSleeping : null
};

let{Fname, age, isAlive, isSleeping}= person;
console.log(Fname, age, isAlive, isSLeeping);

let person1 = ["afnaan", 20 , true , null,undefined];

let [a,b,c,d] = person;
console.log(a);
console.log(b);
console.log(c);