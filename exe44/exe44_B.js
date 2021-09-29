/*b) Altere o programa para que, após escrever como o saldo evolui ao longo
dos anos na fase de depósitos, seja impressa também uma lista mostrando
como o saldo evoluirá anualmente na fase de benefício (ou seja, quando o
participante se aposenta e passa a sacar dinheiro de sua conta). Suponha
que o usuário saque um único valor anual de R$ 50.000,00 e que a
rentabilidade sobre o saldo seja a mesma do período de poupança (9%).
Encerre a listagem desse período após 40 anos ou quando o saldo ficar
zerado ou negativo.
*/


let anos=30
let saldo= 6000
let saqueAnual=50000

for(i=0; i <= anos ; i++){
    saldo = saldo + (saldo*9/100);
    //console.log(i,(saldo.toFixed(2)))
}console.log(`Saldo Total com juros no final dos anos trabalhados \n R$${saldo.toFixed(2)}\n\n`)

    // Fase de aposentado decremento. 40 anos ou saldo zerado
for (i=1; i <=40 && saldo > 0; i++){
    saldo = (saldo + (saldo *9/100))    
    saldo = saldo - saqueAnual;
    console.log(`{${i}} ${saldo.toFixed(2)}`)}


