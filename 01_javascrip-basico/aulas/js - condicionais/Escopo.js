let varialvelGlobal = 2;
let variavelLocal = 3;

if(true){
    varialvelGlobal++;
console.log("Global (if):" + varialvelGlobal);

variavelLocal = 2; // se colcoar LET na frente, vou criar uma variavel nova e só irá alterar o valor da variavel LOCAL IF
console.log("Local (if):" + variavelLocal);
}
console.log("Global:" + varialvelGlobal);
console.log("Local:" + variavelLocal);
