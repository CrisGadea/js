'use strict'

//DOM - Document Object Model

function cambiaColor(color){
	caja.style.color = color;
}

function cambiaColorDeFondo(background){
	caja.style.background = background;
}

//var caja = document.getElementById("micaja");

var caja = document.querySelector("#micaja");

caja.innerHTML = "¡TEXTO EN LA CAJA DESDE JS!";

caja.style.background = "red";

caja.style.padding = "20px";

caja.style.color = "white";

caja.className = "clase1 clase2";


// Consaeguir elementos por etiqueta
var todosLosDivs = document.getElementsByTagName('div');

var contenidoEnTexto = todosLosDivs[2].textContent;

var valor;
var seccion = document.querySelector("#miseccion");
var hr = document.createElement("hr");
for(valor in todosLosDivs){
	if (typeof todosLosDivs[valor].textContent == 'string') {
		var parrafo = document.createElement("p");
		var texto = document.createTextNode(todosLosDivs[valor].textContent);
		parrafo.append(texto);
		seccion.append(parrafo);
	}	
}
seccion.append(hr);
//// Consaeguir elementos por clase

var divsRojos = document.getElementsByClassName('rojo');
var div;
for(div in divsRojos){
	if (divsRojos[div].className == "rojo") {
	divsRojos[div].style.background = "red";
	}
}