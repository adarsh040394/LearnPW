function getStatus(code){
    if (code>=200 && code<300) return "Success"
    if(code>=400 && code<500) return "client error"
    if (code>=500) return "server error"
}

console.log(getStatus(404));

//return nothing- undefind

function LogTest(name){
    console.log(`Running: ${name}`);
    //no return statement
}

LogTest("Hi this is a Log");