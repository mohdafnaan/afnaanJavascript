// If else statement

/* 
if...else is used to run code conditionally -- only when a specific expression 
evaluates to true.
*/
// there are 3 types of if else statement

//1.if statement
//2. if...else statement
//3. if...else if...else

// let age = 22;
// if(age<=21){
  // console.log("you cant go.");
// }
// console.log("you can go");


// let age = 23;

// if (age >= 18){
//     console.log("Hello adult");

// }
// console.log("hello child");


// let price = 2000

// if(price<=1000){
//   console.log("we will buy");
// }
// console.log("we wont buy");

// let price = 4900

// if(price>=5000){
  // console.log("we will buy");
// }
// console.log("we wont buy");


//if age = 18;
// if (age >= 18) {
//     console.log("you can vote");
// }
//    console.log("you cannot vote")
//-------------------------------------------------------------------------------

// IF ELSE.

let age = 12;

if (age >= 18) {
  console.log("you can vote");
} else {
  console.log("you cannot vote");
}


// let result = 40 

// if(result>= 80){
//   console.log("party");
// }
// else{
//   console.log("wont party");
// }

// let result = 56

// if(result>= 35,result<90 ){
//   console.log("party");
// }
// else{
//   console.log("wont party");
// }

let result = 100

if(result>= 35,result<90 ){
  console.log("party");
}
else{
  console.log("wont party");
}
// let result = 34

// if(result >= 35 && result <=90 ){
//   console.log("party");
// }
// else{
//   console.log("wont party");
// }
//---------------------------------------------------------------------------


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

let temp = 30;

if (temp >= 35) {
  console.log("its hot");
}
if (temp >= 25) {
  console.log("its nice and normal");
} else {
  console.log("its cold");
}
 
// rating of 2 or below is bad
// rating of 4 or above is good
// else, the rating is average.

let rating = -1;
if(rating<= 2){
  console.log("bad");
}
else if(rating>=4){
  console.log("good");
}
else{
  console.log("average");
}


// if time is less than 10:00, create a "good morning" greeting, if not time is less than 20:00, create a "good day" greeting,otherwise a "good evening".

let time = 21

if (time<10){
  console.log("good morning");
}
else if (time<20){
  console.log("good day");
}
else{
  console.log("good evening");
}


// if rating is equal to 10 he get A
// simultaneously for 9 = B,8 = c, 7 = D, 
// 6 = E, 5=F, 4,3,2,1 =G

// let rating = 5;

// if (rating == 10){
//   console.log("A");
// }
// else if (rating == 9){
//   console.log("B");
// }
// else if (rating == 8){
//   console.log("C");
// }
// else if(rating == 7){
//   console.log("D");
// }
// else if (rating == 6){
//   console.log("E");
// }
// else if (rating == 5){
//   console.log("F");
// }
// else{
//   console.log("G");
// }


// let rating = 5;

// if (rating >= 10){
//   console.log("A");
// }
// else if (rating >= 9){
//   console.log("B");
// }
// else if (rating >= 8){
//   console.log("C");
// }
// else if(rating >= 7){
//   console.log("D");
// }
// else if (rating >= 6){
//   console.log("E");
// }
// else if (rating >= 5){
//   console.log("F");
// }
// else{
//   console.log("G");
// }
 