//       IMPORT AND EXPORT

function add (a,b){
    
    return a+b;
}

export default add;

//--------------------------------------------------------------------


// function a (){
//     console.log("import");
//     console.log("export");
// }

// export default a ;


function sub (a,b){
    return a-b;
}

export{add , sub};