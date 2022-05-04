const hoje =  moment(moment().format("L"), "MM/DD/YYYY");

function recebeBoleto(){
    let vencimento =  moment(document.getElementById("dateVencimento").value);

    let matricula =  document.getElementById("inputMatricula").value;

    let valor = Number(document.getElementById("inputValor").value);

    let diff = vencimento.diff(hoje);
    let dias = moment.duration(diff).asDays();
    
    let valorFinal = valor;
    if(dias < 0){
        //diárias
        valorFinal += valor * ((dias*-1) * ( 1.2 / 100)); 
        //multa
        valorFinal += valor * (11 /100);
    }else if(dias >=5){
        //desconto
        valorFinal -= valor * (10/100);
    }

    alert("valor a receber: R$ " + valorFinal);

}