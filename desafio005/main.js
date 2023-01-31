var bt = window.document.querySelector('.buttonplay')
var res = window.document.querySelector('.res')


bt.addEventListener('click', convert)


function convert(){
    var medMetro = Number(window.prompt('Digite uma distância em metros:'))
    res.innerHTML = `<h2>A distância de ${medMetro} m, corresponde a:</h2>
    ${medMetro / 1000} Quilômetros(km)<br>
    ${medMetro / 100} Hectômetros (hm)<br>
    ${medMetro / 10} Decâmetros (dam)<br>
    ${medMetro / 0.1} Decímetros (dm)<br> 
    ${medMetro / 0.01} Centímetros(cm)<br>
    ${medMetro / 0.001} milímetros (mm)`
}
