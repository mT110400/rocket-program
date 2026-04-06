// 🔹 Usuários cadastrados
const usuarios = [
  new Aluno("João", "joao@email.com", "123", "A"),
  new Professor("Maria", "maria@email.com", "123", "Matemática"),
  new Aluno("Carlos", "carlos@email.com", "123", "B"),
];

// 🔹 LOGIN
function login() {
  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;
  const erro = document.getElementById("erro");

  const usuario = usuarios.find((u) => u.email === email && u.senha === senha);

  if (usuario) {
    localStorage.setItem("usuarioLogado", JSON.stringify(usuario));
    window.location.href = "perfil.html";
  } else {
    erro.innerText = "Email ou senha inválidos!";
  }
}
