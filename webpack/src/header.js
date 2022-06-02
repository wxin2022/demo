function Header() {
  let dom = document.getElementById('root')
  let header = document.createElement('div')
  header.innerText = '这是头部内容a'
  dom.appendChild(header)
}

export default Header