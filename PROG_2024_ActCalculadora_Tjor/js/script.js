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
function limpiarCuenta() {
    cuentaC2 = "";
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
    const inputGroup = document.createElement("div");
    calculadora.appendChild(pantalla);
    inputGroup.className = "input-group";

    input1C1 = document.createElement("input");
    input1C1.className = "col-5 form-control";
    input1C1.type = "number";

    selectOpC1 = document.createElement("select");
    selectOpC1.className = "col-2 form-select";
    selectOpC1.innerHTML = `
        <option value="${OP_SUMAR}">+</option>
        <option value="${OP_RESTAR}">-</option>
        <option value="${OP_MULTIPLICAR}">*</option>
        <option value="${OP_DIVIDIR}">/</option>
    `;

    input2C1 = document.createElement("input");
    input2C1.className = "col-5 form-control";
    input2C1.type = "number";

    btnCalcular.onclick = () => mostrarResultado(calcularC1(input1C1.value, input2C1.value, selectOpC1.value));

    inputGroup.appendChild(input1C1);
    inputGroup.appendChild(selectOpC1);
    inputGroup.appendChild(input2C1);
    calculadora.appendChild(inputGroup);
    terminarIniciarCalculadora();
}
function iniciarCalculadora2() {
    const nums = document.createElement("div");
    const ops = document.createElement("div");
    const sumar = document.createElement("button");
    const restar = document.createElement("button");
    const multiplicacion = document.createElement("button");
    const dividir = document.createElement("button");
    let elemento;

    nums.className = "col";
    ops.className = "col";
    resultadoMostradoC2 = false;
    cuentaC2 = "";

    calculadora.appendChild(pantalla);

    for (let i = 0; i < 10; i++) {
        elemento = document.createElement("button")
        elemento.className = "col-4 btn btn-secondary";
        elemento.innerText = i;
        elemento.onclick = () => {
            if (resultadoMostradoC2) {
                limpiarCuenta();
                resultadoMostradoC2 = false;
            }
            aniadirACuenta(i);
        }
        nums.appendChild(elemento);
    }
    
    calculadora.appendChild(nums);


    sumar.className = "col-3 btn btn-secondary";
    sumar.onclick = () => aniadirACuenta("+");
    restar.className = "col-3 btn btn-secondary";
    restar.onclick = () => aniadirACuenta("-");
    multiplicacion.className = "col-3 btn btn-secondary";
    multiplicacion.onclick = () => aniadirACuenta("*");
    dividir.className = "col-3 btn btn-secondary";
    dividir.onclick = () => aniadirACuenta("/");

    ops.appendChild(sumar);
    ops.appendChild(restar);
    ops.appendChild(multiplicacion);
    ops.appendChild(dividir);
    calculadora.appendChild(ops);

    btnCalcular.onclick = () => {
        resultadoMostradoC2 = true;
        mostrarResultado(eval(cuentaC2));
    }
    calculadora.className = "row";
    terminarIniciarCalculadora();
}
function terminarIniciarCalculadora() {
    btnCalcular.className = "calcular";
    btnCalcular.className = "col-12 btn btn-secondary";
    btnCalcular.innerText = "=";
    
    calculadora.appendChild(btnCalcular);

    opciones.style = "display: none";
}