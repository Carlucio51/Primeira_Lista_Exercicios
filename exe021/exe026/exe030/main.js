/*O departamento que controla o índice de poluição do meio ambiente mantém 3 grupos 
de indústrias que são altamente poluentes do meio ambiente. O índice de poluição aceitável 
varia de 0,05 até 0,25. Se o índice sobe para 0,3 as indústrias do 1o grupo são intimadas a 
suspenderem suas atividades, se o índice cresce para 0,4 as do 1o e 2o grupo são 
intimadas a suspenderem suas atividades e se o índice atingir 0,5 todos os 3 grupos devem 
ser notificados a paralisarem suas atividades. Escrever um algoritmo que lê o índice de 
poluição medido e emite a notificação adequada aos diferentes grupos de empresas.*/

var EG1 = 0.3
var EG2 = 0.4
var EG3 = 0.5
var IP = 0.6

if (IP <= 0.3)  {
    console.log(`Empresas do grupo 1 favor suspendam as atívidades`)

} else if (IP <= 0.4)  {
    console.log(`Empresas do grupo 1,2 favor suspendam as atívidades`)

} else if (IP >= 0.5) {
    console.log(`Atenção todas as empresas favor suspendam as atívidades`)
}