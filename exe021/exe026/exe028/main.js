/*Escrever um algoritmo que lê a hora de início e hora de término de um jogo, ambas 
subdivididas em dois valores distintos: horas e minutos. Calcular e escrever a duração do 
jogo, também em horas e minutos, considerando que o tempo máximo de duração de um 
jogo é de 24 horas e que o jogo pode iniciar em um dia e terminar no dia seguinte.
*/

var hi = 13 ;
var mi = 30 ;
var ht = 12 ;
var mt = 27 ;
var total_horas

 let calculo = ((ht*60+mt) - (hi*60+mi)) ;
 total_horas = Math.floor(calculo/60) ;
 let total_minutos = calculo%60;

 if (total_horas < 0 ) {
     total_horas += 24
 };

 if (total_minutos < 0 ){
    total_minutos += 60
 } ;

 console.log(`O total de horas jogadas foi ${total_horas}:${total_minutos} minutos`)


