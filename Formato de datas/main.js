
moment.locale('pt-br')

let data1 = moment("1985-10-29").format("DD/MM/YYYY")
    document.getElementById("data1").innerHTML = data1

let data2 = moment("1985-10-29").format("dddd, LL")
    //data2 = data2.toLocaleString("pt-br") achei que era assim
    document.getElementById("data2").innerHTML = data2

let data3 = moment("1985-10-29").format("MM-DD-YYYY")
    document.getElementById("data3").innerHTML = data3