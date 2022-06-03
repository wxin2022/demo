function Header() {
  let dom = document.getElementById('root')
  let header = document.createElement('div')
  header.innerText = '这是头部内容a'
  dom.appendChild(header)
  $(header).css('color', 'red')
  console.log('trim后的长度为：', $trim('   12345     ').length)
}
console.log(this)

export default Header