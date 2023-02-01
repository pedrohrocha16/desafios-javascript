var bt = window.document.querySelector('.buttonplay')
var res = window.document.querySelector('.res')

bt.addEventListener('click', convert)

function convert(){
    var temp = Number(window.prompt('Digite uma temperatura em Celsius:'))
    res.innerHTML = `<h3>A temperatura de ${temp} °C, corresponde a:</h3><br>
    <strong>${(temp*1.8) + 32} °F   (Fahrenheit)</strong><br>
    <strong>${temp+273.15} °K   (Kelvin)</strong>`
}