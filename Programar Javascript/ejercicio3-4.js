let numero = prompt("Introduce un número");
let resultado = "";

for (let x = 0; x < numero; x++) {
    for (let y = 0; y < numero; y++) {
        resultado = resultado + "*";
    }
    resultado = resultado + "\n";
}
console.log(resultado);
