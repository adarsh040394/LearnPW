let responses = [200, 201, 404, 500, 404, 200, 503];

let allSuccessfull = responses.every(c=> c>=200 && c<=299);
console.log(allSuccessfull);

//Find the FIRST non-success code

let firstError = responses.find (c=> c <200 || c>299);
console.log (firstError);

//Return all unique error codes

let UniqueErrors = [...new Set(responses.filter(c=> c<200 || c>299))];
console.log(UniqueErrors);