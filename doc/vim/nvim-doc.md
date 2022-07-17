# nvim 配置学习

## nvim 配置支持python3
  1. 安装 phthon3 
  2. 打开 windwos cmd 进入python3 安装目录 
  3. 执行命令 python -m pip install --user --upgrade pynvim
  4. vim配置文件加入
    ```init.vim
      // let g:python_host_prog='D:\install\development\python\python.exe' 
      let g:python3_host_prog='D:\install\development\python\python.exe'
    ```
## vim markdown 预览
  1. 安装  Plug 'iamcco/markdown-preview.vim' " markdown 预览 需要 python 支持
  2. :markdownpreview

## 实现 vim 与 markdown预览 分别屏幕的左右两边
 1. 按住 window + left 方向键 可实现将软件放置于左半边屏幕
 2. 同上，打开预览的后，按住 windows + right 键将浏览器放置于屏幕右侧


## neee
<!-- 安装 gcc,  g++
https://blog.csdn.net/weixin_64064486/article/details/123940266

打开一下网页，下载Download mingw-get-setup.exe (86.5 kB)
http://sourceforge.net/projects/mingw/files/

选择计算机—属性---高级系统设置---环境变量，在系统变量中找到 Path 变量，在后面加入 min-gw的安装目录，如 D:\MinGw\bin
mingw-get install gcc 
mingw-get install g++ -->

安装 LLVM 即可

```git
git config --global http.sslVerify "false"
```

## vim 打开 windows cmd （cmd路径为当前文件路径）
```vim
:! start cmd
```
