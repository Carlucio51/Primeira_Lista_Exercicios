/*b) Quando o atendente informa uma quantidade de itens menor do que 1 ou
maior do que 12, o programa alerta sobre o erro duas vezes. Se o atendente
inserir um valor mais alto na terceira tentativa, o programa deve aceitálo, mas se o atendente
 inserir um valor negativo na terceira tentativa, uma mensagem de 
erro será exibida e o pedido não será contabilizado;*/


let cep;
let idade=0;
let itens=0;
let pedidos=0;
let sentinela=0;
let contador=0;   
let pedidosCEP=0;


while (cep != sentinela){  

    cep = (prompt("CEP"));
  if (cep.length > 5 ){
    alert("Cep invalido. Insira novamente os dados");
    break;
  }
  idade = Number(prompt("Idade"));
  if( idade < 10 || idade > 110){
      alert("Idade invalida. Isira novamente os dados");
      break;
  } 

  } if(itens < 1 || itens > 12){
      alert('Segunda tentativa, confere os dados');
      itens = int(prompt('Digite a quantidade: '))
  }
    if(itens < 1){
    print('Pedido não foi contabilizado');    
}
pedidosCEP.push(cep);
pedidosItens.push(qtdItens);
pedidosIdades.push(idade);

let duplicados = []; 
soma = 0;  
  for (cep in pedidosCEP);
    if (cep in duplicados);
      duplicados.push(cep);

  for (idade in pedidosIdades)
          soma = soma + idade

alert(`Pessoas do mesmo bairro: ${Number(duplicados)}`)
alert(`Pessoa de outro bairro: ${Number(pedidosCEP) -Number(duplicados)}` )
alert(`A média de idade é ${soma /Number(pedidosIdades)}`)