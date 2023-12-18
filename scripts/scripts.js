// === === === variaveis constantes === === ===

// === === === variaveis globais === === ===

// === === === funcções === === ===
function calcular() {
    var nivel = document.querySelector("#nivel").value;
    var restantes = nivel * 3;
    document.querySelector("#atributos").innerHTML = restantes;
}

function reset() {
    // ========= reset Nivel
    let inputElement = document.querySelector("#nivel");
    inputElement.value = "00";
    document.querySelector("#atributos").innerHTML = "000";
    // ========== Reset Atributos

 }

function addValue(amount) {
    updateValue(amount);
}

function lessValue(amount) {
    updateValue(-amount);
}

function updateValue(amount) {
    // ========== função Nível
    let inputNivel = document.querySelector("#nivel");
    let currentNivel = parseInt(inputNivel.value) || 0;
    let newNivel = currentNivel + amount;

    newNivel = Math.min(75, Math.max(0, newNivel));

    inputNivel.value = newNivel;
}

function updateValue(amount) {
    // ========== função Atributos
    let inputAtributo = document.querySelector("#forca");
    let currentAtributo = parseInt(inputAtributo.value) || 1;
    let newAtributo = currentAtributo + amount;

    newAtributo = Math.min(100, Math.max(1, newAtributo));

    inputAtributo.value = newAtributo;
    
}