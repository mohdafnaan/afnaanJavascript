// a call back function is a function passed as an argument to another function, and is clled ("called back") later inside that function.

function greet(a,b){
    console.log("hello" + a);
    b(); //== afterGreeting;
};

function afterGreeting(){
    console.log("welcome to code.live!");
}

greet("suhail", afterGreeting);

