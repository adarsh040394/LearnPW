function LoginResult(suitName, ...results){
    console.log(`suit: ${suitName}`);
    console.log(`Results: ${results.join(",")}`);
}


LoginResult("Auth Suit", "pass", "fail", "pass", "skip");