let valorTotalGeral;
limpar();
function adicionar(){
    let produto = document.getElementById('produto').value;
    let nomeProduto = produto.split('-')[0];
    let valorUnitario = produto.split('R$')[1];
    let quantidade = document.getElementById('quantidade');
    let valorTotal = valorUnitario * quantidade.value;

    if (quantidade.value == 0){
      return;
    }

    let carrinho = document.getElementById('lista-produtos')
    carrinho.innerHTML =  carrinho.innerHTML + `<section class="carrinho__produtos__produto">
          <span class="texto-azul">${quantidade.value}x</span> ${nomeProduto} <span class="texto-azul">R$${valorTotal}</span>
        </section>`

    valorTotalGeral = valorTotalGeral + valorTotal;
    let campoTotal = document.getElementById('valor-total');
    campoTotal.textContent = `R$${valorTotalGeral}`;
    quantidade.value = 0;
}

function limpar(){
  valorTotalGeral = 0;
  document.getElementById('lista-produtos').innerHTML = '';
  document.getElementById('valor-total').innerHTML = 'R$ 0';
}