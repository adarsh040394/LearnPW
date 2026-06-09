// type of operator
// typeof operator is used to find the type of a variable or an expression
console.log(typeof 5); // number
console.log(typeof 3.44);
console.log(typeof "Hello"); // string
console.log(typeof true); // boolean
console.log(typeof undefined); // undefined
console.log(typeof null); // object (this is a bug in javascript, null is not an object, but typeof null returns object)
console.log(typeof {}); // object
console.log(typeof []); // object (arrays are also objects in javascript)
console.log(typeof function(){}); // function
console.log(typeof Symbol("id")); // symbol
console.log(typeof BigInt(1234567890123456789012345678901234567890)); // bigint
console.log(typeof NaN); // number (NaN is a special value that represents Not a Number, but its type is number)