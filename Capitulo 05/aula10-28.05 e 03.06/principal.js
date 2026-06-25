function validaPeso(peso) {
	if (peso <= 0 || peso >= 1000) {
		return false;
	}
	return true;
}

function validaAltura(altura) {
	if (altura <= 0 || altura >= 3) {
		return false;
	}
	return true;
}

function validaPaciente(nome, peso, altura, gordura) {
	var erros = [];

	if (nome === '') {
		erros.push('O nome não pode ser em branco');
	}
	if (gordura === '') {
		erros.push('A gordura não pode ser em branco');
	}
	if (peso === '') {
		erros.push('O peso não pode ser em branco');
	} else if (!validaPeso(parseFloat(peso))) {
		erros.push('Peso é inválido');
	}
	if (altura === '') {
		erros.push('A altura não pode ser em branco');
	} else if (!validaAltura(parseFloat(altura))) {
		erros.push('Altura é inválida');
	}

	return erros;
}

function exibeErros(erros) {
	var lista = document.getElementById('lista-erros');
	lista.innerHTML = '';
	for (var i = 0; i < erros.length; i++) {
		var item = document.createElement('li');
		item.innerHTML = erros[i];
		lista.appendChild(item);
	}
}

function adicionaPaciente(nome, peso, altura, gordura) {
	var tabela = document.getElementById('tabela-pacientes');
	var tr = document.createElement('tr');
	tr.className = 'paciente';

	var imc = (parseFloat(peso) / (parseFloat(altura) * parseFloat(altura))).toFixed(2);

	tr.innerHTML =
		'<td class="info-nome">' + nome + '</td>' +
		'<td class="info-peso">' + peso + '</td>' +
		'<td class="info-altura">' + altura + '</td>' +
		'<td class="info-gordura">' + gordura + '</td>' +
		'<td class="info-imc">' + imc + '</td>';

	tabela.appendChild(tr);
}

function limpaFormulario() {
	document.getElementById('nome').value = '';
	document.getElementById('peso').value = '';
	document.getElementById('altura').value = '';
	document.getElementById('gordura').value = '';
	document.getElementById('lista-erros').innerHTML = '';
}

var pacientes = document.querySelectorAll('.paciente');
for (var i = 0; i < pacientes.length; i++) {
	var peso = parseFloat(pacientes[i].querySelector('.info-peso').innerHTML);
	var altura = parseFloat(pacientes[i].querySelector('.info-altura').innerHTML);
	var imc = peso / (altura * altura);
	pacientes[i].querySelector('.info-imc').innerHTML = imc.toFixed(2);
}

document.getElementById('btn-adicionar').addEventListener('click', function() {
	var nome = document.getElementById('nome').value;
	var peso = document.getElementById('peso').value;
	var altura = document.getElementById('altura').value;
	var gordura = document.getElementById('gordura').value;

	var erros = validaPaciente(nome, peso, altura, gordura);

	exibeErros(erros);

	if (erros.length === 0) {
		adicionaPaciente(nome, peso, altura, gordura);
		limpaFormulario();
	}
});