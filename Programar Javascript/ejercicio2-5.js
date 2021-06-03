let peso = parseInt(prompt("Introduce tu peso en kilos"));
let altura = parseInt(prompt("Introduce tu altura en centimetros"));
let imc = peso / ((altura / 100) * (altura / 100));

if (imc < 16){
    console.log("Necesitas comer");
}
else if(imc >=16 && imc < 25){
    console.log("Estás bien");
}
else if(imc >= 25 && imc < 30){
    console.log("Tienes sobrepeso");
}
else if(imc >=30){
    console.log("Tienes un problema de obesidad");
}