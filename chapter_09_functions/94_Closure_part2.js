function makeRetryTracker (max){
    let attempts = 0;
    function tryAgain (testName){
        attempts++;
if (attempts> max){
    return `${testName} exceeded max retries (${max})`; 
}return `Attempt ${attempts}/${max} for ${testName}`;
    
    };

    return tryAgain;
}
let tryAgain = makeRetryTracker(3);
console.log(tryAgain("Login"));
console.log(tryAgain("Login"));
console.log(tryAgain("Login"));
console.log(tryAgain("Login"));