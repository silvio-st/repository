function armazenarvalor(){

//armazena ovalor que o usuario digitou
var userInput = document.getElementById("userInput").value;

//exibe o valor armazenado
console.log("O valor da variavel e: " +userInput);

//atualiza o conteúdo
document.getElementById("valorInserido").innerText = "O valor da variavel e: " + userInput
}