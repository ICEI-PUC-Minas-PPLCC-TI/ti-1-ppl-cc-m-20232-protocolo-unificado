document.addEventListener('DOMContentLoaded', () => {
	buildNavbarWithItems([
		{ 
			icon: '<i class="fa fa-laptop-medical"></i>', 
			name: "Home", 
			onclick: () => goTo("E:\\Repos\\ti-1-ppl-cc-m-20232-protocolo-unificado\\codigo\\pages\\infoCRUD\\urgencia.html")
		},
		{ 
			icon: '<i class="fa fa-pills"></i>', 
			name: "Medicines", 
			onclick: () => goTo("E:\\Repos\\ti-1-ppl-cc-m-20232-protocolo-unificado\\codigo\\pages\\medicineCRUD\\index.html")
		},
		{ 
			icon: '<i class="fa fa-syringe"></i>', 
			name: "Vaccines", 
			onclick: () => goTo(`E:\\Repos\\ti-1-ppl-cc-m-20232-protocolo-unificado\\codigo\\pages\\vaccineCRUD\\index.html`)
		},
	])
});

function buildNavbarWithItems(items){
	var navbar = createNavbar();
	for(var item of items){
		navbar.appendChild(createItem(item))
	}

	buildLogoutButton(navbar);
	buildLoginButton(navbar);
}

function buildLoginButton(navbar){
	var loginTestItem = createItem({ 
		icon: '<i class="fa fa-sign-in-alt"></i>', 
		name: "Login", 
		onclick: () => { setCurrentUser({ name: "higor", cpf: "123123123-02" }); }
	})
	navbar.appendChild(loginTestItem);
}

function buildLogoutButton(navbar){
	
	var logoutItem = createItem({ 
		icon: '<i class="fa fa-sign-out-alt"></i>', 
		name: "Logout", 
		onclick: () => { logout(); }
	})

	logoutItem.classList.add("last-item");
	navbar.appendChild(logoutItem);
}

function goTo(url){
	window.location.href = url+window.location.search;
}

function createNavbar(){
	var navbar = document.getElementById('navbar');
	navbar.classList.add("navbar");
	return navbar;
}

function createItem(item){
	var navbarItem = document.createElement("button");
	navbarItem.classList.add("navbar-item");
	navbarItem.onclick = item.onclick;
	navbarItem.innerHTML += item.icon;
	navbarItem.title = item.name;

	return navbarItem;
}
