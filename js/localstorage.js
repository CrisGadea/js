'use strict'

//LocalStorage (Mantiene la información dentro de la navegación, parecido a la sesión en backend)


//Comprobar disponibilidad del localstorage

if (typeof(Storage) !== 'undefined') {
	console.log("localstorage disponible");
}else{
	console.log("localstorage no disponible");
}

//Guardar datos, solo puedo string o int

localStorage.setItem("titulo","Curso de JS");

//Recuperar elemento 

document.querySelector("#peliculas").innerHTML = localStorage.getItem("titulo");

//Guardar objetos

var usuario = {
	nombre: "Cristian Gadea",
	email: "cristiangadea@mail.com",
	web: "cristiangadea.com"
};

localStorage.setItem("usuario",JSON.stringify(usuario));

//Recuperar ojeto del localstorage

//Parsea a JSON
var userjs = JSON.parse(localStorage.getItem("usuario"));

console.log(userjs);