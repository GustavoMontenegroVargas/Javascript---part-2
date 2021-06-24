let btnUsers = document.querySelector('#btnUsers');
let divUsers = document.querySelector('#divUsers');

btnUsers.addEventListener('click',()=>{
    let getUsers = fetch('https://jsonplaceholder.typicode.com/users');
    getUsers
    .then(resp => resp.json())
    .then(data => {
        data.forEach(user => {
            let parr = document.createElement('p');
            parr.textContent = user.name;
            divUsers.appendChild(parr);
            
        });
    }).catch(e => console.log(e));
})