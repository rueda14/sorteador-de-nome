//O principal objetivo deste desafio é fortalecer suas 
// habilidades em lógica de programação. 
// Aqui você deverá desenvolver a lógica para resolver o problema.

let amigos = [];


function adicionarAmigo(){

    let addAmigo = document.querySelector('input').value;
    //console.log(addAmigo);
    
    if(addAmigo != ""){
        if (amigos.includes(addAmigo)){
            limparCampo();
            return alert("Este nome já existe. Digite um nome diferente.");
        }else{
            amigos.push(addAmigo);
            console.log(amigos);
            exibirAmigos();
            limparCampo();
        }
    }else{
        limparCampo();
        return alert("Por favor, insira um nome");
    };

};

function exibirAmigos(){

    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = ""; 

    
    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement('li'); 
        li.textContent = amigos[i]; 
        lista.appendChild(li); 
    }
}

function limparCampo(){
  let addAmigo = document.querySelector('input');
  addAmigo.value = '';
};

function sortearAmigo(){

    if(amigos.length == 0){
        alert('Não há amigos na lista para sortear');
        return;
    }else{
        let lista = Math.floor(Math.random() * amigos.length)
        let nomeSorteado = amigos[lista];
        let resultadoFinal = document.getElementById('resultado');
        resultadoFinal.innerHTML = `O amigo sorteado é: ${nomeSorteado}`;
    }

}