function adicionar(){
    let produto = document.getElementById('produto').value;
    let nomeProduto = produto.split('-')[0];
    let valorUnitario = produto.split('R$')[1];
    let quantidade = document.getElementById('quantidade');
    let valorTotal = valorUnitario * quantidade.value;

    let carrinho = document.getElementById('lista-produtos')
    carrinho.innerHTML =  carrinho.innerHTML + `<section class="carrinho__produtos__produto">
          <span class="texto-azul">${quantidade.value}x</span> ${nomeProduto} <span class="texto-azul">R$${valorTotal}</span>
        </section>`



}

function limpar(){

}