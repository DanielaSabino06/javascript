/**
 * Tabuadas com while
 * @author Daniela Sabino
 */

const input = require('readline-sync')
let valor
let i = 1
console.log('Tabuada com while')
valor = input.question('Digite o numero a calcular:')
while(i < 11){
    console.log(`${i} x ${valor} = ${i * valor}`)
    i++
}