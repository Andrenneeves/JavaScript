var car = []
var moto = []

function cadCarro(){
    let modelo =  document.getElementById("entraModelo").value
    let ano    =  document.getElementById("entraAno").value
    let cor    =  document.getElementById("entraCor").value
    let placa  =  document.getElementById("entraPlaca").value
    let preco  =  document.getElementById("entraPreco").value
    let tipo   =  document.getElementById("selectipo").value

    car.push([modelo,ano,cor,placa,preco])
    moto.push([modelo,ano,cor,placa,preco])


    //Não esquecer do alerta de finalizado o cadastro

    switch(tipo){
        case "carro": 
            car.push([modelo,ano, cor, placa, preco])
            alert("Carro cadastrado com sucesso!");
            break
        case "moto": 
            moto.push([modelo,ano, cor, placa, preco])
            alert("Moto cadastrada com sucesso!");
            break
    }

    // Resetar o formulário
       
    document.getElementById("form").reset()    

}

function visuCarro(){

    let texto = ""
    document.getElementById("listaCarros").innerHTML = texto
    document.getElementById("listaCarros").style.display = "block"

          for(let i = 0 ; i < car.length ; i++){
                texto += '<div id="listaCarros" class="col-md-3">' +
                         "Modelo: " + car[i][0] + " <br/>" +
                         "Ano: "    + car[i][1] + " <br/>" +
                         "Cor: "    + car[i][2] + " <br/>" +
                         "Placa: "  + car[i][3] + " <br/>" +
                         "Preço: "  + car[i][4] + "</div>"
            }
            
        
    document.getElementById("listaMotos").innerHTML = texto

            for(let i = 0 ; i < moto.length ; i++){
                texto += '<div id="listaMotos" class="col-md-3">' +
                         "Modelo: " + moto[i][0] + " <br/>" +
                         "Ano: "    + moto[i][1] + " <br/>" +
                         "Cor: "    + moto[i][2] + " <br/>" +
                         "Placa: "  + moto[i][3] + " <br/>" +
                         "Preço: "  + moto[i][4] + "</div>"
            } 
            
}

 



