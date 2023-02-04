var clicar = window.document.getElementById('reajustbtn')
var msg = window.document.getElementById('res_msg')
clicar.addEventListener('click', reajuste)

function reajuste(){
    var nomeFun = window.prompt('Qual o nome do funcionário?')
    var salFun = Number(window.prompt('Qual o salário do funcionário?'))
    var ajusFun = Number(window.prompt(`Quantos % o salário do ${nomeFun} irá receber um reajuste?`))
    var calcSal = (salFun / 100) * ajusFun
    var n1 = Number(salFun +calcSal)

    msg.innerHTML= `${nomeFun} recebeu um aumento salarial!<br>
    O salário atual era de ${salFun}.<br>
    Com um aumento de ${ajusFun}%, o salário vai aumentar R$${calcSal}.<br>
    O salário de ${nomeFun} agora será de: R$${n1}`

}