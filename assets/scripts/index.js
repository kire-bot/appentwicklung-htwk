import { initDrawerClick } from './modules/drawer.js'

let template = document.getElementById('foo')
let templateContent = template.content
document.body.appendChild(templateContent)

initDrawerClick()