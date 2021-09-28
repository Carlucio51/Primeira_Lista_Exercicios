/*Elaborar um algoritmo que lê 3 valores a,b,c e verifica se eles formam ou não um 
triângulo. Supor que os valores lidos são inteiros e positivos. Caso os valores formem um 
triângulo, calcular e escrever a área deste triângulo. Se não formam triângulo escrever os 
valores lidos. ( se a > b + c não formam triângulo algum, se a é o maior).
*/
let a = 5                                   //Equilátero -> 3 lados iguais
let b = 4                                   //Isósceles -> 2 lados iguais
let c = 1                                   //Escaleno -> 3 lados diferentes

    if ( a+b > c && a+c > b && b+c > a) {
        console.log(`Triângulo`);
    }else{    
     console.log(`Não forma um triângulo`)}
