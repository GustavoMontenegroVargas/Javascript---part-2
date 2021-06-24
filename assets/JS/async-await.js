let btnUsers = document.querySelector('#btnUsers');
let divUsers = document.querySelector('#divUsers');

async function displayData () {
    let getUsers = await fetch ( 'https://jsonplaceholder.typicode.com/users');
    console.log(getUsers.ok);

    let data = await getUsers.json();
    console.log(data);
    data.forEach(user => {
        let parr = document.createElement('p');
        parr.textContent = user.name;
        divUsers.appendChild(parr);
        
    });

}

/* ------------------------------ */
/* btnUsers.addEventListener('click',function () {
    displayData();
}); */
/* ------------------------------ */
/* Usamos async para usar una función asíncrona.
Lo que indica que es una función que necesita esperar
para poder continuar hasta que obtenga una respuesta.*/

/* En el caso de 'await', lo que hacemos es indicar
en qué línea debemos indicar la respsueta para continuar */

/*El 'then' funciona como un await. 
Nosotros necesitamos un await en todos los elementos
que regresen una promesa.*/


/* ------------------------------ */
btnUsers.addEventListener('click',displayData);

/* Para llamar una función definidad en nuestro evento
Solo necesitamos colocar el nombre del función sin el
argumento. */

/* ------------------------------ */