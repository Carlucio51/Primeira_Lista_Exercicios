/*42. Aplicativos para a Universidade Conheça Tudo:
a) A Universidade Conheça bem é uma instituição privada de ensino cujo
esquema de cobrança é baseado em anualidades. Atualmente, esse valor é
de R$ 15.000.00 por ano mas, devido a inflação, esse valor tem subido 4%
a cada ano. Faça um programa que simule o valor dessa anualidade durante
os próximos 10 anos;
b) Modifique o programa anterior para que seja o usuário que informe qual é
a taxa de inflação que deve ser aplicada a cada ano;
Ministério da Educação
c) Modifique o programa do item “b”, assumindo que a taxa informada pelo
usuário suba 0.5% a cada ano.*/


let anos=10
let anuidade = 15000


// Laço para cada ano, "Caso ultimos 10 anos"
for(i=1; i <= anos ; i++){
    anuidade = anuidade + (anuidade*4/100);
    console.log(i,(anuidade.toFixed(2)))
}

