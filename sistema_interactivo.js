
// le pedimos los datos al usuario, el nombre y la edad
console.log("¡bienvenido al sistema interactivo de mensajes!");
let nombre = prompt("por favor, ingrese su nombre");
let edad = prompt("por favor, ingrese su edad");
//aqui con parseInt convertimos la edad en numero si ingresan letras con numeros solo tomara los valores numerico, ejemplo: si el usuario ingresa 123abcd el solo tomara los valores"123" es decir paraseInt solo toma los nuero en este caso en especifico
edad = parseInt(edad);
// aqui esta funcion intera sobre el valor "edad" y si el usuario ingreso un valor no numerico le muestra el mensaje que debe ingresar la edad en numero, en el else if si la edad es menor a 18  le mostrara que es menor de edad y le dira que siga aprediendo y disfrutando de la progamacion, sino le mostrara que es mayor de edad y tiene muchas oportunidades  
if(isNaN(edad)){
     console.error("por favor, ingrese la edad en numeros ");
} else if(edad < 18){
    alert(`hola ${nombre}, eres menor de edad. ¡sigue aprendiendo y disfrutando del codigo!`)
} else {
    alert(`hola ${nombre}, eres mayor de edad. ¡preparate para grandes oportuninades en el mundo de la progamacion!`)
}
