/**
 *  exercicio da obrigatoriedade do voto com else if
 * @author Daniela Sabino
 */

const input = require('readline-sync')

// variaveis 
let idade 

console.clear()
// entrada
idade = Number(input.question("Digite a sua idade:"))
if(idade < 16) {
    console.log("Proibido votar")
} else if(idade >= 18 && idade <71){
    console.log("Voto Obrigatório")
} else {
    console.log("Voto facultativo")
}
 


