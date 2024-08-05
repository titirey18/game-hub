import './Multifrutas.css'

export const iniMulti = () => {
  const Divcontent = document.querySelector('.content')

  if (!Divcontent) {
    console.error('El contenedor .content no existe.')
    return
  }

  Divcontent.innerHTML = ''

  const Multi = document.createElement('h1')
  const cesta = document.createElement('img')

  cesta.className = 'cesta'
  cesta.src = 'public/assets/cesta.png'

  Multi.textContent = 'Multifrutas'
  Multi.classList.add('Title')

  Divcontent.append(Multi)
  Divcontent.append(cesta)

  /* setInterval(createFrutas, 1000) */
}

const createFrutas = () => {
  const Divcontent = document.querySelector('.content')

  const Frutas = [
    'public/assets/fresa.png',
    'public/assets/limon.png',
    'public/assets/manzana.png',
    'public/assets/naranja.png',
    'public/assets/pera.png',
    'public/assets/platano.png'
  ]

  const contentRect = Divcontent.getBoundingClientRect()

  const randomTop = Math.random() * (contentRect.height - 200)
  const randomLeft = Math.random() * (contentRect.width - 50)

  const randomIndex = Math.floor(Math.random() * Frutas.length)
  const randomFruit = Frutas[randomIndex]

  const ImgFrutas = document.createElement('img')
  ImgFrutas.src = randomFruit
  ImgFrutas.className = 'ElementFruit'
  ImgFrutas.style.top = `${randomTop + 150}px`
  ImgFrutas.style.left = `${randomLeft}px`
  Divcontent.append(ImgFrutas)
}
