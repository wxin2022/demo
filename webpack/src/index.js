// import '@babel/polyfill' // 基本高版本的webpack不再需要引入该内容

import Header from './header'
import snow from './images/snow.jpg'
import './button'
import './style/index.css'
import './style/content.scss'
import Content from './content'

import { add } from  './math.js'

add()


console.log(snow) // 路径

const img = new Image()
img.src = snow
const dom = document.getElementById('root')
dom.appendChild(img)

new Header()
new Content()

const a = 'inde.xjs'

export default {}
