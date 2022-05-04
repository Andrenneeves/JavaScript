function nome(){
    let aluno = window.prompt("Nome: ");
    let n1 = Number (window.prompt("Primeiro Bimestre: "));
    let n2 = Number (window.prompt("segundo Bimestre: ")); 
    let n3 = Number (window.prompt("Terceiro Bimestre: "));
    let n4 = Number (window.prompt("Quarto Bimestre: "));
    
    let media =  (n1+n2+n3+n4)/4   

    console.log("Nome: " + aluno + " sua média é " + media);

    if(media >=7) {
        console.log("Você está Aprovado")
    } else if(media <=4){
        console.log("Você está Reprovado")
    } else {
        console.log("Você está de Recuperação")
    }
}


nome()


