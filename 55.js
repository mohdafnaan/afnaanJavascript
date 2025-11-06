// try....catch....finally
//its a way to handle errors in javscript so your program doesnt crash.

//syntax
try{
    //code that might cause an error
}catch (error){
    //code that runs *if* an error happens
}finally {
    //code that always runs(error or not)
}

try{
    let output = 10/0
    console.log(output);
    console.log(output + a);
} catch (error){
    console.log(error.message); // it only gives the error and (error.name) gives only the description 
} finally {
    console.log("helllo i am there");
}