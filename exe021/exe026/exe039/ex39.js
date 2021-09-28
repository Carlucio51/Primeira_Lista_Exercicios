/*  Contagem de alturas – Crie um programa que leia continuamente a altura e o
sexo de uma lista de pessoas, até que uma altura negativa seja fornecida. Ao final,
sabendo que a média de altura para as mulheres brasileiras é de 1.60 m e a dos
homens brasileiros é de 1.73 m, escreva as seguintes informações:
a) quantas mulheres da lista estão acima da média nacional de altura para
mulheres, e quantas estão abaixo;
b) quantos homens da lista estão acima da média nacional de altura para
homens, e quantos estão abaixo.*/

let sexo
let altura
let contadorM=0
let contMAB=0
let contadorF=0
let contFAB=0

while (true) {
    altura = parseFloat(prompt("Digite o altura:"))
    if (altura > 0){
        sexo = prompt("Digite o sexo: ")
        if (sexo.toUpperCase() === "M"){
           contadorM = altura > 1.73 ? contadorM += 1 : altura < 1.73 ? contMAB += 1 : contadorM = contadorM;
        } else if (sexo.toUpperCase() === "F"){
            contadorF = altura > 1.60 ? contadorF += 1 : altura < 1.60 ? contFAB += 1 :
            contadorF = contadorF
        }
    }
    else {
        alert("Fim da lista.")
        break
        }        
}
alert(`${contadorM} Homens estão acima da média nacional.`)
alert(`${contMAB} Homens estão abaixo da média nacional.`)
alert(`${contadorF} Mulheres estão acima da média nacional.`)
alert(`${contFAB} Mulheres estão abaixo da média nacional.`)