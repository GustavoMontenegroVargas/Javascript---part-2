
function Function1() {

    var x =  document.getElementById("Mytext").value;
    var y = document.getElementById("exampleInputPassword1").value;

    if(x == "Saga" &&  y == "123"){


        document.location.href = "Dashboard.html";
        localStorage.password = y;

    }
    else{

        alert("Nombre de usuario o contraseña incorrectos");
        
    }

}