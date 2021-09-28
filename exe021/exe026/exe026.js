/*Escrever um algoritmo que lê um valor em reais e calcula qual o menor número possível de notas de 100, 50, 10, 5 e 1 em que o valor lido pode ser decomposto. Escrever o valor lido e a relação de notas necessárias.*/


let valor = 389;

 let notaCem = 0;

 let notaCinquenta = 0;

 let notaVinte = 0;

 let notaDez = 0;

 let notaCinco = 0;

 let notaDois = 0;

 let notaUm = 0;

 while (valor != 0) {

   if (valor >= 100) {

     valor -= 100;

     notaCem++;

   }

   else if (valor >= 50) {

     valor -= 50;

     notaCinquenta++;

   }

   else if (valor >= 20) {

     valor -= 20;

     notaVinte++;

   }

   else if (valor >= 10) {

     valor -= 10;

     notaDez++;

   }

   else if (valor >= 5) {

     valor -= 5;

     notaCinco++;

   }

   else if (valor >= 2) {

     valor -= 2;

     notaDois++;

   }

   else if (valor >= 1) {

     valor -= 1;

     notaUm++;

   }

 


}


if (notaCem != 0) {
console.log(notaCem + " nota(s) de R$ 100");
}
if (notaDois != 0){
console.log(notaCinquenta + " nota(s) de R$ 50");
}
if (notaCinco != 0){
console.log(notaVinte + " nota(s) de R$ 20");
}
if (notaDez != 0){
console.log(notaDez + " nota(s) de R$ 10");
}
if (notaCinco != 0){ 
console.log(notaCinco + " nota(s) de R$ 5");
}
if (notaDois != 0){
console.log(notaDois + " nota(s) de R$ 2");
}
if (notaUm != 0){
console.log(notaUm + " nota(s) de R$ 1");
}