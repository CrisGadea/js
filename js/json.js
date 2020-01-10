'use strict'

var pelicula = {
	titulo: 'Batman vs Superman',
	year: 2017,
	pais: 'EEUU'
}

var peliculas = [
	{
		titulo: 'Superman',
	year: 2016,
	pais: 'British'
	},
	pelicula
];

var caja_peliculas = document.querySelector("#peliculas");

var index;
for(index in peliculas){
	var p = document.createElement("p");
	p.append(peliculas[index].titulo);
	caja_peliculas.append(p);
}