let testscore = 85;

switch (true) {

    case (testscore >= 95):
        console.log("outstanding - Top Performer");
        break;

    case (testscore >= 85):
        console.log("Excellent - Above Expectation");
        break;

    case (testscore >= 70):
        console.log("Meets - Expectation");
        break;

    case (testscore >= 50):
        console.log("Need Improvment");
        break;

    default:
        console.log("unsatisfactory - need improvment");


}