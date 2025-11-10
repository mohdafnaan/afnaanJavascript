// math methods

/* in javaScript, the math object provides a set of built-in mathemaatical methods and constants for performing common math operations - like rounding numbers, generating random values, trigonometry, logarithms, etc

*/
// Math.abs()
let a = -5;
console.log(Math.abs(-5)); // returns the positive value of the given number

console.log(Math.abs(5)); // if positive stays positive only.


// Math.round()  :   // rounds the decimal number to the nearest whole number.
console.log(Math.round(4.7));   // rounds the decimal numbeer to 5
console.log(Math.round(4.2));   // rounds the decimal number to 4


// Math.ceil() : rounds to uppper whole number.
console.log(Math.ceil(2.9)); // rounds to 2.


// Math.floor() : rounds to nearest lower whole number.
console.log(Math.floor(2.1));// rounds to 3


//Math.trunc() : removes decimal part
console.log(Math.trunc(4.766)); //output 4


// Math.sign() : if (-1,0,+1) according to the type of integer 
console.log(Math.sign(-5,0,+5)); // output is -1,0,+1





// to print random number by using Math. formula

//1. Math.random()  : returns the random numbers only betwewen 0 to 1.

//2.Math.random() * (max-min) + min  ::: random numbers between a given max and minimum numbers

//3.Math.floor(Math.random() * (max-min) + min) :::: only gives random numbers between the max and min values excluding decimal numbers

//4. Math.floor(Math.random() * (max + 1 - min) + min)  :: includes the max values if we add "+1" in the max value..