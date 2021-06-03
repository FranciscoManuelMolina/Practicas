const numeros = [1, 2, 3, 4, 5, -6, 7, 8, 9, 0];
let positivos = 0;
let negativos = 0;
let ceros = 0;

for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] > 0) {
        positivos++;
    } else if(numeros[i] < 0) {
        negativos++;
    } else {
        ceros++;
    }
}

console.log(`Positivos: ${positivos} Negativos: ${negativos} Ceros: ${ceros}`);