// 菜单 顶栏
export default [
  { path: '/index', title: '首页', icon: 'home' },
  {
      title: '资源管理',
      icon: 'folder-o',
      children: [
          { path: '/resource/document', title: '文档管理' },
          { path: '/resource/video', title: '视频管理' },
          { path: '/resource/test', title: '考题管理' }
        ]
    },
    {
        title: '用户管理',
        icon: 'folder-o',
        children: [
            { path: '/user/information', title: '信息管理' }
        ]
    }
]
