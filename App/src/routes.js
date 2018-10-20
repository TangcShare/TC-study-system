import  Register  from './containers/user/register'
import  TabBarExample  from './components/tabBar'
let routes = [
    {
        path: '/',
        component: TabBarExample,
    },
    {
        path: '/register',
        component: Register,
    }
]
export default routes ;