const regexNome = /^[A-Za-zÀ-ÿ\s]+$/;
const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const regexCpf = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;

const campos = [
  {
    id: "nome",
    regex: regexNome,
    msgErro: "Apenas letras e espaços são permitidos.",
  },
  {
    id: "email",
    regex: regexEmail,
    msgErro: "Insira um e-mail no formato válido.",
  },
  { id: "cpf", regex: regexCpf, msgErro: "Use o formato 000.000.000-00." },
];

function validarCampo(campo) {
  const input = document.getElementById(campo.id);
  const feedback = document.getElementById("feedback-" + campo.id);
  const valido = campo.regex.test(input.value.trim());

  input.classList.remove("valid", "invalid");
  input.classList.add(valido ? "valid" : "invalid");

  feedback.textContent = valido
    ? "Válido ✅"
    : "Inválido ❌ — " + campo.msgErro;
  feedback.className = "feedback " + (valido ? "ok" : "err");

  return valido;
}

document.getElementById("cpf").addEventListener("input", function () {
  let v = this.value.replace(/\D/g, "").slice(0, 11);
  if (v.length > 9)
    v = v.replace(/^(\d{3})(\d{3})(\d{3})(\d{0,2})/, "$1.$2.$3-$4");
  else if (v.length > 6) v = v.replace(/^(\d{3})(\d{3})(\d{0,3})/, "$1.$2.$3");
  else if (v.length > 3) v = v.replace(/^(\d{3})(\d{0,3})/, "$1.$2");
  this.value = v;
});

document.getElementById("form").addEventListener("submit", function (e) {
  e.preventDefault();

  const resultados = campos.map(validarCampo);
  const tudo_valido = resultados.every(Boolean);

  const result = document.getElementById("form-result");
  result.textContent = tudo_valido
    ? "🎉 Todos os campos estão válidos! Formulário enviado."
    : "⚠️ Corrija os campos inválidos antes de enviar.";
  result.className =
    "form-result " + (tudo_valido ? "result-ok" : "result-err");
});
