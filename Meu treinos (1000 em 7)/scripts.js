const formulario = document.querySelector(".formulario");
const mascara = document.querySelector(".mascara-form");
const FaleConosco = document.querySelector(".form")

function mostrarForm() {
    formulario.style.left = "50%";
    formulario.style.transform = "translateX(-50%)"
    mascara.style.visibility = "visible"
}

function esconderForm() {
    formulario.style.left = "-340px";
    formulario.style.transform = "translateX(0)"
    mascara.style.visibility = "hidden"
}

function FaleForm() {
    formulario.style.left = "50%";
    formulario.style.transform = "translateX(-50%)"
    mascara.style.visibility = "visible"
}









