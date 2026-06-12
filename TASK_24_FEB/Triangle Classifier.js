let side1 = 5;
let side2 = 5;
let side3 = 5;

if (side1===side2 && side2===side3){
    console.log("Equaltetral Trianle");
}else if (side1===side2 || side2===3 || side1===side3){
    console.log("Isoceles Triangle");
    
}
else {
    console.log("Scalene Triangle");
}