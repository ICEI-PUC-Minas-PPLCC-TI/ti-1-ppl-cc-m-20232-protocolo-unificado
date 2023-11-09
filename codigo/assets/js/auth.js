document.addEventListener('DOMContentLoaded', () => {
    // setCurrentUser({ name: "higor", cpf: "123123123-02" })
    console.log("CARREGAR");

    // if(!getCurrentUser())
    //     window.location.href = "E:\\Repos\\ti-1-ppl-cc-m-20232-protocolo-unificado\\codigo\\pages\\infoCRUD\\cadastro.html"
});

async function login(id, password){
    // setCurrentUser({ name: "higor", cpf: "123123123-02" })

    fetch(`https://banco-de-dados.prizinhaw.repl.co/pacientes`)
        .then(c => c.json())
        .then((data) => {
            const user = data.find(c => c.id === +id);
            console.log(user, id)
            if(user){
                setCurrentUser(user);
                window.location.href = "E:\\Repos\\ti-1-ppl-cc-m-20232-protocolo-unificado\\codigo\\pages\\infoCRUD\\inicial.html"

            }
        });
}

function logout(){ 
    localStorage.clear(); 
}

function setCurrentUser(user){ localStorage.setItem("user", JSON.stringify(user)); }
function getCurrentUser(){ return JSON.parse(localStorage.getItem("user")) }


const usuarios = []
