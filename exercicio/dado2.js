/**
 * Exemplo de uso estrutura do-while
 * @Author Daniela Sabino
 */


const input = require('readline-sync')
let face
let confirma = "n"

do {
    console.clear()
    console.log("Jogo do dado")
    input.question("Pressiona a tecla [Enter] para jogar o dado: ")
    face = Math.floor(Math.random() * 6 + 1)
    console.log(`Face do dado: ${face}`)
    confirma = input.question("DESEJA JOGAR NOVAMENTE(s/n): ")
} while (confirma === "s");



