//global scope

var a = 10
let b = 20 
const c = 30

//inside block
{
console.log(a)
console.log (b)
console.log (c)

}

//inside function
function hi () {
    console.log (a,b,c)
}

hi ();

// anywhere
console.log(a,b,c);