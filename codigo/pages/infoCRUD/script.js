btnCarregar = document.getElementById('btnEnviar')
btnCarregar.addEventListener('click', adicionarPaciente, false)


function adicionarPaciente(e) {
  e.preventDefault();
  var pessoa = {
    'nome':document.getElementById("nome").value,
    'dataNascimento':document.getElementById("data-nascimento").value,
    'endereco':document.getElementById("endereco").value,
    'sexo':document.getElementById("sexo").value,
    'tipoSanguineo':document.getElementById("tipo-sanguineo").value,
    'etnia': document.getElementById("etnia").value,
    'estadoCivil': document.getElementById("estadoC").value,
    'altura':document.getElementById("altura").value,
    'peso':document.getElementById("peso").value,
    'alergias':document.getElementById("alergias").value,
    'medicamentosEmUso':document.getElementById("medicamentos-em-uso").value,
    'vacinasRecebidas':document.getElementById("vacinas-recebidas").value,
    'historicoDeDoencas':document.getElementById("historico-de-doencas").value,
    'exame':document.getElementById("exame").value,
    'descricaoExame': document.getElementById("descricao_exame").value,
    'cirurgia': document.getElementById("cirurgia").value,
    'descricaoCirurgia': document.getElementById("descricao_cirurgia").value,
    'internacao': document.getElementById("internacao").value,
    'descricaoInternacao': document.getElementById("descricao_internacao").value
  }

  fetch('https://banco-de-dados.prizinhaw.repl.co/pacientes', { 
    method: 'POST', // or 'PUT'
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(pessoa),
  })
      .then(function (response) { return response.json() })
      .then(data => { 
        console.log(window.location);
        var path = window.location.pathname.split("/");
        window.location.href = path[path.length - 1] = "inicial.html?id="+data.id;
       });
}


function removerPaciente(id) {

  fetch(`https://banco-de-dados.prizinhaw.repl.co/pacientes/${id}`, { 
    method: 'DELETE', // or 'PUT'
  })

}
