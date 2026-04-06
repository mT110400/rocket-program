class Usuario {
  constructor(nome, email, senha) {
    this.nome = nome;
    this.email = email;
    this.senha = senha;
  }

  exibirPerfil() {
    return `
      <div class="perfil-info">
        <p><span class="label">Nome</span><span class="valor">${this.nome}</span></p>
        <p><span class="label">Email</span><span class="valor">${this.email}</span></p>
      </div>
    `;
  }
}

class Aluno extends Usuario {
  constructor(nome, email, senha, turma) {
    super(nome, email, senha);
    this.turma = turma;
    this.tipo = "Aluno";
  }

  exibirPerfil() {
    return `
      <div class="perfil-info">
        <p><span class="label">Nome</span><span class="valor">${this.nome}</span></p>
        <p><span class="label">Email</span><span class="valor">${this.email}</span></p>
        <p><span class="label">Turma</span><span class="valor">${this.turma}</span></p>
      </div>
    `;
  }
}

class Professor extends Usuario {
  constructor(nome, email, senha, materias) {
    super(nome, email, senha);
    this.materias = materias;
    this.tipo = "Professor";
  }

  exibirPerfil() {
    const listaMaterias = this.materias.join(", ");
    return `
      <div class="perfil-info">
        <p><span class="label">Nome</span><span class="valor">${this.nome}</span></p>
        <p><span class="label">Email</span><span class="valor">${this.email}</span></p>
        <p><span class="label">Matérias</span><span class="valor">${listaMaterias}</span></p>
      </div>
    `;
  }
}

const alunoTeste = new Aluno(
  "Carlos Silva",
  "carlos@escola.com",
  "123",
  "3º Ano B",
);
const professorTeste = new Professor("Ana Costa", "ana@escola.com", "456", [
  "Matemática",
  "Física",
]);

console.log("=== Teste de Perfis ===");
console.log("Aluno:", alunoTeste.nome, "| Turma:", alunoTeste.turma);
console.log(
  "Professor:",
  professorTeste.nome,
  "| Matérias:",
  professorTeste.materias.join(", "),
);
