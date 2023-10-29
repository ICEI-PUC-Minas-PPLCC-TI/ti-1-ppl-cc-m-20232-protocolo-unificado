document.addEventListener('DOMContentLoaded', () => {
    // setCurrentUser({ name: "higor", cpf: "123123123-02" })
});

function login(cpf, password){
    setCurrentUser({ name: "higor", cpf: "123123123-02" })
}

function logout(){ 
    localStorage.clear(); 
}
function setCurrentUser(user){ localStorage.setItem("user", JSON.stringify(user)); }
function getCurrentUser(){ return JSON.parse(localStorage.getItem("user")) }


const usuarios = []
