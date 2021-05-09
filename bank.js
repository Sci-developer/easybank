const mobileMenu = document.querySelector ("#mobile-menu");
const navbarLists = document.querySelector (".navbar-lists");

mobileMenu.addEventListener ("click" , function(){
    navbarLists.classList.toggle ("slide");
    mobileMenu.classList.toggle ("aid")
});