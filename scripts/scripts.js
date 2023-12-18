// === === === variaveis constantes === === ===

// === === === variaveis globais === === ===

// === === === funcções abaixo === === ===

// === função calcular ===
function calcular() {
    var nivel = document.querySelector("#nivel").value;
    var restantes = nivel * 3;
    document.querySelector("#atributos").innerHTML = restantes;
}
// seção nivel Abaixo
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

function resetNivel() {
    let inputNivel = document.querySelector("#nivel");
    inputNivel.value = "00";
    document.querySelector("#atributos").innerHTML = 00;
 }
// seção nivel Acima
//
// seção atributos força abaixo <
function addForca(amount) {
    updateForca(amount);
}

function lessForca(amount) {
    updateForca(amount);
}

function updateForca(amount) {
    let inputForca = document.querySelector("#forca");
    let currentForca = parseInt(inputForca.value) || 1;
    let newForca = currentForca + amount;

    newForca = Math.min(100, Math.max(1, newForca));

    inputForca.value = newForca;
}

function resetForca() {
    let inputForca = document.querySelector("#forca");
    inputForca.value = 001;
    document.querySelector("#forca").innerHTML = 001;
}
// seção atributos força acima >
//
// seção atributos inteligencia abaixo <

function addInt(amount) {
    updateInt(amount);
}

function lessInt(amount) {
    updateInt(amount);
}

function updateInt(amount) {
    let input = document.querySelector("#int");
    let current = parseInt(input.value) || 1;
    let newInt = current + amount;

    newInt = Math.min(100, Math.max(1, newInt));

    input.value = newInt;
}

function resetInt() {
    let input = document.querySelector("#int");
    input.value = 001;
    document.querySelector("#int").innerHTML = 001;
}

// seção atributos inteligencia acima >
//
// seção atributos Destreza Abaixo <



// seção atributos Destreza acima >
//