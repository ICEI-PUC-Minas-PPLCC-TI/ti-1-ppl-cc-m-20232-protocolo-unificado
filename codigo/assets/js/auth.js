document.addEventListener('DOMContentLoaded', () => 
{
	if(!getCurrentUser() && !window.location.pathname.includes("login.html"))
		window.location.href = "login.html"

	if(getCurrentUser() && window.location.pathname.includes("login.html"))
		window.location.href = "home.html"
});

async function login(id, password){
	fetch(`https://banco-de-dados.prizinhaw.repl.co/pacientes`)
		.then(c => c.json())
		.then((data) => {
			const user = data.find(c => c.id === +id);
			if(user){
				setCurrentUser(user);
				window.location.href = "home.html"

			}
		});
}

function logout(){ 
	localStorage.clear(); 
}

function setCurrentUser(user){ localStorage.setItem("user", JSON.stringify(user)); }
function getCurrentUser(){ return JSON.parse(localStorage.getItem("user")) }


const usuarios = []
