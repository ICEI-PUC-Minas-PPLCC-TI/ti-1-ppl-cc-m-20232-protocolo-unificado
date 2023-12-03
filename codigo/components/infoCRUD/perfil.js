document.addEventListener('load', carregarDados, false);

	let urgentButton = document.getElementById("urgentButton");
	if(urgentButton){
		urgentButton.addEventListener("click", () => {
			let id = new URLSearchParams(window.location.search).get("id");
			var path = window.location.pathname.split("/");
			window.location.href = path[path.length - 1] = "urgencia.html"; 
		})
	}

	console.log("urgencia")

	let nomePrinc = document.querySelector('#nomePrinc') ?? { innerHTML: ""};
	let endPrinc = document.querySelector('#endPrinc') ?? { innerHTML: ""} 
	let nome = document.querySelector('#nome') ?? { innerHTML: ""};
	let dataNasc = document.querySelector('#dataNasc') ?? { innerHTML: ""};
	let endereco = document.querySelector('#endereco') ?? { innerHTML: ""};
	let sexo = document.querySelector('#sexo') ?? { innerHTML: ""};
	let sangue = document.querySelector('#sangue') ?? { innerHTML: ""};
	let etnia = document.querySelector('#etnia') ?? { innerHTML: ""};
	let estadoC = document.querySelector('#estadoC') ?? { innerHTML: ""};
	let alt = document.querySelector('#alt') ?? { innerHTML: ""};
	let peso = document.querySelector('#peso') ?? { innerHTML: ""};
	let alergia = document.querySelector('#alergia') ?? { innerHTML: ""};
	let remedio = document.querySelector('#remedio') ?? { innerHTML: ""};
	let vacina = document.querySelector('#vacina') ?? { innerHTML: ""};
	let historico = document.querySelector('#historico') ?? { innerHTML: ""};
	let exame = document.querySelector('#exame') ?? { innerHTML: ""};
	let descricaoExame = document.querySelector('#descricaoExame') ?? { innerHTML: ""};
	let cirurgia = document.querySelector('#cirurgia') ?? { innerHTML: ""};
	let descricaoCirurgia = document.querySelector('#descricaoCirurgia') ?? { innerHTML: ""};
	let internacao = document.querySelector('#internacao') ?? { innerHTML: ""};
	let descricaoInternacao = document.querySelector('#descricaoInternacao') ?? { innerHTML: ""};
	carregarDados();

	function carregarDados() {
		let id = getCurrentUser().id

		fetch(`https://banco-de-dados.prizinhaw.repl.co/pacientes/${id}`) 
		.then(function (response) { return response.json() })
		.then(function(db) {
			nomePrinc.innerHTML = db.nome;
			endPrinc.innerHTML = db.endereco;
			nome.innerHTML = db.nome;
			dataNasc.innerHTML = db.dataNascimento;
			endereco.innerHTML = db.endereco;
			sexo.innerHTML = db.sexo;
			sangue.innerHTML = db.tipoSanguineo;
			etnia.innerHTML = db.etnia;
			estadoC.innerHTML = db.estadoCivil;
			alt.innerHTML = db.altura;
			peso.innerHTML = db.peso;
			alergia.innerHTML = db.alergias;
			remedio.innerHTML = db.medicamentosEmUso;
			vacina.innerHTML = db.vacinasRecebidas;
			historico.innerHTML = db.historicoDeDoencas;
			exame.innerHTML = db.exame; 
			descricaoExame.innerHTML = db.descricaoExame; 
			cirurgia.innerHTML = db.cirurgia; 
			descricaoCirurgia.innerHTML = db.descricaoCirurgia; 
			internacao.innerHTML = db.internacao;
			descricaoInternacao.innerHTML = db.descricaoInternacao;
		})
}
