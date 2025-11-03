//21. map mehtod()
//map Methods
//transforms each element and returns a new array

//return value = new array
// chainable = yes
//  changes original = yes
//common use case : creating new arrays

// ex : creates a new array with modified values and rerturns in a new array by default

// let numbers = [1,2,3,4,5];
// //forEach 
// //numbers.forEach((x)=>{
//     // console.log(x);
// // })
// console.log(numbers);//12345
// let final = numbers.map((x)=>x *2);
// console.log(final);

//22. filter method
// a filter()method creates a new array filled with elements that pass a test (a condition you define in a function).
// it does not change the original array.

// let arr = [1,2,3,4,5,6,7,8,9,10]
// let check = arr.filter((x)=>x>5)
// console.log(check);

// let arr1 = [10,20,30,40,50];
// let check1 = arr1.filter((x)=>x>30);
// console.log(check1);

// let classroom = [
//     {
//         fullname : "saboor",
//         age : 81,
//         collage : "MJ"

//     },
//     {
//         fullname : "Ibrahim",
//         age : 21,
//         collage : "lrds"
//     },
//     {
//         fullname : "kaif",
//         age : 40,
//         collage : "drop"
//     },
//     {
//         fullname : "malik",
//         age : 21,
//         collage : "drop"

//     }
// ]

// let output1 = classroom.filter((x) => x.age> 1);
// console.log(output1);


// 23. slice method
// the slice() method is  used to copy or extract a portion of an aray(or string) without changing the orignal value.

let arr = [10,20,30,40];
//          0  1  2  3 
//          1  2  3  4

let output = arr.slice(1,3);//(i,l)
console.log(output);


//24. some() method
// the some() method checks if atleast one element in an array passes a test (condition)
// it returns : 
// true -> if any element passes the condition
//false -> if none do.


let arr1 = [2,4,6,8,11];
let output1 = arr1.every((x)=> x%2 == 0);// false
let output2 = arr1.some((x)=> x%2 == 0)// true
console.log(output1);
console.log(output2);



// 25.reduce()method
/* 
the reduce method runs a function on each element of an array to reduce it to a single value(like sum, product, or combined result)
*/

// reduce methods has three parameters by default 
// 1. accumulator => stores the previous step 
// 2. currentValue => current array element
// 3. initialValue => starting value

let numbers = [10,20,30,40,50];
let total = numbers.reduce((acc, cur)=> {
    return acc + cur;
},0);
console.log(total);
let total1 = numbers.reduce((acc,cur)=> {
    return acc*cur
},1);
console.log(total1);

let str = ["H","E","L","L","O"];
let total2 = str.reduce((acc,cur)=>{
    return acc+cur;

})
console.log(total2);

// mutating vs non-mutating
//mutating-----change the orignal value
//1.push\
//2.pop
//3. shift
//4. unshift
//5. splice
//6. sort
//7. reverse
// 8. foreach (with forcefully)

// non mutating ----do not change the orignal value
//1.map
//2.filter
//3.slice
//4.concat
//5.reduce

// console.time("time");
// let num = [1,2,3,4,5,6,7,8,9,10];
// num.forEach((x)=>x*2);
// // num.map((x)=>x);
// console.timeEnd("time")


// console.time("time");
// let num = [1,2,3,4,5,6,7,8,9,10];
// num.forEach((x)=>x*2);
// num.map((x)=>x);
// console.timeEnd("time");



// console.time("time")
// for(i = 1;i<=1000;i++){
//     console.log(`2 x${i} = ${i*2}`);
// }
// console.timeEnd("time")

// //forEach
// console.time("time")
// const numbers2 = [1,2,3,4,5,6,7,8,9,10];
// numbers.forEach((x)=>{
//     console.log(`5 x ${x} = ${5 * x}`);
// })
// console.timeEnd("time")

// //map method]
// console.time("time")
// const numbers1 = [1,2,3,4,5,6,7,8,9,10];
// numbers.map((x)=>{
//     console.log(`5 x ${x} = ${5 * x}`);
// })
// console.timeEnd("time")


// const numbers = Array.from({length: 1000}, (_,i)=> i+1)


//             NESTED LOOPS
// for(let i = 1; i<=3; i++){
//     console.log(`outer loop`,i);

//     for(let j = 1; j<=3; j++){
//         console.log(`  Inner loop`,j);
//     }
// }   


// for(let i = 1; i <= 5 ; i++){
//     let row = "";
//     console.log(row);
//     for(let j = 1; j<= i; j++){
//         row += "* ";
//         console.log(row);
//     }
// }