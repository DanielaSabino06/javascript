/**
 * Conversão moeda para euro
 * @Author Daniela Sabino
 */

const input = require('readline-sync')

let real, euro, total

console.clear()
console.log("Conversor Real - Euro")

//Entrada
real = Number(input.question("Digite o total em reais a serem convertidos:"))
euro = Number(input.question("Digite a cotacao do valor do euro:"))

//processamento
total = real / euro

//saída
console.log(`R$ ${real.toFixed(2)} equivalem a = ${total.toFixed(2)} euros`)