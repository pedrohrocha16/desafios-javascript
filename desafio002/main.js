var p = window.document.querySelector('.play')

p.addEventListener('click', play)

function play() {
    msg1 = window.prompt('Digite seu nome e sobrenome:')
    msg2 = window.prompt('Agora, digite sua idade:')

    window.alert(`Olá ${msg1}, você tem ${msg2} anos de idade.`)
}

