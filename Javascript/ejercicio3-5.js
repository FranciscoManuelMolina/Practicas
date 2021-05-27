let numero = prompt("Introduce un número");
let factorial = 1;

for (let i = numero; i > 0; i--) {
    factorial = factorial * i;
}

console.log("El factorial es: " + factorial);