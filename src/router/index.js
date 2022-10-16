import {createRouter, createWebHistory} from 'vue-router'
import Layout from '@/components/layout/Layout.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            component: Layout,
            redirect: '/workbench',
            children: [
                {
                    path: 'workbench',
                    name: 'workbench',
                    component: () => import('@/views/workbench/workbench.vue'),
                    meta: {title: '工作台', icon: 'dashboard', affix: true}
                },
                {
                    path: 'table',
                    name: 'table',
                    component: () => import('@/views/table/table.vue'),
                    meta: {title: '基础列表', icon: 'dashboard', affix: true}
                },
                {
                    path: 'menu-nesting',
                    name: 'menu-nesting1',
                    component: () => import('@/views/table/table.vue'),
                    meta: {title: '多级菜单', icon: 'dashboard', affix: true}
                }
            ]
        }
    ]
})

export default router
