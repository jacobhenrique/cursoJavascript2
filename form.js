botaoPaciente.addEventListener("click", function (event){

	event.preventDefault();
	
	var form = document.querySelector("#form-adiciona");
	
	//extraindo informações do paciente do form
	var paciente = obtemPacienteDoFormulario(form);
	
	//criar  a tr a td do paciente
	var pacienteTr = montaTr(paciente);

	var erro = validaPaciente(paciente);

	if(erros.length > 0){

		var mensageErro = document.querySelector("#mensagem-erro");
		mensageErro.textContent = erros;
		return;

	}
		

	var tabela = document.querySelector("#tabela-pacientes");
	tabela.appendChild(pacienteTr);

	form.reset();
	
});

function obtemPacienteDoFormulario(form){

	var paciente = {

		nome: form.nome.value,
		peso: form.peso.value,
		altura: form.altura.value,
		gordura: form.gordura.value,
		imc: calculaImc(form.peso.value, form.altura.value)

	}

	return paciente;

}

function montaTr(paciente){

	var pacienteTr = document.createElement("tr");
		
	pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
	pacienteTr.appendChild(montaTd(paciente.peso,"info-peso"));
	pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
	pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
	pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

	return pacienteTr;

}

function montaTd(dado, classe){

	var td = document.createElement("td");
	td.textContent = dado;
	td.classList.add(classe);

	return td;
}

function validaPaciente(paciente){

	var erros = [];

	if(!validaPeso(paciente.peso))	erros.push("O Peso é inválido!");

	if(!validaAltura(paciente.altura)) erros.push("Altura é inválida!");

	return erros;

}
