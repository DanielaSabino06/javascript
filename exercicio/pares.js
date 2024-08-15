/**
 * Indicar quantidade de números pares dentro de um laço for
 * Author Daniela Sabino
 */


const input = require('readline-sync')
console.clear()

let pares = 0 

for (let i = 1; i < 59; i++) { // vai mostrar os números entre 1 e 20
    if (i % 2 === 0) {
      pares++
    }
}

console.log(pares)