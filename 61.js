// TIMER FUNCTIONS

/*
timer functions let you schedule code execution - either after a delay or repeadtedly at intervals.
they are a part of web APIs (in browesers) or Node.js global timers (in backend)/
*/

//1.setTimeout()
// console.log("step 1");
// setTimeout(() => {
//     console.log("step 2");
// },5000)

// setTimeout(() => console.log("to be printed after 5 secs"),5000);


// console.log("step 3");


// first priority will be sync then async will print.

// console.log("class 1");
// console.log("class 3");
// setTimeout(() => console.log("class 3"),0)
//                                      |> .. this is the timer in miliseconds.



// 2. setInterval()

/* the setInterval() method repeatedly calls a function or executes a code snippet, with a fixed time delay between each call.

it continues running untill you stop it using clearInterval().

*/

// setInterval(() => {
//     console.log("hello cfi");
// },2000) 

// clearInterval

let count = 1;

// const timer = setInterval(() => {
//     console.log("Hello CFI");
//     console.log(count);
//     count ++;
//     if(count == 10){
//         console.log("Stopped");
//         clearInterval(timer);
//     }
// },1000);


let count1 = 10;

const timer1 = setInterval(() => {
    console.log("Hello CFI");
    console.log(count1);
    count1--;

    if(count1 == 0){
        console.log("stopped");
        clearInterval(timer1)
    }
},1000)




function repeat(){
    console.log("tick");
    setTimeout(repeat,1000)
}