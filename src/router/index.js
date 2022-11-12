import {createRouter, createWebHistory} from 'vue-router'
import addPermissionGuard from "@/router/permission-guard";
import Layout from '@/components/layout/Layout.vue'

export const constantRoutes = [
    {
        path: '/',
        component: Layout,
        redirect: '/workbench',
        meta: {
            title: '工作台',
            affix: true
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
                meta: {title: '基础列表', icon: 'dashboard'}
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
                meta: {title: '404页面', icon: 'dashboard'}
            }
        ]
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('@/views/login/login.vue'),
    }
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: constantRoutes
})
addPermissionGuard(router);
export default router
