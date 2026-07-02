function retry(testName, MaxRetries=3, delay=1000){
    console.log(`retrying ${testName} up to  ${MaxRetries} times $(delay) ms apart` )
}
retry ("Login");
retry("checkout", 5)
retry("login", 2, 5);