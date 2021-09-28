/*As	maçãs	 custam	 R$	 0,30	 cada	 se	 forem	 compradas	menos	 do	 que	 uma	
dúzia,	 e	 R$	 0,25	 se	 forem	 compradas	 pelo	 menos	 doze.	 Escreva	 um	
programa	 que	 leia	 o	 número	 de	 maçãs	 compradas,	 calcule	 e	 escreva	 o	
valor	total	da	compra.*/

// MENOS QUE 12 VALOR 0.30
//MAIS QUE 12 VALOR 0.25

let quant = 12
let total

if (quant >= 12)  {
    total = quant*.25 
    console.log("Valor total R$",total)
}
else{total= quant*.30
    console.log("valor total R$",total)}
