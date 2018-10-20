import layoutHeaderAside from '@/layout/header-aside'

const meta = { requiresAuth: true }

export default {
    path: '/resource',
        name: 'resource',
    meta,
    redirect: { name: 'resource-document' },
    component: layoutHeaderAside,
        children: (pre => [
    { path: 'document', name: `${pre}document`, component: () => import('@/pages/resource/document'), meta: { meta, title: '文档管理' } },
    { path: 'video', name: `${pre}video`, component: () => import('@/pages/resource/video'), meta: { meta, title: '视频管理' } },
    { path: 'test', name: `${pre}test`, component: () => import('@/pages/resource/test'), meta: { meta, title: '考题管理' } }
])('resource-')
}
