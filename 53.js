// synchronous : in synchronous code ,each line will runs one after another, waiting for the previous line to be complete

console.log('step 1');
console.log("step 2");
console.log("step 3");

//|      types                      |               example                                              |
//|---------------------------------|--------------------------------------------------------------------|
//| normal code execution           |  `console.log()` , variables declaration                           |
//| math operation                  |   `let sum = a+b ;`                                                |
//| loops                           |   `for`,`while`, `do...while`                                      |
//| conditional statements          |   `if`,`else`,`switch`                                             |
//| function call                   |   `function myFunc() {}` ->  `my func()`                           |
//| JSON parsing                    |   `JSON.parse()` , `JSON.stringify()`                              |
//| DOM manipulation                |   `document.getElementById()` ,  `element.innerHTML = "..."        |
//| error handling                  |   ` try{...} catch (err) {....}                                    |
//| blocking alert                  |   `alert()` , `prompt()` , `confirm()`                             |


//  this execute in order and block the call stack untill done.