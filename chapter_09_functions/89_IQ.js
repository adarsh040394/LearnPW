function getStatus(code){
    if (code>=200 && code<300); return "success"
    if(code>=400 && code<500); return "bad request"
    if (code>=500); return "500 internal server error"
}

getStatus(200);

