Page({
  data: {
    // 品牌信息
    brandName: 'Shadowe 影察',
    hasProBadge: true,
    
    // 主标题
    mainTitle: '隐形分析助手',
    subTitle: '洞察真实价值',
    description: 'AI 在后台默默工作，帮你从真实对话中提取可验证的商业洞察。',
    
    // 信任标签
    trustTags: [
      { icon: 'shield', text: '隐私安全' },
      { icon: 'refresh', text: '价值回传' },
      { icon: 'link', text: '可溯源验证' }
    ],
    
    // 快捷功能
    quickFeatures: [
      { icon: 'mic', title: '记录真实对话', desc: '自然交流，不打断' },
      { icon: 'brain', title: 'AI 在后台分析', desc: '行为识别，情感分析' },
      { icon: 'chart', title: '生成可验证洞察', desc: '提取深层洞察' }
    ],
    
    // 最近项目
    recentProjects: [
      {
        id: 1,
        name: '新用户注册流程体验研究',
        description: '探索新用户在注册过程中遇到的痛点和障碍',
        status: 'completed',
        statusText: '分析完成',
        progress: 100,
        interviewCount: 8,
        date: '2024-05-01',
        icon: 'user'
      },
      {
        id: 2,
        name: '电商产品需求探索性访谈',
        description: '深入了解用户对电商产品的核心需求',
        status: 'analyzing',
        statusText: '分析中',
        progress: 68,
        interviewCount: 12,
        date: '2024-04-28',
        icon: 'shopping'
      }
    ]
  },

  onLoad() {
    console.log('首页加载')
  },

  onShow() {
    // 页面显示时刷新数据
  },

  // 开始对话
  onStartConversation() {
    wx.navigateTo({
      url: '/pages/recording/recording'
    })
  },

  // 查看全部项目
  onViewAllProjects() {
    wx.switchTab({
      url: '/pages/projects/projects'
    })
  },

  // 进入项目详情
  onProjectTap(e) {
    const projectId = e.currentTarget.dataset.id
    wx.navigateTo({
      url: `/pages/project-detail/project-detail?id=${projectId}`
    })
  },

  // 通知图标点击
  onNotificationTap() {
    wx.showToast({
      title: '暂无新通知',
      icon: 'none'
    })
  },

  // 头像点击
  onAvatarTap() {
    wx.switchTab({
      url: '/pages/profile/profile'
    })
  }
})
