//         STRING METHODS

// 1. charAt();

let str1 = "hello";
//          01234
console.log(str1.charAt(1));


//2. concat()
let a1 = "hello";
let b1 = "world";

console.log(a1.concat(b1));



//3. includes

let c1 = "hello I am CFI student";
console.log(c1.includes("CFI"));


//4. length

let d1 = "hello I am CFI student";
console.log(d1 . length);



//5. indexOf()

let e1 = "i am afnaan";
// index  012345678910
console.log(e1.indexOf("a"));



//6.lastindexOf

let f1 = "i am ironman"
console.log(f1.indexOf("a"));


//7. repeat() method

let g1 = "i am CFI\n"
console.log(g1.repeat(30));



//8. replace() method

let h1 = "Hello World";
console.log(h1.replace("World","CFI"));



//9. split method

let i1 = "hello'I'am'afnaan"
console.log(i1.split("'"));



//10. touppercase() method

let j1 = "hello cfi students"
console.log(j1.toUpperCase());



// 11. tolowercase() method

let k1 = "HELLO CFI STUDENTS"
console.log(k1.toLowerCase());



//12. trim() method

let l1 = " hello I am CFI   "
console.log(l1.trim());




//13. slice() method

let m1 = "hello";
//index   01234
//lgth    12345
// console.log(m1.slice(index , length));
console.log(m1.slice(0,2));



// 14. padStart() method | padEnd() method

let n1 = "hello"
console.log(n1.padStart(10, "*"));
console.log(n1.padEnd(15, "*"));


