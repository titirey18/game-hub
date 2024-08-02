import './Ppt.css'

export const iniPpt = () => {
  const Divcontent = document.querySelector('.content')

  if (!Divcontent) {
    console.error('El contenedor .content no existe.')
    return
  }

  Divcontent.innerHTML = ''

  const Ppt = document.createElement('h1')
  const Divplayer = document.createElement('div')
  const player1 = document.createElement('p')
  const player2 = document.createElement('p')

  Ppt.textContent = 'Piedra Papel o Tijera'
  Ppt.classList.add('Titulo')
  Divplayer.classList.add('Jugadores')
  player1.textContent = 'Jugador 1'
  player2.textContent = 'Jugador 2'

  Divcontent.append(Ppt)

  const Divbox = document.createElement('div')
  Divbox.classList.add('Caja')

  const DivDuelo = document.createElement('div')
  DivDuelo.classList.add('Duelo')
  const article1 = document.createElement('article')
  article1.classList.add('PrimerJugador')
  const article2 = document.createElement('article')
  article2.classList.add('JugadorAleatorio')
  const Divbutton = document.createElement('div')
  Divbutton.classList.add('Botones')

  Divbox.append(DivDuelo)
  DivDuelo.appendChild(article1)
  DivDuelo.appendChild(article2)
  Divbox.append(Divbutton)
  Divcontent.append(Divbox)
  Divcontent.append(Divplayer)
  Divplayer.append(player1)
  Divplayer.append(player2)

  const emojis = ['👊', '🫱', '✌️']
  const parrafo = ['Piedra', 'Papel', 'Tijera']
  const classelement = ['ClasePiedra', 'ClasePapel', 'ClaseTijera']

  for (let i = 0; i < emojis.length && i < parrafo.length; i++) {
    const button = document.createElement('button')
    button.textContent = `${emojis[i]} ${parrafo[i]}`
    button.classList.add(`${classelement[i]}`)
    button.id = i + 1
    Divbutton.appendChild(button)

    button.addEventListener('click', elegirEmoji)
  }

  let emojiJugador
  let emojiDuelo

  function ganar() {
    let resultado
    if (emojiJugador == emojiDuelo) {
      resultado = '¡Empate!'
    } else if (emojiJugador == 1 && emojiDuelo == 3) {
      resultado = 'Ganó Piedra'
    } else if (emojiJugador == 3 && emojiDuelo == 2) {
      resultado = 'Ganó Tijera'
    } else if (emojiJugador == 2 && emojiDuelo == 1) {
      resultado = 'Ganó Papel'
    } else {
      resultado = 'Perdiste'
    }

    setTimeout(() => {
      alert(resultado)
    }, 100)
  }

  function eleccionAleatoriaDuelo() {
    const eleccionAleatoria = Math.floor(Math.random() * 3) + 1

    article2.className = 'JugadorAleatorio'
    article2.textContent = ''
    if (eleccionAleatoria == 1) {
      article2.classList.add('ClasePiedra')
      article2.textContent = '👊'
    } else if (eleccionAleatoria == 2) {
      article2.classList.add('ClasePapel')
      article2.textContent = '🫱'
    } else if (eleccionAleatoria == 3) {
      article2.classList.add('ClaseTijera')
      article2.textContent = '✌️'
    }
    emojiDuelo = eleccionAleatoria
  }

  function elegirEmoji(e) {
    article1.className = 'PrimerJugador'
    article1.textContent = ''

    if (e.target.id == 1) {
      article1.classList.add('ClasePiedra')
      article1.textContent = '👊'
    } else if (e.target.id == 2) {
      article1.classList.add('ClasePapel')
      article1.textContent = '🫱'
    } else if (e.target.id == 3) {
      article1.classList.add('ClaseTijera')
      article1.textContent = '✌️'
    }

    emojiJugador = parseInt(e.target.id)

    setTimeout(() => {
      eleccionAleatoriaDuelo()
      ganar()
    }, 50)
  }
}
