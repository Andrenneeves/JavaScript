var car = []

function cadCarro(){
    let modelo =  document.getElementById("entraModelo").value
    let ano    =  document.getElementById("entraAno").value
    let cor    =  document.getElementById("entraCor").value
    let placa  =  document.getElementById("entraPlaca").value
    let preco  =  document.getElementById("entraPreco").value

    car.push([modelo,ano,cor,placa,preco])

    //Não esquecer do alerta de finalizado o cadastro

    window.alert("Carro cadastrado!")

    // Resetar o formulário
    document.getElementById("form").reset()
}

function visuCarro(){
    let texto = ""
    for(let i = 0 ; i < car.length ; i++){
        texto += '<div class="col-md-3 cad">' +
                 "Modelo: " + car[i][0] + " <br/>" +
                 "Ano: "    + car[i][1] + " <br/>" +
                 "Cor: "    + car[i][2] + " <br/>" +
                 "Placa: "  + car[i][3] + " <br/>" +
                 "Preço: "  + car[i][4] + "</div>"
    }
       
    document.getElementById("resultadoCad").innerHTML = texto
    document.getElementById("resultadoCliente").style.display = "block"
}
