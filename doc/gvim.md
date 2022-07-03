## 设置

家目录下编辑 _VIMRC 

* :SET GUIFONT=*  // 设置字体

* SET GUIFONT=CONSOLAS:H18:CANSI:QDRAFT

* SOURCE %


```CONSOLE
SET GUIFONT=CONSOLAS:H14:CANSI:QDRAFT	"设置字体

"  MAP J  5GJ
"  MAP K  5GK
"  IMAP JK <ESC>

" NMAP <SPACE><CR> :NOHLS<CR>  " 按空格 + 回车取消代码高亮

SYNTAX ON  " 开启代码高亮
" SET GUIOPTIONS=  " 设置顶部的GUI菜单栏为空，等价于 SET GO=
SET NUMBER
SET TABSTOP=2  " 设置TAB大小为2
SET EXPANDTAB " 设置TAB效果为插入空格
SET AUTOINDENT " 设置为自动缩进
SET SHIFTWIDTH=2  " 设置缩进为2空格
" SET ENCODING=UTF-8
SET MOUSE=A  " 设置支持鼠标操作

SET LASTSTATUS=2 " 让底部状态栏变为2行
SET SHOWCMD
SET T_CO=256 " 让颜色支持256
SET BACKSPACE=START,EOL,INDENT " 设置退格键可以到上一行（默认不能）
SET HLSEARCH " 设置代码高亮
SET INCSEARCH " 查找输入时也可以高亮

SET SCROLLOFF=5 " 保证底部代码以及顶部至少有五行

" SET TIMEOUTLEN=500  " 设置命令按钮间隔有效时间

SET LINES=50 COLUMNS=120 " 指定窗口大小 行数和列数   LIENS=999 AND COLUMNS=999 表示全屏
```

## 用VIM-PLUG安装配置TAGLIST CTRLP NERDTREE WINMANAGER NERDCOMMENTER NEOCOMPLETE 等常用程序

1. 进入 VIM 安装路径下的 AUOLOAD 目录，  GIT CLONE  GIT@GITHUB.COM:JUNEGUNN/VIM-PLUG.GIT
 直接下载 GITHUB 页面中 PLUG.VIM 文件，将其放入本机 VIM 的 AUTOLOAD 文件夹中
  LINUX: ~/.VIM/AUTOLOAD
  WINDOWS: $VIM_HOME/AUTOLOAD\PLUG.VIM

2. 在 VIM 配置文件 .VIMRC (GVIM 为_VIMRC) 中添加如下信息。

CALL PLUG#BEGIN('D:\INSTALL\VIMPLUGINS\')
  PLUG 'PRESERVIM/NERDTREE'
  PLUG 'MATTN/EMMET-VIM'
  " PLUG 'POSVA/VIM-VUE'
CALL PLUG#END()


3. :PLUGINSTALL  // 注意 P 大写
 安装完成

// 173 9639 2153
// ICCD  8986032174379 216 051 
// ICCD  8986032174379 216 051 B

* PLUG 删除插件
  1. 注释 _VIMRC 中的插件
  2. :SOURCE %
  3. :PLUGCLEAN

## 主题
* HTTPS://GITHUB.COM/TOMASR/MOLOKAI
COLORSCHEME MOLOKAI

* VIM-HYBIRD配色：GITHUB.COM/W0NG/VIM-HYBRID
* SOLARIZED配色：GITHUB.COM/ALTERCATION/VIM-COLORS-SOLARIZED
* GRUVBOX配色：GITHUB.COM/MORHETZ/GRUVBOX

## NETD TREE 使用

* :NERDTREE  启动插件
* :NERDTREE D:/CODE/PRO  启动插件 时打开的项目路径

* 多次按"CTRL+W"，光标自动在左右侧窗口切换

* X  收起父级目录 （光标在文件上则收起文件所在目录，光标在目录上则收起父级目录）

* P 光标定位到父级目录

* MA 创建文件 （M 之后出现很多菜单项供选择， A 为 ADD）

* MD 删除文件 

* MM 改名

# O 打开关闭文件或目录
# E 以文件管理的方式打开选中的目录
# T 在标签页中打开
# T 在标签页中打开，但光标仍然留在 NERDTREE
# R 刷新光标所在的目录
# R 刷新当前根路径
# X 收起所有目录
# P 小写，跳转到光标所在的上一级路径
# P 大写，跳转到当前根路径
# J 到第一个节点
# K 到最后一个节点
# I 显示隐藏文件
# M 显示文件操作菜单
# C 将根路径设置为光标所在的目录
# U 设置上级目录为根路径
# CTRL + W + W 光标自动在左右侧窗口切换
# CTRL + W + R 移动当前窗口的布局位置
# :TABC 关闭当前的 TAB
# :TABO 关闭所有其他的 TAB
# :TABP 前一个 TAB
# :TABN 后一个 TAB
# GT 前一个 TAB
# GT 后一个 TAB

## EMMENT 插件

* CTRL + Y  然后 ,

## VIM SOUREND 插件

## VIM WILDFIRE 插件


## VIM STARTIFY 插件
* :STARTIFY 回到起始页， 注意首字母大写

## VIM SURROUNDINGS
* 增加包裹  V 模式选中下， S"  增加双引号
* 更改包裹  CS"'    把双引号改为单引号
* 删除包裹  DS'     删除单引号
* 更改标签  CS"<DIV>  把双引号改为 DIV 标签



## COC 插件
* PLUG 'NEOCLIDE/COC.NVIM', {'BRANCH': 'RELEASE'}
* 配置支持的语言  :CoCConfig


