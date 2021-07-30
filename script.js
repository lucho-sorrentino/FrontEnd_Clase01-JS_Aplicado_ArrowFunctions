
    ///////// EJERCICIOS CLASE 01 JS APLICADO /////////

//     ********** Ejercicio 01 **********
// Crear una función flecha que reciba un número y devuelva el doble del mismo.

// ANTES:
// function doble (num) {
//     return alert(num*2);
// }

// doble (8);

// AHORA:
// let doble = num => num*2;
// alert( doble(8) );




//     ********** Ejercicio 02 **********
// Crear una función flecha que reciba dos números y muestre la suma de ellos.

// let suma = (n1, n2) => n1 + n2;
// alert( suma(2,8));


//     ********** Ejercicio 03 **********
// Crear una función flecha que valide si un número es mayor a otro. Luego mostrar el resultado por consola.
// ANTES:
// function mayor (n1, n2) {
//      return Math.max(n1, n2);
// }

// console.log( mayor(0.1, 0.2));

// ARROW FUNCTION:
// let mayor = (n1, n2) => Math.max(n1, n2);
// console.log( mayor(1, 2));



//     ********** Ejercicio 04 **********
// Mostrar por pantalla uno por uno, reccoriéndolo, el siguiente array:
// let frutas = ["sandía","manzana","damasco","pelón","frambuesa","plátano"]

// ANTES:
// function mostrar () {
//     for (i=0; i<frutas.length; i++) {
//     console.log( frutas[i]);
//     }
// }

// mostrar(frutas);

// ARROW FUNCTION:
// frutas.forEach(fruta => console.log(fruta));





//     ********** Ejercicio 05 **********
// Mostrar por pantalla las raíces cuadradas de los números del siguiente array:
// let numeros = [16,29,120,64,81]
// let raices = numeros.map(Math.sqrt);
// console.log(raices);



//     ********** Ejercicio 06 **********
// Solicitar al usuario su nombre y su signo del zodíaco y devolver un mensaje que devuelva esos mismos datos. Ejemplo: “Su nombre es Fermin y su signo es Escorpio”.

// let nombre = prompt("¿Cuál es su nombre?");
// let signo = prompt("¿Cuál es su signo?");
// alert(`Su nombre es ${nombre} y su signo es ${signo}`)




//     ********** Ejercicio 07 **********
// Mostrar por pantalla los números mayores a 100 del siguiente array.

// let numeros = [160,23,120,60,1,-10,8,9483]
// let mayores = numeros.filter(num => num>100)
// console.log(mayores);




//     ********** Ejercicio 08 **********
// Generar en base a un array, un nuevo array que tenga todos sus números consecutivos y otro con sus números precedentes. Ejemplo: Si el número es 8, en el array de consecutivos irá 9 y en el array de precedentes irá 7). Al final mostrar por pantalla los tres arrays formados.

// let numeros = [15,28,32,40,11,-3,0,100]

// ANTES
// function consecutivos (arreglo) {
//     let numConsecutivos = [];
//     let consec;
//     for (let i = 0; i < arreglo.length; i++) {
//         consec = numeros[i] + 1;
//         numConsecutivos.push(consec);
//     }
//     console.log(numConsecutivos);
// }

// consecutivos(numeros);

// AHORA

// console.log( `Los números iniciales son: ${numeros}` );

// let consecutivos = numeros.map(n => n + 1)
// console.log( `Los números consecutivos son: ${consecutivos}`);

// let precedentes = numeros.map(n => n - 1)
// console.log( `Los numeros precedentes son: ${precedentes}` );


//     ********** Ejercicio 09 **********
// Crear una función flecha que reciba un parámetro que indique el momento del día: “Mañana, tarde, noche” y, en base a eso, dé un saludo personalizado. Ejemplo: “Buenos días, buenas tardes, buenas noches”.

// ANTES:
// let momento = prompt("¿En qué momento del día se encuentra?");
// function saludo () {
//     if (momento === "mañana") {
//         alert ("Buenos días");
//     } else if (momento === "tarde") {
//         alert ("Buenas tardes");
//     } else {
//         alert ("Buenas noches");
//     }
// }
// saludo(momento);

// AHORA:
// let momento = prompt("¿En qué momento del día se encuentra?");
// momento => momento 
//     if (momento === "mañana") {
//         alert("Buenos días");
//     } else if (momento === "tarde") {
//         alert("Buenas tardes");
//     } else {
//         alert("Buenas noches");
//     }






//     ********** Ejercicio 10 **********
// Mostrar del siguiente array los nombres que comiencen con “M”.
// let personas = ["Mario","Santino","Clotilde","Margarita","Sebastian","Melchor","Macarena","Flavio"]

// ANTES
// function nombresM (arreglo) {
//     for (let i = 0; i < arreglo.length; i++) {
//         if (arreglo[i].charAt(0) === "M") {
//             console.log(arreglo[i]);    
//         }
//     }
// }
// nombresM(personas);

// AHORA:
// personas.forEach( nombre => { if (nombre.charAt(0) === "M")
//     console.log(nombre)
// })

// TAMBIEN:
// let nombresConM = personas.filter( nombre => nombre.charAt(0) === "M"); 
// console.log(nombresConM)






//     ********** Ejercicio 11 **********
// Transformar las siguientes funciones a ArrowFunctions y aplicar TemplateStrings cuando corresponda:
// a) function despedir (nombre){
// console.log("Adios" + nombre) }    

// let despedir = name => `Adiós ${name}`
// let nombre = prompt("¿Cuál es tu nombre?");
// console.log( despedir(nombre) );



// b) function cobrar (monto, pago) {
// return monto - pago;}
// console.log( "Su vuelto es: " cobrar(monto,pago) );

// let cobrar = (monto, pago) => pago - monto;
// let monto = parseInt( prompt("Ingrese monto a cobrar:") );
// let pago = parseInt( prompt("¿Con cuánto va a pagar?") ) ;
// console.log(`Su vuelto es de ${cobrar(monto, pago)}`)

 
// c) function saludar () {
// console.log("Hola") }
    

// let saludar = () => console.log("Hola");
// saludar()