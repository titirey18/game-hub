import { header } from './src/components/header/header'
import './style.css'

const DivApp = document.querySelector('#app')
header(DivApp)

const Divcontent = document.createElement('div')
Divcontent.className = 'content'
DivApp.append(Divcontent)
