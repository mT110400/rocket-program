class CentralDeLuzes {
  constructor() {
    if (CentralDeLuzes.instance) {
      return CentralDeLuzes.instance;
    }

    this.estado = {};

    CentralDeLuzes.instance = this;
  }

  static getInstance() {
    if (!CentralDeLuzes.instance) {
      CentralDeLuzes.instance = new CentralDeLuzes();
    }
    return CentralDeLuzes.instance;
  }

  ligar(comodo) {
    this.estado[comodo] = true;
    atualizarTela(comodo, true);
  }

  desligar(comodo) {
    this.estado[comodo] = false;
    atualizarTela(comodo, false);
  }
}

function atualizarTela(comodo, ligado) {
  const div = document.querySelector(`[data-comodo="${comodo}"].comodo`);
  const status = document.getElementById("status");

  if (ligado) {
    div.classList.add("ligado");
    status.innerText = `Luz do ${comodo} ligada`;
  } else {
    div.classList.remove("ligado");
    status.innerText = `Luz do ${comodo} desligada`;
  }
}

const central = CentralDeLuzes.getInstance();

document.querySelectorAll("button").forEach((btn) => {
  btn.addEventListener("click", () => {
    const comodo = btn.dataset.comodo;
    const acao = btn.dataset.acao;

    if (acao === "ligar") {
      central.ligar(comodo);
    } else {
      central.desligar(comodo);
    }
  });
});
