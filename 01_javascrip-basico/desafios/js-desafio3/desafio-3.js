const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let numeroCorreto = Math.floor(Math.random() * 100) + 1;
let tentativas = 0;

function jogar() {
  rl.question("Digite um número entre 1 e 100: ", function (resposta) {
    let palpite = Number(resposta);
    tentativas++;

    if (palpite < numeroCorreto) {
      console.log("O número correto é MAIOR que " + palpite);
      jogar();
    } else if (palpite > numeroCorreto) {
      console.log("O número correto é MENOR que " + palpite);
      jogar();
    } else {
      console.log("Parabéns! Você acertou!");
      console.log("Número de tentativas: " + tentativas);
      rl.close();
    }
  });
}

jogar();
