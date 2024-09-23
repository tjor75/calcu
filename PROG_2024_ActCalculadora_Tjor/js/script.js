// https://codepen.io/SpallowLiu/pen/mVVeQw
const OP_SUMAR = "sumar";
const OP_RESTAR = "restar";
const OP_MULTIPLICAR = "multiplicar";
const OP_DIVIDIR = "dividir";
const opciones = document.getElementById("opciones");
const calculadora = document.getElementById("calculadora");
const pantalla = document.createElement("p");
const btnCalcular = document.createElement("button");
let input1C1, input2C1, selectOpC1;
let resultadoMostradoC2, cuentaC2, btnSumarC2, btnRestarC2, btnMultiplicarC2, btnDividirC2;


function aniadirACuenta(simboloMatematico) {
    cuentaC2 += simboloMatematico;
    mostrarPantalla(cuentaC2);
}
function calcularC1(num1, num2, op) {
    let resultado = NaN;
    let num1Float = parseFloat(num1);
    let num2Float = parseFloat(num2);

    if (!isNaN(num1Float) && !isNaN(num2Float))
    {
        switch (op) {
            case OP_SUMAR:
                resultado = num1Float + num2Float;
                break;
            case OP_RESTAR:
                resultado = num1Float - num2Float;
                break;
            case OP_MULTIPLICAR:
                resultado = num1Float * num2Float;
                break;
            case OP_DIVIDIR:
                resultado = num1Float / num2Float;
                break;
        }
    }
    return resultado;
}
function calcularC2() {
    mostrarResultado(eval(cuentaC2));
}
function mostrarResultado(resultado) {
    if (!isNaN(resultado))
        mostrarPantalla(resultado);
    else
        mostrarPantalla("Syntax ERROR");
}
function mostrarPantalla(cadena) {
    pantalla.innerText = cadena;
}


function iniciarCalculadora1() {
    input1C1 = document.createElement("input");
    input1C1.type = "number";

    input2C1 = document.createElement("input");
    input2C1.type = "number";

    selectOpC1 = document.createElement("select");
    selectOpC1.innerHTML = `
        <option value="${OP_SUMAR}">+</option>
        <option value="${OP_RESTAR}">-</option>
        <option value="${OP_MULTIPLICAR}">*</option>
        <option value="${OP_DIVIDIR}">/</option>
    `;

    btnCalcular.onclick = () => mostrarResultado(calcularC1(input1C1.value, input2C1.value, selectOpC1.value));

    calculadora.appendChild(input1C1);
    calculadora.appendChild(selectOpC1);
    calculadora.appendChild(input2C1);
    terminarIniciarCalculadora();
}
function iniciarCalculadora2() {
    let elemento;
    resultadoMostradoC2 = false;
    cuentaC2 = "";

    for (let i = 0; i < 10; i++) {
        elemento = document.createElement("button");
        elemento.innerText = i;
        elemento.onclick = () => aniadirACuenta(i);
        calculadora.appendChild(elemento);
    }
    
    btnCalcular.onclick = () => {
        resultadoMostradoC2();
        mostrarResultado(eval(cuentaC2));
    }
    terminarIniciarCalculadora();
}
function terminarIniciarCalculadora() {
    btnCalcular.className = "calcular";
    btnCalcular.innerText = "=";
    
    calculadora.appendChild(btnCalcular);
    calculadora.appendChild(pantalla);

    opciones.style = "display: none";
}