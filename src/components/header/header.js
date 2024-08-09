import { iniMulti, stopMulti } from '../../page/Multifrutas/Multifrutas'
import { iniPpt } from '../../page/Ppt/Ppt'
import { iniTateti, Poner, checkWinner } from '../../page/Tateti/Tateti'
import './header.css'

const NavButton = ({ text, onClick }) => {
  const button = document.createElement('button')
  button.textContent = text
  button.addEventListener('click', onClick)
  return button
}

export const header = (DivApp) => {
  const Header = document.createElement('header')

  const links = [
    {
      text: 'Piedra Papel o Tijera',
      onClick: () => {
        stopMulti()
        const Divcontent = document.querySelector('.content')
        Divcontent.innerHTML = ''
        iniPpt()
      }
    },
    {
      text: 'Tateti',
      onClick: () => {
        stopMulti()
        const Divcontent = document.querySelector('.content')
        Divcontent.innerHTML = ''
        iniTateti()
        Poner()
        checkWinner()
      }
    },
    {
      text: 'Multifrutas',
      onClick: () => {
        stopMulti()
        const Divcontent = document.querySelector('.content')
        Divcontent.innerHTML = ''
        iniMulti()
      }
    }
  ]

  links.forEach((link) => {
    const button = NavButton(link)
    Header.append(button)
  })

  DivApp.append(Header)
}
