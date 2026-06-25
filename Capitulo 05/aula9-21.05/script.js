var pacientes = document.querySelectorAll('.paciente');

for (var i = 0; i < pacientes.length; i++) {
	var peso = parseFloat(pacientes[i].querySelector('.info-peso').innerHTML);
	var altura = parseFloat(pacientes[i].querySelector('.info-altura').innerHTML);
	var imc = peso / (altura * altura);
	pacientes[i].querySelector('.info-imc').innerHTML = imc.toFixed(2);
}