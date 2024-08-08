import './Tateti.css'

export const iniTateti = () => {
  const Divcontent = document.querySelector('.content')
  const Tateti = document.createElement('h1')
  const Divplayer = document.createElement('div')
  const player1 = document.createElement('p')
  const player2 = document.createElement('p')

  Divcontent.append(Tateti)
  Tateti.textContent = 'Tateti'
  Tateti.classList.add('Title')
  Divplayer.classList.add('Players')
  player1.textContent = 'Player X'
  player2.textContent = 'Player O'

  if (!Divcontent) {
    console.error('El contenedor .content no existe.')
    return
  }

  const Divcuadro = document.createElement('div')
  Divcuadro.classList.add('Cuadro')
  Divcontent.append(Divcuadro)

  for (let i = 0; i < 9; i++) {
    const DivBloque = document.createElement('div')
    DivBloque.classList.add('Bloques')
    Divcuadro.append(DivBloque)
  }

  Divcontent.append(Divplayer)
  Divplayer.append(player1)
  Divplayer.append(player2)
}

export const Poner = () => {
  const Bloques = document.querySelectorAll('.Bloques')
  let currentPlayer = 'X'

  Bloques.forEach((Bloque) => {
    Bloque.addEventListener('click', () => {
      if (Bloque.textContent === '') {
        if (currentPlayer === 'X') {
          Bloque.textContent = '❌'
          Bloque.classList.add('playerX')
          currentPlayer = 'O'
        } else {
          Bloque.textContent = '⭕'
          Bloque.classList.add('playerO')
          currentPlayer = 'X'
        }
        if (checkWinner()) {
          setTimeout(resetgame, 1000)
        }
      }
    })
  })
}

const getBoard = () => {
  const Bloques = document.querySelectorAll('.Bloques')
  const board = []
  for (let i = 0; i < 3; i++) {
    board[i] = []
    for (let j = 0; j < 3; j++) {
      board[i][j] = Bloques[i * 3 + j].textContent
    }
  }
  return board
}

export const checkWinner = () => {
  const board = getBoard()
  const tablerocombinations = [
    [
      [0, 0],
      [0, 1],
      [0, 2]
    ],
    [
      [1, 0],
      [1, 1],
      [1, 2]
    ],
    [
      [2, 0],
      [2, 1],
      [2, 2]
    ],
    [
      [0, 0],
      [1, 0],
      [2, 0]
    ],
    [
      [0, 1],
      [1, 1],
      [2, 1]
    ],
    [
      [0, 2],
      [1, 2],
      [2, 2]
    ],
    [
      [0, 0],
      [1, 1],
      [2, 2]
    ],
    [
      [0, 2],
      [1, 1],
      [2, 0]
    ]
  ]

  for (let combination of tablerocombinations) {
    const [a, b, c] = combination
    if (
      board[a[0]][a[1]] &&
      board[a[0]][a[1]] === board[b[0]][b[1]] &&
      board[a[0]][a[1]] === board[c[0]][c[1]]
    ) {
      setTimeout(() => {
        alert(` Ha ganado el jugador ${board[a[0]][a[1]]}`)
      }, 100)

      return board[a[0]][a[1]]
    }
  }

  return null
}

const resetgame = () => {
  const Bloques = document.querySelectorAll('.Bloques')
  Bloques.forEach((Bloque) => {
    Bloque.textContent = ''
    Bloque.classList.remove = ('playerX', 'playerO')
  })
  Poner()
}
