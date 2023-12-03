document.addEventListener("DOMContentLoaded", function () {
	const examDetails = document.getElementById("exam-details");
	const addExamButton = document.getElementById("add-exam-button");

	carregarDados(); 
	
	var pesquisa = document.getElementById("pesquisa");
	pesquisa.oninput = _.debounce(() => {
		console.log(pesquisa.value)
		mostrarPedidos((exam) => {

			for(var prop in exam){
				console.log(exam[prop], pesquisa.value,(''+exam[prop]).includes(pesquisa.value));
				if((''+exam[prop]).includes(pesquisa.value))
					return true;
			}

			return false;
		})
	}, 500)


	// Função para carregar os dados a partir do LocalStorage ou do JSON
	function carregarDados() {
		mostrarPedidos((e) => true);
		fetch("https://banco-de-dados.prizinhaw.repl.co/exames")
			.then((response) => response.json())
			.then((data) => {
				var c = document.getElementById("exames-select");
				for(var exam of  data){
					var option = document.createElement("option");
					option.innerHTML = exam.nome;
					option.value = exam.id;
					c.appendChild(option)
				}

				dadosExames = { pedidos:data }; 
			})
			.catch((error) => { });

	}
	
	// Função para mostrar a lista de pedidos
	function mostrarPedidos(filtro) {
		
		fetch("https://banco-de-dados.prizinhaw.repl.co/examesPaciente")
			.then((response) => response.json())
			.then((exames) => {
				examDetails.innerHTML = "";
				for(var exam of exames) 
				{
					if(exam && +exam.paciente == getCurrentUser().id && filtro(exam)) {
						const exameElement = document.createElement("div");
						exameElement.className = "exam-container";
						exameElement.innerHTML = `
						<p><strong>ID:</strong> ${exam.id}</p>
							<p><strong>Nome do Exame:</strong> ${exam.nome}</p>
							<p><strong>Data:</strong> ${exam.data}</p>
							<p><strong>Resultado:</strong> ${exam.resultado}</p>
							<p><strong>Valor de Referência:</strong> ${exam.referencia}</p>
						`;
						examDetails.appendChild(exameElement);
					}
				}
			})
			.catch((error) => { });
	}


	// Função para adicionar um novo exame
	function adicionarExame() {
		console.log("ta aqui")
		const examID = document.getElementById("exames-select").value;
		const examDate = document.getElementById("exam-date").value;
		const examValue = document.getElementById("exam-result").value;


		var examePaciente = {
			id: uuidv4(),
			exame: +examID,
			paciente: +getCurrentUser().id,
			valor: +examValue,
			data: examDate
		}

		fetch("https://banco-de-dados.prizinhaw.repl.co/examesPaciente", {
			method: "POST",
			body: JSON.stringify(examePaciente)
		})
			.then((response) => response.json())
			.then((data) => {
				console.log(data)
			})
			.catch((error) => {
			});


	}

	addExamButton.addEventListener("click", adicionarExame);
});


function uuidv4() {
	return "10000000-1000-4000-8000-100000000000".replace(/[018]/g, c =>
	  (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
	);
  }