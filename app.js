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
            limparCampo();
            return addAmigo;
        }
    }else{
        limparCampo();
        return alert("Por favor, insira um nome");
    }

};

function limparCampo(){
  let addAmigo = document.querySelector('input');
  addAmigo.value = '';
};

