/*  Escreva um algoritmo que leia três números inteiros e positivos (A, B, C) e calcule a 
seguinte expressão: R+S/2, onde R = (A + B)^2    S= (B + C)^2  */

let A = 2
let B = 3
let C = 6

let D = Math.pow((A + B),2) + Math.pow(( B + C ) ,2) /2
console.log (D)
