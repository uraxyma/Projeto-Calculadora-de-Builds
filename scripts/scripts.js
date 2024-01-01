// === === === variaveis constantes === === ===

// === === === funções globais === === ===
window.onload = function() {
    let valorSalvo = localStorage.getItem('forca');

    if (valorSalvo !== null) {
        document.querySelector("#forca").value = valorSalvo;
    }
}

function salvarForca() {
    let valorForca = document.querySelector("#forca").value;
    localStorage.setItem('forca', valorForca);
}
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
    document.querySelector("#atributos").innerHTML = 0;
}
// seção nivel Acima
//
// seção atributos força abaixo <
function addForca(amount) {
    updateForca(amount);
}

function lessForca(amount) {
    updateForca(-amount);
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
    inputForca.value = 1;
    document.querySelector("#forca").innerHTML = 1;
}

function salvarForca() {
    let inputForca = document.querySelector("#Forca");
    let valorForca = parseInt(inputForca.value) || 1;

    localStorage.setItem('forca', valorForca);
}
// seção atributos força acima >
//
// seção atributos inteligencia abaixo <

function addInt(amount) {
    updateInt(amount);
}

function lessInt(amount) {
    updateInt(-amount);
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
    input.value = 1;
    document.querySelector("#int").innerHTML = 1;
}

// seção atributos inteligencia acima >
//
// seção atributos Destreza Abaixo <
function addDes(amount) {
    updateDes(amount);
}

function lessDes(amount) {
    updateDes(-amount);
}

function updateDes(amount) {
    let input = document.querySelector("#des");
    let current = parseInt(input.value) || 1;
    let newDes = current + amount;

    newDes = Math.min(100, Math.max(1, newDes));

    input.value = newDes;
}

function resetDes() {
    let input = document.querySelector("#des");
    input.value = 1;
    document.querySelector("#des").innerHTML = 1;
}
// seção atributos Destreza acima >
//
// seção atributos agilidade abaixo <
function addAgi(amount) {
    updateAgi(amount);
}

function lessAgi(amount) {
    updateAgi(-amount);
}

function updateAgi(amount) {
    let input = document.querySelector("#agi");
    let current = parseInt(input.value) || 1;
    let newAgi = current + amount;

    newAgi = Math.min(100, Math.max(1, newAgi));

    input.value = newAgi;
}

function resetAgi() {
    let input = document.querySelector("#agi");
    input.value = 1;
    document.querySelector("#agi").innerHTML = 1;
}
// seção atributos agilidade acima >
//
// seção atributos vigor abaixo <
function addVig(amount) {
    updateVig(amount);
}

function lessVig(amount) {
    updateVig(-amount);
}

function updateVig(amount) {
    let input = document.querySelector("#vig");
    let current = parseInt(input.value) || 1;
    let newVig = current + amount;

    newVig = Math.min(100, Math.max(1, newVig));

    input.value = newVig;
}

function resetVig() {
    let input = document.querySelector("#vig");
    input.value = 1;
    document.querySelector("#vig").innerHTML = 1;
}
// seção atributos vigor acima >
//
// seção atributos Tal abaixo <
function addTal(amount) {
    updateTal(amount);
}

function LessTal(amount) {
    updateTal(-amount);
}

function updateTal(amount) {
    let input = document.querySelector("#tal");
    let current = parseInt(input.value) || 1;
    let newTal = current + amount;

    newTal = Math.min(100, Math.max(1, newTal));

    input.value = newTal;
}

function resetTal() {
    let input = document.querySelector("#tal");
    input.value = 1;
    document.querySelector("#tal").innerHTML = 1;
}
// seção atributos sorte acima >
//
// seção atributos sorte abaixo <
function addSor(amount) {
    let input = document.querySelector("#sor");
    let current = parseInt(input.value) || 1;
    let newSor = current + amount;

    newSor = Math.min(100, Math.max(1, newSor));

    input.value = newSor;
}

function resetSor() {
    let input = document.querySelector("#sor");
    input.value = 1;
    document.querySelector("#sor").innerHTML = 1;
}
// seção atributos sorte acima >
//
// seção atributos fé abaix <
function addFe(amount) {
    updateFe(amount);
}

function lessFe(amount) {
    updateFe(-amount);
}

function updateFe(amount) {
    let input = document.querySelector("#fe");
    let current = parseInt(input.value) || 1;
    let newFe = current + amount;

    newFe = Math.min(100, Math.max(1, newFe));

    input.value = newFe
}

function resetFe() {
    let input = document.querySelector("#fe");
    input.value = 1;
    document.querySelector("#fe").innerHTML = 1;
}
// seção atributos Fé acima >
//
// Seção ESTATUS do personagem </>

// Função vida

// Função Estamina

// Função Mana

// Função Taxa de critico

// Função Dano Critico

// Função Armadura

// Função Acerto

// Função Esquiva

// Seção RESISTENCIA MARCIAIS </>

// Função cortante

// Função Perfurante

// Função Contundente

// RESISTENCIAS ARCANAS

// Função chaos

// função radiante

// função psiquico

// função fantasma

// função explosão

// RESISTENCIAS NATURAIS

// função Geoturgo / Mineraturgo

// função hidromante / criomante

// função aeroturgo / eletroturgo

// função piromante

// função poison

// CALCULADORA DE DANOS
