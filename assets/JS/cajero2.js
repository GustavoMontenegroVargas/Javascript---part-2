const Cajero = (a) =>{

    let Quinientos = 20;
    let Doscientos = 20;
    let Cien = 20;
    let Cincuenta = 20;
    let Total = Quinientos*500 + Doscientos*200 + Cien*100 + Cincuenta*50;

    console.log("El total en este cajero es: " + Total);

    if (a > Total) {
        alert("El cajero no tiene dinero suficiente para esta cantidad");

    }
    else if (a >= 50 && a<= Total){
       
        let b = a % 50;  /* 105/50 =  c- 2  r - 5 */
        if (b != 0) {
            alert("Cantidad no válida. Por favor, ingrese mùltiplos de 50.")
        }

        else if (b == 0) {

            var c;
            var d;
            var e;
            console.log(`La cantidad solicitada es ${a}`);

            c = Math.trunc(a/500); /* a = 11,000 -- c = 22 */
            d = a%500; /* a = 11,000 -- d = 0 */

            if(c>=0 && c <= Quinientos /* 20 */){ /* c > 0 */
                e = 0;
                if (c>0){
                    console.log(`El cajero le dará ${c} billetes de $ 500`);/* 20 */
                }
            } 
            else if (c>Quinientos){
                e = a - (Quinientos * 500);/* 11,000 - 20*500 = 11,000 - 10,000 = 1,000 */
                console.log(`El cajero le dará ${Quinientos} billetes de $ 500`);
            }   

            
            c = Math.trunc((d + e)/200); /* 0 + 1,000 */
            d = (d + e)%200; /* 0 + 1000 */
                
            if (c>=0 && c<= Doscientos){
                e = 0;
                if (c>0){
                    console.log(`El cajero le dará ${c} billetes de $ 200`);
                }
            }
            else if (c>Doscientos){
                e = (d+e) - (Doscientos * 200);
                console.log(`El cajero le dará ${Doscientos} billetes de $ 200`);
            }

            c = Math.trunc((d+e)/100);
            d = (d+e)%100;

            if(c>=0 && c<= Cien){
                e = 0;
                if (c>0){
                    console.log(`El cajero le dará ${c} billetes de $ 100`);
                }
            }
            else if (c > Cien){
                e = (d+e) - (Cien * 100);
                console.log(`El cajero le dará ${Cien} billetes de $ 100`);
            }
        
            c = Math.trunc((d+e)/50);
            d = (d+e)%50;
            
            if(c>=0 && c<= Cincuenta){
                e = 0;
                if (c>0){
                    console.log(`El cajero le dará ${c} billetes de $ 50`);
                }
            }
            else if(c > Cincuenta){
                e = (d+e) - (Cincuenta * 50);
                console.log(`El cajero le dará ${Cincuenta} billetes de $ 50`);
            }
                 
        }
    }
    else {
        alert("Operación no válida");
    }
}

var Ingreso = parseInt(prompt("Ingrese el monto que quiere retirar"));
Cajero(Ingreso);

