/*Escrever um algoritmo que calcule os sucessivos valores de E usando a série abaixo e 
considerando primeiro 3 termos, depois 4 termos e, por fim, 5 termos: 
E = 1 + 1 / 1! + 1 / 2! + 1 / 3! + 1 / 4! */

e = 1.0 + 1.0 + (1.0/2.0); 
console.log("e com tres termos: ", e); 

e = e + (1.0/6.0); 
console.log("e com quatro termos:", e); 

e = e + (1.0/24.0); 
console.log("e com cinco termos: ", e);