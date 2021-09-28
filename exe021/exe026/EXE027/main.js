/*Escrever um algoritmo que lê:
- a percentagem do IPI a ser acrescido no valor das peças
- o código da peça 1, valor unitário da peça 1, quantidade de peças 1
- o código da peça 2, valor unitário da peça 2, quantidade de peças 2
O algoritmo deve calcular o valor total a ser pago e apresentar o resultado.
Fórmula: (valor1*quant1 + valor2*quant2)*(IPI/100 + 1)
*/

let cdpc1 = 200
let cdpc2 = 100
let pca1 = 15
let pca2 = 25
let qtd = 50
let IPI = 30
let total

if (cdpc1 === 200){
    total = (pca1 * qtd) + (pca2 * qtd) * (IPI/100+1)
    console.log(total)
}
