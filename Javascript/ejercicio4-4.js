const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 8, 9];
let repetido = false;
let i = 0;
let j = 0;

while (i < numeros.length && !repetido) {
    while (j < numeros.length) {
        if (numeros[i] === numeros[j]) {
            repetido = true;
            break;
        }
        j++;
    }
    i++;
}

if (repetido) {
    console.log("Hay un número repetido");
} else {
    console.log("No hay un número repetido");
}