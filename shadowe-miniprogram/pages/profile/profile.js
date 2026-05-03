Page({
  data: {
    userInfo: {
      avatarUrl: '',
      nickName: '用户',
      hasPro: true
    },
    stats: [
      { label: '项目数', value: '12', icon: 'folder' },
      { label: '访谈记录', value: '48', icon: 'file-text' },
      { label: '洞察发现', value: '156', icon: 'bulb' },
      { label: '分析时长', value: '32h', icon: 'clock' }
    ],
    menuItems: [
      { icon: 'gift', title: '价值回传', desc: '查看 AI 带来的价值', path: '' },
      { icon: 'cloud', title: '云空间', desc: '已用 2.3GB / 10GB', path: '' },
      { icon: 'team', title: '团队协作', desc: '3 人团队', path: '' },
      { icon: 'shield', title: '隐私与安全', desc: '', path: '' }
    ],
    settingsItems: [
      { icon: 'setting', title: '设置', path: '' },
      { icon: 'question', title: '帮助与反馈', path: '' },
      { icon: 'star', title: '评价我们', path: '' }
    ]
  },

  onLoad() {
    console.log('个人中心页加载')
    // 获取用户信息
    this.getUserInfo()
  },

  getUserInfo() {
    // 实际项目中应调用 wx.getUserProfile
    wx.getUserProfile({
      desc: '用于完善用户资料',
      success: (res) => {
        this.setData({
          userInfo: {
            avatarUrl: res.userInfo.avatarUrl,
            nickName: res.userInfo.nickName,
            hasPro: true
          }
        })
      },
      fail: () => {
        console.log('用户拒绝授权')
      }
    })
  },

  onAvatarClick() {
    wx.showToast({
      title: '点击头像',
      icon: 'none'
    })
  },

  onMenuItemTap(e) {
    const path = e.currentTarget.dataset.path
    if (path) {
      wx.navigateTo({ url: path })
    } else {
      wx.showToast({
        title: '功能开发中',
        icon: 'none'
      })
    }
  },

  onSettingsTap() {
    wx.showToast({
      title: '功能开发中',
      icon: 'none'
    })
  }
})
