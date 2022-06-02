import Header from './header'
import './style/index.css'
import './style/content.scss'
import snow from './images/snow.jpg'
import './button'

// import Content from './content'
const Content = require('./content.js')


console.log(snow) // 路径

const img = new Image()
img.src = snow
const dom = document.getElementById('root')
dom.append(img)

new Header()
new Content()

