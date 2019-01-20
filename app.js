var inpQtd = document.getElementById("qtd");
var btnIncrementa = document.querySelector("#btn-incrementa");

// ao cliclar no botão
btnIncrementa.addEventListener('click', incrementa);

// incrementar quantidade de pizza
function incrementa() {
    inpQtd.value++;
}