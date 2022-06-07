// import $ from 'jquery'
// console.log($)

import yyUtil from 'yy-tools2022'

console.log(yyUtil.math.safeAdd`222`)
console.log(yyUtil)
console.log(yyUtil.string.safeJoin.toString())
function add(a, b) {
    const div = document.createElement('div')
    div.innerText = `计算加法：${a} + ${b} = ${a + b}`
    document.body.appendChild(div)
}

console.log('math文件执行')


function abcd() {
    
}

export { add, abcd }