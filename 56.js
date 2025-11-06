//         THROW IN JAVASCRIPT
/* throw is used to manually create (throw) an error in your code .

you can think of it like saying : 
"if somehting goes wrong here, stop everything and jump to the catch block." */

try{
    let age = 15;
    if(age <18){
        throw "you must be 18 older"
    }
    console.log("welcome");
} catch (error) {
    console.log(error);
}
