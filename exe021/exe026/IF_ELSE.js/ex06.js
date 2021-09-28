/* Tendo	 como	 entrada	 a	 altura	 e	 o	 sexo	 (codificado	 da	 seguinte	 forma:	
1:feminino	 	 2:masculino)	 de	 uma	 pessoa,	 construa	 um	 programa	 que	
calcule	e	imprima	seu	peso	ideal,	utilizando	as	seguintes	
Fórmulas:	
- para	homens:	(72.7	*	Altura)	– 58	
- para	mulheres:	(62.1	*	Altura)	– 44.7	*/

let altura = 1.80
pesoidealM = (72.7 * altura) - 58
pesoidealF = (62.1 * altura) - 44.7
sexo = "M"

if ( sexo == "M" ) {

    console.log(`O seu peso ideal e ${pesoidealM.toFixed(2)}`)

}else {

    console.log(`O seu peso ideal e ${pesoidealF.toFixed(2)}`)

}

