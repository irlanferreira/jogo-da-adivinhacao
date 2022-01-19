var aleatorio = randomNumber(1, 100)
var divresultado = document.querySelector('#resultado')
var divtentativas = document.querySelector('#tentativas')
var divtentados = document.querySelector('#numerosinseridos')
var tentativas = 7
var botao = document.querySelector('#botao')
var caixanum = document.querySelector('#num')
var divdificuldade = document.querySelector('#divdificuldade')
var dificuldade = document.getElementsByName('radificuldade')
var tentativas = 7
caixanum.focus()
console.log(dificuldade)
localStorage.setItem('menssagem', 'testando')
alert(localStorage.getItem('menssagem'))