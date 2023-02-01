var cotacao = Number(window.prompt('Antes de mais nada, qual a cotação do dólar neste exato momento? Ex: 4.50'))
var btn = window.document.querySelector('.buttonplay')
var res = window.document.querySelector('.res')


btn.addEventListener('click', clicou)

function clicou(){
    var first = window.prompt('Quantos R$ você tem na carteira? Ex: 1250.90')
    res.innerHTML = `<h4>O valor que você terá em dolar é: <strong> US$ ${cotacao * first} </strong></h4>`
}