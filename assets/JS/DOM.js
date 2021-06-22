let subtitle = document.querySelector('#subtitle');
console.log(subtitle);

subtitle.textContent = 'Subtítulo';
subtitle.classList.add('red');/* Con esta línea de código
estamos agregando una clase ya definida en CSS sin modificar el html */

const animales = ['perro', 'gato', 'pez', 'leon', 'los vatos de mi carrera', 'los choferes de micro en Tlahuac'];
const list = document.querySelector('#list');

/* for each

Toma una lista de elementos, objetos o arreglos
Recorre todos los elementos del arreglo,
sin tener que definir límites y les aplica una
función determinada. Es una sintáxis más corta*/

animales.forEach(function(animal){
    let item = document.createElement('li');/* Crea elementos li para la lista */
    item.textContent = animal;/* Se asigna el valor. */
    list.appendChild(item);/* Con esta línea le agregamos un subelemento a uno más grande del HTML */

}) ;

/* La función dentro del for each se conoce
como función anónima, pues solo está definida
bajo la sintáxis de un ciclo. También puede llamarse
una función predefinida para este ciclo.  */

/* En este caso animal va a ser el parámetro
de esta función anónima */

/* En todo caso, sucede que cada elemento del
array se cambia por animal. */

/* 
animales.forEach(animal => {
    let item = document.createElement('li');
    item.textContent = animal;
    list.appendChild(item);

}) ; */

/* En notación de flecha, esto es equivalente */
/* En ambos casos tenemos la posibilidad de
dos argumentos. function (parámetro, index),
index es el contador del ciclo.
Se puede usar dentro del ciclo una vez se haya indicado */