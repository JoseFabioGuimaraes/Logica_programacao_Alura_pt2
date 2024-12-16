function sortear(){
    let campoQuantidade = parseInt(document.getElementById('quantidade').value);
    let campoDe = parseInt(document.getElementById('de').value);
    let campoAte = parseInt(document.getElementById('ate').value);

    if(campoDe > campoAte){
        alert("Não é permitido que o número inicial seja maior ou igual ao número final");
        reiniciar();
    }

    if (campoQuantidade > (campoAte - campoDe)){
        alert("Ação não permitida, coloque um valor válido pra quantidade")
        reiniciar();
    }

    let numerosSorteados = [];
    for (let i = 0; i < campoQuantidade; i++){
        let numero = obterNumeroAleatorio(campoDe, campoAte);
        
        while (numerosSorteados.includes(numero)){
            numero = obterNumeroAleatorio(campoDe, campoAte);
        }

        numerosSorteados.push(numero)

    }

    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${numerosSorteados}</label>`;

    alterarStatusBotao();
}

function obterNumeroAleatorio(min, max){
    return Math.floor(Math.random() * (max - min +1)) + min;
}

function alterarStatusBotao(){
    let botaoReiniciar = document.getElementById('btn-reiniciar');
    
    botaoReiniciar.classList.contains('container__botao-desabilitado') ? (botaoReiniciar.classList.remove('container__botao-desabilitado'), 
    botaoReiniciar.classList.add('container__botao')) : (botaoReiniciar.classList.remove('container__botao'), botaoReiniciar.classList.add('container__botao-desabilitado'));

}

function reiniciar(){
    document.getElementById('ate').value = '';
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('resultado') = '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>';
    alterarStatusBotao();
}