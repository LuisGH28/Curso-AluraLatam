function imc(peso, altura) {
    return peso / (altura * altura);
}

function factorial(numero) {
    let resultado = 1;
    for (let i = 1; i <= numero; i++) {
        resultado *= i;
    }
    return resultado;
}

function dollarToPesoBrasileiro(dollar) {
    return dollar * 5.5;
}

function rectanguloPerimetro(base, altura) {
    return (base + altura) * 2;
}

function circleArea(radio) {
    return Math.PI * radio * radio;
}

function tableMultiplication(numero) {
    let table = '';
    for (let i = 1; i <= 10; i++) {
        table += `${numero} * ${i} = ${numero * i}\n`;
    }
    return table;
}