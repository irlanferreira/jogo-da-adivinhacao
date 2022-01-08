function deficuldade(dif){
    switch(dif){
        case 0:
            tentativas = 15
            break
        case 1:
            tentativas = 7
            break
        case 2:
            tentativas = 4
            break
        case 3:
            tentativas = 2
            break
    }
    caixanum.focus()
}
function randomNumber(min, max){
    //Gera um número aleatório
    return Math.floor(Math.random() * (max - min + 1)) + min
}
function reiniciar(){
    window.location.reload()
}
function jogar(){
    let num = Number(caixanum.value)
    //Validação do valor
    if(num >= 1 && num <= 100) {
        divdificuldade.style.display = 'none'
        divresultado.style.display = 'block'
        if(num == aleatorio){
            //Caso o valor seja igual a resposta certa
            divresultado.innerHTML = `<p>Parabéns, você acertou :D</p> <p style="font-size: 1.5em">${aleatorio}</p> <p><input type="button" value="Reiniciar" onclick="reiniciar()" id="botaoreiniciar">`
            divresultado.style.backgroundColor = '#00800066'
            botao.style.display = 'none'
            if(dificuldade[3].checked){
                divresultado.innerHTML += "<p>E no hardcore ainda, vc é brabo. Vai lá no meu PV reivindicar sua estrelinha ;)</p> <p>(Você precisa mostrar print dessa tela, para assim eu saber se você realmente jogou no hardcore).</p>"
            }
        }else if(num > aleatorio){
            //Caso o valor deja maior do que a resposta certa
            divresultado.innerHTML = `<p>O valor que foi gerado é menor do que ${num}.</p>`
            tentativas --
        }else if(num < aleatorio){
            //Caso o valor seja menor do que a resposta certa
            divresultado.innerHTML = `<p>O valor que foi gerado é maior do que ${num}.</p>`
            tentativas --
        }
        if(num != aleatorio){
            //Caso o valor seja diferente da resposta certa
            divtentativas.style.display = 'block'
            divtentados.innerHTML += `${num} `
            divresultado.innerHTML += `<p>Tentativas restantes: ${tentativas}</p>`
            if(tentativas == 0){
                //Caso as tentativas acabem
                alert('Suas tentativas acabaram. Seu jogo será reiniciado.')
                window.location.reload()
            }
        }
        }else{
            alert('Você só pode inserir números de 1 a 100.')
        }
    caixanum.value = ''
    caixanum.focus()
}
