//true

if("hello") console.log("string is truthy");
if(42) console.log("number is truthy");
if({}) console.log("empty object is truthy");
if([]) console.log("empty array is truthy");

//false

if("") console.log("string is falsy");
if(null) console.log("null is falsy");
if (undefined) console.log("undefined is falsy");
if(0) console.log("0 is falsy");
if(-0) console.log("-0 is falsy");
if(NaN) console.log("NaN is falsy");
