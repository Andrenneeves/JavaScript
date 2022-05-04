const visor = document.getElementById("visor");
var memoria = 0;
var operacao = "";
const historico = document.getElementById("historico");

function numero(btn){
    if(btn == '.' && visor.value.indexOf('.') < 0){
        visor.value = visor.value +  ".";
    }else if (btn != '.'){
        visor.value += btn;
    }
}

function operador(btn){
    memoria =  Number(visor.value);
    visor.value = "";
    operacao = btn;

    historico.innerHTML += memoria + " " + operacao + " ";
}

function apaga(){
    visor.value = visor.value.slice(0,-1);
}

function raiz(){
    let total = Math.sqrt(Number(visor.value));
    historico.innerHTML += "√" + visor.value + " = " + total + "<br/>";
    visor.value = total;
}

function porcento(){
    historico.innerHTML += " (" + visor.value + "%) -> ";
    visor.value = memoria * Number(visor.value)/100;
}

function igual(){
    let valor = Number(visor.value);

    switch(operacao){
        case '+':
            visor.value = memoria + valor;
            break;
        case '-':
            visor.value = memoria - valor;
            break;
        case 'x':
            visor.value = memoria * valor;
            break;
        case '/':
            if(valor != 0)
                visor.value = memoria / valor;
            break;
    }

    historico.innerHTML += valor + " = " + visor.value + "<br/>";
}

function limpaHistorico (){
    historico.innerHTML = "";
}