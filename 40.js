// how to calculate time in codes

console.time("start");
let num = [1,2,3,4,5];

num.forEach((x)=> {
    console.log(x);
})
console.timeEnd("start")