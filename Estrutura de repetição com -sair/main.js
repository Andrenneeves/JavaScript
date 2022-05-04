

//Boa tarde, Professor!
// Fiz, mas estou com o problema de imprimir no console, apenas 2 vezes mesmo cadastrando 
//nota de mais de 2 alunos. 
// Descobri, mas deixei o comentário para lembrar. O "if" Estava no final. Precisava ser no inicio
// Vou ver se lembro de tirar essa duvida na aula.
//estou com outro erro. Se eu cadastrar apenas um aluno aprovado, a situação aparece correta, mas
//se eu lançar um aluno só reporvado junto com outros alunos aprovados, todas as mensagens dão que os
//alunos estão reprovados. Essa eu não consegui desvendar.

let dados = []



while(true){

    if(!window.confirm("Deseja lançar notas?")){
        break
            } 

    let nome = window.prompt("Nome: ")
    let n1 = Number (window.prompt("Primeiro Bimestre: "))
    let n2 = Number (window.prompt("Segundo Bimestre: "))
    let n3 = Number (window.prompt("Terceiro Bimestre: "))
    let n4 = Number (window.prompt("Quarto Bimestre: "))
  

    

       media = ((n1+n2+n3+n4)/4)
   let dado = [nome, n1, n2, n3,n4, media]

   dados.push(dado) 

}

for(let i = 0; i < dados.length ; i++){

    console.log("Nome: "              + dados[i][0])
    console.log("Primeiro Bimestre: " + dados[i][1])
    console.log("Segundo Bimestre:  " + dados[i][2])
    console.log("Terceiro Bimestre: " + dados[i][3])
    console.log("Quarto Bimestre:   " + dados[i][4])
    console.log("Sua média é:       " + dados[i][5])

    if(media >=7 ){
        console.log("Você está aprovado, então aproveite as férias!")

        } else {
            
           console.log("Você está reprovado, aproveite o estudo enquanto seus amigos estudiosos se divertem")
           console.log("_______________________________________")

        }     

}


 
//Achei que dava para fazer dos dois jeitos. hahahahaha


//var info = []
//var nome, n1, n2, n3,n4, media, sair

//do{
   //nome = window.prompt("Nome: ")
   //n1 = Number (window.prompt("Primeiro Bimestre: "))
   //n2 = Number (window.prompt("Segundo Bimestre: "))
   //n3 = Number (window.prompt("Terceiro Bimestre: "))
   //n4 = Number (window.prompt("Quarto Bimestre: "))
   //sair = window.prompt("Para continuar lançando notas, tecle enter. Para encerrar, digite sair")

    //media =  (n1+n2+n3+n4)/4
    
   //info.push(nome)
   //info.push(n1)
   //info.push(n2)
   //info.push(n3) 
   //info.push(n4) 
   //info.push(sair) 
    


//}while(sair.toLowerCase() !="sair")


    //console.log( "Aluno: " + nome + "\nPrimeiro Bimestre: " + n1 +
    //"\nSegundo Bimestre: " + n2 + "\nTerceiro Bimestre: " + n3 + 
   // "\nQuarto Bimestre: " + n4 + "\nSua média é: " + media)

   // if(media>=7){
   //     console.log("Você está aprovado, então aproveite as férias!")
   // } else {
   //     console.log("Você está reprovado, aproveite o estudo enquanto seus amigos estudiosos se divertem")
   // } console.log("_______________________________________")
     
//Achei que dava para fazer dos dois jeitos. hahahahaha
