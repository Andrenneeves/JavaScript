
//Crio a classe 
class Produto{  
    nome;
    setor;
    preco;
}
var produtos = []


function cadastrar(){ //Crio a função pedida

    let prod = new Produto() //Crio a classe 

    //local da onde vem os produtos da classe "entrada"
    prod.nome    = document.getElementById("entraNome").value
    prod.setor   = document.getElementById("entraSet").value
    prod.preco   = document.getElementById("entraPreco").value  
    
    produtos.push(prod)

    document.getElementById("info").reset()

    cadpedidos()
}

function cadpedidos(){
    let texto = "" 

    for(let i = 0; i< produtos.length; i++){
        texto += "<div class='ped'>" +
        "Produto: " + produtos[i].nome + "</br>" +
        "Setor: " + produtos[i].setor + "</br>" +
        "Preco: " + produtos[i].preco + "</br>" + "</hr>" +
        "</div>" 
    }
    document.getElementById("cadpedidos").innerHTML = texto
}





//class Setor{ Estava cometendo essa loucura aqui

  //  laticinios = [ "Queijo Branco", "Queijo Prato", "Queijo Suiço"]
  //farmacia   = ["Aspirina", "Dorflex", "Calminex"]
  //verdura    = ["Coentro", "Alface", "Couve"]
  //bebida     = ["Coca-cola", "Pepsi", "Água"]
//}

