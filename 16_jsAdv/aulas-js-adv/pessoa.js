class Pessoa {
  _name;
  _email;
  _birthday;
  _password;
  _age;

  constructor(name, email, birthday, password) {
    this.name = name;
    this.email = email;
    this.password = password;
    this.birthday = birthday;
  }

  get name() { return this._name; }
  set name(name) {
    if (!name.includes(' ')) throw new Error('Digite um nome e sobrenome.');
    this._name = name;
  }

  get email() { return this._email; }
  set email(email) {
    if (!email.includes('@')) throw new Error('Digite um e-mail válido.');
    this._email = email;
  }

  get password() { return this._password; }
  set password(password) {
    if (password.length < 6) throw new Error('A senha deve ter no mínimo 6 caracteres.');
    this._password = password;
  }

  get birthday() { return new Date(this._birthday); }
  set birthday(birthday) {
    this._age = Math.floor(
      (new Date().getTime() - new Date(birthday).getTime()) /
      1000 / 60 / 60 / 24 / 365.25
    );
    if (this._age < 18) throw new Error('Usuário com menos de 18 anos.');
    this._birthday = birthday;
  }
}

const pessoa = new Pessoa(
  "Mateus Trindade",
  "mateus.trindade@alpar.com.br",
  "2000-04-11",
  "123456"
);

console.log(pessoa);