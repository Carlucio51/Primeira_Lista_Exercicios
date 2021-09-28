/*Elabore um algoritmo que dada a idade de um nadador classifica-o em uma das 
seguintes categorias:*/

let idade=25
 
        
if(idade <= 4) console.log("Muito jovem!");
if((idade >= 5) && (idade <= 7))  console.log("Infantil A");    
if((idade >= 8) && (idade <= 10))  console.log("Infantil B");
if((idade >= 11) && (idade <= 13))  console.log("Juvenil A");
if((idade >= 14) && (idade <= 17)) console.log("Juvenil B");
if(idade >= 18) console.log("Adulto");