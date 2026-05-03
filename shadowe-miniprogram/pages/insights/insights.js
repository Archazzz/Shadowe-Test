Page({
  data: {
    activeFilter: 'all',
    filters: [
      { key: 'all', label: '全部', count: 12 },
      { key: 'pain', label: '痛点', count: 5 },
      { key: 'need', label: '需求', count: 4 },
      { key: 'behavior', label: '行为', count: 2 },
      { key: 'suggestion', label: '建议', count: 1 }
    ],
    insights: [
      {
        id: 1,
        type: 'pain',
        typeLabel: '痛点',
        frequency: 'high',
        frequencyLabel: '高频',
        title: '用户在注册第 3 步流失严重',
        description: '注册流程过于复杂，信息填写量大，导致用户在关键步骤放弃。',
        quote: '太复杂了，我不想填这么多信息...',
        interviewCount: 8,
        impactScore: 92,
        avatar: ['A', 'B', 'C']
      },
      {
        id: 2,
        type: 'need',
        typeLabel: '需求',
        frequency: 'high',
        frequencyLabel: '高频',
        title: '用户希望有快速注册方式',
        description: '用户希望通过手机号一键注册，减少填写步骤，提高效率。',
        quote: '能不能用手机号码直接登录？太麻烦了。',
        interviewCount: 6,
        impactScore: 78,
        avatar: ['D', 'E', 'F']
      },
      {
        id: 3,
        type: 'behavior',
        typeLabel: '行为',
        frequency: 'medium',
        frequencyLabel: '中频',
        title: '用户在查看隐私条款时停留时间长',
        description: '用户在隐私条款页面停留时间较长，表现出对隐私问题的关注。',
        quote: '我想知道我的数据会不会被泄露。',
        interviewCount: 4,
        impactScore: 64,
        avatar: ['G', 'H']
      }
    ]
  },

  onLoad() {
    console.log('洞察结果页加载')
  },

  // 切换筛选
  onFilterTap(e) {
    const filterKey = e.currentTarget.dataset.key
    this.setData({ activeFilter: filterKey })
  },

  // 生成报告
  onGenerateReport() {
    wx.showToast({
      title: '报告生成中',
      icon: 'loading'
    })
  },

  // 点击洞察卡片
  onInsightTap(e) {
    const insightId = e.currentTarget.dataset.id
    wx.navigateTo({
      url: `/pages/project-detail/project-detail?id=${insightId}`
    })
  }
})
