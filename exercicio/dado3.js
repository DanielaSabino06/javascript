/**
 * Exemplo de uso de uma função simples
 * @Author Daniela Sabino
 */


const input = require('readline-sync')
let face
let confirma = "n"


function JogarDado() {
    console.clear()
    console.log("Jogo do dado")
    input.question("Pressiona a tecla [Enter] para jogar o dado: ")
    face = Math.floor(Math.random() * 6 + 1)
    console.log(`Face do dado: ${face}`)
}

JogarDado()

confirma = input.question("DESEJA JOGAR NOVAMENTE(s/n): ")

if (confirma === "s") {
    JogarDado()
}
