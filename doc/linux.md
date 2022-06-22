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

## vmvware 激活密匙
* JZ42H-FP14P-RZFD8-DL07P-2CJ43

* 博客解压密码 www.u14a.net


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
* 日志 D:\CRTData\%S-%Y-%M-%D.txt， 勾选在连接上启动记录，追加到文件
* ctrl + d 退出重新进入，日志就会记录了


## mkdir 
mkdir /yydata
* -p  递归创建目录  mkdir -p  api/module/test

## ls
* -ld  ex:   ls -ld /yyata   查看yyata目录的信息， l 为长格式， d 为目录

## pwd
* 查看当前路径

## touch 创建文件
* touch yy.txt  , touch  /yydata/b/yy.txt
* touch 可以同时常见多个文件，用空格隔开即可，  touch a.txt  b.txt

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

* 1>  1>> 为 正常输出（ > 相当于 1>）
* 2>  2>> 为 错误输出（命令执行错误时将错误内容输出）
* <0  <<0 输入从定向，输入追加重定向

## cp

* cp error.log  /yylog
* -r  用于复制目录（cp 默认不能复制目录，需要带参数，还可以用 -a）
* -a  相当于 pdr,  推荐使用
* -p  保持属性

## mv
* mv /log /yydata

## 帮助命令

1. 在命令的前面接  man  如：   man  ls
2. touch --help
3. help cd

## find

* find /yylog/ -type f -exec rm -rf {} \;
* find /yylog/ -type f|xargs rm -f
* find /yylog/ -type f -name "main.vue"
* find /yylog/ -type f -name "*.vue"
* find /yylog/ ! -type f // ！ 表示排除（取反）
* find /yylog -type f ! -name "*.vue"

* find /yylog/ -type f ! -name "app.vue"|xargs rm -f // 删除目录下所有文件，但保留某个文件


### 翻页时，按 /  可进入搜索模式， 按字母 n 跳转下一个搜索到的内容

## rm
-r  删除目录以及文件
-f  不用确认删除

## rmdir
删除空目录， 删除非空目录会报错

## head 查看文件的开头多少行，
* head app.vue  // 默认为查看前10行
* head -n  20 app.vue  // 查看前20行
* head -20 app.vue // 简写 查看前20行

## grep 过滤
* grep "div" app.vue
* grep -v "div" app.vue // -v 排除

* grep -B 22 'text' index.js // before 取匹配到的行之前 n 行
* grep -A 22 'text' index.js // after // 取匹配之后的
* grep -C 22 'text' index.js // 前后各 n 行

## sed

* sed -n /div/p app.vue
-n 取消默认输出（默认为输出所有内容）
p 打印
* -i 改变文件内容

* 替换： sed -i 's#p#2#g' ss.txt // 把 p 替换成 2， 其中 # 可以使用 其他字符代替（前提是成对出现）, g 全局
如果不加 g ,则只会替换每一行的第一个

## yum
* yum install tree -y  // -y 为不需要询问
* yum update // 更新所有软件
* rpm -ivh  name.rpm
* rpm -qa tree // 查看已安装的软件包  q 为 query, a 为 all

## tree： 展示目录结构， 需安装 tree
tree /dev

## alias
使用 rm 或者 mv 等命令时，一般会有提示是因为该命令有别名，如：直接敲  rm 相当于 rm -i

[root@localhost main]# alias
alias cp='cp -i'
alias egrep='egrep --color=auto'
alias fgrep='fgrep --color=auto'
alias grep='grep --color=auto'
alias l.='ls -d .* --color=auto'
alias ll='ls -l --color=auto'
alias ls='ls --color=auto'
alias mv='mv -i'
alias rm='rm -i'
alias which='alias | /usr/bin/which --tty-only --read-alias --show-dot --show-tilde'

* 取消使用别名的方式
1. 使用全路径 /bin/mv
2. \mv  // 转义

* 命令行设置别名为临时生效，要永久生效见如下
1. 如果针对单个用户，编辑 配置 家目录下的 bashrc 文件 // ~ 表示用户家目录
2. 所有用户生效，编辑 /etc 下面的配置文件

## seq 打印序列
* seq 10  // 打印 1-10
* seq 5 8 // 打印 2-8
* seq 2 2 10 // 打印 偶数，中间位为 增量
* seq -s "+" 5 // -s 指定分割符，默认的分割符为 换行

## tail 取尾部
用法与 head 一致

## 取文件的 20-30 行
1. sed -n '20, 30p' index.js
2. head -30 index.js | tail -11

## awk
可以过滤，擅长取列

* awk '{print $0}' index.js // $0 表示所有， $1表示第一列， 默认按照 空格分隔列（连续的多个空格也算一个空格）
* awk '{print $(NF-1)}' ss.txt // 返回每一行的最后一列 
* awk -F : '{print $1} index.js // -F 指定分隔符
* awk '{if (NR>=2 && NR<4) printf $2"\n"}' ss.txt   // 取 m -n 行的 第 x 列， 可使用$0 取 m-n行所有内容


## linux 快捷键
* tab 补全
* ctrl + a ，光标移动到命令 头部，ctrl + e , 移到尾部
* ctrl + shift + c, ctr 复制， // ctrl + insert
* ctrl + shift + v， ctr 粘贴, // shfit + insert

## ssh
* ssh 服务默认端口为 22，  ssh 为服务， ssl 为加密和解密的
```console
查看ssh 安装包
[root@localhost ~]# rpm -qa openssh openssl
openssh-7.4p1-21.el7.x86_64
openssl-1.0.2k-19.el7.x86_64
```

* ps -ef | grep ssh // 查看ssh 进程
* netstat -lntup|grep ssh // 查看服务，监听的 ip, 端口
* ss -lntup|grep ssh // 同 netstat

## 查看 ip 地址
* ifconfig // centos7 没有该命令
* ip add 


## ssh 连通性检查
1. ping 192.169.0.143
2. telnet 192.169.0.143 22
3. 是否防火墙 , /etc/init.d/iptables stop
4. ssh 服务是否开启

## 安装 telnet
yum install telnet -y

## ctr 下 linux 与 windows 传文件（rz-sz）
1. 安装软件
  yum install lrzsz -y
2. 配置 ctr 下载目录， 会话选项 => xmodem

* 上传  rz -y  (输入之后会打开窗口选择要上上传的文件)，不能直接上传目录（需要打包）

* 下载 sz -y /data/index.js

-y 为覆盖下载（或上传）

## CRT 同时向多个会话发送命令
* 查看 => 交谈窗口 => 底部右键 勾选 将交谈发送到所有标签


## 网卡配置
* cat /etc/sysconfig/network-scripts/ifcfg-ens33   // ens33 为网卡名称，可能为 eth0 eth1 等等

* ifup eth0可以将网卡启动
 vim /etc/sysconfig/network-scripts/ifcfg-eth0 把里面的 ONBOOT 设为 yes 即可

## linux 系统信息
* cat /etc/redhat-release 查看linux 版本
* uname -r  查看内核
* uname -m 查看是32位还是64位
* hostname 查看主机名称

## 用户体系



