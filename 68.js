// dates in javascript
/*
JavaScript data and time
In JavaScript, date and time are represented by the date object. the date object provides that date and time information and also provides various methods.

a javascript date defines the ecmaScript epouch that represents miiliseconds since 1 january 1970 UTC. this date and time is the same as the UNIX epoch (predominant base value for computer-record date and time values).

creating date objects
there are four ways to crete a date object.

new Date()
new Date(milliseconds)
new Date(date string)
new date(year,month,day,hours, minutes, seconds,milliseeconds)

javaScript has a build-in-Date object to handle dates and times.
*/


// const currentDate = new Date();
// console.log(currentDate);

// const date1 = new Date("2025-11-10T11:23:45.45Z");
// console.log(date1);

// const date2 = new Date(2025,11,10,19,14,29.00);
// console.log(date2);

// const date3 = new Date(1760000000000);
// console.log(date3);
// date methods 

const currentDate = new Date();
console.log(currentDate);


//0. get milliseconds()

console.log(currentDate.getMilliseconds());

//1. getFukkYear()

console.log(currentDate.getFullYear());


//2. getMonth()
console.log(currentDate.getMonth());

//3.getDate()
console.log(currentDate.getDate());

//4.getDay()
console.log(currentDate.getDay());

//5.getHours()
console.log(currentDate.getHours());

//6.getMinutes()
console.log(currentDate.getMinutes());

//7. getSeconds()
console.log(currentDate.getSeconds());

//8. getMilliSeconds(
console.log(currentDate.getMilliseconds());




// how to get milliseconds till now:
console.log(currentDate.getTime());

// let now = new date();

let tillNowMilliSecods = Date.now()
console.log(tillNowMilliSecods);

let tillNow = +new Date()
console.log(tillNow);