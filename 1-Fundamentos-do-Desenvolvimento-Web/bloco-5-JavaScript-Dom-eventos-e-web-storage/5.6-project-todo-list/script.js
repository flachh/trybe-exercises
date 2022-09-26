const listaDeTarefas = document.querySelector("#lista-tarefas");
const apagarTudoNaLista = document.querySelector("#apaga-tudo");
const removeFinaalizados = document.querySelector("#remover-finalizados")
const input = document.querySelector("#texto-tarefa");
const adicionarTarefa = document.querySelector("#criar-tarefa");

// 5 - Adicione um botão com id="criar-tarefa" e, ao clicar nesse botão, um novo item deverá ser criado ao final da lista e o texto do input deve ser limpo

function criaTarefa(){  
    let tarefa = document.createElement("li");
    
    tarefa.innerText = input.value;

    listaDeTarefas.appendChild(tarefa);

    input.value = "";
}
adicionarTarefa.addEventListener("click", criaTarefa);

//6 - Ordene os itens da lista de tarefas por ordem de criação
//Ele ja cria em ordem!


//7 - Clicar em um item da lista deve alterar a cor de fundo do item para cinza rgb(128,128,128)
//8 - Não deve ser possível selecionar mais de um elemento da lista ao mesmo tempo

// function trocarCor(x){
//     let itemDaListaDeTarefas = listaDeTarefas.querySelectorAll("li");
    
//     for(let i = 0; i < itemDaListaDeTarefas.length; i++){
//         itemDaListaDeTarefas[i].classList.remove("corCinza");
//     }

//     x.target.classList.add('corCinza');
// }
function mudaOFundo(x){
    let selecionaCor = document.querySelector(".corCinza");
    if(selecionaCor){
        selecionaCor.classList.remove("corCinza");
    }
    x.target.classList.add("corCinza");
}
listaDeTarefas.addEventListener("click", mudaOFundo);


// 9 - Clicar duas vezes em um item, faz com que ele seja riscado, indicando que foi completo. Deve ser possível desfazer essa ação clicando novamente duas vezes no item
function riscarFinalizado(y){
    // let itemRiscado = listaDeTarefas.querySelector("li");
    // y.target.classList.add("completed");
    y.target.classList.toggle("completed")


}
listaDeTarefas.addEventListener("dblclick", riscarFinalizado)

// 10 - Adicione um botão com id="apaga-tudo" que quando clicado deve apagar todos os itens da lista

function apagarTudo(){
    listaDeTarefas.innerHTML = "";
}
apagarTudoNaLista.addEventListener("click", apagarTudo)

//11 - Adicione um botão com id="remover-finalizados" que quando clicado remove somente os elementos finalizados da sua lista

function removerFinalizados(){                       //essa linha foi feita na base do odio!!
    while(document.querySelectorAll(".completed")[0]){          
        document.querySelectorAll(".completed")[0].remove();   
    }
}

removeFinaalizados.addEventListener("click", removerFinalizados)




