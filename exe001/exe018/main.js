/*Um banco concederá um crédito especial aos seus clientes, variável com o saldo médio no último ano. Faça um algoritmo que leia o saldo médio de um cliente e calcule o valor do crédito de acordo com a tabela abaixo.
 Mostre uma mensagem informando o saldo médio o valor do crédito. (use o comando caso-de e não faça repetições) Saldo médio Percentual de 0 a 200 nenhum créditode 201 a 400 20% do valor do saldo médio de 401 a 600 30% do valor do saldo médio acima de 601 40% do valor do saldo médio */


saldo_medio = 958.30
credito = 0

if (saldo_medio > 0 && saldo_medio <= 200) {
    console.log(`Nenhum credito aprovado`)
}
else if (saldo_medio > 201 & saldo_medio <= 400) {
    credito += (saldo_medio * 20/100)
    console.log(`Crédito aprovado de R$${credito}`)
}
else if (saldo_medio > 401 & saldo_medio <= 600){
    credito += (saldo_medio * 30/100)
    console.log(`Crédito aprovado de R$${credito}`)
}
else if (saldo_medio >= 601) {
    credito += (saldo_medio * 40/100)
    console.log(`Crédito aprovado de R$${credito.toLocaleString("pt-BR")}`)
                //usando toLocalString("pt-Br") para colocar moeda brasileira
}

