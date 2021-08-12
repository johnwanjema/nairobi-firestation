const dashboard = () =>import ( '../components/dashboard.vue')
const fires = () =>import ( '../components/fires.vue')
const fs1 = () =>import ( '../components/fs1.vue')
const addFs1 = () =>import ( '../components/addFs1.vue')

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
    {
        path: '/home/fires',
        component: fires,
        name: 'fires',
    },
    {
        path: '/home/fs1',
        component: fs1,
        name: 'fs1',
    },
    {
        path: '/home/addFs1/:fireId',
        component: addFs1,
        name: 'addFs1',
        props:true
    },
]
