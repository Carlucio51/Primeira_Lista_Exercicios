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

let cdg = 101;
let qtd = 30;
let soma;


if (cdg == 100) {soma = qtd * 1.20; console.log (`Código:${cdg} Quantidade:${qtd} Valor total:${soma}`)}

if (cdg == 101) {soma = qtd * 1.30; console.log (`Código:${cdg} Quantidade:${qtd} Valor total:${soma}`)}

if (cdg == 102) {soma = qtd * 1,50; console.log (`Código:${cdg} Quantidade:${qtd} Valor total:${soma}`)}

if (cdg == 103) {soma = qtd * 1.20; console.log (`Código:${cdg} Quantidade:${qtd} Valor total:${soma}`)}

if (cdg == 104) {soma = qtd * 1.30; console.log (`Código:${cdg} Quantidade:${qtd} Valor total:${soma}`)}

if (cdg == 105) {soma = qtd * 1.00; console.log (`Código:${cdg} Quantidade:${qtd} Valor total:${soma}`)
}else{console.log("código inválido")}