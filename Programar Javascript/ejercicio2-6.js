let dorsal = prompt("Introduce un numero de dorsal (0-99)");

if (dorsal < 0 || dorsal > 99){
    console.log("Error dorsal no disponible");
}
else {
    switch (dorsal) {
        case "1":
            console.log("Portero");
            break;
        case "3":
        case "4":
        case "5":
            console.log("Defensa");
            break;
        case "6":
        case "8":
        case "11":
            console.log("Centro campista");
            break;
        case "9":
            console.log("Delantero");
            break;
        default:
            console.log("Cualquiera");
            break;
    }
}
