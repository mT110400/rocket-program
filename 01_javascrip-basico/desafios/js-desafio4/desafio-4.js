const prompt = require("prompt-sync")();

let listaDeCompras = [];

function adicionarItem(item) {
  listaDeCompras.push(item);
  console.log(`Item "${item}" adicionado!`);
}

function removerItem(item) {
  let indice = listaDeCompras.indexOf(item);

  if (indice !== -1) {
    listaDeCompras.splice(indice, 1);
    console.log(`Item "${item}" removido!`);
  } else {
    console.log("Item não encontrado na lista.");
  }
}

function exibirLista() {
  if (listaDeCompras.length === 0) {
    console.log("A lista está vazia.");
  } else {
    console.log("Lista de Compras:");
    listaDeCompras.forEach((item, index) => {
      console.log(`${index + 1}. ${item}`);
    });
  }
}

let opcao;

while (true) {
  console.log("\n1 - Adicionar item");
  console.log("2 - Remover item");
  console.log("3 - Exibir lista");
  console.log("4 - Sair");

  opcao = prompt("Escolha uma opção: ");

  switch (opcao) {
    case "1":
      let novoItem = prompt("Digite o nome do item: ");
      adicionarItem(novoItem);
      break;

    case "2":
      let itemRemover = prompt("Digite o nome do item para remover: ");
      removerItem(itemRemover);
      break;

    case "3":
      exibirLista();
      break;

    case "4":
      console.log("Programa encerrado.");
      process.exit();
      break;

    default:
      console.log("Opção inválida.");
  }
}
