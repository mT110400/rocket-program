/* let obj = { name: "Mateus" };
console.log(obj);
 */

/* function Pessoa(name) {
  this.name = name;
}

Pessoa.prototype.falar = function () {
  console.log("Meu nome é ${this.name}");
};

const pessoa = new Pessoa("Mateus");

console.log(pessoa); */

/* let proto = {
  falar() {
    console.log(`Meu nome é ${this.name}`);
  },
};

let pessoa = Object.create(proto);
pessoa.name = "Mateus";
pessoa.falar(); */

const frase = "olá Mundo e desENvolvedores de qualquer lugar";

String.prototype.toCapitalize = function () {
  const parts = this.split(" ");
  const newParts = parts.map((part) => {
    return part.charAt(0).toUpperCase() + part.slice(1).toLocaleLowerCase();
  });
  return newParts.join(" ");
};

/* console.log(frase.toUpperCase()); */

console.log(frase.toCapitalize());
