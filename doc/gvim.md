## 设置

家目录下编辑 _vimrc 

* :set guifont=*  // 设置字体

* set guifont=Consolas:h18:cANSI:qDRAFT

* source %


```console
set guifont=Consolas:h14:cANSI:qDRAFT	"设置字体

"  map J  5gj
"  map K  5gk
"  imap jk <Esc>

" nmap <space><Cr> :nohls<Cr>  " 按空格 + 回车取消代码高亮

syntax on  " 开启代码高亮
" set guioptions=  " 设置顶部的gui菜单栏为空，等价于 set go=
set number
set tabstop=2  " 设置tab大小为2
set expandtab " 设置tab效果为插入空格
set autoindent " 设置为自动缩进
set shiftwidth=2  " 设置缩进为2空格
" set encoding=utf-8
set mouse=a  " 设置支持鼠标操作

set laststatus=2 " 让底部状态栏变为2行
set showcmd
set t_Co=256 " 让颜色支持256
set backspace=start,eol,indent " 设置退格键可以到上一行（默认不能）
set hlsearch " 设置代码高亮
set incsearch " 查找输入时也可以高亮

set scrolloff=5 " 保证底部代码以及顶部至少有五行

" set timeoutlen=500  " 设置命令按钮间隔有效时间

set lines=50 columns=120 " 指定窗口大小 行数和列数   liens=999 and columns=999 表示全屏
```

## 用vim-plug安装配置taglist ctrlp nerdtree winmanager nerdcommenter neocomplete 等常用程序

1. 进入 vim 安装路径下的 auoload 目录，  git clone  git@github.com:junegunn/vim-plug.git
 直接下载 github 页面中 plug.vim 文件，将其放入本机 vim 的 autoload 文件夹中
  Linux: ~/.vim/autoload
  Windows: $VIM_HOME/autoload\plug.vim

2. 在 vim 配置文件 .vimrc (gvim 为_vimrc) 中添加如下信息。


 * Plug 'scrooloose/nerdtree'

3. :PlugInstall  // 注意 P 大写
 安装完成

// 173 9639 2153
// iccd  8986032174379 216 051 
// iccd  8986032174379 216 051 B


## 主题
https://github.com/tomasr/molokai
colorscheme molokai



## netd tree 使用

* :NERDTree  启动插件
* :NERDTree d:/code/pro  启动插件 时打开的项目路径

* 多次按"ctrl+w"，光标自动在左右侧窗口切换

* x  收起父级目录 （光标在文件上则收起文件所在目录，光标在目录上则收起父级目录）

* p 光标定位到父级目录

* ma 创建文件 （m 之后出现很多菜单项供选择， a 为 add）

* md 删除文件 

* mm 改名

## emment 插件

* ctrl + y  然后 ,

## vim sourend 插件

## vim wildfire 插件

