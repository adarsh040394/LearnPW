let year = 2026;

if (year % 4===0 && year % 100===0 || year % 400===0)
{
    console.log("Year + leap year");
}else{
    console.log("Year + Not a leap year");
}