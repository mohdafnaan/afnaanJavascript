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
for(let i = 1; i<=3; i++){
    console.log(`outer loop`,i);

    for(let j = 1; j<=3; j++){
        console.log(`  Inner loop`,j);
    }
}   


for(let i = 1; i <= 5 ; i++){
    let row = "";
    console.log(row);
    for(let j = 1; j<= i; j++){
        row += "* ";
        console.log(row);
    }
}