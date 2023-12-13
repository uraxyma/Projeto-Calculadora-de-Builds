// === variaveis constantes

// === variaveis globais

// === === === funcções === === ===
const buttonCalcular = document.querySelector("#calcular");

buttonCalcular.onclick = () => {
  const inputNivel = document.querySelector("#nivel");
  const valorNivel = inputNivel.value;

  const valorRestantes = valorNivel * 3;

  let inputRestantes = document.querySelector("#restantes");
  inputRestantes.value = valorRestantes;
};