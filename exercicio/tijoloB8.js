/**
 * Cálculo da quantidade de tijolos baianos 8 furos por metro quadrado, sabendo que o 1m2 é = 28 tijolo
 * @Author Daniela Sabino
 */

const input = require ('readline-sync')

//váriaveis
let m2, tijolos

console.clear()
console.log("Calculo da quantidade de tijolos por m2 (tijolo baiano 8 furos")

//entrada
m2 = Number(input.question("Quantos metros quadrados voce precisa?"))

//processamento
tijolos = m2 * 28

//saída
console.log(`Você precisará de ${tijolos} tijolos`)
