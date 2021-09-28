/*Escrever um algoritmo que lê a hora de início de um jogo e a hora do final do jogo 
(considerando apenas horas inteiras) e calcula a duração do jogo em horas,sabendo-se 
que o tempo máximo de duração do jogo é de 24 horas e que o jogo pode iniciar em um dia e terminar no dia seguinte.*/

let inicio = 16.50
let fim = 16
let total 

if (fim < inicio) {
    total = (24-inicio) + fim

}else if (fim > inicio) {
    total = fim - inicio

}else if (fim == inicio) {
    total = 24
}

    console.log(`Total ${total.toFixed(2)} horas de jogo.`)

