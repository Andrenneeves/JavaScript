//declarando as universais
//p_ -> Parâmetro
// A volta que tentei dar no fim do código


moment.locale('pt-br')
let data = moment().format("DD/MM/YYYY")

//Fazendo a Function

function calcula(){
//Receber as informações primeiro
let aluno =  document.getElementById("entra-aluno").value
let matricula =  document.getElementById("entra-matricula").value
let valor = Number(document.getElementById("entra-valor").value)
let vencimento =  moment(document.getElementById("entra-vencimento").value)

//Calculando diferença dos dias
let diff = vencimento.diff(data)

//pedindo comparação em dias
let dias = moment.duration(diff).asDays()

//Declarando o valor final
let aPagar = valor

if(dias<0){
//calculando juros por dia
aPagar += valor*((dias*-1) * (1.2/100))  

//calculando a multa
 aPagar += valor*(11/100)
}else if(dias>=5){
//Calculando o desconto
aPagar -= valor*(10/100)
}

Texto = ""

texto = "Valor a ser recebido é: R$ " + aPagar

document.getElementById("valor").innerHTML = texto





      

}








/*A volta que tentei dar
var alunos = []
let data = moment().format("DD/MM/YYYY")


// classe
class Aluno{
    nome;
    matricula;
    valor;
    vencimento;

    constructor(p_nome, p_matricula, p_valor, p_vencimento){
        this.nome = p_nome
        this.matricula = p_matricula
        this.valor = p_valor
        this.vencimento = p_vencimento
    }

}

//Fazendo a função de calcular valor
function calcula(){

    alunos.push(new Aluno(
        document.getElementById("entra-aluno").value,
        document.getElementById("entra-matricula").value,
        document.getElementById("entra-valor").value,
        document.getElementById("entra-vencimento").value,
    ))

    document.getElementById("form").reset()
    exibir()

}

//Calcular diferença de datas

let diff = vencimento.diff(data);
let dias = moment.duration(diff).asDays() //Calcular as datas em dias

//função que manda exibir

function exibir(){

    let texto = ""
    let i = 0

    if( vencimento == data );{
        texto = "<div>" + "O valor a ser pago é: R$" + valor + "<div/>" 
    
}
    if(vencimento > data){

        let multa = valor * 11/100
        let juros = valor * (dias* 1.2)/100
        texto = "<div>" + "Estão a " + dias + "Atrasados, o valor será de: " + valor + "<div/>" 
    }

    if(vencimento == (data-5))
      desconto = valor - 10/100
      texto = "<div>" + "Estão a " + dias + "adiantados, o valor será de: " + desconto + "<div/>" 

}*/