let numero = prompt("Introduce un numero");

if (numero % 2 === 0){
    if (numero >= 0){
        console.log("El numero es par y positivo");
    }
    else {
        console.log("El numero es par y negativo");
    }
}
else {
    if (numero >= 0){
        console.log("El numero es impar y positivo");
    }
    else {
        console.log("El numero es impar y negativo");
    }
}