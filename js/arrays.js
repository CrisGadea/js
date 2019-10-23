'use strict'
//Declaración:

var nombres = ["Cristian Gadea", "Roxana Cano", "Lucas Cano",52,true];

var lenguajes = new Array("PHP","JS","Go","Java");
/*
console.log(nombres[0]);

console.log(lenguajes);

console.log(nombres.length);

var elemento = parseInt(prompt(" Que elemento del array quieres?",0));

if (elemento >= nombres.length) {
	alert("Introduce numero correcto que sea menor que " + nombres.length);
}else{
	alert("El usuario seleccionado es: " + nombres[elemento]);
}
*/
document.write("<h1>Lenguajes de programacion del 2019</h1>");
document.write("<ul>");
/*
for (var i = 0; i < lenguajes.length; i++) {
	document.write("<li>"+lenguajes[i]+"</li>");
}

lenguajes.forEach((elemento, index, data)=>{
	document.write("<li>"+elemento+"</li>");
});
*/
for(let lenguaje in lenguajes){
	document.write("<li>"+lenguajes[lenguaje]+"</li>");
}

document.write("</ul>");

// Busquedas
/*
var busqueda = lenguajes.find(function(lenguaje){
	return lenguaje == "PHP";
}); // Callback  O también:
*/

var precios = [10, 20, 50, 80, 12];
//var busqueda = lenguajes.findIndex(lenguaje => lenguaje == "PHP"); // find(elemento) encuentra elemento & findIndex(elemento) su indice

var busqueda = precios.some(precio => precio > 80); // Buscar cumpliendo una condicion concreta

console.log(busqueda);