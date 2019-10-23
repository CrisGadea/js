'use strict'

var categorias = ['Accion', 'Terror','Comedia'];
var peliculas = ['La verdad duele', 'La vida es bella', 'Gran Torino'];

var cine = [categorias, peliculas];

console.log(peliculas);

peliculas.sort(); // Ordena el aray alfabetica-numericamente

peliculas.reverse(); // Invierte el orden del array

//console.log(cine[0][1]);
//
do{
	var elemento = prompt("Introduce tu pelicula: ");
	peliculas.push(elemento);
}
while(elemento != "ACABAR");

//peliculas.pop();

//peliculas[0] = undefined; // Cancelo una propiedad del array

//peliculas.push("Batman");

var indice = peliculas.indexOf('Gran Torino');

if (indice > -1) {peliculas.splice(indice, 1);} // splice elimina el elemento seleccionado con ese indice a partir de un caracter de busqueda

var peliculas_string = peliculas.join(); // Transforma un array en un texto separado por comas

console.log(peliculas_string);

console.log(peliculas);

// Transformar una cadena en Array
var cadena = "texto1, texto2, texto3";
var cadeana_array = cadena.split(", "); // Convierte en array texto separado por todo lo que tenga lo que defina en los parametros

console.log(cadeana_array); 


