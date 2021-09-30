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
let votos=0;
let numero;
let contador=0;
let erro=0


alert('Qual nota para o filme Vingadores?')

while (true) {    
    nota = Number(prompt("Infomre uma nota de 0-4")); contador++
    
    if (nota == 5 ){
        break;
    }
    if(nota < 0 || nota > 4){
        prompt("Nota invalida!!! Por favor insira uma nota de 0-4")
        erro++;
    }       
    if (erro < 3){
         prompt("Nota invalida!!! Por favor insira uma nota de 0-4")
        
    }       
}alert("Fim!")


