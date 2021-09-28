/*19. Um usuário deseja um algoritmo onde possa escolher que tipo de média deseja calcular 
a partir de 3 notas. Faça um algoritmo que leia as notas, a opção escolhida pelo usuário e 
calcule a média.
1 -aritmética
2 -ponderada (3,3,4)
3 -harmônica */

let nota1 = 30
let nota2 = 50
let nota3 = 85

let mediaa = (nota1+nota2+nota3/3)
let mediab = ((nota1*3)+(nota2*3)+(nota3*4))/(3+3+4)

const tipoMedia = 2

if (tipoMedia == 1) {
    console.log(`Media aritimetica e; ${mediaa}`)

}else if (tipoMedia == 2) {
    console.log(`Media ponderada e; ${mediab}`)
}
