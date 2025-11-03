// for in loop

/*
used to loop through the properties (keys) of an object or values
*/

let myDetails = {
     fullName : "afnaan",
     age : 10,
     isSleeping : true,
     isAlive : true,
     isAwake : undefined
    
}

for (let keys in myDetails){
    console.log(myDetails[keys]);
}