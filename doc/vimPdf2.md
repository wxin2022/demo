w:  write
r: read

:edit! 重新读取文件内容放入缓冲区，即 还原该文件所有编辑
:qa[ll]!  强制 推出所有文件
:wa[ll]! 强制 保存所有文件

## 字符键位
<k0> - <k9> 小键盘 0 到 9 
<S-...> Shift＋键 
<C-...> Control＋键 
<M-...> Alt＋键 或 meta＋键 
<A-...> 同 <M-...> 
<Esc> Escape 键 
<Up> 光标上移键 
<Space> 插入空格 
<Tab> 插入Tab 
<CR> 等于<Enter>

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

## 命令模式
* 命令模式下 <C-w> 可删除当前单词， <C-u> 可删除至命令开头
* :37  跳转到37行
* :2,5p 打印2-5行内容，光标会留在第5行
* :.    . 表示光标当前行号
* : %   % 表示当前文件所有行

1 文件的第一行
$ 文件的最后一行
0 虚拟行，位于文件第一行上方
. 光标所在行
'm 包含位置标记 m 的行
'< 高亮选区的起始行
'> 高亮选区的结束行
% 整个文件（:1,$ 的简写形式）

* :copy  简写 :co  或者 :t   语法： {复制范围 t {粘贴到哪里}
  :6t. 把第 6 行复制到当前行下方
  :t6 把当前行复制到第 6 行下方
  :t. 为当前行创建一个副本（类似于普通模式下的 yyp）
  :t$ 把当前行复制到文本结尾
  :'<,'>t0 把高亮选中的行复制到文件开头

  sadfha asdf h
1 文件的第一行

* shift + tab 切换为补全额上一个
* 命令行下 使用 <C-r><C-w> 将光标下的单词插入命令行
* 批量修改单词测试, 在替换下面 file 为 word  
  1. 光标移动到file 下，按 * 选中所有 file 这个词
  2. cw, 输入 word ，esc 回到 普通模式
  3. 命令行输入 :%s//<C-r-w>/g  回车完成
  test1 this is a test file
  this this one test word
  this this three test file
* history 查看历史命令， 编辑 _vimrc   set history=200
* 按下 / 使用 up ,down 可查找历史的查找记录，本质上 查找也是命令模式的一种
* 命令模式下 <C+p> <C+n> 也可以显示上一次的历史命令，但是不会进行过滤
  使用 按键映射较好
  cnoremap <C-p> <Up>
  cnoremap <C-n> <Down>
* 命令行窗口：  普通模式下按   q:   进入
  在命令行窗口下可进行类似vim 编辑文本操作，只不过编辑的是命令， 按 <CR> 可执行该命令
  q:   进入命令行窗口
  <C-f> 由命令行模式，进入命令行窗口，当前命令行内容也会跟着到命令行窗口  
  q/   打开只有查找命令的命令行窗口

* 执行外部  shell 命令
  使用 ! + 命令， 如： ! ls  ,   （!dir  会打开cmd 窗口）
* 不加 ! 号则为执行vim内容命令

* 在命令行模式中，  % 表示当前文件名

* :shell 打开一个外部 cmd,  在该cmd 窗口 执行  'exit' 命令可退回vim

* r ! cmd   将命令输出写到当前光标处,  r 表示 read
  注意 ！ 的位置不同表示的含义也不同
  命令 用途
  :shell 启动一个 shell (输入 exit 返回 Vim)
  :!{cmd} 在 shell 中执行 {cmd}
  :read !{cmd} 在 shell 中执行 {cmd} ，并把其标准输出插入到光标下方
  :[range]write !{cmd} 在 shell 中执行 {cmd} ，以 [range] 作为其标准输入
  :[range]!{filter} 使用外部程序 {filter} 过滤指定的 [range]

* 普通模式下通过 @; 可执行上次命令， 执行一次后可通过@@ 直接执行该命令


## 文件与缓冲区
* 打开文件后，文件内容被读取到缓冲区（内存），所有编辑操作均在缓冲区完成
* 通过 :ls 查看当前缓冲区列表(打开的文件)，列表里面%表示当前缓冲区在那哪个文件，# 表示下一个缓冲区
* 通过 :bnext   :bprev  切换下一个打开的缓冲区（文件），简写为 bn,bp  ,推荐定义快捷键
  nnoremap <silent> [b :bprevious<CR> 
  nnoremap <silent> ]b :bnext<CR> 
  nnoremap <silent> [B :bfirst<CR> 
  nnoremap <silent> ]B :blast<CR> 

       :bfirst, blast， 简写 bf  bl
  通过 :buffer {num}  指定切换到哪个缓冲区

* :buffer {bufname} 格式实现同样的功能。{bufname} 只需包含文件路径中
足以唯一标识此缓冲区的字符即可。如果输入的字符串匹配了不止一个缓冲区列表中
的条目，此时可以用 Tab 补全的方式在这些条目中选择

* 普通模式下通过 <C-^> 切换下一个缓冲区(好像只能在两个缓冲区之间跳转，多个还是用 bnext, bprev)

* 删除缓冲区  :bdelete 2 3  删除第2，3 个文件缓冲区
  2,5 bdelete  删除编号 2-5 的缓冲区

## 分割窗口，s: :
* <C-w-s>   将窗口分成上下， 默认打开为同一缓冲区内容，可使用  :edit {filename} 打开文件
* <C-w-v>  水平分割窗口
* :sp {filename} 等价于 先 <C-w-s> 再 :edit {filename}
* :vsp  同上，只是方向不同

  Ex 命令 普通模式命令 用途
  :clo[se] <C-w>c 关闭活动窗口
  :on[ly] <C-w>o 只保留活动窗口，关闭其他所有窗口

  命令 用途
  <C-w>= 使所有窗口等宽、等高
  <C-w>_ 最大化活动窗口的高度
  <C-w>| 最大化活动窗口的宽度
  [N]<C-w>_ 把活动窗口的高度设为[N]行
  [N]<C-w>| 把活动窗口的宽度设为[N]列
 
## vim 中的标签页
* :lcd   TODO

* :tabedit {filename} 在新标签页中打开文件 
* <c-w>T 把当前窗口移动到一个新的tab页
* :tabc  关闭当前tab页， c: close
* :tabo  关闭除当前tab页以外的tab页，o: only
* :tabmove N  移动当前tab到第 N 个，  0 为移动到第一个，忽略N 则移动到末尾
* gt 切换到下一个tab页，  2gt 跳转到第一个tab页
* gT 切换到上一个tab页

  Ex 命令 普通模式命令 用途
  :tabn[ext] {N} {N}gt 切换到编号为 {N} 的标签页
  :tabn[ext] gt 切换到下一标签页
  :tabp[revious] gT 切换到上一标签页

## 文件操作
* 通过 pwd 查看vim所在的项目路径
* :edit %:h  当前当前目录树



