//  Function Scope           Var             Let              Const
// Inside of Function          ✅             ✅                 ✅
// Outside of Function         ❌              ❌                  ❌

// function declaration
//var
function hello() { ✅
    let a = 10;
}
console.log(a)
//function calliing
hello ();

// LET
function hey()
{let a = 10
    console.log(a)

}

hey(),

// CONST   
function yo(){
    const a = 30;
    console.log(a);
}
yo();