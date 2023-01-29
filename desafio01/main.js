var mensagem01 = window.document.querySelector('.bt-01')
var mensagem02 = window.document.querySelector('.bt-02')
var mensagem03 = window.document.querySelector('.bt-03')
var botao = window.document.querySelector('#button')

mensagem01.addEventListener('click', msg01)
mensagem02.addEventListener('click', msg02)
mensagem03.addEventListener('click', msg03)
botao.addEventListener('click', botaoClick)

function msg01() {
    window.alert('Você clicou no primeiro botão!')
} 
function msg02(){
    window.alert('Você clicou no segundo botão!')
}
function msg03(){
    window.alert('Você clicou no terceiro botão!')
}
