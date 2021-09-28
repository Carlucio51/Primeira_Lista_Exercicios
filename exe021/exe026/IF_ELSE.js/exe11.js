/* Escreva	 um	 programa	 que	 leia	 o	 valor	 de	 3	 ângulos	 de	 um	 triângulo	 e	
escreva	 se	 o	 triângulo	 é	 Acutângulo,	 Retângulo	 ou	 Obtusângulo.	 Sendo	
que:	
− Triângulo	Retângulo:	possui	um	ângulo	reto.	(igual	a	90º)
− Triângulo	Obtusângulo:	possui	um	ângulo	obtuso.	(maior	que90º)	
− Triângulo	Acutângulo:	possui	três	ângulos	agudos.	(menor	que	90º)*/

let A1 = 40
let A2 = 50
let A3 = 45

if (A1 === 90 || A2 === 90 || A3 === 90) {

    console.log ("RETÂNGULO")

}
if (A1 > 90 || A2 > 90 ||A3 > 90){

    console.log ("OBTUSÂNGULO")

}
if  (A1 < 90 || A2 < 90 || A3 < 90) {

    console.log ("ACUTÂNGULO")
}
