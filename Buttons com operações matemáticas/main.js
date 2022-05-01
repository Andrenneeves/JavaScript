function cadPe(){
    let nome = window.prompt("Nome: ")
    let idade = Number (window.prompt("Idade: "))
    let peso = Number (window.prompt("Peso: "))
    let altura = Number (window.prompt("Altura: "))

    let imc = peso/(altura*altura)

    

    console.log ("Nome: " + nome + "\nIdade: " + idade + "\nIMC: " + imc)

}

function calcVar(){
    let var1 = Number(window.prompt("Valor 1: "))
    let var2 = Number(window.prompt("Valor 2: "))

    let quadrado1 = var1**2
    let quadrado2 = var2**2
    let raiz1 = Math.sqrt(var1)
    let raiz2 = Math.sqrt(var2)


    console.log("Quadradi do valor 1: " + quadrado1 + "\nQuadrado do valor 2: " + quadrado2 + 
                 "\nRaiz do valor 1: " + raiz1 + "\nRaiz do Valor 2: " + raiz2)
}