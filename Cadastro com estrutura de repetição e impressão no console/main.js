
var info = []
var nome, idade, peso, altura, enter

do {
    nome = window.prompt("Nome: ")
    idade = Number (window.prompt("Idade:"))
    peso = Number (window.prompt("Peso"))
    altura = Number (window.prompt("Altura:")) 
    enter = window.prompt("Para continuar, pressione Enter ou digite Sair para finalizar : ")

    info.push(nome)
    info.push(idade)
    info.push(peso)
    info.push(altura) 
    info.push(enter) 


}while (enter.toLowerCase() !="sair")

console.log(info)

 