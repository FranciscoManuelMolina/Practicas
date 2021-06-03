let valor = prompt("Introduce un numero");

if (valor > 0 && (valor % 2 === 0)) {
    let resultado = "";
    for (let i = 0; i < valor; i++) {
        resultado = resultado + "*";
    }
    console.log(resultado);
} else {
    console.log("El numero no es ni mayor a 0 ni par");
}