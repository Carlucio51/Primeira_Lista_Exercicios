/*45. A Escolinha Infantil Castelinho Encantado trabalha com o ensino infantil, da préescola ao 9o ano (ou seja, da série 0 a 9, totalizando 10 séries). Para cada série, há
três turmas (“Turma A”, “Turma B” e “Turma C”). As mensalidades da escolinha
são cobradas por 9 meses a cada ano (de março a novembro), que é o período em
que as crianças ficam estudando. Projete um aplicativo que gere os boletos para
cada uma das 30 turmas, de acordo com as seguintes regras:

b) As mensalidades do jardim de infância custam R$ 180.00 mensais e a das
outras séries custam R$ 160.00 multiplicado pelo nível da série (por exemplo, no segundo 
ano, a mensalidade custa R$ 160.00 x 2 = R$
320.00)*/


let meses = [03,04,05,06,07,08,09,10,11]
let serie = [0,1,2,3,4,5,6,7,8,9]
let turmas = ["A", "B", "C"]
var mensalidade = 180.00
let maxAluno = 10

let serieEscolhida = 1
let turmaEscolhida = 2
let mesEcolhido = 5

console.log("----------------- GERANDO BOLETOS DO MÊS --------------------");
for (let alunosPorTurma = 0; alunosPorTurma < maxAluno; alunosPorTurma++) {
    if (serieEscolhida == serie[0]) {
        console.log(`Série: ${serie[serieEscolhida]} | Turma: ${turmas[turmaEscolhida]} | Mesês: ${meses[mesEcolhido]} | Valor da mensalidade: R$ ${mensalidade}`);
    } else {
        for (var mesMensalidade = serieEscolhida; mesMensalidade <= serieEscolhida; mesMensalidade++) {
            var mensalidade = mensalidade * (mesMensalidade + 1)
            console.log(`Série: ${serie[serieEscolhida]} | Turma: ${turmas[turmaEscolhida]} | Mesês: ${meses[mesEcolhido]} | Valor da mensalidade: R$ ${mensalidade}`);
            var mensalidade = 180.00
        }
    }
}
console.log("---------------------------- FIM ----------------------------");