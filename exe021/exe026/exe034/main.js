/* Projete um algoritmo que imprima uma lista de todos os números ímpares entre 0
e 30. Cada número deve ser impresso ao lado do seu dobro e do seu triplo.*/


    
let numero = 0;

while (numero < 31) {
  if (numero%2 == 1){
    console.log("valor: " + (numero), (numero * 2),(numero * 3))
  }
   
  numero++;
    
  }