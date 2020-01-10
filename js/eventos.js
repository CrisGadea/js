'use strict'
//Eventos del mousse

window.addEventListener('load',() => {
	function cambiarColor(){

		if (boton.style.backgroundColor == "green") {
			boton.style.backgroundColor ="red";
		}
		else{
			boton.style.backgroundColor = "green";
		}
		return true;

	}

	var boton = document.querySelector('#boton');

	boton.addEventListener('click', function(){
		cambiarColor();
	});
});

