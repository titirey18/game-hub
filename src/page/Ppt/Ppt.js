import './Ppt.css'

export const iniPpt = () => {
  const Divcontent = document.querySelector('.content')
  Divcontent.innerHTML = ''
  const Ppt = document.createElement('h1')
  const Divplayer = document.createElement('div')
  const player1 = document.createElement('p')
  const player2 = document.createElement('p')

  Divcontent.append(Ppt)
  Ppt.textContent = 'Piedra Papel o Tijera'
  Ppt.classList.add('Titulo')
  Divplayer.classList.add('Players')
  player1.textContent = 'Player 1'
  player2.textContent = 'Player 2'

  if (!Divcontent) {
    console.error('El contenedor .content no existe.')
    return
  }

  const Divbox = document.createElement('div')
  Divbox.classList.add('box')
  Divcontent.append(Divbox)

  const DivDuelo = document.createElement('div')
  DivDuelo.classList.add('Duelo')
  const article1 = document.createElement('article')

  const article2 = document.createElement('article')

  Divbox.append(DivDuelo)
  DivDuelo.appendChild(article1)
  DivDuelo.appendChild(article2)
  const Divbutton = document.createElement('div')
  Divbutton.classList.add('DIV-BUTTON')
  Divbox.append(Divbutton)

  const emojis = ['👊', '🫱', '✌️']
  const parrafo = ['Piedra', 'Papel', 'Tijera']

  for (let i = 0; i < emojis.length && i < parrafo.length; i++) {
    const button = document.createElement('button')
    button.textContent = `${emojis[i]} ${parrafo[i]}`
    button.classList.add('button-character')
    Divbutton.appendChild(button)
  }

  Divcontent.append(Divplayer)
  Divplayer.append(player1)
  Divplayer.append(player2)
}
