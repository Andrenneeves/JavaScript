


let nome = window.prompt("nome:")
let data = (window.prompt("Data de Nascimento: "))
let email = window.prompt("E-mail")

dados = document.getElementById("dados")

let resultado = "Nome: " + nome.split(" ")[0] + "<br/>" + "Data de Nascimento: " +
                data.slice(0,5) + "<br/>" + "E-mail: " + email.split("@")[0]
                
    dados.innerHTML = resultado            




//A loucura q tentei fazer


//info = []

//function cadCliente(){

   // let info = document.getElementsByClassName("infos")

    
   // let nome  =        (info[0].value);
   //let data  = Number (info[1].value);
   // let email =        (info[2].value);


    //let resultado =  "Nome: " + info[0] + "<br/>" +
  //                    "Nascimento: " + info[1] +"<br/>" +
  //                    "E-mail: " + info[2];                   
//
   // document.getElementById("resultadoCliente").innerHTML = resultado
  
//}