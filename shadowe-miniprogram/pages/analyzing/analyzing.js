Page({
  data: {
    analysisStages: [
      { name: '情感识别', status: 'completed' },
      { name: '行为分析', status: 'completed' },
      { name: '需求提取', status: 'processing' },
      { name: '痛点挖掘', status: 'waiting' },
      { name: '价值验证', status: 'waiting' }
    ],
    progress: 40,
    estimatedTime: 23,
    isAnalyzing: true
  },

  onLoad() {
    console.log('分析中页面加载')
    this.startAnalysis()
  },

  onUnload() {
    clearInterval(this.analysisTimer)
  },

  startAnalysis() {
    let currentStage = 2
    let progress = 40
    let timeLeft = 23

    this.analysisTimer = setInterval(() => {
      // 更新进度
      progress += Math.random() * 2
      if (progress >= 100) {
        progress = 100
        clearInterval(this.analysisTimer)
        
        // 分析完成，跳转到洞察结果页
        setTimeout(() => {
          wx.navigateTo({
            url: '/pages/insights/insights'
          })
        }, 500)
        return
      }

      // 更新阶段状态
      const stages = this.data.analysisStages.map((stage, index) => {
        if (index < currentStage) {
          return { ...stage, status: 'completed' }
        } else if (index === currentStage) {
          return { ...stage, status: 'processing' }
        } else {
          return { ...stage, status: 'waiting' }
        }
      })

      // 检查是否需要进入下一阶段
      if (progress > (currentStage + 1) * 20 && currentStage < 4) {
        currentStage++
      }

      timeLeft = Math.max(0, Math.floor((100 - progress) / 4))

      this.setData({
        analysisStages: stages,
        progress: Math.floor(progress),
        estimatedTime: timeLeft
      })
    }, 500)
  }
})
