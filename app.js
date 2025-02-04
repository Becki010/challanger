let nomes = [];

for (let i = 0; i < quantidade; i++) {
    let nome = prompt("Digite o nome " + (i + 1) + ":");
    nomes.push(nome);
}

console.log(nomes);