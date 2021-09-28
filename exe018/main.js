/*Um banco concederá um crédito especial aos seus clientes, variável com o saldo médio no último ano. Faça um algoritmo que leia o saldo médio de um cliente e calcule o valor do crédito de acordo com a tabela abaixo.
 Mostre uma mensagem informando o saldo médio o valor do crédito. (use o comando caso-de e não faça repetições) Saldo médio Percentual de 0 a 200 nenhum créditode 201 a 400 20% do valor do saldo médio de 401 a 600 30% do valor do saldo médio acima de 601 40% do valor do saldo médio */


 let saldoMedio = 620

 if (saldoMedio >0 && saldoMedio <= 200) {
            console.log("Sem crédito aprovado")
 }else if
    (saldoMedio > 200 && saldoMedio <= 400) {
    console.log(saldoMedio+(20/100*saldoMedio)`Seu emprestimo e de ${saldoMedio}`)
        
}else if 
    (saldoMedio > 400 && saldoMedio <= 600) {
    console.log(saldoMedio+(30/100*saldoMedio)`Seu emprestimo e de ${saldoMedio}`)

}else if
    (saldoMedio > 600 ) {
    console.log(`Seu emprestimo e de ${saldoMedio+(40/100*saldoMedio)}`)

    }
