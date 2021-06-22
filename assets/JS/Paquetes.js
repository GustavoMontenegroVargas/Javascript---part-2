

function peso_total (){
    var cantidad_m = parseInt(prompt('Ingrese la cantidad de muñecas que desea'));
    var cantidad_p = parseInt(prompt('Ingrese la cantidad de payasos que desea'));
    var muñecas = 0.075;
    var payaso = 0.112;

    var pt_muñecas = muñecas* cantidad_m;
    var pt_payasos = payaso* cantidad_p;
    var pt = pt_muñecas + pt_payasos;
    if(pt >1){
        console.log(`El peso del paquete es ${pt}`);
        /* 5.6 */
        console.log(`Se le enviarán ${Math.trunc(pt/1)+1} paquetes`);
        /* 5 + 1 = 6 */
    }
    else{
        console.log(`El peso total de su paquete será ${pt}`);
        console.log('Su pedido serà enviado en un solo paquete');
    }
}

peso_total();