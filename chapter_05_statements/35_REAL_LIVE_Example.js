let  isLoggedIn = true;
let userrole = "editor";
// app.vwo.com ->viewer, admin,editor
if (isLoggedIn){
    if (userrole === "admin"){
        console.log("admin can do all the things");
    }else if (userrole === "editor"){
        console.log("welcome editor, edit access granted");
    }else if (userrole === "viewer"){
        console.log("welcome viewer, view access granted");

    }else {
        console.log("no ideal role found");
    }
}else {
    console.log("you are not logged in, please login to continue");

}
