function ValidateStatusCode (status){
    if(status>=200 && status<300){
        console.log("request is fine");
    }

}
ValidateStatusCode(200);
ValidateStatusCode(500);

const ValidateStatusCode_Exp=function (status){
    if(status>=200 && status<300){
        console.log("request is fine");
    }

}
ValidateStatusCode(200);
ValidateStatusCode_Exp(200);


const ValidateStatusCode_Exp2 = (status)=> {
    if (status>=200 && status<300);
    console.log("Request is fine");
}

ValidateStatusCode_Exp2(200);