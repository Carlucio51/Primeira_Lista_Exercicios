/* Um vendedor necessita de um algoritmo que calcule o preço total devido por um cliente. 
O algoritmo deve receber o código de um produto e a quantidade comprada e calcular o 
preço total, usando a tabela abaixo: Código do Produto Preço unitário

1001 5,32
1324 6,45
6548 2,37
0987 5,32
7623 6,45*/

cod= 1001
qtd= 12
total=0

if(cod == 1001){total = qtd * 5.32; console.log("Total R$" + total)}
else if(cod == 1324){toral = qtd * 6.45; console.log("Total R$" + total)}
else if(cod == 6548){total = qtd * 2.37; console.log("Total R$" + total)}
else if(cod == 0987){total = qtd * 5.32; console.log("Total R$" + total)}
else if(cod == 7623){total = qtd * 6,45; console.log("Total R$" + total)
}else {console.log("Código produto inválido")}
