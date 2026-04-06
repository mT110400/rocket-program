class SistemaLogin {
  constructor() {
    this.usuarios = [
      new Aluno("Mateus Trindade", "mateus@escola.com", "senha123", "3º Ano B"),
      new Aluno("Mariana Souza", "mariana@escola.com", "mari2024", "2º Ano A"),
      new Aluno("Lucas Pereira", "lucas@escola.com", "lucas99", "1º Ano C"),
      new Aluno("Fernanda Lima", "fernanda@escola.com", "fefe2025", "3º Ano A"),

      new Professor("Ana Costa", "ana@escola.com", "prof456", [
        "Matemática",
        "Física",
      ]),
      new Professor("Roberto Nunes", "roberto@escola.com", "nunes789", [
        "Português",
        "Literatura",
      ]),
      new Professor("Juliana Melo", "juliana@escola.com", "juli2024", [
        "História",
        "Geografia",
      ]),
    ];
  }

  autenticar(email, senha) {
    const usuario = this.usuarios.find(
      (u) => u.email === email && u.senha === senha,
    );
    return usuario || null;
  }

  salvarSessao(usuario) {
    const dados = {
      nome: usuario.nome,
      email: usuario.email,
      tipo: usuario.tipo,
      turma: usuario.turma || null,
      materias: usuario.materias || null,
    };
    localStorage.setItem("usuarioLogado", JSON.stringify(dados));
  }

  static recuperarSessao() {
    const dados = localStorage.getItem("usuarioLogado");
    return dados ? JSON.parse(dados) : null;
  }

  static encerrarSessao() {
    localStorage.removeItem("usuarioLogado");
  }
}
