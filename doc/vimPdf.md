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
* . 范式： 一次移动， 一次修改
```js
a2
import axios from 'axios';
import userToken from 'store';
import saveData from '@/api/user';
const BASE_URL = 'http://www.jscode.space';
const merge = ''
export function request() {
  let header = {
    content-type: 'application/json'
  }
  heade.userToken = userToken
  {

  }
  return new Promise((resolve,reject) => {
    axios.get('/user/info')
    console.logo(333)
    resolve()
  })
}
```
## 其他
* >G 增加当前位置到文件最后一行的缩进
* A = $a 移动到行尾进入插入模式
* I = 0i 移动到行头进入插入模式， ^I 则为进入首个非空白字符，并进入插入模式
* , 为查找f的上一个结果，与 ; 相反

* ctrl + a ： 可以将单词所在数值加1， ctrl + x 则实现减1
  如果光标不在数字上，那么会跳转到数值上并进行操作，
  按下数字 + ctrl +a 作为增加的量
  技巧：例如将改行的 0 变为 180时，直接按  180+ctrl+a ，即可实现
  特殊：以0开头的数值在增加时会认为是8进制，_vimrc 增加 set nrformats= 可实现所有数字解析为10进制
  
* daw  : 删除一个完整的单词（无论光标在单词的哪个字符上）
* 2dw 与 d2w的区别: 第一个为执行两次 dw, 第二个为 一次删除2个单词
* zz  重绘窗口，使窗口位于屏幕中间
* zt  光标置顶，top
* zb  光标置底，bottom
* ga 查看光标所在字符的编码

## 操作符， 通过 :h operatior 
* d, c,  y,  g
* g~ gu gU
* = 缩进， TODO
* !  TODO

## 规则
* vim 的规则之一： 当一个命令连续调用两次时，他会用于当前行
  如： dd 删除当前行
  如： >> 为缩进当前行   
  gu 为特殊情况，如果要改变当前行的大小写，可用 guu, gugu

##  commentary 注释插件 
*  :h omap-info

## 插入模式的快捷键
* ctrl + w 删除前一个单词
* ctrl + h 删除前一个字符
* ctrl + u 删除至行首
* ctrl + [  等价于 Esc 回到普通模式
* ctrl + o 插入模式下的普通模式
  插入-普通模式是普通模式的一个特例，它能让我们执行一次普遍模式命令。在此
模式中，我们可以执行一个普通模式命令，执行完后，马上就又返回到插入模式。要
从插入模式切换到插入-普通模式，可以按 <C-o>
  用处，比如在插入模式下粘贴内容等
* ctrl + r + {registor} 在插入模式下可直接粘贴寄存器中的内容
* ctrl + v + {char} 插入任意按键对应的字符: 如  ctrl + v + 65 为 输入字符 A
  特殊： 如果插入为 unicode字符，用 <R-v> + u + {charNumber},
  特殊： 如果 ctrl+ v 后面接一个非数字按键，会插入该按键本身所代表的字符

## TODO
  * 插入模式下的 ctrl + o  // ok
  * <c-r>{registor} 的作用

## 键位映射
  *  esc =>> capsLock？
  * leader =>> space ?

## 寄存器
* 
* 表达式寄存器  "=   不止算数运算，还有高级应用
  输入模式下，按 ctrl + r + = 可实现将计算结果插入当前位置

## 插入 2和字符   :h digraph-table
* vim 对2合字符有一定的语义支持
* ½  输入方式为 ctrl +k  + 12
* ¾  输入方式为 ctrl + k + 34
