function bhaskara(a, b, c) {  //os parenteses servem para executar a função. Nesse caso estamos criando a função
let delta = b * b - 4 * a * c;

if(delta < 0) {
    return "Não existem raizes reais.";
}

let x1 = (-b + Math.sqrt(delta)) / (2 * a);
let x2 = (-b - Math.sqrt(delta)) / (2 * a);

return {x1, x2 };
}

console.log(bhaskara(1, -5, 6));

