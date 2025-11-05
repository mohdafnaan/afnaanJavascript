//             NUMBER METHODS

// 1. parseFloat() : they are buuil-in javaScript functions that convert strins yo numbers.

// convert to decimal number
// strings to number

console.log(parseFloat("43.5"));// 43.5
console.log(parseFloat("99.43cm23"));// 99.43
console.log(parseFloat("cm 99.43"));// NAN
console.log(parseFloat("a1b2c3"));// NAN



//2. parseInt : converts to numbers
//              we use parseInt for number systems

console.log(parseInt("1111",2));
console.log(parseInt("1010",2));
console.log(parseInt("1000",2));
console.log(parseInt("1100100",2));
console.log(parseInt("1100011",2));

console.log(parseInt ("45.433")); // output: 45... removes the floating part




//3. toFixed() : if we take a decimal number it takes the decimal numbers that we enter in the parameter

let num = 23.5434;
console.log(num.toFixed());
console.log(num.toFixed(2));
console.log(num.toFixed(3));
console.log(num.toFixed(4));



//4. toLocaleString() : it is a number method that formats a number according to a specific locale (country / language) or style like adding commas ,curreny , or percentage.

/*

syntax ==> number.toLocaleString([locales],[options])

locales --> optional string like "en-US", "hi-IN", "de-DE" , etc.
(defines language and region format)

options -> optional objects to controil formatting style.
(currency, decimals, etc)
*/

let num1 = 1234567.89

console.log(num1.toLocaleString());
// "1,234,567.89"   (based on your systems locale)

let num3 = 1234567.89;
console.log(num3.toLocaleString("en-US"));
console.log(num3.toLocaleString("hi-IN"));
console.log(num3.toLocaleString("de-DE"));



let price = 2500;
console.log(
    price.toLocaleString("en-us",{style: "currency", currency: "USd"})
);
console.log(
    price.toLocaleString("hi-IN",{style: "currency", currency : "INR"})
);
console.log(
    price.toLocaleString("ja-JP",{style:"currency",currency:"JPY"})
);
console.log(
    price.toLocaleString("ar-SA",{style:"currency",currency:"SAR"})
);
console.log(
    price.toLocaleString("ar-SA",{style:"percent"})
);