'use strict'

window.addEventListener('load', function(){
	console.log("DOM cargado!!");

	var formulario = document.querySelector("#form");
	var box_dashed = document.querySelector(".dashed");
	box_dashed.style.display = "none";

	formulario.addEventListener('submit', function(){
		console.log("Evento submit capturado");
		
		var nombre = document.querySelector("#nombre").value;
		var edad = parseInt(document.querySelector("#edad").value);
		var apellido = document.querySelector("#apellido").value;

		if (nombre.trim() == null || nombre.trim().length == 0) {
			alert("El nombre no es válido");
			return false;
		}

		if (apellido.trim() == null || apellido.trim().length == 0) {
			alert("El apellido no es válido");
			return false;
		}

		if (edad == null || edad <= 0 || isNaN(edad)) {
			alert("La edad no es válida");
			return false;
		}

		box_dashed.style.display = "block";

		/*

		var datos_usuario = [nombre, apellido, edad];

		var indice;

		for (indice in datos_usuario) {
			var parrafo = document.createElement("p");
			parrafo.append(datos_usuario[indice]);
			box_dashed.append(parrafo);

		}
	*/

	var p_nombre = document.querySelector("#p_nombre span");
	var p_apellido = document.querySelector("#p_apellido span");
	var p_edad = document.querySelector("#p_edad span");

	p_nombre.innerHTML = nombre;
	p_apellido.innerHTML = apellido;
	p_edad.innerHTML = edad;

	});
});