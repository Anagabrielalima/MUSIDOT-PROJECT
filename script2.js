//Função Tradicional
var idad = 22;

/*console.log(maiorIdade(idad));


if(maiorIdade(idad)){
    console.log("É maior de idade");
}

else{
    console.log("É menor de idade");

}

function maiorIdade(idade){
    return idade >= 18;



}*/

//Arrow Function
const maiorIdade = (idade) => idade >= 18;
console.log(maiorIdade(idad));


if(maiorIdade(idad)){
    console.log("É maior de idade");
}

else{
    console.log("É menor de idade");}