//  What is a switch statement?
// a switch statement is used to compare one value against multiple possible cases.
//its often cleaner than writing multiple if...else if condition

/* switch (expression) {
    case value1 :
        // code block if expression === value1
         break;

    case value2 :
        //code block if expression === value 2 
        break;

    default:
        // code block if no cases matches    
}*/

// let day = "sunday";

// switch (day) {
//   case "sunday":
//     console.log("its a sunday");
//     break;
//   case "monday":
//     console.log("monday");
//     break;
//   case "tuesday":
//     console.log("tuesday");
//     break;
//   case "saturday":
//     console.log("satuday");
//     break;
//   default:
//     console.log("please add correct day");
// }

//same in if else

let day = "december";

if (day == "sunday") 
{
  console.log("sunday");
} 
else if (day == "monday") {
  console.log("monday");
} 
else if (day == "tuesday") {
  console.log("tuesday");

} else if (day == "saturday") {
  console.log("saturday");
}
 else {
  console.log("please add correct day");
}
