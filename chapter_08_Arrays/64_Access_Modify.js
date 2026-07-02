let status =["pass","fail","skip"];
console.log(status[0]);
console.log(status[2]);

console.log(status.at(-1)); //last element
console.log(status.at(-2));
console.log(status.at(-3));

//modify

status[1]= "blocked"
console.log(status);
console.log(status.length);