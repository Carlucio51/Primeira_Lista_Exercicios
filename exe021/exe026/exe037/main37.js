/* Crie um programa que fique lendo repetidamente alguns números fornecidos pelo
usuário. Se o usuário digitar um valor especial definido por você (digamos, zero,
-1 ou 999), o computador deve imprimir a somatória dos números já fornecidos.
Definição: Esse valor especial que sinaliza o fim de um laço é chamado de valor
sentinela. Como esse valor se destina simplesmente a forçar a condição de saída
do laço, em geral ele não é aproveitado na lógica do programa.*/

//entar vários numeros 

//ate o vsentinela

//que sera condição de saida

//não sera aproveitado na lógica

let soma = 0;
let numero

while (true) {
    numero = parseFloat(prompt("Digite um número"));
    if (numero == 1000){
        break;
    }
    soma = soma + numero
}

alert(`A soma e ${soma}`)

