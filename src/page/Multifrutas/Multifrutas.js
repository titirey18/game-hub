import './Multifrutas.css'

let COUNT = 0
let interval
let estado = true

export const iniMulti = () => {
  const Divcontent = document.querySelector('.content')

  if (!Divcontent) {
    console.error('El contenedor .content no existe.')
    return
  }

  Divcontent.innerHTML = ''

  COUNT = parseInt(localStorage.getItem('score')) || 0

  const Multi = document.createElement('h1')
  const cesta = document.createElement('img')
  const textcount = document.createElement('h2')
  const play = document.createElement('button')
  const stop = document.createElement('button')

  textcount.className = 'contador'
  textcount.textContent = COUNT
  cesta.className = 'cesta'
  cesta.src = 'public/assets/cesta.png'
  play.textContent = 'Play'
  stop.textContent = 'Stop'
  play.className = 'button-Fruit'
  stop.className = 'button-Fruit'

  play.addEventListener('click', () => {
    estado = !estado
    Estadobutton(play, stop)
    stargame()
  })

  stop.addEventListener('click', () => {
    estado = !estado
    Estadobutton(play, stop)
    stopMulti()
  })

  Estadobutton(play, stop)

  Multi.textContent = 'Multifrutas'
  Multi.classList.add('Title')

  Divcontent.append(play)
  Divcontent.append(stop)
  Divcontent.append(textcount)
  Divcontent.append(Multi)
  Divcontent.append(cesta)
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
  ImgFrutas.classList.add('Recoger')

  ImgFrutas.addEventListener('click', (event) => pickfruit(event, contentRect))

  Divcontent.append(ImgFrutas)
  comprobar()
}

const pickfruit = (event, contentRect) => {
  COUNT++
  localStorage.setItem('score', COUNT)
  repeattext(COUNT)
  event.target.classList.remove('Recoger')
  let randomTop = Math.random() * 20 + 90
  let randomLeft = Math.random() * 20 + 90
  event.target.style.top = `${contentRect.height - randomTop}px`
  event.target.style.left = `${contentRect.width - randomLeft}px`
}

const repeattext = (e) => {
  const text = document.querySelector('.contador')
  text.textContent = e
}

const comprobar = () => {
  const Allfruit = document.querySelectorAll('.Recoger')
  if (Allfruit.length > 50) {
    alert('Hay demasiadas Frutas')
    clearInterval(interval)
  }
}

const stargame = () => {
  enableFruits()
  interval = setInterval(() => {
    createFrutas()
  }, 1000)
  setTimeout(() => {
    if (!estado) {
      clearInterval(interval)
      interval = setInterval(() => {
        createFrutas()
      }, 800)
    }
  }, 5000)
  setTimeout(() => {
    if (!estado) {
      clearInterval(interval)
      interval = setInterval(() => {
        createFrutas()
      }, 700)
    }
  }, 10000)
  setTimeout(() => {
    if (!estado) {
      clearInterval(interval)
      interval = setInterval(() => {
        createFrutas()
      }, 500)
    }
  }, 15000)
  setTimeout(() => {
    if (!estado) {
      clearInterval(interval)
      interval = setInterval(() => {
        createFrutas()
      }, 300)
    }
  }, 20000)
}

const Estadobutton = (play, stop) => {
  if (estado) {
    play.classList.add('show')
    stop.classList.remove('show')
  } else {
    stop.classList.add('show')
    play.classList.remove('show')
  }
}

const disableFruits = () => {
  const allFruits = document.querySelectorAll('.Recoger')
  allFruits.forEach((fruit) => {
    fruit.classList.add('disabled')
  })
}

const enableFruits = () => {
  const allFruits = document.querySelectorAll('.Recoger')
  allFruits.forEach((fruit) => {
    fruit.classList.remove('disabled')
  })
}

export const stopMulti = () => {
  clearInterval(interval)
  estado = true
  disableFruits()
}
