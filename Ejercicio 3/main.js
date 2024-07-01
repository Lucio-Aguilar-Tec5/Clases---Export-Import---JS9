import Calculadora from './calculadora.js';

const calcula = new Calculadora();

const num1 = 6;
const num2 = 3;

console.log(`Multiplicar ${num1} por ${num2} da: ${calcula.multiplicar(num1, num2)}`);
console.log(`Dividir ${num1} por ${num2} da: ${calcula.dividir(num1, num2)}`);