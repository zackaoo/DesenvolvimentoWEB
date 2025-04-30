const formCadastro = document.getElementById("formCadastro");
const formTreino = document.getElementById("formTreino");
const cadastroBox = document.getElementById("cadastroBox");
const treinoBox = document.getElementById("treinoBox");
const treinosDiv = document.getElementById("treinos");
const listaTreinos = document.getElementById("listaTreinos");

formCadastro.addEventListener("submit", function(e) {
  e.preventDefault();
  cadastroBox.classList.add("d-none");
  treinoBox.classList.remove("d-none");
  treinosDiv.classList.remove("d-none");
});

formTreino.addEventListener("submit", function(e) {
  e.preventDefault();
  const exercicio = document.getElementById("exercicio").value;
  const series = document.getElementById("series").value;
  const repeticoes = document.getElementById("repeticoes").value;

  const item = document.createElement("li");
  item.className = "list-group-item d-flex justify-content-between align-items-center";
  item.innerHTML = `${exercicio} - ${series}x${repeticoes}
    <button class="btn btn-danger btn-sm btn-remover">Remover</button>`;
  listaTreinos.appendChild(item);

  item.querySelector(".btn-remover").addEventListener("click", () => {
    item.remove();
  });

  formTreino.reset();
});
