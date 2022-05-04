
function cadJoga(){
let nome    = document.getElementById("entraNome")
let idade   = document.getElementById("entraIdade")
let peso    = document.getElementById("entraPeso")
let altura  = document.getElementById("entraAltura")
let time    = document.getElementById("entraTime")
let posicao = document.getElementById("entraPosicao")

let jogador = {
    nome: nome.value, 
    idade: idade.value,
    peso: peso.value,
    altura: altura.value,
    time: time.value,
    posicao: posicao.value,
}

let texto = "<div class='recebeJoga'>"+
            "Nome: " + jogador.nome + "<br/>" +
            "Idade: " + jogador.idade + "<br/>" +
            "Peso: " + jogador.peso + "Kg<br/>" +
            "Altura: " + jogador.altura + "cm<br/>" +
            "Time: " + jogador.time + "<br/>" +
            "Posição: " + jogador.posicao + "<br/>" +
            "</div>"

    document.getElementById("card").innerHTML = texto          

}