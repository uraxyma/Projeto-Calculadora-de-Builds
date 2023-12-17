// === === === variaveis constantes === === ===


// === === === variaveis globais === === ===

// === === === funcções === === ===
function calcular() {
    var nivel = document.querySelector("#nivel").value;
    var restantes = nivel * 3;
    document.querySelector("#atributos").innerHTML = restantes;
}

function reset() {
    let inputElement = document.querySelector("#nivel");
    inputElement.value = "00";
    document.querySelector("#atributos").innerHTML = "000";

// replicar reset para campos: atributos / estatus e Resistencias e ademais //

 }

function addValue(amount) {
    updateValue(amount);
}

function lessValue(amount) {
    updateValue(-amount);
}

function updateValue(amount) {
    let inputElement = document.querySelector("#nivel");
    let currentValue = parseInt(inputElement.value) || 0;
    let newValue = currentValue + amount;

    newValue = Math.min(75, Math.max(0, newValue));

    inputElement.value = newValue;
}



// function validarForca(input) {
//     const valor = input.value;
//     const min = input.min;
//     const max = input.max;

//     if (valor < min || valor > max) {
//         input.value = "";
//         return false;
//     }
//     return true;
// }

