/*Aplicativos para a Loja de Utilidades Brilho S.A.:
a) Da mesma forma como no caso das Lojas Conforto, as lojas Brilho
precisam um programa para simular compras parceladas, onde o
computador lê o nome do cliente, um código de cliente (fictício), o valor
total da compra e um número de prestações. Porém, o esquema de
financiamento é totalmente diferente: as Lojas Brilho cobram juros de 1%
aplicados todo mês ao saldo do valor financiado, e o cliente é obrigado a
pagar 10% desse valor quando vencem as prestações. Assim, uma compra
de R$ 100,00 seria reajustada para R$ 101,00 quando a primeira prestação
vencer, sendo que o cliente teria que pagar 10% desse valor, ou seja, R$
10.10, reduzindo o saldo para R$ 101.10 – R$ 10.10 = R$ 90.90. No mês
seguinte, esse saldo seria reajustado em 1%, sendo que o cliente teria
novamente que pagar uma parcela de 10% desse saldo. O processo continua
até que o cliente quite a dívida.
Baseado nessas regras, crie um programa para que escreva o valor de cada
prestação dos próximos 12 meses (independente de quantas prestações o
cliente escolheu).
b) Modifique o programa anterior para que ele continue rodando até que o
um valor sentinela qualquer seja fornecido para o código de cliente.*/

let cliente
let codigo
let Vcompra
let prestacoes
let Vparcela

cliente = prompt("Qual o seu nome ? ")
codigo = prompt("Qual o codigo ?")
while (codigo >0) {
Vcompra = prompt("Qual o valor da compra ? ")
prestacoes = prompt("Insira a quantidade de prestações de 2 a 36 ")
            
    
    if (prestacoes >2 && prestacoes <36) {
        Vparcela = Vcompra / prestacoes
    }
    else {
        alert("Insira uma quantidade de prestações validas de 2 a 36")
    }
    
    for ( let i = 1; i <= prestacoes; i++){
        if(i <= 12) {
            Vparcela =+ (Vparcela * 10/100)
            alert(`${i} ${Vparcela.toFixed(2)}`)
        }
    }

    alert (`Olá ${cliente} , COD ${codigo} , O valor ficou em R$ ${Vcompra}.  Dividido em ${prestacoes} parcelas de R$ ${Vparcela.toFixed(2)}`)
}