/*Um vendedor precisa de um algoritmo que calcule o preço total devido por um cliente. O algoritmo deve receber o código de um produto e a quantidade comprada e calcular o preço total, usando a tabela abaixo. Mostre uma mensagem no caso de código inválido.*/

let codigoP = "ABDF"
let unidade = 5
let soma 

if (codigoP === "ABCD") {
    soma = unidade  * 5.30
    console.log(`O valor a ser pago e: R$${soma}`)

}else if (codigoP === "XYPK") {
    soma = unidade   * 6.00
    console.log(`O valor a ser pago e: R$${soma}`)

}else if (codigoP === "KLMP") {
    soma = unidade  * 3.20
    console.log(`O valor a ser pago e: R$${soma}`)

}else {
    console.log('O código do produto está errado!!!')
}
