var variable1 = "Soy la variable 1";
console.log(variable1);
variable1 = 1212;
console.log(variable1);

const variable2 = "Soy la variable 2";
console.log(variable2);
/* variable2 = 10;
console.log(variable2);

No se puede reasignar el valor de la variable*/

function varTest(){
    var x = 31;
    if (true) { /* Ejecuta el 'scope' (lo que va entre llaves), sì o sì. */
        var x = 71;
        console.log(x);
    }
    console.log(x);
}
varTest()

/* Var se mantiene en la memorìa, pero let, no. */

function LetTest(){
    let x = 31;
    if (true) { /* Ejecuta el 'scope' (lo que va entre llaves), sì o sì. */
        let x = 71;
        console.log(x);
    }
    console.log(x);
    return x;
}
LetTest()

/* let -- Variables locales o variables de scope */
/* var -- variables globales */

let y =1;
console.log(y);
y= 2;

console.log(y);

const NuevaFuncion = () => {
    var x = 31;
    if (true) { /* Ejecuta el 'scope' (lo que va entre llaves), sì o sì. */
        var x = 71;
        console.log(x);
    }
    console.log(x);
}
NuevaFuncion();
/* Esta es una función que no cambia su contenido */

/* Remplaza a las funciones tradicionales. 
Solo ocupa una determinada memoria.
El còdigo es el que se queda definido. Cada
vez que se realizan esos pasos, no se guardan,
se destruyen.  */

const nombre = "Gustavo";
const apellidos = "Montenegro";
/* Template string */
console.log(`Hola, mi nombre es ${nombre} y mi apellido es ${apellidos}`);




