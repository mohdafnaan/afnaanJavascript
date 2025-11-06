// TERNARY OPERATORS :
/* its a shortcut of writing if...else statements -- all in one line. */

// syntax : 
//condition ? doThisIfTrue : doThisIfFalse;

let myAge = 20;
if(myAge>18){
    console.log("you can vote");
}else{
    console.log("you cannot vote");
}

// by ternaray operator

let output = myAge > 18 ? "you can vote" : "you cannot vote";
console.log(output);