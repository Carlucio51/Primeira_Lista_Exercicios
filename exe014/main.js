/* Escreva um algoritmo que leia o código de um aluno e suas três notas. Calcule a média 
ponderada do aluno, considerando que o peso para a maior nota seja 4 e para as duas 
restantes, 3. Mostre o código do aluno, suas três notas, a média calculada e uma 
mensagem "APROVADO" se a média for maior ou igual a 5 e "REPROVADO" se a média 
for menor que 5.*/

const codigo = 2021
let nota1 = 4        
let nota2 = 3
let nota3 = 3

let media= ((nota1 + nota2 + nota3)/3)

console.log(`Notas: ${nota1} , ${nota2} , ${nota3} , A media é ${media.toFixed(2)} e você está REPROVADO`)

