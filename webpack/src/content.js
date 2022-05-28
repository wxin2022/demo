function Content() {
  let dom = document.getElementById('root')
  let content = document.createElement('div')
  content.innerText = '这是正文内容内容'
  dom.append(content)
}

// export default Content

module.exports = Content