/**
 * Estudo das vaariáveis - tipagem dinâmina
 * @Author Daniela Sabino
 */

console.log("Strings_____________________")
let nome = "Daniela Sabino"
console.log(typeof(nome))
console.log(nome)
 //concatenação (unir um texto com o conteudo de uma variável)
 console.log("professor: " + nome) //EVITAR concatenar dessa forma!!!
 console.log(`professor ${nome}`)   //modo de concatenar: crase e dolar
 console.log("números__________________")
 let peso = 62
 let altura = 1.63 //se colocar "" ele entende que é número
 console.log(typeof(peso))
 console.log(typeof(altura))
 console.log(Number.isInteger(peso))
 console.log(Number.isInteger(altura))
 let imc = peso / (altura * altura)
 console.log(`IMC: ${imc.toFixed(2)}`) //toFixed(2) arredondar 2 casas decimais
// ATENÇÃO!!!
console.log(10/0)
console.log("3" + 2)
console.log("3" - 2)
console.log("3" * 2)
console.log("3" / 2)
console.log("3x" - 2)
console.log(0.5 + 0.5)
console.log(0.1 + 0.2)
console.log("booleanos_________________")
let chave = true
console.log(typeof(chave))

let lampada = false
console.log(typeof(lampada))
console.log(`chave: ${chave} Lâmpada: ${lampada}`)