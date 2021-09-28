/*Escreva	 um	 programa	 para	 ler	 o	 ano	 de	 nascimento	 de	 uma	 pessoa	 e	
escrever	 uma	 mensagem	 que	 diga	 se	 ela	 poderá	 ou	 não	 votar	 este	 ano	
(não	é	necessário	considerar	o	mês	em	que	ela	nasceu).*/


let anoNascimento = 2017
let idadeVotar = 16
let anoeleicao = 2021
let idadeatual


idadeatual = anoeleicao - anoNascimento


if (idadeatual >= idadeVotar){
    console.log("Já pode votar!")
}
else {console.log("Você ainda não podera votar.")}

/*let Ano_nasc = 2002
let idade_votar = 16
let eleicao = 2021
let idadehoje


idadehoje = eleicao - Ano_nasc

if (idadehoje >= idade_votar) {
    console.log("Ok este ano você já pode votar.")

}else {
    console.log("Você ainda não pode votar.")

}*/