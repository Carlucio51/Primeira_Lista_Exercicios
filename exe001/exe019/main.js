/*19. Um usuário deseja um algoritmo onde possa escolher que tipo de média deseja calcular 
a partir de 3 notas. Faça um algoritmo que leia as notas, a opção escolhida pelo usuário e 
calcule a média.
1 -aritmética
2 -ponderada (3,3,4)
3 -harmônica */


let nt1 = 2
let nt2 = 4
let nt3 = 8
media = 1

if (media == 1) {
    media += (nt1 + nt2 + nt3) /3
    console.log(`${media}`)
}
else if (media == 2){
    media += (nt1*3 + nt2*3 + nt3*4)/(3+3+4)
    console.log(media)
}
