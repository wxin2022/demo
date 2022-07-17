// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    isPause: false,
    time: 0, // 录音时长
    timer: null, // 录音计时器
  },
  onShow() {
    if (this.data.isPause) {
      console.log('自动调用恢复')
      this.resume()
    }
  },
  onLoad() {
    let r = wx.getRecorderManager()

    r.onStart((e) => {
      console.log('事件：开始录音')
      console.log(e)
      this.initTimer()
    })

    r.onStop((e) => {
      console.log('事件：停止录音')
      console.log(e)

      clearInterval(this.data.timer)

      // setTimeout(() => {
      //   this.start()
      // }, 500)

      wx.uploadFile({
        url: 'http://122.51.146.188:8088/hero/upload',
        filePath: e.tempFilePath,
        name: 'file',
        success: (res) => {
          console.log('success', res)
        },
        fail: (err) => {
          console.log(err)
        }
      })
    })

    r.onPause((e) => {
      console.log('事件: 暂停录音')
      console.log(e)
      clearInterval(this.data.timer)
      this.setData({
        isPause: true
      })
    })

    r.onResume((e) => {
      console.log('事件: 恢复录音')
      console.log(e)
      this.setData({
        isPause: false
      })
      this.initTimer()
    })

    r.onError((e) => {
      console.log('事件: 录音错误')
      console.log(e)
    })

    r.onInterruptionBegin((e) => {
      console.log('事件: onInterruptionBegin')
      console.log(e)
    })

    r.onInterruptionEnd((e) => {
      console.log('事件: onInterruptionEnd')
      console.log(e)
    })
    

    setTimeout(() => {
      this.start()
    }, 5000)

  },
  initTimer(){
    const timer = setInterval(() => {
      this.setData({ time: this.data.time + 1 })
    }, 1000)
    this.setData({ timer })
  },
  start() {
    let r = wx.getRecorderManager()
    r.start({
      duration: 20000 // 录音时长 ms
    })
  },

  pause() {
    let r = wx.getRecorderManager()
    r.pause()
  },

  stop() {
    let r = wx.getRecorderManager()
    r.stop()
  },

  resume() {
    let r = wx.getRecorderManager()
    r.resume()
  }
})
