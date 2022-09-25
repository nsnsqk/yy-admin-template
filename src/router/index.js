import {createRouter, createWebHistory} from 'vue-router'
import Layout from '@/components/layout/index.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            component: Layout,
            redirect: '/dashboard',
            children: [
                {
                    path: 'dashboard',
                    component: () => import('@/views/dashboard/index.vue'),
                    name: 'Dashboard',
                    meta: {title: 'Dashboard', icon: 'dashboard', affix: true}
                }
            ]
        }
    ]
})

export default router
