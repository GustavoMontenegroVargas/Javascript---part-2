

var i = parseInt(prompt("Ingrese el nùmero que desea sumar"));
var k = 0;
var j;

/* Si i vale 5 */
/* Usualmente es 1+2+3+4+5 = 15 */
/* Pero el proceso básico de programación siempre va de dos en dos acciones */
/* Por lo que se convierte en lo siguiente */
/* Si lo desglosamos, esto ocurre así:

"0" +1 = "1", 
"1" + 2 = "3",
"3" +3 = "6",
"6" + 4 = "10",
"10" + 5 = "15"; 

*/
/* Podemos notar que un el resultado anterior, utiliza para la suma del que sigue */
/* También podemos notar que un número va aumentando de uno en uno */

/* Se lee  desde j = 0; hasta j menor e igual a 5; y jota aumentando de uno en uno */
/* El ciclo también indica el número de vueltas que se harán. Serán seis vueltas, desde
el cero hasta el cinco. En total, seis vueltas. */

for(j = 0 ;j <= i; j++){

    /* El programa inicia  con j = 0 y  conforme avanza irá aumentando uno en uno,
    con j++*/
    /* k es la variable que se irá reutilizando */

    k = k + j;
    
    /* j = 0, k = 0 + 0 = 0, j = 1 , --- Vuelta cero */
    /* j = 1, k = 0 + 1 = 1, j = 2 , --- Vuelta uno */
    /* j = 2, k = 1 + 2 = 3, j = 3 , --- Vuelta dos */
    /* j = 3, k = 3 + 3 = 6, j = 4 , --- Vuelta tres */
    /* j = 4, k = 6 + 4 = 10, j = 5 , --- Vuelta cuatro */
    /* j = 5, k = 10 + 5 = 15, j = Ya no se suma, pues sale del ciclo for , --- Vuelta cinco */ 
}

/* Al final, saliendo del ciclo, se imprime la última k */

console.log(k); 