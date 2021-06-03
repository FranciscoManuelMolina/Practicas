let numero = parseInt(prompt("Introduce un numero"));

for (let i = numero; i > 0; i--) {
    if (i === 1) {
        console.log("El numero es primo");
        break;
    } else if ((numero % i === 0) && (i !== numero)) {
        console.log("El numero no es primo");
        break;
    }
}