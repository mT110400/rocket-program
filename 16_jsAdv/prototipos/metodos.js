const numeros = [1, 2, 3, 4, 5];

Array.prototype.meuMap = function (callback) {
  const novoArray = [];

  for (let i = 0; i < this.length; i++) {
    if (i in this) {
      novoArray.push(callback(this[i], i, this));
    }
  }

  return novoArray;
};

Array.prototype.meuFilter = function (callback) {
  const novoArray = [];

  for (let i = 0; i < this.length; i++) {
    if (i in this) {
      if (callback(this[i], i, this)) {
        novoArray.push(this[i]);
      }
    }
  }

  return novoArray;
};

Array.prototype.meuReduce = function (callback, valorInicial) {
  let acumulador = valorInicial;
  let inicio = 0;

  if (acumulador === undefined) {
    acumulador = this[0];
    inicio = 1;
  }

  for (let i = inicio; i < this.length; i++) {
    if (i in this) {
      acumulador = callback(acumulador, this[i], i, this);
    }
  }

  return acumulador;
};

Array.prototype.meuForEach = function (callback) {
  for (let i = 0; i < this.length; i++) {
    if (i in this) {
      callback(this[i], i, this);
    }
  }
};

Array.prototype.meuFind = function (callback) {
  for (let i = 0; i < this.length; i++) {
    if (i in this) {
      if (callback(this[i], i, this)) {
        return this[i];
      }
    }
  }
  return undefined;
};

console.log("ARRAY ORIGINAL:", numeros);

const dobrados = numeros.meuMap((n) => n * 2);
console.log("meuMap:", dobrados);

const pares = numeros.meuFilter((n) => n % 2 === 0);
console.log("meuFilter:", pares);

const soma = numeros.meuReduce((acc, n) => acc + n, 0);
console.log("meuReduce:", soma);

console.log("meuForEach:");
numeros.meuForEach((n) => console.log(n));

const encontrado = numeros.meuFind((n) => n > 3);
console.log("meuFind:", encontrado);

console.log("\n--- COMPARAÇÃO ---");

console.log(
  "Map nativo:",
  numeros.map((n) => n * 2),
);
console.log(
  "Filter nativo:",
  numeros.filter((n) => n % 2 === 0),
);
console.log(
  "Reduce nativo:",
  numeros.reduce((acc, n) => acc + n, 0),
);
console.log(
  "Find nativo:",
  numeros.find((n) => n > 3),
);
