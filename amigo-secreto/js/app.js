let amigosArray = [];

function adicionar(){
    let amigo = document.getElementById('nome-amigo');
    if(amigo.value == ''){
        alert('Informe o nome do amigo');
        return;
    }
    if(amigosArray.includes(amigo.value)){
        alert('Este nome já foi adicionado');
        return;
    }
    let listaAmigo = document.getElementById('lista-amigos');
    amigosArray.push(amigo.value)
    if (listaAmigo.textContent == ''){
        listaAmigo.textContent = amigo.value;
    } else{
        listaAmigo.textContent = listaAmigo.textContent + ',' + amigo.value;
    }
    amigo.value = '';
}

function sortear(){
    if(amigosArray.length < 4){
        alert("Adicione pelo menos 4 amigos")
        return; 
    }

    embaralha(amigosArray);
    let listaSorteio = document.getElementById('lista-sorteio');
    for(let i = 0; i < amigosArray.length; i++){
        if( i == amigosArray.length - 1){
            listaSorteio.innerHTML = listaSorteio.innerHTML +  amigosArray[i] + '->' + amigosArray[0] + '<br>';
        }else{
            listaSorteio.innerHTML = listaSorteio.innerHTML +  amigosArray[i] + '->' + amigosArray[i+1] + '<br>';
        }
    }

}

function reiniciar(){

    amigosArray = []
    document.getElementById('lista-amigos').innerHTML = '';
    document.getElementById('lista-amigos').innerHTML = '';

}

function embaralha(lista) {

    for (let indice = lista.length; indice; indice--) {

        const indiceAleatorio = Math.floor(Math.random() * indice);

        // atribuição via destructuring
        [lista[indice - 1], lista[indiceAleatorio]] = 
            [lista[indiceAleatorio], lista[indice - 1]];
    }
}