const greet = function(name){
    return `hello, ${name}`
}

// If we want to write a normal function into a arrow function
//Remove the keyword function remove the keyword return and remove the curly braces and use equal to arrow(=>)
const greet1 =  (name1)=> `hello, ${name1}`

console.log(greet("adarsh"));
console.log(greet1("pragya"));


//Arror function only generally works whenever you have a single line
const doubleIt =n => n*2;
console.log(doubleIt(10));

//no parms- parens required

const GetEnv = () => "stagging";
console.log(GetEnv());

// Suppose we have a multi line, Can we use arrow function everywhere.
// Multi line needs curly braces + return

const getResult = (score) => {
if (score>=70) return "Pass";
return "Fail";
};