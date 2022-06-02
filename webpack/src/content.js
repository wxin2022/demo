function Content() {
  let dom = document.getElementById('root')
  let content = document.createElement('div')
  content.innerText = '这是正文内容内容'
  dom.appendChild(content)

  const a = {aa: 33}
  let text = a?.name
  let text2 = text ?? '88'
  console.log(text2)
}

export default Content
