/* 10. Elaborar um algoritmo que lê 3 valores a,b,c e os escreve. A seguir, encontre o maior 
dos 3 valores e o escreva com a mensagem: "É o maior ".
a + b + | a - b |
Maior de a e b = ------------------ */

let a=15
let b=8
let c=20

console.log(`A = ${a}\n`)
console.log(`B = ${b}\n`)
console.log(`C = ${c}\n`)
/*  
    <   Menor      <=  Menor igual
    >   Maior      >=  Maior igual
    ==  igual      !=  diferente

 ==*/

if(a > b && a > c){
    console.log("A e o maior. ")
}
else if (b > c && b > a){
    console.log("B e o maior. ")
}

else if(c > a && c > b ) {
    console.log("C e o maior. ")
}