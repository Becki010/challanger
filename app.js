let nomes = [];

function adicionarAmigo() {
    let input = document.querySelector("#nomeInput");
    let nome = input.value.trim();

if (nome === "") {
    alert("Por favor, insira um nome");
    return;
}
    nomes.push(nome);
    atualizarLista(); 
    input.value = "";
}
function atualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    nomes.forEach(nome => {
        let item = document.createElement("li");
        item.textContent = nome;
        lista.appendChild(item);
    });
}
    
function sortearAmigo() {
    if (nomes.length === 0) {
        alert("A lista está vazia. Adicione um nome antes de sortear");
        return;
    }

    let indiceSorteado = Math.floor(Math.random() * nomes.length);
    let amigoSorteado = nomes[indiceSorteado];
    document.getElementById("resultado").innerHTML = `Amigo sorteado: <strong>${amigoSorteado}</strong>`;
}
    