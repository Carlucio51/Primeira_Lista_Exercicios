/*c) Modifique o programa do item “b”, assumindo que a taxa informada pelo
usuário suba 0.5% a cada ano.*/

let anos=10
let anuidade = 15000
let taxa = parseFloat(prompt("Qual a taxa de inflação"))

taxa = taxa /0.5/100


// Laço para cada ano, "Caso 0.5% a cada ano"
for(i=1; i <= anos ; i++){
    anuidade = anuidade + (anuidade*taxa);
    console.log(i,(anuidade.toFixed(2)))
}