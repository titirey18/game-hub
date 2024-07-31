import './Tateti.css'

export const iniTateti = () => {
  const Divcontent = document.querySelector('.content')

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
      }
    })
  })
}

export const resetcontent = () => {
  const Bloques = document.querySelectorAll('.Bloques')
  Bloques.forEach((Bloque) => {
    Bloque.textContent = ''
  })
}
export const checkWinner = (board) => {
  const winningCombinations = [
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

  console.log('Tablero:', board)

  for (const combination of winningCombinations) {
    const [a, b, c] = combination
    if (
      board[a[0]] &&
      board[a[0]][a[1]] !== undefined &&
      board[b[0]] &&
      board[b[0]][b[1]] !== undefined &&
      board[c[0]] &&
      board[c[0]][c[1]] !== undefined &&
      board[a[0]][a[1]] === board[b[0]][b[1]] &&
      board[a[0]][a[1]] === board[c[0]][c[1]]
    ) {
      return board[a[0]][a[1]]
    }
  }

  return null
}

const board = [
  ['❌', '⭕', '❌'],
  ['⭕', '❌', '⭕'],
  ['⭕', '❌', '❌']
]

console.log(board)

const winner = checkWinner(board)
if (winner) {
  console.log(`El ganador es: ${winner}`)
} else {
  console.log('No hay ganador')
}
