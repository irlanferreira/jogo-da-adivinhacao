function randomNumber(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min
}
function reiniciar(){
    window.location.reload()
}
function jogar(){
    document.querySelector('#num').focus()
    let num = Number(document.querySelector('#num').value)
    if(num >= 1 && num <= 100) {
        divresultado.style.display = 'block'
    if(num == aleatorio){
        divresultado.innerHTML = `<p>Parabéns, você acertou :D</p> <p style="font-size: 1.5em">${aleatorio}</p> <p><input type="button" value="Reiniciar" onclick="reiniciar()" id="botaoreiniciar">`
        divresultado.style.backgroundColor = '#00800066'
        botao.style.display = 'none'
    }else if(num > aleatorio){
        divresultado.innerHTML = '<p>O valor que foi gerado é menor.</p>'
        tentativas --
    }else if(num < aleatorio){
        divresultado.innerHTML = '<p>O valor que foi gerado é maior.</p>'
        tentativas --
    }
    if(num != aleatorio){
        divtentativas.style.display = 'block'
        divtentados.innerHTML += `${num} `
        divresultado.innerHTML += `<p>Tentativas restantes: ${tentativas}</p>`
        if(tentativas == 0){
            alert('Suas tentativas acabaram. Seu jogo será reiniciado.')
            window.location.reload()
        }
    }
    }else{
        alert('Você só pode inserir números de 1 a 100.')
    }
    
}