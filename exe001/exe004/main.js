let idade= 21500
let anos= Math.floor(idade/365)
let meses= Math.floor((idade%365) /30)
let dias= (idade%365)%30// e o que sobrou dos dias que nao formou ano.


console.log(`${anos} anos, ${meses} meses e ${dias} dias.`)