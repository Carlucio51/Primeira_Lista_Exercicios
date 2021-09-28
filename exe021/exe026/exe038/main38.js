/* Somatório e média de uma lista de números – Construa um programa que
permita a um usuário informar uma série de números, até que um número negativo
seja fornecido. Ao final, imprima o somatório desses números, a média, o valor
máximo e o mínimo. Desconsidere o último número informado pelo usuário.*/
let soma = 0
let numero
let contador = 1
let media
let maximo = -99999999999
let minimo = 999999999999

while (true) {
    numero = parseFloat(prompt("Digite um número"));
    contador++
    if (numero <= 0) {
        break;
    }

    soma = soma + numero;
    
    if (numero < minimo) {

        minimo = numero

    }if (numero > maximo) {

        maximo = numero
    }    
    
} media = soma / contador


    alert(`A média ${media.toFixed(2)} a soma ${soma}, máximo ${maximo} e o mínimo ${minimo}`) 
