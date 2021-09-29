/*44. A Pense Longe é uma empresa que comercializa planos de previdência privada.
Ao adquirir um desses planos, o participante deve depositar periodicamente uma
certa quantidade em dinheiro numa conta especial que, depois de alguns anos, é
utilizada para financiar sua aposentadoria (imagine, para simplificar, que seja
apenas um depósito por ano). Baseado nessas informações, escreva programas
que executem conforme especificado abaixo:

a) Assuma que o plano de previdência ofereça uma rentabilidade de 9% ao
ano sobre o valor depositado na conta; ou seja, a cada ano, o valor
depositado pelo correntista em sua conta é somado ao valor ali existente e
esse total é acrescido de 9%. Seu programa deve permitir que o usuário
informe por quantos anos um certo participante imagina que ainda deve
trabalhar antes de se aposentar e qual é o valor que ele conseguirá depositar
anualmente em sua conta. Ao final, o programa deve escrever como o
saldo da conta evoluirá ao longo dos anos em que o participante fizer seus
depósitos;

*/

let anos=30 //quantos anos imagina que ainda deve trabalhar antes de se aposentar
let saldoAnual= 60000


for(i=1; i <= anos ; i++){
    saldoAnual = saldoAnual + (saldoAnual*9/100);
    console.log(i,(saldoAnual.toFixed(2)))
}
