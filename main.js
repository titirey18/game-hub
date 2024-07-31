import {
  iniTateti,
  Poner,
  resetcontent,
  checkWinner
} from './src/page/Tateti/Tateti'
import { header } from './src/components/header/header'
import './style.css'

const DivApp = document.querySelector('#app')
header(DivApp)

const Divcontent = document.createElement('div')
Divcontent.className = 'content'
DivApp.append(Divcontent)

iniTateti()
Poner()
resetcontent()
checkWinner()
