import { iniMulti, stopMulti } from '../../page/Multifrutas/Multifrutas'
import { iniPpt } from '../../page/Ppt/Ppt'
import { iniTateti, Poner, checkWinner } from '../../page/Tateti/Tateti'
import './header.css'

export const header = (DivApp) => {
  const Header = document.createElement('header')
  const buttonPpt = document.createElement('button')
  const buttonTateti = document.createElement('button')
  const buttonMulti = document.createElement('button')

  buttonPpt.textContent = 'Piedra Papel o Tijera'
  buttonTateti.textContent = 'Tateti'
  buttonMulti.textContent = 'Multifrutas'

  buttonTateti.addEventListener('click', () => {
    stopMulti()
    const Divcontent = document.querySelector('.content')
    Divcontent.innerHTML = ''
    iniTateti()
    Poner()
    checkWinner()
  })

  buttonPpt.addEventListener('click', () => {
    stopMulti()
    const Divcontent = document.querySelector('.content')
    Divcontent.innerHTML = ''
    iniPpt()
  })

  buttonMulti.addEventListener('click', () => {
    stopMulti()
    const Divcontent = document.querySelector('.content')
    Divcontent.innerHTML = ''
    iniMulti()
  })

  Header.append(buttonPpt)
  Header.append(buttonTateti)
  Header.append(buttonMulti)
  DivApp.append(Header)
}
