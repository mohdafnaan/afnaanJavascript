// 4. Object.freeze()
// freezes an object so that :
// you cannot add, remove, or change properties.
// its makes the object completely immutable

let person = {
    fname : "afnaan",
    age : 20,
    city : "hyderabad"
}

console.log(Object.freeze(person)); // this disables the crud operations.
person.phone = 978468;
person.age = 21;
delete person.fname 
console.log(person);


//5. isfrozen() = checks if the object is freeze or not

console.log(Object.isFrozen(person))