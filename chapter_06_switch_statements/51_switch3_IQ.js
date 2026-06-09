let status = 0;

switch (status) {
    case false:
        console.log("false matched");
        break;

    case 0:
        console.log("0 matched");
        break;
        
}

// output 0 matched beacause switch statement uses strict equality (===) to compare the value of status with the case values. In this case, status is 0, which is strictly equal to the case value 0, so the code block for case 0 is executed and "0 matched" is printed to the console. The case value false is not strictly equal to 0, so the code block for case false is not executed.