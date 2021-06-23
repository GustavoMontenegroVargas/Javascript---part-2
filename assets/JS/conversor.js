let celsius = document.querySelector('#celsius');/* Obtiene el dato celsius */
let F_button = document.querySelector('#Far'); /* Obtiene la acción de F botón */
let K_button = document.querySelector('#Kel'); /* Obtiene la acción de K botón */
const resultado = document.querySelector('#Resultado'); /* Llama a la etiqueta vacía h2*/

F_button.addEventListener('click',function(){
    let Fahrenheit = 1.8*(parseInt(celsius.value)) + 32;
    resultado.textContent = `Los grados Fahrenheit son: ${Fahrenheit}`;   
})

K_button.addEventListener('click',function(){
    let Kelvin = (parseInt(celsius.value)) + 272;
    resultado.textContent = `Los grados kelvin son: ${Kelvin}`;
})
