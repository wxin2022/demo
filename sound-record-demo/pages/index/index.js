// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    isPause: false
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
    })

    r.onStop((e) => {
      console.log('事件：停止录音')
      console.log(e)

      setTimeout(() => {
        this.start()
      }, 500)
    })

    r.onPause((e) => {
      console.log('事件: 暂停录音')
      console.log(e)
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

  },
  start() {
    let r = wx.getRecorderManager()
    r.start({
      duration: 10000 // 录音时长 ms
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
