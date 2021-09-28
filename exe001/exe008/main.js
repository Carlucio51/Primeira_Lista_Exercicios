/* 8. Um sistema de equações lineares do tipo:
, pode ser resolvido segundo mostrado abaixo:
Escreva um algoritmo que lê os coeficientes a,b,c,d,e e f e calcula e mostra os valores de x 
e y.*/

let A = 5
let B = 15
let C = 25
let D = 35
let E = 45
let F = 55
 let x = ((C*E) - (B*F)) / ((A*F) - (C*D)) 
 let y = ((A*F) - (C*D)) / ((A*E) - (B*D))
 


 console.log(`${A} valor A , ${B} valor B , ${C} valor C , ${D} valor D ${E} valor E
 ${F} valor F , O valor x é ${x}  O valor y é ${y} .`)