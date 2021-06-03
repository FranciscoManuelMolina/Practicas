let numero = prompt("Introduce un número");
let resultado = "";

if (numero > 0 && (numero % 2 === 0)){
    for (let i = 0; i < numero; i++) {
        if (i % 2 === 0) {
            resultado = resultado + "*";
        } else {
            resultado = resultado + "-";
        }
    }
    resultado = resultado + "*";
    console.log(resultado);
} else {
    console.log("El numero de es ni positivo ni par");
}