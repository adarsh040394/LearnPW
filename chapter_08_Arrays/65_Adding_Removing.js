let arr = [1, 2, 3];
console.log(arr);
//Add to END

arr.push(4);
console.log(arr);

//Remove the last element from the END

arr.pop();
console.log(arr);

//we can push multiple element

arr.push(5,6);
console.log(arr);

//We can add to beginning

arr.unshift(0);
console.log(arr);

// remove element from the begining

arr.shift();
console.log(arr);

//splice(start, deletecount,....itemtoAdd)

arr.splice(2, 1); //remove 1 item at index 2

console.log(arr);

arr.splice(2, 0, 99);
console.log(arr);