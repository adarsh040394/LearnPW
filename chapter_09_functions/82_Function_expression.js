const greet = function(name){
    return `Hello, ${name}!`;
};


//Type 4 function

function greet1 (name1){
    return `Hello, ${name1}`;
}

//function as expression
const greet2 = function (name2){
    return `Hello, ${name2}!`;
}

console.log(greet("Bob"));
console.log(greet1("Bob"));
console.log(greet2("Bob"));