var bt = window.document.querySelector('.buttonplay')

bt.addEventListener('click', product)

function product(){
    var prod = String(window.prompt('Qual produto você deseja comprar?'))
    var price = Number(window.prompt(`Qual o valor do ${prod}?`))
    var mn = Number(window.prompt(`Qual foi o valor que você deu para pagar o ${prod}?`))
    if (mn < price) {
        window.alert('Valor inválido, tente novamente.')
        prod
    }
    else {
    var resul = String(window.prompt(`Você comprou ${prod} que custou R$ ${price}.
    Deu R$ ${mn} em dinheiro e irá receber R$ ${mn-price} de troco! 
    Obrigado, volte sempre!`))
    }
}   
