/*5. A Escolinha Infantil Castelinho Encantado trabalha com o ensino infantil, da préescola ao 9o ano (ou seja, da série 0 a 9, totalizando 10 séries). Para cada série, há
três turmas (“Turma A”, “Turma B” e “Turma C”). As mensalidades da escolinha
são cobradas por 9 meses a cada ano (de março a novembro), que é o período em
que as crianças ficam estudando. Projete um aplicativo que gere os boletos para
cada uma das 30 turmas, de acordo com as seguintes regras:*/

// a) Cada boleto deve conter o número da série (0 a 9), a turma (A, B ou C), o
// mês (de 3 a 11) e o valor da mensalidade devida;




let meses = [03,04,05,06,07,08,09,10,11]
let serie = [0,1,2,3,4,5,6,7,8,9]
let turmas = ["A", "B", "C"]
let mensalidade = 180.00
let maxAluno = 10



for (let index = 0; index < meses.length; index++) {
    for (let alunosPorTurma = 0; alunosPorTurma < maxAluno; alunosPorTurma++) {
        console.log(`Série: ${serie[0]} Turma: ${turmas[0]} Mesês: ${meses[index]} Valor da mensalidade: R$ ${mensalidade}`);
    }
}
console.log("------ Fim ------");

for (let index = 0; index < meses.length; index++) {
    for (let alunosPorTurma = 0; alunosPorTurma < maxAluno; alunosPorTurma++) {
        console.log(`Série: ${serie[0]} Turma: ${turmas[1]} Mesês: ${meses[index]} Valor da mensalidade: R$ ${mensalidade}`);
    }
}
console.log("------ Fim ------");

for (let index = 0; index < meses.length; index++) {
    for (let alunosPorTurma = 0; alunosPorTurma < maxAluno; alunosPorTurma++) {
        console.log(`Série: ${serie[0]} Turma: ${turmas[2]} Mesês: ${meses[index]} Valor da mensalidade: R$ ${mensalidade}`);
    }
}
console.log("------ Fim ------");



// console.log(`Série: ${serie[0]}`);
// console.log(`Turma: ${turmas[0]}`);
// console.log(`Mesês: ${meses[0]}`);
// console.log(`Valor da mensalidade: R$ ${mensalidade}`);
