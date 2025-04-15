function CalcularIMC(peso, altura) {
    const IMC = peso / (altura * altura);
    return IMC;
}

const pesousuario = 20;
const alturausuario = 1.50;
const imcusuario = CalcularIMC(pesousuario, alturausuario);

if (imcusuario < 18.5) {
    console.log('Tu IMC es ' + imcusuario.toFixed(2) + ': peso insuficiente');
} else if (imcusuario >= 18.5 && imcusuario <= 24.9) {
    console.log('Tu IMC es ' + imcusuario.toFixed(2) + ': peso saludable');
} else if (imcusuario >= 25 && imcusuario <= 29.9) {
    console.log('Tu IMC es ' + imcusuario.toFixed(2) + ': sobrepeso');
} else if (imcusuario >= 30 && imcusuario <= 39.9) {
    console.log('Tu IMC es ' + imcusuario.toFixed(2) + ': obesidad');
} else {
    console.log('Tu IMC es ' + imcusuario.toFixed(2) + ': obesidad extrema');
}
