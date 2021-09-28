/* Escrever um algoritmo que lê um conjunto de 4 valores i, a, b, c, onde i é um valorinteiro e positivo e a, b, c, são quaisquer valores reais e os escreva.

a) Se i=1 escrever os três valores a, b, c em ordem crescente.
b) Se i=2 escrever os três valores a, b, c em ordem decrescente.
c) Se i=3 escrever os três valores a, b, c de forma que o maior entre a, b, c fique dentre os 
dois.*/

let a = 10, b = 6, c = 5, i = 1


if (i == 1)

    if (a > b && b > c) {

        console.log(c, b, a)

    } else if (a > c && c > b) {

        console.log(b, c, a)

    } else if (b > a && a > c) {

        console.log(c, a, b)

    } else if (b > c && c > a) {

        console.log(a, c, b)

    } else if (c > a && a > c) {

        console.log(b, a, c)

    } else if (c > b && b > a) {

        console.log(a, b, c)
    }

    if (i == 2)

    if (a > b && b > c) {

        console.log(a, b, c)

    } else if (a > c && c > b) {

        console.log(a, c, b)

    } else if (b > a && a > c) {

        console.log(b, a, c)

    } else if (b > c && c > a) {

        console.log(b, c, a)

    } else if (c > a && a > c) {

        console.log(c, a, b)

    } else if ( c > b && b > a) {

        console.log(c, b, a)

    }

    if (i == 3) {

    } else if (a > b && b > c) {

        console.log(a)

    } else if (b > a && a > c) {
        
        console.log(b)

    } else (c)
