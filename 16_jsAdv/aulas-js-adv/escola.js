class User {
  constructor(name, email, password) {
    this.name = name;
    this.email = email;
    this.password = password;
  }

  login(email, password, plataforma) {
    return this.email === email && this.password === password;
  }

  get name() {
    return this._name;
  }
  set name(name) {
    this._name = name;
  }

  get email() {
    return this._email;
  }
  set email(email) {
    this._email = email;
  }

  get password() {
    return this._password;
  }
  set password(password) {
    this._password = password;
  }
}

class Studant extends User {
  constructor(name, email, password, RA) {
    super(name, email, password);

    this.RA = RA;
  }

  login(email, password, platform) {
    return (
      platform === "alunos" &&
      this.email === email &&
      this.password === password
    );
  }

  get RA() {
    return this._RA;
  }

  set RA(RA) {
    this._RA = RA;
  }

  get grade() {
    return _grade;
  }

  set grade(grade) {
    this._grade = grade;
  }
}

class Teacher extends User {
  login(email, password, platform) {
    return (
      platform === "professores" &&
      this.email === email &&
      this.password === password
    );
  }

  gradeStudant(studant, grade) {
    if (grade >= 0 && grade <= 10) studant.grade = grade;
  }
}

const teacher = new Teacher("Felipe", "felipe.lima@alpar.com.br", "abc123");
const studant = new Studant(
  "Mateus",
  "mateus.trindade@alpar.com.br",
  "123321",
  1111,
);

/* console.log(teacher);
console.log(
  "Tentativa de login plataforma aluno - Estudante: ",
  studant.login("mateus.trindade@alpar.com.br", "1233211", "alunos"),
);
console.log(
  "Tentativa de login plataforma aluno - Estudante: ",
  studant.login("mateus.trindade@alpar.com.br", "123321", "alunos"),
);
console.log(
  "Tentativa de login plataforma professores - Estudante: ",
  studant.login("mateus.trindade@alpar.com.brr", "123321", "alunos"),
);
console.log(
  "Tentativa de login plataforma professor - Professor: ",
  teacher.login("felipe.lima@alpar.com.br", "abc123", "professores"),
);
console.log(
  "Tentativa de login plataforma alunos - Professor: ",
  teacher.login("jfelipe.lima@alpar.com.br", "abc123", "professores"),
);
 */

teacher.gradeStudant(studant, 8);

console.log(teacher);
console.log(studant);
