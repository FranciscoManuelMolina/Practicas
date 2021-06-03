const numeros = [5.0, 10.0, 5.5, 0.1, 3.2];
let suma = 0;
let media = 0;

for (let i = 0; i < numeros.length; i++) {
    suma = suma + numeros[i];
}
media = suma / numeros.length;

console.log("Media: " + media);