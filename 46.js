let myDetails = {
    Fname : "mohammed afnaan" ,
    class : 10,
    sec : "b" , 
    age : 20,
    add : "asifnagar",
    isalive : true,
    isSleeping : null,
    isAwake : undefined
}
myDetails.phonenumber = "9857457"
console.log(myDetails);

myDetails.age = 21;
console.log(myDetails);

delete myDetails.Fname
console.log(myDetails);