/**
 * Calculo Etanol ou Gasolina
 * @Author Daniela Sabino
 */

// importação de pacotes
const input = require('readline-sync')
const colors = require('colors')

// variaveis 
let Etanol, Gasolina

console.clear()
console.log("Etanol ou Gasolina?")

// Entrada
etanol = Number(input.question("Digite o valor do Etanol:"))
gasolina = Number(input.question("Digite o valor da gasolina:"))

// processamento/saída
if (etanol  < 0.70 * gasolina) {
    console.log("Abastecer com etanol".green)
    } else {
        console.log("Abastecer com gasolina".yellow)
}