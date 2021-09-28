/*  . Escreva	um	programa	para	ler	o	número	de	lados	de	um	polígono	regular	
e	a	medida	do	lado	(em	cm).	Calcular	e	imprimir	o	seguinte:	
− Se	o	número	de	lados	for	igual	a	3	escrever	TRIÂNGULO	e	o	valor	da	
área
− Se	o	número	de	lados	for	igual	a	4	escrever	QUADRADO	e	o	valor	da	
sua	área.	
− Se	o	número	de	lados	for	igual	a	5	escrever	PENTÁGONO.  */


let lado = 3
let ladocm = 4
let area

area = lado*lado

if (lado === 3)  { 

console.log(`TRIÂNGULO e o valor da	é ${area}`)

} if ( lado === 4) { 

    console.log (`QUADRADO e o valor da é ${area}`)

} else if ( lado === 5) {

    console.log("PENTÁGONO")

}


