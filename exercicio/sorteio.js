/**
 * sorteio de um nomero entre 1 e 16
 * @author Daniela Sabino
 */

const input = require('readline-sync')

let sorteio
console.clear()

input.question("Pressione a tecla [Enter] para fazer o sorteio:")

sorteio = Math.floor(Math.random() * 16 + 1)

console.log(sorteio)