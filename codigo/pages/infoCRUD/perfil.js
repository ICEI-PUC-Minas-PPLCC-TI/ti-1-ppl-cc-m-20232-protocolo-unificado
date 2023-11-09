window.addEventListener('load', carregarDados, false);

let urgentButton = document.getElementById("urgentButton");
urgentButton.addEventListener("click", () => {
  let id = new URLSearchParams(window.location.search).get("id");
  var path = window.location.pathname.split("/");
  console.log(id,path)
  window.location.href = path[path.length - 1] = "urgencia.html?id="+id; 
})

let nomePrinc = document.querySelector('#nomePrinc');
let endPrinc = document.querySelector('#endPrinc'); 
let nome = document.querySelector('#nome');
let dataNasc = document.querySelector('#dataNasc');
let endereco = document.querySelector('#endereco');
let sexo = document.querySelector('#sexo');
let sangue = document.querySelector('#sangue');
let etnia = document.querySelector('#etnia');
let estadoC = document.querySelector('#estadoC');
let alt = document.querySelector('#alt');
let peso = document.querySelector('#peso');
let alergia = document.querySelector('#alergia');
let remedio = document.querySelector('#remedio');
let vacina = document.querySelector('#vacina');
let historico = document.querySelector('#historico');
let exame = document.querySelector('#exame');
let descricaoExame = document.querySelector('#descricaoExame');
let cirurgia = document.querySelector('#cirurgia');
let descricaoCirurgia = document.querySelector('#descricaoCirurgia');
let internacao = document.querySelector('#internacao');
let descricaoInternacao = document.querySelector('#descricaoInternacao');

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
