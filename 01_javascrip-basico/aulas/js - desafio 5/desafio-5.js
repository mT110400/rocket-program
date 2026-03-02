const prompt = require("prompt-sync")();

let usuarios = [];
let opcao;

do {
    console.log("\n===== MENU =====");
    console.log("1 - Adicionar usuário");
    console.log("2 - Remover usuário");
    console.log("3 - Listar usuários");
    console.log("4 - Sair");

    opcao = prompt("Escolha uma opção: ");

    switch (opcao) {

        case "1":
            let nome = prompt("Nome: ");
            let idade = Number(prompt("Idade: "));
            let email = prompt("Email: ");

            let existe = usuarios.some(user => user.email === email);

            if (existe) {
                console.log("Email já cadastrado!");
            } else {
                usuarios.push({ nome, idade, email });
                console.log("Usuário adicionado!");
            }
            break;

        case "2":
            let emailRemover = prompt("Email para remover: ");

            let index = usuarios.findIndex(user => user.email === emailRemover);

            if (index !== -1) {
                usuarios.splice(index, 1);
                console.log("Usuário removido!");
            } else {
                console.log("Usuário não encontrado!");
            }
            break;

        case "3":
            console.log("\nLista de usuários:");

            usuarios.forEach(user => {
                console.log(user);
            });
            break;

        case "4":
            console.log("Saindo...");
            break;

        default:
            console.log("Opção inválida!");
    }

} while (opcao !== "4");
