import layoutHeaderAside from '@/layout/header-aside'

const meta = { requiresAuth: true }

export default {
    path: '/user',
    name: 'user',
    meta,
    redirect: { name: 'user' },
    component: layoutHeaderAside,
    children: (pre => [
        { path: 'information', name: `${pre}information`, component: () => import('@/pages/user/information'), meta: { meta, title: '信息管理' } }
    ])('user-')
}
