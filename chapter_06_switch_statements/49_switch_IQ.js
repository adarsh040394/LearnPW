let x = 10;

switch (x) {
    case 10:
        let b1 = 1;
        console.log(b1);
        break;

    case 10:
        let b2 = 2;
        console.log(b2);
        break;

        default:
            console.log("d");

        // It will allow you to have the duplicate case values, but it will only execute the first case that matches the value of x. In this case, it will execute the first case (case 10) and ignore the second case (case 10) because it has already found a match and executed the code block for that case. Therefore, it will not throw an error for duplicate case values, but it will only execute the first matching case.
}