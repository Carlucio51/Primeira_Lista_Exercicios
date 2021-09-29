/* b) Modifique o programa anterior para que seja o usuário que informe qual é
a taxa de inflação que deve ser aplicada a cada ano;*/


let anos=10
let anuidade = 15000
let taxa =parseFloat(prompt("Qual a taxa de inflação"))
 taxa= taxa/100

// Laço para cada ano, "Caso usuário que informe"
for(i=1; i <= anos ; i++){
    anuidade = anuidade + (anuidade*taxa);
    console.log(i,(anuidade.toFixed(2)))
}
