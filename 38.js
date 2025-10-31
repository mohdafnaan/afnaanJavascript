// ARRAY METHODS:

1. at() method
let arr = ["hi", "hello", "bye"];
console.log(arr.at(0));// output = hi
console.log(arr.at(2));// output = bye


2. concat()method

let arr1 = [10,20,30];
let arr2 = [40,50,60];

let total = arr1.concat(arr2);
console.log(total);
console.log(arr1.concat(arr2));


3.fill() method;
fill is a array method which will replace all the elements with the given value
let fruits = ["apple", "mango", "orange"];

let total = fruits.fill("pineapple");
console.log(total);



4. indexOf() method : it takes input as values and gives output as value.

let nums=["one","two","three","four"]
console.log(nums.indexOf("one")); //output = 1 
console.log(nums.indexOf("five"));// output = -1 as the value is not in the array
console.log(nums.indexOf("six")); // output = -1

console.log(["one","two","three"].indexOf("one"));


5. lastindexOf()

let arr = [10,20,30,50,60,20,10,20];
console.log(arr.lastIndexOf(10));



6. length()
it gives the count of total number of elements in the array

let arr = [10,20,30,40,50,60]

console.log(arr.length); // 6 ....as the total number of elements are 6



7. push()
its an array method which adds a new element in the position of the array\

let arr = [10,20,30];
arr.push(40);

console.log(arr);


8. pop()
pop is an array method which deletes the last element from the array

let arr = [10,20,30,];
arr.pop();
console.log(arr);// output = [10,20]



9. unshift()
adds a value fromm starting of the array
let arr = [10,20,30];
arr.unshift(100);
console.log(arr);



10. shift()
removes the value from the starting element of the array
let arr = [10,20,30,40];
arr.shift();
console.log(arr);



//push(): its an array method which adds a new element in the position of the array.
//pop():pop is an array method which deletes the last element from the array.
//unshift():adds a value fromm starting of the array.
//shift():  removes the value from the starting element of the array.