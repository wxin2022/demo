## 需求

1、按下esc 切换为中文
  autoHotKey 

2、按键 capsLock 映射为ctrl
  autoHotKey

3、代码片段

## 快捷方式

* leader 键 // 空格

* 快速显示nerd tree

* 补全按键 enter

* 打开新窗口
    1、打开空白新窗口
    2、打开一个新文件

* 快速打开项目 

* 快速切换值缓冲区中某个文件, ls, buffers, files 列出当前缓冲区文件
    1、 b 1 // 切换到 buffer 值为 1的文件
    2、 b package.json  // 切换到名称为 package.json 的文件
    3、 bn // bnext bp bprevious
    4、 bd // 删除缓冲区，可接数值，文件名称，不加则删除当前缓冲区
    5、改变窗口的布局，上下切换为左右
       :windo wincmd H // 切换为垂直排列, ctrl + w + H
       :windo wincmd K // 切换为水平排列, ctrl + w + K
    6、切换窗口顺序
       ctrl + w + x 交换同一方向的水平/竖直窗口位置
       ctrol + w + r 向右或者向下交换窗口位置

* 窗口处理
    1、sp filename // split 宽度100%，分为上下结构
    2、vs filename // vsplit 高度100%，分为左右结构
    3、on  // :only 关闭当前之外的所有窗口

* 窗口大小调整

* tab 操作
    1、:tabnew // 打开新窗口
    2、:tabn  // next,  tabp
    3、快捷方式 gt 跳转下一个，gT 跳转上一个
* NERDTree  
  1、输入 :Bookmarker 可收藏光标所在目录为书签
  2、按下B 可 切换书签显示

* vim 打开termail
 1、输入 :terminal 可进入终端，终端下输入 $ exit 可退出

