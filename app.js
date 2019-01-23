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
* validação formulario
*/
var formPedido = document.forms.pedido;
// validando formulario com função anonima
formPedido.addEventListener('submit', function (event) {
    var cont = 0;
    var inputs = formPedido.querySelectorAll('input.quantidade'); // lista com todos os inputs onde se tem quantidade como classe

    // percorrendo toda lista verificando so o valor é maior que 0
    for (let inp of inputs) {
        if (inp.value > 0) {
            cont++;
        }
    }

    if (cont == 0) {
        alert('Deve ter haver menos 1 pizza no pedido!');
        event.preventDefault(); // barrando execução do evento submit
    }
});


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

