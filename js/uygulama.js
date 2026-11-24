const ucCizgi = document.querySelector("#hamburger-ac");
const xIsareti = document.querySelector("#menu-kapat");
const sagMenu = document.querySelector("#yan-menu");

ucCizgi.addEventListener("click" , function() {
    sagMenu.classList.remove("gizli");
});

xIsareti.addEventListener("click" ,function() {
    sagMenu.classList.add("gizli"); 
});
