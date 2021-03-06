// import '@babel/polyfill' // 基本高版本的webpack不再需要引入该内容

import Header from './header'
import snow from './images/snow.jpg'
import './button'
import './style/index.css'
import './style/content.scss'
import Content from './content'

import { add } from  '@/math.js'

import { loadElement } from './async-load'

import user from './user'
user.say(22)

add()

console.log(snow) // 路径

const img = new Image()
img.src = snow
const dom = document.getElementById('root')
dom.appendChild(img)

new Header()
new Content()

const a = 'inde.xjs'

document.body.addEventListener('click', () => {
  console.log('点击body事件')
  loadElement().then(({ $, num }) => {
    $('#root').append(`<div>${num}</div>`)
  })
})

// 加载 pwa
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('service-worker.js')
    .then(r => {
      console.log('pwa 启动')
    })
    .catch(err => {
      console.log('pwa启动失败', err)
    })
  })
}