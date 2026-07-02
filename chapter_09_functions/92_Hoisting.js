//Hoisting
//functions declearations are hoisting
//you can call then before they are define
//function exprression and arrow function are not


greet ("Alice"); //decalartion-Hoisted works before definition

function greet (){

    return `Hello, ${name}!`;
}

sayHi ("Bob");
const sayHi = function (name){
    return `Hi, ${name}!`;
}