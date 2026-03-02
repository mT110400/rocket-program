//na programação. 0 (zero) SEMPRE será FALSO (false) e qualquer número diferente de 0 será VERDADEIRO (true).

let i = 2;
let j = 3;

let igual = i == j; // essa operação é false
let maior = i > j; // essa operação é false
let menor = i < j; // essa operação é true
let maiorIgual = i >= j; // essa operação é false
let menorIgual = i <= j; // essa operação é true

let teste1 = igual && maior; // essa operação é false - porque compara se os dois valores são verdadeiros
let teste2 = menor && menorIgual; // essa operação é true porque os dois resultados são verdadeiros
let teste3 = igual || maior; // ||(ou) compara se um dos valores é verdadeiro, caso 1 deles fossem, o resultado seria true, mas como igual é falso e maior também, o resultado final no console foi false.
let teste4 = igual || menor; // true porque a varialvel menor é verdadeira
let teste5 = !igual; // ! (não) como a i nçao é igual a j, a operação é true (verdadeiro)
let teste6 = !menor; // false porque i É MENOR do que j



let texto = "texto"; //false porque texto tem valor, e tudo diferente de 0 é false (texto é mais do que 1)
let vazia = "";
let numeros = 1;
let zero = 0;

!texto; //false
!!texto; //true, porque converte em booleano
!vazia; //true
!!vazia; //false
!zero; //true
!!zero; //false
!numeros; //false
!!numeros; //true
!verdadeiro; //false
!!verdadeiro; //true

console.log(!vazia)

// || - OU (or)
true || true; //= true
true || false; //= true
false || true; //= true
false || false; //= false
//&& - E (and)
true && true; //= true
true && false; //= false
false && true; //= false
false && false; //= false

true || false & false; //true - porque tem true na operação (o editor sempre irá ler o && primeiro)
(true || false) //se colocarmos o parenteses antes, essa operação será priorizada
(true || false) && false // false