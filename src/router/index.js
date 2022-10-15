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
                    component: () => import('@/views/workbench/workbench.vue'),
                    name: 'workbench',
                    meta: {title: '工作台', icon: 'dashboard', affix: true}
                }
            ]
        }
    ]
})

export default router
