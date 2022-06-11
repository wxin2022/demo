## 三种网卡模式区别

* NAT: 宿主机作为路由器，与虚拟机交换数据
* 桥接： 虚拟机直接与外部路由连接，与宿主机为同级网络
* host-only: 虚拟机只能和宿主机通讯，无法与外部通讯（无法上网）

## 下载 linux

* https://developer.aliyun.com/mirror/
* https://mirrors.cloud.tencent.com/centos/7/isos/x86_64/

## 安装虚拟机

* custom 1 核  1G 内存  8G 磁盘

* ctrl + alt 将鼠标退出虚拟机


## 分区
* /boot  200M , 主分区
* swap  一般为内存的1.5倍， 虚拟机中给 512
* /  给剩余的全部

## 选择安装包
* 选择最小化安装, 勾选自定义安装哪些包
* base => Base、compatlibity labrary、 debugging tool
* development => development tools

## uname
 -r 查看内核版本号
 -a 查看所有信息
 3.10.30-550   

* ifup eth0 启动网卡
* /etc/init.d/network restart
* service network restart

## CTR 配置
* 会话选项 - 终端 - 选择 linux, 勾选 ANSI颜色，回滚缓冲区 30000
  字体 新宋体 12 ， 精确字体 14 加粗
  光标，断块，绿色
* 日志 D:\CRTData\%S-%Y-%M-%D.txt， 追加到文件


## mkdir 
mkdir /yydata

## ls
* -ld  ex:   ls -ld /yyata   查看yyata目录的信息， l 为长格式， d 为目录

## pwd
* 查看当前路径

## touch 创建文件
* touch yy.txt  , touch  /yydata/b/yy.txt

## vi
* vi yy.txt

* 打开文件后按 i a o 进入编辑模式，编辑模式下按 esc进入命令模式
* 按下 o : 新起一行输入
* 按下 i : 插入
* 按下 a : 感觉跟 i 一样

## cat 
* cat yy.txt  查看所有内容

* cat >>yy.txt <<yyy
this is a test string
yyy 
// 以上也可以追加内容，  yyy 可替换成任意的内容，但必须成对出现

## ehco
echo  "yy study linux" // 打印到屏幕

* 一个 大于号 >,  为覆盖
* 两个大于号  >>   为追加
echo  "yy study linux" > yy.txt   // 将内容打印到 yy.txt , （直接覆盖文件内容）
echo  "yy study linux" >> yy.txt   // 将内容追加到 yy.txt 末尾 

  
