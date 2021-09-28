//17. Tendo como dados de entrada a altura e o sexo de uma pessoa (?M? /masculino e ?F? 
//        feminino), construa um algoritmo que calcule seu peso ideal,          utilizando as seguintes 
//        fórmulas:
//       - para homens: (72.7*h)-58
//       - para mulheres: (62.1*h)-44.7


let sexo = "F"
let altura = 1.72

Peso_M = (72.7 * altura)-58 
Peso_F = (62.1 * altura)-44.7

if (sexo == "M" ){
        Peso_M = (72.7 * altura)-58 
        console.log(`Seu peso ideal é ${Peso_M.toFixed(2)}`)
}
if (sexo == "F" ){
        Peso_F = (62.1 * altura)-44.7 
        console.log(`Seu peso ideal é ${Peso_F.toFixed(2)}`)
}
