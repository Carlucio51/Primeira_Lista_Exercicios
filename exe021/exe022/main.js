/* 
Uma empresa concederá um aumento de salário aos seus funcionários, variável de 
acordo com o cargo, conforme a tabela abaixo. Faça um algoritmo que leia o salário e o cargo de um funcionário e calcule o novo salário.Se o cargo do funcionário não estiver na tabela, ele deverá, então, receber 40% de aumento. Mostre o salário antigo, o novo salário e a diferença. 
Código Cargo Percentual
101 Gerente 10%
102 Engenheiro 20%
103 Técnico 30% */

let salario = 5000
let cargo = "badeco"
let diferenca
let sal_novo


if (cargo === "gerente") { 
    diferenca = salario * 10/100;
    sal_novo = salario + diferenca;
    console.log(`Salario: R$${salario} Salario novo:R$${sal_novo} Diferença: R$${diferenca}`)
}
else if (cargo === "Engenheiro") {
    diferenca = salario * 20/100;
    sal_novo = salario + diferenca;
    console.log(`Salario: R$${salario} Salario novo: R$${sal_novo} Diferenca:
    R$${diferenca}`)
}
else if (cargo === "Técnico") {
    diferenca = salario * 30/100;
    sal_novo = salario + diferenca;
    console.log(`Salario: R$${salario} Salario novo: R$${sal_novo} Diferenca:
    R$${diferenca}`)
}
else {diferenca = salario * 40/100;
     sal_novo = salario + diferenca;
     console.log(`Salario: R$${salario} Salario novo: R$${sal_novo} Diferenca: R$${diferenca}`)}