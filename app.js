/*
*  botão incrementa
*/
var btnIncrementa = document.querySelectorAll('.btn-incrementa');

// ao cliclar no botão +
for (let btn of btnIncrementa) {
    btn.addEventListener('click', incrementa);

    // incrementar quantidade de pizza
    function incrementa() {
        var item = btn.closest('.item');

        var inpQtd = item.querySelector('.quantidade');
        inpQtd.value++;

        adicionaAoTotal(pegarPrecoItem(item));
    }
}

/*
*  botão decrementa
*/
var btnDecrementa = document.querySelectorAll('.btn-decrementa');

// ao cliclar no botão -
for (let btn of btnDecrementa) {
    btn.addEventListener('click', decrementa);

    // decrementar quantidade de pizza
    function decrementa() {
        var item = btn.closest('.item');

        var inpQtd = item.querySelector('.quantidade');
        if (inpQtd.value > 0) {
            inpQtd.value--;
            adicionaAoTotal(-pegarPrecoItem(item));
        } else {
            console.log('não à pizza adicionada');
        }
    }
}

/*
* funções auxiliares
*/

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

