
let nome = window.prompt("Nome: ")
let n1 = Number (window.prompt("Nota 1:"))
let n2 = Number (window.prompt("Nota 2:"))
let n3 = Number (window.prompt("Nota 3:"))
let n4 = Number (window.prompt("Nota 4:"))
let media = ((n1 + n2 + n3 + n4)/4)
let notas = [n1,n2,n3,n4]

if(media >=7) {
    console.log("Você está Aprovado")
} else {
    console.log("Você está de Reprovado")
}


console.log( "Notas: " + notas + "\nNome: " + nome + "\nMédia: " + media)

let sudeste = ["RJ","MG","ES","SP"]
console.log(sudeste)