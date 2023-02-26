## 生成 ssh 密匙
git config --global user.name "yulang"
git config --global user.email "wxin2022@163.com"
ssh-keygen -t rsa -C "wxin2022@163.com"

## 拉取远程分支
git fetch origin


## 生成 ssh key
ssh -keygen -t rsa

## 操作
* git add .
* git commit -m "描述"
* git pull origin 
* git push origin

## 恢复 https://blog.csdn.net/kalman2019/article/details/128575261
* 恢复工作区所有文件 git chekcout . // * ?    // == git restore ?
* 恢复索引 git reset
* 恢复已提交的 git revert
* 删除未追踪的文件 git clean -f
* 删除未追中的文件夹 git clean -fd
