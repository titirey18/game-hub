import './Ppt.css'

export const iniPpt = () => {
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

let currentPlayer = 'X'

const Poner = () => {
  const Bloques = document.querySelectorAll('.Bloques')

  Bloques.forEach((Bloque) => {
    Bloque.addEventListener('click', () => {
      if (Bloque.textContent === '') {
        Bloque.textContent = currentPlayer === 'X' ? '❌' : '⭕'
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X'
      }
    })
  })
}

iniPpt()
Poner()
