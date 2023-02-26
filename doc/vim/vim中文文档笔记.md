## ``  跳转到返回上次跳转位置

##
 CTRL-O   N  CTRL-O     跳转到跳转表中第 N 个较早的位置
 CTRL-I   N  CTRL-I     跳转到跳转表中第 N 个较晚的位置
 :ju      :ju[mps]      列出跳转表

## 特殊插入
* :r ../npm.md 插入一个文件内容
* :r !ls -la 将命令的标准输出插入到光标下

total 100
drwxr-xr-x  3 root root  4096 Dec 31 11:45 .
drwxr-xr-x 10 root root  4096 Dec 26 09:25 ..

## 连接
* J 连接行 插入空格
* gJ 连接行，但是不插入空格

## 粘贴
* ]p  同 p, 并调整缩进
* ]p  同 P ，并调整缩进

## cmd heigh
