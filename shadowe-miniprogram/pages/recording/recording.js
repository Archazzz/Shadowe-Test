Page({
  data: {
    isRecording: false,
    isPaused: false,
    duration: '00:00:00',
    transcripts: [
      { speaker: '用户', content: '我觉得注册流程有点复杂，填太多信息了...', time: '00:02:37' },
      { speaker: '受访者', content: '对，我每次到第三步就不想继续了，能不能简单一点？', time: '00:02:48' }
    ]
  },

  onLoad() {
    console.log('录音页加载')
  },

  onUnload() {
    // 页面卸载时停止录音
    if (this.data.isRecording) {
      this.stopRecording()
    }
  },

  // 开始/暂停录音
  toggleRecording() {
    if (this.data.isRecording) {
      this.pauseRecording()
    } else {
      this.startRecording()
    }
  },

  startRecording() {
    this.setData({ isRecording: true, isPaused: false })
    
    // 启动录音管理器
    const recorderManager = wx.getRecorderManager()
    
    recorderManager.onStart(() => {
      console.log('recorder start')
      // 开始计时
      this.startTimer()
    })
    
    recorderManager.onStop((res) => {
      console.log('recorder stop', res)
    })
    
    recorderManager.onError((err) => {
      console.error('recorder error', err)
      wx.showToast({
        title: '录音失败',
        icon: 'none'
      })
    })
    
    recorderManager.start({
      duration: 600000, // 10 分钟
      sampleRate: 16000,
      numberOfChannels: 1,
      encodeBitRate: 96000
    })
  },

  pauseRecording() {
    const recorderManager = wx.getRecorderManager()
    recorderManager.pause()
    this.setData({ isPaused: true })
    clearInterval(this.timer)
  },

  resumeRecording() {
    const recorderManager = wx.getRecorderManager()
    recorderManager.resume()
    this.setData({ isPaused: false })
    this.startTimer()
  },

  stopRecording() {
    const recorderManager = wx.getRecorderManager()
    recorderManager.stop()
    clearInterval(this.timer)
    this.setData({ 
      isRecording: false, 
      isPaused: false,
      duration: '00:00:00'
    })
    
    // 跳转到分析中页面
    setTimeout(() => {
      wx.navigateTo({
        url: '/pages/analyzing/analyzing'
      })
    }, 500)
  },

  startTimer() {
    let seconds = 0
    this.timer = setInterval(() => {
      seconds++
      const hrs = Math.floor(seconds / 3600)
      const mins = Math.floor((seconds % 3600) / 60)
      const secs = seconds % 60
      const duration = `${String(hrs).padStart(2, '0')}:${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`
      this.setData({ duration })
    }, 1000)
  },

  // 标记重点
  onMarkImportant() {
    wx.showToast({
      title: '已标记重点',
      icon: 'success'
    })
  },

  // 结束访谈
  onFinishInterview() {
    wx.showModal({
      title: '结束访谈',
      content: '确定要结束本次访谈吗？AI 将开始分析。',
      confirmText: '结束',
      confirmColor: '#8B6CF6',
      success: (res) => {
        if (res.confirm) {
          this.stopRecording()
        }
      }
    })
  }
})
