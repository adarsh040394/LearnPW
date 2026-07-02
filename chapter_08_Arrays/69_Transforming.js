let score = [45, 82, 91, 60, 73];

//map- transforms every elements, returns NEW array

let grade = score.map(s => s>70 ? "pass" : "fail");
console.log(grade);

//filter -> keep element that passing the test

let passing = score.filter(s=>s>=70);
console.log(passing);

//reduce- accumalates to a single value

let total = score.reduce((sum, s)=>sum + s, 0);
console.log(total);