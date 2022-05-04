
const visor = document.getElementById("visor")
historico = document.getElementById("visorhist")
var memoria = 0
var operacao = ""
var memo = ""
function numero(btn){

    if(btn == '.' && visor.value.indexOf('.') < 0){
        visor.value = visor.value +  "."
    }else if (btn != '.'){
        visor.value += btn
    }
    
}

function operador(btn){
    memoria =  Number(visor.value)
    visor.value = ""
    operacao = btn
    historico.innerHTML += memoria + " " + operacao + " "

}

function mudaS(){
    visor.value = (visor.value * -1)
}

function apaga1(){
    visor.value = visor.value.slice(0,-1)
}

function apaga2(){
    visor.value = visor.value.slice(0, length)
}


function apaga3(){
    visor.value = visor.value.slice(0, length)
    historico.innerHTML = ""
}

function porcento(){
    historico.innerHTML += " (" + visor.value + "%) onde essa % é - "
    visor.value = memoria*Number(visor.value)/100
}

function operadorMC(){ //limpa a memória e o visor
    memo = ""
    document.getElementById("memo").innerHTML = ""
    apaga3()
    //document.getElementById("memo").innerHTML = "M - " + memo + "</br>"
}
   

function operadorMMais(){ // adiciona um número na memoria

    memo = visor.value
    document.getElementById("memo").innerHTML += "M - " + memo + "</br>"

}

function operadorMMenos(){ // Devolve um número para o visor

    visor.value = memo
    //document.getElementById("memo"). innerHTML -= "M - " + memo + "</br>"

}


function igual(){
    let valor = Number(visor.value)

    switch(operacao){
        case '+':
            visor.value = memoria + valor
            break
        case '-':
            visor.value = memoria - valor
            break
        case 'x':
            visor.value = memoria * valor
            break
        case '/':
        visor.value = memoria / valor
        break
        
        case '√':
        visor.value = Math.sqrt(memoria)
        break                
    }
    historico.innerHTML += valor + " = " + visor.value + "<br/>"
    
}

function limpaHistorico (){
    historico.innerHTML = ""
    
}








 