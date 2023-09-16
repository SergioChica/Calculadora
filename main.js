import { OperacionesAvanzadas, OperacionesBasicas, OperacionesTrigonometricas } from "./ingresoUsuario.js"

function ingresar() {
    let opciones= prompt("elija que operaciones desea hacer \n 1. Operaciones básicas \n 2. Operaciones Avanzadas \n 3. Operaciones trigonometricas")
    switch (opciones) {
        case "1":
            OperacionesBasicas();
            break;
        case "2":
            OperacionesAvanzadas();
        break;
        case "3":
            OperacionesTrigonometricas();
            break;

        default:
            break;
    }
}
ingresar();