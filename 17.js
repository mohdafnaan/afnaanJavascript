//type of conversion
// changing data type from one type to another.

// Ex : let a = "10" ==>
// convert 10 of string to 10 of number

// there are 2 types of conversions in js
//1. Implicit Conversion  
//2. Explict conversion

//1. Implict conversion : ==> Automatic conversions

//1. anything thing to string

// let result = 2 + ""
// console.log(result)

// let a = 2 + "1"
// console.log(a);

// let b = "2" + "4"
// console.log(b);

// let d = undefined + "3"
// console.log(d);

// let g = true + "afnaan"
// console.log(g);

// Anything to number ( use only - , / , *)

// let a; 
// a = "5" - "3";
// console.log(a);
// a = "5" * 3;
// console.log(a);
// a = 10 / "2";
// console.log(a);
// a = 2 - "hi"
// console.log(a); // Not a number


// any data type tp boolean
// false = 0
// true = 1

let a1 = "5" - false;
let a2 = 2 + true;
let a3 = "0"+ false;
console.log(a3); 
console.log(a2);
console.log(a1);


//null to number
// null = 0

let b1 = 4 + null;
console.log(b1,typeof b1);


// undefined to null

let c1 = undefined * 5;
let c2 = 3 + undefined;
let c3 = "4" + undefined;

console.log(c1,c2,c3);



// let num = 6;

// console.log(num, typeof num);

// let num = "123"

// console.log(num, typeof num);

// let num =Number("123")

// console.log(num, typeof num);


