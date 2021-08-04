const dashboard = () =>import ( '../components/dashboard.vue')

export default [
    {
        path: '/home',
        redirect:'/home/dashboard'
    },
    {
        path: '/home/dashboard',
        component: dashboard,
        name: 'dashboard',
    },
]
