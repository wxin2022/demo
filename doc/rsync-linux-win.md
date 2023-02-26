## 安装 rsync, 写入配置文件
  uid=root
  use chroot=no
  max connections=3

  [xlg]
  path=/xlg/car-mini
  read only=no
  list=yes
  auth users=root
  secrets file=/soft/rsync-pwd.passwd

## 设置密码文件权限为 600
  chmod 600 /soft/rsync-pwd.passwd

## 服务器需要开发端口 873

## win10
  D:\install\cwRsync-v5.5.0\bin\rsync.exe -vzrtopgu --progress --delete --password-file=/cygdrive/d/install/cwRsync-v5.5.0/pwd.txt root@123.249.33.90::xxx /cygdrive/d/codesync

## 定时同步
```
  var exec = require('child_process').exec;
  function execute(cmd, callback){
    exec(cmd, function(error, stdout, stderr) {
      if(error){
          console.error(error);
      }
      else{
          console.log("success");
      }
      setTimeout(() => {
        callback && callback()
      }, 50)
    });
  }

  function startSync() {
    const cmdList = [
      'D:\\install\\cwRsync-v5.5.0\\bin\\rsync.exe',
      '-vzrtopgu',
      '--progress',
      '--password-file=/cygdrive/d/install/cwRsync-v5.5.0/pwd.txt',
      '--delete',
      `--exclude 'node_modules'`,
      `--exclude 'miniprogram_npm'`,
      `root@123.249.33.90::xlg /cygdrive/d/codesync`,
    ]
    execute(cmdList.join(' '), startSync)
  }
  startSync()
```
