//               FUNCTION WITH FACTORIAL

let result = 1;
for(let i = 5 ; i>0 ; i--){
    result *= i;
   console.log(result);
}


function fac(n){
    let finalOutput = 1;

    for(let i = n ; i>0 ; i--){
        finalOutput *= i;
    }
    return finalOutput;
}
let answer = fac(4);
console.log(answer);


// by recursion method

function fac(a){
    if (a==0)return 1; // we are giving a condition that 0 factorial is 1
    return a* fac(a-1);
}
let output = fac(4);
console.log(output);