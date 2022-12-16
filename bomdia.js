function carregar () {

    var msg = window.document.querySelector('#msg')
    var img = window.document.querySelector('#imagem')
    var data = new Date()
    var hora = data.getHours()
    var minutos = data.getMinutes()

    msg.innerHTML = `agora são ${hora} horas e ${minutos} minutos.`

    if (hora >= 0 && hora < 12) {
        
        img.src ="img/bomdia.png"
        document.body.style.background = '#e2cd9f'

    } else if (hora >= 12 && hora <= 18) {

        img.src ="img/boatarde.png"
        document.body.style.background = '#b9846f'

    } else {

       img.src ="img/boanoite.png"
       document.body.style.backfaceVisibility ='#515154'
    }

}

