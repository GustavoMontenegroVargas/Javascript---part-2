const Function2 = () => {

    document.location.href = "Login.html";
    localStorage.removeItem(password);

}

var Password_L = localStorage.password;
var New_pass = "Saga";

if(Password_L != New_pass){
    document.location.href = "Login.html";
    /* localStorage.removeItem(password); */
}

