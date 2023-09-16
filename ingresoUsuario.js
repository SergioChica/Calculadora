import { suma, resta, multiplicacion, division } from "./Operaciones_Basicas.js"
import { raiz, elevar, absoluto } from "./Operaciones_Avanzadas.js"
import { seno, coseno, tangente } from "./OpeTrigonometricas.js"
function OperacionesBasicas() {
    let opcionBasica = prompt("elija que operacion desea hacer \n 1. suma \n 2. resta \n 3. multiplicacion \n 4. division")
    switch (opcionBasica) {
        case "1":
            let Suma1 = parseInt(prompt("Ingrese el primer numero a sumar"))
            let Suma2 = parseInt(prompt("Ingrese el segundo numero a sumar"))
            suma( Suma1, Suma2 ); 
            break;
        case "2":
            let Resta1 = parseInt(prompt("Ingrese el numero que se va a restar"))
            let Resta2 = parseInt(prompt("Ingrese el numero con el que se va a restar"))
            resta( Resta1, Resta2 ); 
            
            break;
        case "3":
            let division1 = parseInt(prompt("ingrese el numero que desea dividir"))
            let division2 = parseInt(prompt("Ingrese por el cual se va a dividir"))
            division( division1, division2 ); 

            break;
        case "4":
            let multiplicacion1 = parseInt(prompt("Ingrese el numero a multiplicar"))
            let multiplicacion2 = parseInt(prompt("Ingrese el numero por el cual se va a multiplicar"))
            multiplicacion( multiplicacion1, multiplicacion2 ); 

            break;
        default:
            break;
    }
}
function OperacionesAvanzadas() {
    let opcionAvanzada = prompt("elija que operacion desea hacer \n 1. Raiz \n 2. Elevar base \n 3. Valor Absoluto")
    switch (opcionAvanzada) {
        case "1":
            let Raiz = parseInt(prompt("Ingrese el numero al le quiera sacar la raiz"))
            raiz( Raiz ); 
            break;
        case "2":
            let Base = parseInt(prompt("Ingrese el numero que quiere elevar"))
            let Elevar = parseInt(prompt("ingrese el numero por el cual se va a elevar"))
            elevar( Base, Elevar ); 
            break;
        case "3":
            let Absoluto = parseInt(prompt("ingrese el numero que desea su valor absoluto"))
            absoluto( Absoluto ); 
            break;

        default:
            break;
    }
}
function OperacionesTrigonometricas() {
    let opcionTrigonometricas = prompt("elija que operacion desea hacer \n 1. Seno \n 2. Coseno \n 3. Tangente")
    switch (opcionTrigonometricas) {
        case "1":
            let Seno = parseInt(prompt("Ingrese el numero al que le desea saber el seno"))
            seno( Seno ); 
            break;
        case "2":
            let Coseno = parseInt(prompt("Ingrese el numero que quiera saber su coseno"))
            coseno( Coseno ); 
            break;
        case "3":
            let Tangente = parseInt(prompt("ingrese el numero al que desea saber su tangente"))
            tangente( Tangente ); 
            break;

        default:
            break;
    }
}
export { OperacionesBasicas, OperacionesAvanzadas, OperacionesTrigonometricas }