Page({
  data: {
    searchValue: '',
    filterText: '最近查看',
    projects: [
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
      },
      {
        id: 3,
        name: 'SaaS 行业专家深度访谈',
        description: '与行业专家深入探讨 SaaS 产品发展趋势',
        status: 'completed',
        statusText: '已完成',
        progress: 100,
        interviewCount: 6,
        date: '2024-04-20',
        icon: 'expert'
      },
      {
        id: 4,
        name: '线下门店用户体验调研',
        description: '调研线下门店的用户体验和购物行为',
        status: 'draft',
        statusText: '草稿',
        progress: 0,
        interviewCount: 10,
        date: '2024-04-15',
        icon: 'store'
      }
    ]
  },

  onLoad() {
    console.log('项目列表页加载')
  },

  onShow() {
    // 刷新项目列表
  },

  // 搜索输入
  onSearchInput(e) {
    this.setData({
      searchValue: e.detail.value
    })
  },

  // 筛选下拉
  onFilterTap() {
    const filterOptions = ['最近查看', '最近创建', '名称排序']
    wx.showActionSheet({
      itemList: filterOptions,
      success: (res) => {
        this.setData({
          filterText: filterOptions[res.tapIndex]
        })
      }
    })
  },

  // 进入项目详情
  onProjectTap(e) {
    const projectId = e.currentTarget.dataset.id
    wx.navigateTo({
      url: `/pages/project-detail/project-detail?id=${projectId}`
    })
  },

  // 创建新项目
  onCreateProject() {
    const createOptions = ['录音创建', '导入文件', '导入问卷', '文字输入', '对话式创建']
    wx.showActionSheet({
      itemList: createOptions,
      success: (res) => {
        const option = createOptions[res.tapIndex]
        if (option === '录音创建') {
          wx.navigateTo({
            url: '/pages/recording/recording'
          })
        } else if (option === '导入问卷') {
          wx.navigateTo({
            url: '/pages/questionnaire-import/questionnaire-import'
          })
        } else if (option === '对话式创建') {
          wx.navigateTo({
            url: '/pages/chat-create/chat-create'
          })
        } else {
          wx.showToast({
            title: '功能开发中',
            icon: 'none'
          })
        }
      }
    })
  },

  // 项目左滑删除
  onProjectDelete(e) {
    const projectId = e.currentTarget.dataset.id
    wx.showModal({
      title: '确认删除',
      content: '确定要删除这个项目吗？',
      confirmColor: '#FF3B30',
      success: (res) => {
        if (res.confirm) {
          wx.showToast({
            title: '已删除',
            icon: 'success'
          })
        }
      }
    })
  }
})
