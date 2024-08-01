import { iniPpt } from '../../page/Ppt/Ppt'
import {
  iniTateti,
  Poner,
  resetcontent,
  checkWinner
} from '../../page/Tateti/Tateti'
import './header.css'

export const header = (DivApp) => {
  const Header = document.createElement('header')
  const buttonPpt = document.createElement('button')
  const buttonTateti = document.createElement('button')

  buttonPpt.textContent = 'Piedra Papel o Tijera'
  buttonTateti.textContent = 'Tateti'

  buttonTateti.addEventListener('click', () => {
    if (document.querySelector('.Cuadro')) {
      resetcontent()
    } else {
      iniTateti()
      Poner()
      checkWinner()
    }
  })
  buttonPpt.addEventListener('click', () => {
    iniPpt()
  })

  Header.append(buttonPpt)
  Header.append(buttonTateti)
  DivApp.append(Header)
}
