'use strict'

//Transformacion de cadenas de texto

var numero = 444;
var texto1 = "Curso de JS en el que podras aprender todos los frameworks!";
var texto2 = "Excelente curso";

var dato = numero.toString(); // Convertimos a una variable o dato en String
dato = texto1.toUpperCase(); // Convierto el texto en Mayus -- toLowerCase(); a MIN
dato = texto2.toLowerCase();
console.log(dato); // Muestro el dato en consola

// Calcular longitud de un texto
var nombre = "Cristian";
console.log(nombre.length); // Muestra la cantidad de elementos de la cadena de texto u array
var textoTotal = texto1+" "+texto2; // O bien, = texto1.concat(" "+texto2);
console.log(textoTotal);

//Buscar una palabra en un String
var busqueda = texto1.indexOf("Curso"); //Muestra en qué caracter comienza la palabr / -1 si no existe
var busqueda = texto1.search("Curso"); //Muestra en qué caracter comienza la palabra
var busqueda = texto1.match("Curso"); //Muestra un array con los resultados / Para buscar todas las veces que se encuentra se debe poner entre /{oalabra}/g
var busqueda = texto1.lastIndexOf("Curso"); //Muestra en qué caracter se usa por última vez la palabra
var busqueda = texto1.substr(15,9); // Sacar la palabra desde el caracter indicado, la cantidad de caracteres a sacar
var busqueda = texto1.charAt(); // Devuelve el caracter ubicado en la posicion que le indique en el parametro
var busqueda = texto1.startsWith("Curso"); // Busca al inicio del String o endsWith() finaliza en...
var busqueda = texto1.includes("aprender"); // Si existe la palabra en el texto (T o F)

var busqueda = texto1.replace("JS", "JavaScript"); //Reemplaza el primer texto por el segundo
var busqueda = texto1.slice(15); // Separa un String a partir del caracter seleccionado o hasta el del segundo parametro
var busqueda = texto1.split(" "); //Recorta una palabra y la guarda en un array sirve para hacer buscadores
var busqueda = texto1.trim(); // Recorta los espacios

console.log(busqueda);
