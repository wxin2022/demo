
nnoremap <F1> :e ~/AppData/Local/nvim/init.vim<CR>
map <F2>  :NERDTreeToggle ./<CR>

let mapleader="\<Space>"

nnoremap <leader><CR> :nohls<CR>

" 按住 alt + j 跳转多行
noremap <C-j> 5j
noremap <C-k> 5k

" 输入模式下，按下 alt + hjkl 为光标移动
inoremap <M-h> <left>
inoremap <M-l> <right>
inoremap <M-j> <down>
inoremap <M-k> <up>

" 复制，粘贴系统剪切板
nnoremap <leader>p "+p
vnoremap <leader>y "+y


" 按原始方向键进行窗口大小扩展
noremap <up> :res -5<CR>
noremap <down> :res +5<CR>
noremap <left> :vertical resize+5<CR>
noremap <right> :vertical resize-5<CR>

" 跳转分屏
nnoremap <M-h> <C-w>h
nnoremap <M-l> <C-w>l
nnoremap <M-j> <C-w>j
nnoremap <M-k> <C-w>k

" 分屏
nnoremap <leader><leader>l :vsp<CR> " 向右分屏
nnoremap <leader><leader>j :sp<CR> " 向下分屏

" 切换buffer
nnoremap <silent> [b :bprevious<CR> 
nnoremap <silent> ]b :bnext<CR> 
nnoremap <silent> [B :bfirst<CR> 
nnoremap <silent> ]B :blast<CR>

" 删除当前 buffer
nnoremap <leader>c :bdelete<CR>

" 上一条命令
cnoremap <c-p> <up>
cnoremap <c-n> <down>

autocmd BufWritePost $MYVIMRC source $MYVIMRC

" set guifont=Consolas:h11:cANSI:qDRAFT	"设置字体
" set guioptions= " -=T 隐藏工具栏 -=m 隐藏菜单栏设置顶部的gui菜单栏为空，等价于 set go=
syntax on  " 开启代码高亮
syntax enable
set history=200  " 历史命令保存数量
filetype plugin on
set number
set tabstop=2  " 设置tab大小为2
set expandtab " 设置tab效果为插入空格
set autoindent " 设置为自动缩进
set shiftwidth=2  " 设置缩进为2空格

set encoding=utf-8
set fileencoding=utf-8

set mouse=a  " 设置支持鼠标操作
set laststatus=2 " 让底部状态栏变为2行
set showcmd " 普通模式页显示输入的指令
" set t_Co=256 " 让颜色支持256
set backspace=start,eol,indent " 设置退格键可以到上一行（默认不能）
set hlsearch " 设置代码高亮
set incsearch " 查找输入时也可以高亮
" set smartcase " 智能匹配大小写，对输入命令页适用
set ignorecase 

set scroll off=4 " 保证底部代码以及顶部至少有五行
set timeoutlen=500  " 设置命令按钮间隔有效时间
set lines=999 columns=999 " 指定窗口大小 行数和列数   liens=999 and columns=999 表示全屏

set list
set listchars=tab:▸\ ,trail:•

set autochdir  " 设置目标当前目录跟随文件
set termguicolors

set cursorline " 高亮当前行

call plug#begin('~/AppData/Local/nvim/plugins')
Plug 'preservim/nerdtree'
" Plug 'mattn/emmet-vim'  " 标签补签插件
Plug 'posva/vim-vue'
Plug 'mhinz/vim-startify'  " 启动页面美化
Plug 'Yggdroot/indentLine'  " 缩进线插件

Plug 'vim-airline/vim-airline' " 状态栏优化插件
Plug 'vim-airline/vim-airline-themes'

" Plug 'altercation/vim-colors-solarized'
" Plug 'w0ng/vim-hybrid'  " 主题
" Plug 'tomasr/molokai'
" Plug 'sickill/vim-monokai'
Plug 'morhetz/gruvbox'

Plug 'pangloss/vim-javascript' " javascript 插件
" Plug 'gcmt/wildfire.vim'  " 回车选中代码
Plug 'tpope/vim-surround'  " 好用
Plug 'neoclide/coc.nvim', {'branch': 'release'} " coc 智能补全插件
" Plug 'luochen1990/rainbow'  " 彩色括号对

" Plug 'godlygeek/tabular'
" Plug 'preservim/vim-markdown'
" Plug 'iamcco/mathjax-support-for-mkdp'
" Plug 'iamcco/markdown-preview.nvim', { 'do': { -> mkdp#util#install() }, 'for': ['markdown', 'vim-plug']}
" Plug 'iamcco/mathjax-support-for-mkdp'
" Plug 'iamcco/markdown-preview.vim'

" Plug 'preservim/nerdcommenter'
" Plug 'tomtom/tcomment_vim'

" Plug 'itchyny/vim-cursorword' " 相同词汇下出现横线
Plug 'Raimondi/delimitMate'  " 自动补全引号
call plug#end()

set background=dark " light dark
colorscheme gruvbox


" coc
" let g:coc_global_extensions = ['coc-vetur', 'coc-tsserver']
" set shortmess+=c
" set updatetime=300

"  下面一段为 coc tab 补全
 "inoremap <silent><expr> <TAB>
       ""\ pumvisible() ? "\<C-n>" :
       ""\ CheckBackspace() ? "\<TAB>" :
       ""\ coc#refresh()
 "inoremap <expr><S-TAB> pumvisible() ? "\<C-p>" : "\<C-h>"
"
 "function! CheckBackspace() abort
     "let col = col('.') - 1
       "return !col || getline('.')[col - 1]  =~# '\s'
     "endfunction

" 通过 leader + h 查看 光标所在位置的内容的帮助文档
" nnoremap <silent> <leader>h :call ShowDocumentation()<CR>

" Highlight the symbol and its references when holding the cursor.
" 在相同此下面显示下划线
"autocmd CursorHold * silent call CocActionAsync('highlight')
"
"function! ShowDocumentation()
  "if CocAction('hasProvider', 'hover')
    "call CocActionAsync('doHover')
  "else
    "call feedkeys('K', 'in')
  "endif
"endfunction
" --------------------coc config end

let g:javascript_plugin_jsdoc=1  " 设置js支持 jsdoc
