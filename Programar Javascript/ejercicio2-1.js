let numero1 = prompt("Introduce un numero");
let numero2 = prompt("Introduce otro numero");

if (numero1 > numero2) {
    console.log(numero1 + " es mayor que " + numero2);
}
else if(numero2 > numero1) {
    console.log(numero2 + " es mayor que " + numero1);
}
else {
    console.log(numero1 + " y " + numero2 + " son iguales");
}
