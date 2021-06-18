const alarma = () => {


    var temperatura_max = 40;
    var temperatura_min = 5;
    var temperatura_ambiente = parseInt(prompt('Ingrese la temperatura del lugar'));

    if(temperatura_ambiente > temperatura_max  || temperatura_ambiente < temperatura_min ){
        alert('Estàs fuera del rango de la temperatura   5 < T < 40');
    }
    else{
        console.log('Estás dentro del rango de la temperatura');
    }

    var  humedad_estandar = 50;
    var  humedad_ambiente = parseInt(prompt("Ingrese la humedad"));
    if(humedad_ambiente > (1.5)*humedad_estandar){/* h1 = 30 ---  h = 50 -----   (1.5)*50 = 75  */
        alert('Estás por encima del límite de la humedad');
    }
    else{
        console.log('Estás por debajo del lìmite de la humedad');

    }

    var trabajadores_max = 100;
    var trabajadores_actuales = parseInt(prompt('Ingrese el nùmero de trabajadores'));

    if(trabajadores_actuales > trabajadores_max){
        alert("Estàs por encima del número máximo de trabajadoes");
    }
    else{
        console.log('Estás por debajo del número máximo de trabajadores');
    }

    var liquido_total = 200;
    var liquido_actual =  parseInt(prompt('Ingrese la cantidad de lìquido'));

    if( liquido_actual > liquido_total*0.90 || liquido_actual<liquido_total*0.30 ){
        alert("Estás dentro del rango del líquido");

    }
    else{
        console.log('Estás dentro del rango del líquido');
    }
}

alarma();