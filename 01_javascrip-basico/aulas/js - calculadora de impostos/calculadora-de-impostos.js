/* Criar uma calculadora de impostos.
 
A calculadora precisa conter 3 variáveis: uma que recebe um preço de um produto(em decimal, por favor), uma que informe se o produto tem direito a desconto (desconto de 10%), e o ICMS (que pode variar entre 12 e 25%)
 
O ICMS deverá ser calculado após o produto receber (ou não desconto). 
 
O progama deverá retornar o valor do produto original, se ele teve desconto, o valor do produto com desconto e o valor do produto com o imposto aplicado. 
 
Pra tornar as coisas mais interessantes, como o valor do imposto é variável, vamos brincar de loteria e deixar o valor do imposto randômico (entre os valores informados.... 12 a 25%) */
// Calculadora de impostos

let precoProduto = 100.80; // preço original
let temDesconto = true; // desconto
let desconto = 0.10; // porcentagem de desconto

let icms = Math.random() * (0.25 - 0.12) + 0.12;

let precoComDesconto = temDesconto ? precoProduto * (1 - desconto) : precoProduto;

let precoFinal = precoComDesconto * (1 + icms);

console.log("Preço original: R$ " + precoProduto.toFixed(2));
console.log("Teve desconto? " + (temDesconto ? "Sim" : "Não"));
console.log("Preço com desconto: R$ " + precoComDesconto.toFixed(2));
console.log("ICMS aplicado: " + (icms * 100).toFixed(2) + "%");
console.log("Preço final com imposto: R$ " + precoFinal.toFixed(2));


