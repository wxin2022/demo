## 复制
* yt + {char}  复制到第一个char为止的内容, 不包括该字符, 要包括可用 yfr
  ytr  => 复制到第一个cha

* 运算寄存器， 插入模式， <C+r>=
  0 触发不会有小数 
* 大写 R 进入替换模式

## 可视化模式的几种

* v 进入字符可视化模式
* 大写V 进入行可视化模式
* <C+v> 进入块选择模式
* gv 重选上次的高亮选区
* o 切换高亮选取的两端，这在重新认定高亮范围时非常有用
* 配合 . 实现对高亮选取的多次操作， 如 缩进
* 在可视模式下按 <C-g> 可进入类似于普通文本编辑器的选中模式，此时输入任意的一个字符都会替换选取（一般很少用）  
* 块级可视模式下进行 c 命令时，界面输入时看起来只会影响到第一行的变化，其实 esc 之后高亮的行也会变化
  const url2 = '/scr/abcomponent/logodfh.png'
  const url3 = '/scr/abcomponent/logo3.png'
  const url1 = '/scr/abcomponent/lsbansbanogo1.png'
  特殊：v 模式下 按 i 没有进入输入，按 I 则可以进入输入


## t

* 选中标签之间的文本内容
  例如：<div>this is a div</div>  输入vit 可实现选中标签之间内容（this is a div）
        输入 vat 可实现选中整个 div标签

## A  I
* 大写 A 跳到行尾并进入插入模式
* 大写 I 跳到行头。。。
