// for of loop

/* for of loop
used to loop directly through the values of an iterable to an array
*/

let student = ["saboor","kaif","kamran"];

// by forloop

for(let i = 0; i <= student.length - 1; i++){
    console.log(student[i]);
}


// by for of

for(let ele of student){
    console.log(ele);
}
