/*46. Aplicativo para avaliação de Filmes:
A Veja Bem é uma startup que vai começar a atuar no ramo de entretenimento,
publicando em seu site a percepção que o público tem dos filmes que estão sendo
exibidos nos cinemas da cidade. Para isso, instalarão quiosques nesses cinemas,
onde os expectadores poderão atribuir uma nota de 0 a 4 a cada filme exibido.
Para implementar esses quiosques, execute as atividades abaixo:


a) Faça um programa que permita aos expectadores de um cinema avaliarem
um determinado filme com essas notas, até que um valor de sentinela seja
incluído. Não permita que notas inválidas sejam atribuídas – se um usuário
não inserir uma nota válida, peça para ele repetir a votação;*/



let nota = 0;
let votos=0
let MediaNota=0

while (true) {
    alert('Filme Dragão Branco')
    numero = parseFloat(prompt("Qual a nota do filme?"));
    if (numero == 1000){
        break;
    }
    votos+=1
    
}
MediaNota+= (nota/votos)
alert(`A soma e ${MediaNota}`)


