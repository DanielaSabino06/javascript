/**
 * Cálculo de media 2 notas
 *
 * @author Daniela Sabino
 */

// importar o pacote readline-sync (input no console)
const input = require('readline-sync')

//importar o pacote colors
const colors = require('colors')

// variáveis
let nota1, nota2, media

console.clear()
console.log("Cálculo da média")
// captura da nota pelo pacote readline-sync
//entrada 
nota1 = Number(input.question("digite a nota1: "))
console.log(nota1)
nota2 = Number(input.question("digite a nota2: "))
console.log(nota2)
//processamento
media = (nota1 + nota2) / 2
//saída
console.log(`Média: ${media.toFixed(1)}`)
// exemplo de uso da estrutura if else if
if (media < 2) {
    console.log("REPROVADO".red)
} else if (media >= 2 && media <5) {
    console.log("RECUPERAÇÃO".yellow)
} else {
    console.log("APROVADO".blue)
    
}
