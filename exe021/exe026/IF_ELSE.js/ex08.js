/* Acrescente	 as	 seguintes	 mensagens	 à	 solução	 do	 exercício	 anterior	
conforme	o	caso.	
− Caso	 o	 número	 de	 lados	 seja	 inferior	 a	 3	 escrever	 NÃO	 É	 UM	
POLÍGONO.	
− Caso	o	número	de	lados	seja	superior	a	5	escrever	POLÍGONO	NÃO	
IDENTIFICADO. */


let lado = 6
let ladocm = 4
let area

area = lado*lado


 if ( lado < 3 ) {

    console.log ("NÃO É UM POLÍGONO.")
    

 }if (lado === 3)  { 

console.log(`TRIÂNGULO e o valor da	é ${area}`)


} if ( lado === 4) { 

    console.log (`QUADRADO e o valor da é ${area}`)


}if ( lado === 5) {

    console.log("PENTÁGONO")

} else if (lado > 5) {

    console.log("POLÍGONO NÃO IDENTIFICADO.")
}