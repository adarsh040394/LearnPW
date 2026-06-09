let statuscode = 200;

if(statuscode ===200){
    console.log("ok")
}else if (statuscode === 400){
    console.log("bad request");
}else if (statuscode ===500){
    console.log("internal server error");
}else if (statuscode ===401){
    console.log("unauthorized");
}else if (statuscode ===403){
    console.log ("forbidden");
}else{
    console.log("unknown status code");
}