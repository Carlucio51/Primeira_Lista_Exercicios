/* Faça um algoritmo que leia o tempo de duração de um evento em uma fábrica expressa em segundos e mostre-o expresso em horas, minutos e segundos.*/
let segundos= 4600
let horas= Math.floor(segundos/3600)
let minutos= Math.floor((segundos%3600)/60) 
let restsegundos= (segundos%60)

console.log(`${horas}horas, ${minutos} minutos e ${restsegundos} segundos.`)




