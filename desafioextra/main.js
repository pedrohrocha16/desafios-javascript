var btninit = window.document.querySelector('#play')

btninit.addEventListener('click', nacionalidadeDis)

function nacionalidadeDis(){
    var naciobtn = window.document.querySelector('#nacio')
    var res = window.document.querySelector('.resu')
    var nacionalidade = (naciobtn.value)
    var country = 'Brasil'

    res.innerHTML = `Vivendo em ${nacionalidade}, de acordo com nossa pesquisa você é:`
    if (nacionalidade == country){
        res.innerHTML += (' <strong>brasileiro!</strong>')
    }
    else {
        res.innerHTML +=(' <strong>estrangeiro!</strong>')
    }
}

