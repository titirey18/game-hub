import { iniPpt } from '../../page/Ppt/Ppt'
import { iniTateti } from '../../page/Tateti/Tateti'
import './header.css'

export const header = (DivApp) => {
  const Header = document.createElement('header')
  const buttonPpt = document.createElement('button')
  const buttonTateti = document.createElement('button')

  buttonPpt.textContent = 'Piedra Papel o Tijera'
  buttonTateti.textContent = 'Tateti'

  buttonPpt.addEventListener('click', () => {
    DivApp.innerHTML = ''
    iniPpt()
  })
  buttonTateti.addEventListener('click', iniTateti)

  Header.append(buttonPpt)
  Header.append(buttonTateti)
  DivApp.append(Header)
}
