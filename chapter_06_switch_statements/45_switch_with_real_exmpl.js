// you are working on api validation


let responsecode = 200;
switch(responsecode){
    case 200:
        console.log("200 ok");
        break;
    case 404:
        console.log("404 : not found");
        break;
    case 500:
        console.log("internal server error");
        break;
        default:
        console.log("unknown response code");

}