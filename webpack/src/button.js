const button = document.createElement('button')
button.innerText = '增加行'
document.body.append(button)
button.onclick = function() {
  let div = document.createElement('div')
  div.classList.add('div-item')
  div.innerText = '一个div'
  document.body.appendChild(div)
}