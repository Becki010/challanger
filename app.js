let nomes = [];

function adicionarNomes() {
    let input = document.querySelector("nomeAmigo");
    let nome = input.value.trim();

if (nome === "") {
    alert("Por favor, insira um nome");
    return;

}
    amigos.push(nome);
    atualizarLista(); 
    input.value = "";
}
function atualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    
    for (let amigo of amigos) {
        let li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    }
}

function sortearAmigo() {
    if (amigos.lenght === 0) {
        alert("A lista está vazia. Adicione um nome antes de sortear");
        return;
    }
    
    let indiceSorteado = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceSorteado];
    document.getElementById("resultado").innerHTML = `Amigo sorteado: <strong>${amigoSorteado}</strong>`;
}
    