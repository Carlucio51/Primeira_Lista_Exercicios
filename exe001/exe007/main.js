/*7. O custo ao consumidor de um carro novo é a soma do custo de fábrica com a 
percentagem do distribuidor e dos impostos (aplicados ao custo de fábrica). Supondo que a
percentagem do distribuidor seja de 28% e os impostos de 45%, escrever um algoritmo que 
leia o custo de fábrica de um carro e escreva o custo ao consumidor. 

15000 custoF *28%
porcDistribuidor 28% 4200
imposto 45% 6750
15000+4200+6750=


*/
let custoF= 15000
let porcDist= (custoF * 0.28)
let imposto= (custoF * 0.45)
let vlConsumidor= (custoF + porcDist + imposto )

console.log(`${vlConsumidor} valor ao consumidor.`)