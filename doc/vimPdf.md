# vim pdf 文档笔记

## 键位 
* <Esc>
* <CR> 回车
* <Ctrl>
* <Shift>
* <Tab>
* <S-tab> 同时按下 shift 和 tab

## . 符号
* 重复上次的修改
* 技巧1，更改变量名
  1. 按 * 可搜索光标位置的单词，按 cw 更改第一个变量
  2. 按 n 进入下一个搜索项，按 . 执行上次的更改
* 技巧2, 为行尾增加分号
  1. A 进入行尾，输入 分号
  2. 进入下一行，直接按 .
```js
import axios from 'axios';
import userToken from 'store';
import saveData from '@/api/user';
const BASE_URL = 'http://www.jscode.space';
export function request() {
  let header = {
    content-type: 'application/json'
  }
  heade.userToken = userToken
  {

  }
  return new Promise((resolve,reject) => {
    axios.get('/user/info')
    resolve()
  })
}
```
## 其他
* >G 增加当前位置到文件最后一行的缩进
* A = $a 移动到行尾进入插入模式
* I = 0i 移动到行头进入插入模式， ^I 则为进入首个非空白字符，并进入插入模式
* , 为查找f的上一个结果，与 ; 相反


