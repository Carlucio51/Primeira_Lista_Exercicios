/*13. Escreva um algoritmo que leia 3 números inteiros e mostre o maior deles.*/
const num1= 50
const num2= 2
const num3= 80

let maior = num1
let menor = num1
 
if (num2 > maior){
    maior = num2
}else if (num2 < menor){
    menor = num2
}
if (num3 > maior){
    maior = num3
}else if (num3 < menor){
    menor = num3
}
console.log('Menor valor:', menor)
console.log('Maior valor:', maior)