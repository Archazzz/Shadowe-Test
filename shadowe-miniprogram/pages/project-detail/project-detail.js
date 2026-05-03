Page({
  data: {
    projectId: '',
    project: {
      id: 1,
      name: '新用户注册流程体验研究',
      description: '探索新用户在注册过程中遇到的痛点和障碍',
      status: 'analyzing',
      statusText: '进行中',
      date: '2024-05-01 10:30',
      interviewCount: 8,
      creator: '张晓夏',
      icon: 'user'
    },
    stats: [
      { label: '关键洞察', value: '12', icon: 'bulb' },
      { label: '访谈记录', value: '48', icon: 'file-text' },
      { label: '分析时长', value: '156h', icon: 'clock' },
      { label: '置信度', value: '98%', icon: 'check-circle' }
    ],
    activeTab: 0,
    tabs: ['洞察汇总', '访谈记录', '分析结果', '项目设置'],
    insights: [
      {
        id: 1,
        type: 'pain',
        typeLabel: '痛点',
        title: '用户在注册第 3 步流失严重',
        frequency: '高频'
      },
      {
        id: 2,
        type: 'need',
        typeLabel: '需求',
        title: '用户希望有快速注册方式',
        frequency: '高频'
      },
      {
        id: 3,
        type: 'behavior',
        typeLabel: '行为',
        title: '用户在查看隐私条款时停留时间长',
        frequency: '中频'
      }
    ],
    resources: [
      { icon: 'mic', label: '原始录音', count: 8 },
      { icon: 'file-text', label: '转写文本', count: 8 },
      { icon: 'file-pdf', label: '生成报告', count: 3 },
      { icon: 'share', label: '分享项目', count: 0 }
    ]
  },

  onLoad(options) {
    console.log('项目详情页加载', options)
    if (options.id) {
      this.setData({ projectId: options.id })
      // 加载项目详情数据
      this.loadProjectDetail(options.id)
    }
  },

  loadProjectDetail(id) {
    // 实际项目中应调用 API 获取项目详情
    console.log('加载项目详情:', id)
  },

  // 切换 Tab
  onTabChange(e) {
    const index = e.currentTarget.dataset.index
    this.setData({ activeTab: index })
  },

  // 查看全部洞察
  onViewAllInsights() {
    wx.navigateTo({
      url: '/pages/insights/insights'
    })
  },

  // 继续分析
  onResumeAnalysis() {
    wx.showToast({
      title: '继续分析',
      icon: 'none'
    })
  },

  // 导出报告
  onExportReport() {
    wx.showToast({
      title: '报告导出中',
      icon: 'loading'
    })
  },

  // 分享项目
  onShareProject() {
    wx.showShareMenu({
      withShareTicket: true,
      menus: ['shareAppMessage', 'shareTimeline']
    })
  },

  onShareAppMessage() {
    return {
      title: this.data.project.name,
      path: `/pages/project-detail/project-detail?id=${this.data.projectId}`
    }
  }
})
