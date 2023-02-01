var button = window.document.querySelector('.buttonplay')
var res = window.document.querySelector('.res')

button.addEventListener('click', clicar)

function clicar() {
    var cl = window.prompt('Qual é o produto que você está comprando?')
    var cl2 = parseFloat(window.prompt(`Qual é o preço do ${cl}?`))
    res.innerHTML = `<h3>Calculando o desconto de 10% para ${cl}: </h3><br>
    O preço original era: R$${cl2}<br>
    Você acaba de ganhar R$${cl2*0.10} de desconto (10%)<br>
    No fim, você irá pagar o valor de R$${cl2 - cl2*0.10} no ${cl}!<br>
    Obrigado, volte sempre!`
}
