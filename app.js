//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let listaAmigos = [];

function adicionarAmigo() {
    let input = document.getElementById('amigo');
    let nome = input.value.trim();

    if (nome) {
        listaAmigos.push(nome);
        document.getElementById('resultado').innerHTML += nome + "<br>";
        input.value = "";
    } else {
        alert('Digite um nome válido.');
    }
}

function sortearAmigo() {
    if (listaAmigos.length) {
        let nomeSorteado = listaAmigos[Math.floor(Math.random() * listaAmigos.length)]
        document.getElementById('resultado').innerHTML = nomeSorteado
    } else {
        alert('Lista está vazia, adicione amigos para sortear.')
    }
}
