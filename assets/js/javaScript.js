//* ---------------------- Daniel ---------------------- */

const toggle = document.getElementById("toggle");
const nav = document.getElementById("nav-menu");
const links = document.querySelectorAll(".nlinks");
let togglear = () =>{
    nav.classList.toggle("nav-visible")
}

toggle.addEventListener("click", togglear);
for (let index = 0; index < links.length; index++) {
    links[index].addEventListener("click", togglear);
    
}




//* ---------------------- Victoria ---------------------- */
