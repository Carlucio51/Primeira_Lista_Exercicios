/* Calcule a média aritmética das 3 notas de um aluno e mostre, além do valor da média, 
uma mensagem de "Aprovado", caso a média seja igual ou superior a 6, ou a mensagem 
"reprovado", caso contrário
*/ 
let nota1 = 2
let nota2 = 2
let nota3 = 10
let media = 0

media = ((nota1 + nota2 + nota3 ) /3)
/* 

    <   Menor      <=  Menor igual
    >   Maior      >=  Maior igual
    ==  igual      !=  diferente

 == */
 if(media <5){ console.log(`Sua média é ${media} e você infelizmente foi "REPROVADO"`)
 }else {
    console.log(`Sua média é ${media} e você está "APROVADO PARABÉNS!!!" .`)
 }

