// 11. includes() method
// includes is an array method, if the element is present in the array it will print true , if not it will print false.It gives the value in the boolean value.

// let arr = ["saboor","rayyan" , "kaif"];

// console.log(arr.includes("ahmed"));
// console.log(arr.includes("saboor"));

//12. join() method

// let arr = ["saboor","rayyan","kaif"];

// console.log(arr.join("#")); // output = saboor#rayyan#kaif
// console.log(arr.join(" "));// output

//13. reverse()method
// let arr = ["saboor","rayyan","kaif"];
// console.log(arr.reverse());

// let arr1 = [1,2,3,4,5,6,7,8,9,10];
// console.log(arr1.reverse());

// let arr2 = [21,32,4,67,69];
// console.log(arr2.reverse());

// 14. sort()method

// let arr = [9,8,7,6,5,4,3,2,1];
// console.log(arr.sort());

// let arr2 = [10,9,8,7,6,5,4,3,2,1];
// console.log(arr2.sort()); // donot work on 2 digit number

// let arr3 = [10,11,8,20,59,22,49,30];

// console.log(arr3.sort((a,b) => a - b));// gives the output in ascending order

// let arr4 = [12,34,54,56,67,87,65];
// console.log(arr4.sort((a,b) => b-a)); // gives the output in descending order

// let arr5 = [10,11,8,20,59,22,49,30];
// console.log (arr5.sort((a,b) => a*b)); // gives the output in descending order only

//IIFE : immediately invoked function expression

// 15. flat() method

// let arr = ["hello","hi",["bye","test"],"ok"];
// arr.flat();
// console.log(arr);

//16. Array.of() method
// a method is to used to create a new array with using parenthesis

// let output = Array.of("hi", "hello", 23, 12, 54, false);
// console.log(output);



//17. every() method
//checks if every element in the array passes a test  (returns true/false).
//returns : "true" if all elements pass the condition, otherwise "false". returns the value inn boolean values

// let numbers = [ 2,4,6,8];
// let check = numbers.every(function test(x){
//     return x > 0;
// });
// console.log(check);
//          (or)
// let check = numbers.every((x) => x>0);
// console.log(check);



//18. find() method
// returns the first element that satisfies a condition.
//returs : the element itself, or undefined if not found

// let nums = [2,4,6,8,10];

// let check = nums.find((x)=> x> 6);
// let less = nums.find((x)=> x < 10);
// console.log(check);
// console.log(less);



//19. findIndex()
//returns the index of the first element that satisfies a condition
//returns : index number, or -1 if not found.

 let nums = [2,4,6,8,10];

 let check = nums.findIndex((x)=>x>6);
 console.log(check);




 //20.forEach() method
 // purpose : executes a function for each elements
 // return value : undefined
 //chainable : no
 // changes orignal array : No
 // common use : Logging, saving data

 //ex : forEach just : just loops - doesnt return anything

let numbers = [1,2,3,4,5];

console.log(numbers);
numbers.forEach((ele) => {
    console.log(ele * 2);
});
console.log(numbers);

let names = ["kaif","saboor","kamran"];
names.forEach((x)=>{
    console.log(x);
})