/*Escrever um algoritmo que lê o número de identificação, as 3 notas obtidas por um 
aluno nas 3 verificações e a média dos exercícios que fazem parte da avaliação. Calcular a 
média de aproveitamento, usando a fórmula:
MA = (Nota1 + Nota2 x 2 + Nota3 x 3 + ME )/7
A atribuição de conceitos obedece a tabela abaixo */


const matricula = 2021;
let Nota1 = 5;
let Nota2 = 7;
let Nota3 = 9.5;
let me = ((Nota1 + Nota2 + Nota3) / 3);
var ma = ((Nota1 + Nota2 * 2) + Nota3 + me )/7;
let conceito;

if (ma >= 9.0) {
    conceito = "A | aprovado"

}if (ma >= 7.5) {
    conceito = "B | aprovado"

}if (ma >= 6.0) {
    conceito = "C | aprovado"

}if (ma >= 4.0) {
    conceito = "D | aprovado"

}else conseito = "E | reprovado"

console.log( `Matrícula ${matricula} , notas: ${Nota1 , Nota2 , Nota3}  , Media dos exercícios ${me.toFixed(2)} , media de aproveitamento  ${ma.toFixed(2)} , conceito ${conceito}`) ;


