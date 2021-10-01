/*47. Aplicativo para pesquisa de mercado da Lanchonete Café Saboroso – Quando um
pedido é feito por telefone, o atendente solicita o CEP e a idade do cliente, que
são anotados com a quantidade de itens do pedido. Construa um programa que
automatize esse processo, implementando as tarefas que seguem:*/

/*a) O programa opera continuamente até que o funcionário insira um 0 para
CEP no final do dia. Se o funcionário inserir um código postal inválido
(mais de 5 dígitos) ou uma idade inválida (definida como menos de 10 ou
mais de 110), o programa alerta o funcionário sobre esse erro, e pede que
os dados sejam inseridos novamente;*/

let cep;
let idade=0;
let itens=0;
let pedidos=0;
let sentinela=0;   


while (cep != sentinela) {  

    cep = (prompt("CEP"));
  if (cep.length > 5 ){
    alert("Cep invalido. Insira novamente os dados")
    break
  }
  idade = Number(prompt("Idade"))
  if( idade < 10 || idade > 110){
      alert("Idade invalida. Isira novamente os dados")
      break
  } 

}
// while (true) {
//     if (cep === 0 ){
//     prompt("Fim do expediente, bom descanso!")
//     break}
// }
// while (true) {
//     if (cep == 0 ){
//     prompt("Fim do expediente, bom descanso!")
//     break}
// }

// idade = prompt("idade")
// itens = prompt("itens")
// pedidos = prompt("pedidos")
// sentinela = prompt("sentinela")

