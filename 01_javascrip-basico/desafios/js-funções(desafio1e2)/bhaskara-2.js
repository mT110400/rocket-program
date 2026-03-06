function bhaskara(a, b, c){
    if (a === 0) {
        return "O valor de 'a' não pode ser zero. Não é uma equação quadrática.";
    }
    let delta = b * b - 4 *a *c;
    if (delta <0) {
        return "Não existem raízes reais.";
    } else if (delta === 0) {
        let x = -b / (2 * a);
        return {raizUnica: x };
    } else {
        let x1 = (-b + Math.sqrt(delta)) / (2 * a);
        let x2 = (-b - Math.sqrt(delta)) / (2 * a);
        return {x1, x2};
    }
    }
    
console.log(bhaskara(2, -5, 4))