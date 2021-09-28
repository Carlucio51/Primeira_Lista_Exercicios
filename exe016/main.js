/* O cardápio de uma lancheria é o seguinte:
Especificação Código Preço
Cachorro quente 100 1,20
Bauru simples 101 1,30
Bauru com ovo 102 1,50
Hambúrger 103 1,20
Cheeseburguer 104 1,30
Refrigerante 105 1,00
Escrever um algoritmo que leia o código do item pedido, a quantidade e calcule o valor a ser 
pago por aquele lanche. Considere que a cada execução somente será calculado um item. */

let recebeCodigo = 101;
let quantidadeProdutos = 2;
let soma;

if(recebeCodigo == 100){
    soma = quantidadeProdutos * 1.2
    console.log(`${quantidadeProdutos} Cachorro quente R$${soma}`)

}else if (recebeCodigo == 101){
    soma = quantidadeProdutos *1.3
    console.log(`${quantidadeProdutos} Bauru simples R$${soma}`)

}else if (recebeCodigo == 102){
    soma = quantidadeProdutos *1.5
    console.log(`${quantidadeProdutos} Bauru com ovo R$${soma}`)

}else if (recebeCodigo == 103){
    soma = quantidadeProdutos *1.2
    console.log(`${quantidadeProdutos} Hambúrguer R$${soma}`)

}else if (recebeCodigo == 104){
    soma = quantidadeProdutos *1.3
    console.log(`${quantidadeProdutos} Cheeseburguer R$${soma}`)

}else if (recebeCodigo == 105){
    soma = quantidadeProdutos *1.0
    console.log(`${quantidadeProdutos} Refrigerante R$${soma}`)
}
