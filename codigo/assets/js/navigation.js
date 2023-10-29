document.addEventListener('DOMContentLoaded', () => {
    buildNavbarWithItems([
        { 
            icon: '<i class="fa fa-laptop-medical"></i>', 
            name: "Home", 
            onclick: () => goTo("test")
        },
        { 
            icon: '<i class="fa fa-pills"></i>', 
            name: "Medicines", 
            onclick: () => goTo("test")
        },
        { 
            icon: '<i class="fa fa-syringe"></i>', 
            name: "Vaccines", 
            onclick: () => goTo("test")
        },
    ])
});

function buildNavbarWithItems(items){
    var navbar = createNavbar();
    console.log(getCurrentUser());
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
    // window.location.hostname = url+window.location.search;
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
