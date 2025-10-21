//  Function Scope           Var             Let              Const
// Inside of Function           ✅              ✅                 ✅
// Outside of Function  ❌                             ❌               ❌


function hello() { ✅
    let a = 10;
}
console.log(a)

hello ()

function hello()
{let a = 10
    console.log(a)

}

hello()