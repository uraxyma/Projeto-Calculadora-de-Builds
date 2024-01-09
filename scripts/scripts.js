// Seleção de nivel ===
const selectNivel = document.getElementById("level");

for (var i = 1; i <= 75; i++) {
	var optionNivel = document.createElement("option");
	optionNivel.value = i;
	optionNivel.text = i;
	selectNivel.appendChild(optionNivel);
}
 // atributos restantes ===
function atualizarStats() {
    let niveSelecionado = selectNivel.value;
    let novoValor = niveSelecionado * 3;
    document.querySelector("#atributos").textContent = novoValor;
}
// === === === variaveis Globais === === ===
function loadDate() {
    const dadosNivel = localStorage.getItem("nivel");
    const dadosAtributos = localStorage.getItem("atributos");

    if (dadosNivel !== null) {
        document.querySelector("#nivelTotal").textContent = dadosNivel;
    }

    if (dadosAtributos !== null) {
        document.querySelector("#atributos").textContent = dadosAtributos;
    }
}
// === === === funções Atributos === === ===
function salvarCalculos() {
    let nivel = document.querySelector("#nivelTotal").textContent;
    let atributos = document.querySelector("#atributos").textContent;

    localStorage.setItem("nivel", nivel);
    localStorage.setItem("atributos", atributos);

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
    let divForca = document.querySelector("#forca");
    let currentForca = parseInt(divForca.textContent) || 1;
    let newForca = Math.min(100, Math.max(1, currentForca + amount));

    divForca.textContent = newForca;
}

function resetForca() {
    localStorage.removeItem('forca');

    let divForca = document.querySelector("#forca");
    divForca.textContent = "01";
}

function salvarForca() {
    let divForca = document.querySelector("#forca");
    let valorForca = parseInt(divForca.textContent) || 1;

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
    let divInt = document.querySelector("#int");
    let currentInt = parseInt(divInt.textContent) || 1;
    let newInt = Math.min(100, Math.max(1, currentInt + amount));

    divInt.textContent = newInt;
}

function resetInt() {
    localStorage.removeItem('int');

    let divInt = document.querySelector("#int");
    divInt.textContent = "01";
}

function salvarInt() {
    let divInt = document.querySelector("#int");
    let valorInt = parseInt(divInt.textContent) || 1;

    localStorage.setItem('int', valorInt);
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
    let divDes = document.querySelector("#des");
    let currentDes = parseInt(divDes.textContent) || 1;
    let newDes = Math.min(100, Math.max(1, currentDes + amount));

    divDes.textContent = newDes;
}

function resetDes() {
    localStorage.removeItem('des');

    let divDes = document.querySelector("#des");
    divDes.textContent = "01";
}

function salvarDes() {
    let divDes = document.querySelector("#des");
    let valorDes = parseInt(divDes.textContent) || 1;

    localStorage.setItem('des', valorInt);
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
    let divAgi = document.querySelector("#agi");
    let currentAgi = parseInt(divAgi.textContent) || 1;
    let newAgi = Math.min(100, Math.max(1, currentAgi + amount));

    divAgi.textContent = newAgi;
}

function resetAgi() {
    localStorage.removeItem('agi');

    let divAgi = document.querySelector("#agi");
    divAgi.textContent = "01";
}

function salvarAgi() {
    let divAgi = document.querySelector("#agi");
    let valorAgi = parseInt(divAgi.textContent) || 1;

    localStorage.setItem('agi', valorAgi);
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
    let divVig = document.querySelector("#vig");
    let currentVig = parseInt(divVig.textContent) || 1;
    let newVig = Math.min(100, Math.max(1, currentVig + amount));

    divVig.textContent = newVig;
}

function resetVig() {
    localStorage.removeItem('vig');

    let divVig = document.querySelector("#vig");
    divVig.textContent = "01";
}

function salvarVig() {
    let divVig = document.querySelector("#vig");
    let valorVig = parseInt(divVig.textContent) || 1;

    localStorage.setItem('vig', valorVig);
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
    let divTal = document.querySelector("#tal");
    let currentTal = parseInt(divTal.textContent) || 1;
    let newTal = Math.min(100, Math.max(1, currentTal + amount));

    divTal.textContent = newTal;
}

function resetTal() {
    localStorage.removeItem('tal');

    let divTal = document.querySelector("#tal");
    divTal.textContent = "01";
}

function salvarTal() {
    let divTal = document.querySelector("#tal");
    let valorTal = parseInt(divTal.textContent) || 1;

    localStorage.setItem('tal', valorTal);
}
// seção atributos sorte acima >
//
// seção atributos sorte abaixo <
function addSor(amount) {
    updateSor(amount);
}

function lessSor(amount) {
    updateSor(-amount);
}

function updateSor(amount) {
    let divSor = document.querySelector("#sor");
    let currentSor = parseInt(divSor.textContent) || 1;
    let newSor = Math.min(100, Math.max(1, currentSor + amount));

    divSor.textContent = newSor;
}

function resetSor() {
    localStorage.removeItem('sor');

    let divSor = document.querySelector("#sor");
    divSor.textContent = "01";
}

function salvarSor() {
    let divSor = document.querySelector("#sor");
    let valorSor = parseInt(divSor.textContent) || 1;

    localStorage.setItem('Sor', valorSor);
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
    let divFe = document.querySelector("#fe");
    let currentFe = parseInt(divFe.textContent) || 1;
    let newFe = Math.min(100, Math.max(1, currentFe + amount));

    divFe.textContent = newFe;
}

function resetFe() {
    localStorage.removeItem('fe');

    let divFe = document.querySelector("#fe");
    divFe.textContent = "01";
}

function salvarFe() {
    let divFe = document.querySelector("#fe");
    let valorFe = parseInt(divFe.textContent) || 1;

    localStorage.setItem('fe', valorFe);
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
