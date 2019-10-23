'use strict'

var nombre = prompt("Ingresa tu nombre: ");
var apellido = prompt("Ingresa tu apellido: ");

var texto = "Bienvenido " + nombre+" "+apellido+"!";

var texto = `
	<h1>Hola que tal</h1>
	<h2>Mi nombre es: ${nombre}</h2>
	<h2>Mi apellido es: ${apellido}</h2>
`; // Con comillas invertidas puedo imprimir variables dentro de una plantilla
document.write(texto);