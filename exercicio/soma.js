/**
 * Soma dos números dentro de um laço for
 * Author Daniela Sabino
 */


const input = require('readline-sync')
console.clear()

let soma = 0

for (let i = 1; i < 101; i++) {
    soma += i

}
console.log(soma)

