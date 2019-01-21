// variaveis
var inpQtd = document.getElementById("qtd");
var btnIncrementa = document.querySelector("#btn-incrementa");
var btnDecrementa = document.querySelector("#btn-decrementa");

// ao cliclar no botão +
btnIncrementa.addEventListener('click', incrementa);

// ao cliclar no botão -
btnDecrementa.addEventListener('click', decrementa);

// incrementar quantidade de pizza
function incrementa() {
    inpQtd.value++;
    var item = btnIncrementa.closest('.item');
    adicionaAoTotal(pegarPrecoItem(item));

}

// decrementar quantidade de pizza
function decrementa() {
    inpQtd.value--;
    var item = btnDecrementa.closest('.item');
    removerDoTotal(pegarPrecoItem(item));
}

// pegar preço do item
function pegarPrecoItem(item) {
    var preItem = item.querySelector('.preco-item');
    return Number(preItem.textContent);
}

// adicionar valor ao total
function adicionaAoTotal(valor) {
    var total = document.querySelector('#total');
    total.textContent = Number(total.textContent) + valor;
}

// remover valor do total
function removerDoTotal(valor) {
    var total = document.querySelector('#total');
    total.textContent = Number(total.textContent) - valor;
}
