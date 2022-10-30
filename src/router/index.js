import {createRouter, createWebHistory} from 'vue-router'
import Layout from '@/components/layout/Layout.vue'

export const constantRoutes = [
    {
        path: '/',
        component: Layout,
        redirect: '/workbench',
        meta: {
            title: '工作台',
            alwaysShowDirectory: true
        },
        children: [
            {
                path: 'workbench',
                name: 'workbench',
                component: () => import('@/views/workbench/workbench.vue'),
                meta: {title: '工作台', icon: 'dashboard', affix: true}
            }
        ]
    },
    {
        path: '/table',
        component: Layout,
        meta: {title: '表格', alwaysShowDirectory: true},
        children: [
            {
                path: 'basic-table',
                name: 'basic-table',
                component: () => import('@/views/table/basic-table.vue'),
                meta: {title: '基础列表', icon: 'dashboard', affix: true}
            }
        ]
    },
    {
        path: '/error',
        component: Layout,
        meta: {title: '错误页面'},
        children: [
            {
                path: '404',
                name: '404',
                component: () => import('@/views/error/404.vue'),
                meta: {title: '404页面', icon: 'dashboard', affix: true}
            }
        ]
    }
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: constantRoutes
})

export default router
