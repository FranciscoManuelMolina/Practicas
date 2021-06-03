// noprotect
let frase = "";
let palabra ="";

do {
    palabra = prompt("Escribe una palabra");
    if (palabra !== "." && palabra !== ""){
        frase = frase + " " + palabra;
    }
}while (palabra !== ".");

console.log(frase);