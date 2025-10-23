// If else statement

/* 
if...else is used to run code conditionally -- only when a specific expression 
evaluates to true.
*/
// there are 3 types of if else statement

//1.if statement
//2. if...else statement
//3. if...else if...else

// let age = 23;

// if (age >= 18){
//     console.log("Hello adult");

// }
// console.log("hello child");

//if age = 18;
// if (age >= 18) {
//     console.log("you can vote");
// }
//    console.log("you cannot vote")

let age = 12;

if (age >= 18) {
  console.log("you can vote");
} else {
  console.log("you cannot vote");
}

// if....else if....else
// if ===> 1st condition
//else if ===> 2nd to nth condition
//else===> false condition

let marks = 84;
if (marks >= 90) {
  console.log("A+");
} else if (marks >= 80) {
  console.log("A");
} else if (marks >= 70) {
  console.log("B+");
} else if (marks >= 60) {
  console.log("B");
} else if (marks >= 50) {
  console.log("c");
} else {
  console.log("you failed");
}


//if temp is greater than 35 ====> its hot
//if temp is greater than 25 ===> its nice and normal
// or else its cold

let temp = 30

if(temp>=35){
    console.log("its hot")
}
if(temp>=25){
    console.log("its nice and normal")
}
else{
    console.log("its cold");
}