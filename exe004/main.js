/*4. Faça um algoritmo que leia a idade de uma pessoa expressa em dias e mostre-a                                                       arredonda -
expressa em anos, meses e dias.*/

let idade= 7328
let anos= Math.floor(idade/365)
let meses= Math.floor((idade%365) /30)
let dias= (idade%365)%30


console.log(`${anos}anos, ${meses} meses e ${dias} dias.`)