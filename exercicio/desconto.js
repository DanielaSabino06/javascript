/**
 * Cálculo do desconto
 * @Author Daniela Sabino
 */

const input = require('readline-sync') //importa a biblioteca

console.clear()
console.log("Calculo do valor do desconto")


//variaveis
let total, desconto, valor, totaldesconto

//entrada
total = Number(input.question("Digite o valor de total:"))
desconto = Number(input.question("Digite o valor do desconto em %:"))

//processamento 1
valor = (desconto * total) / 100


//saída 1
console.log("_______________________________________________")
console.log(`valor total: R$ ${total.toFixed(2)}`)
console.log(`Desconto: ${desconto}%`)
console.log(`Valor do desconto: R$ ${valor.toFixed(2)}`)

//processamento 2
totaldesconto = total - valor

//saída 2
console.log(`total com desconto: R$ ${totaldesconto.toFixed(2)}`)
