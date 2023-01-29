var iniciar = window.document.querySelector('.buttonplay')

iniciar.addEventListener('click', play)

function play(){
    var p = Number(window.prompt('Digite um número:'))

    window.alert(`Antes de ${p} , temos o número ${p-1}.
    Depois de ${p}, temos o número ${p+1}.`)
}
