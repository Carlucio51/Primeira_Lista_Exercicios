/* Escreva	 um	 programa que	 leia	 as	 medidas	 dos	 lados	 de	 um	 triângulo	 e	
escreva	se	ele	é	Equilátero,	Isósceles	ou	Escaleno.	Sendo	que:	
− Triângulo	Equilátero:	possui	os	3	lados	iguais.	
− Triângulo	Isóscele:	possui	2	lados	iguais.	
− Triângulo	Escaleno:	possui	3	lados	diferentes.*/

let lado1 = 2
let lado2 = 1
let lado3 = 1

//equilatero = 3 lados iguais
//Isóscele = 2 lados iguais
//Escaleno = 3diferentes

if (lado1 == lado2 && lado1 == lado3) {

    console.log("Equilátero")

} else if((lado1 == lado2 && lado1 != lado3)|| (lado2 == lado3 && lado2 != lado1)|| (lado1 == lado3 && lado3 != lado2)){
    console.log("Isóscele");

} else  {
    console.log("Escaleno");
}