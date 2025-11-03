//                          RECURSION

// Recursion is when a function calls itself to solve a smaller version of the same version of the same problem untill it reaches a base case(a stopping point)

function hello() {
  console.log("hello cfi");
}
hello(); // this is the normal method of calling a fuction outside of it

// function hello(){
//     console.log("hello b25")
//     hello ()
// }
// hello(); // it goes in the loop if we call the function inside the function.

function call(num) {
  console.log("num value =", num);// printing num value
  if (num == 1) {
    console.log("stopped");
    return;
  }

  console.log("calling the function");
  call(num - 1);
}
call(10);
