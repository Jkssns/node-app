import {
    createRouter,
    createWebHistory,
    createWebHashHistory,
} from 'vue-router'
import Resume from '@/views/Resume.vue'
import test from '@/views/test.vue'

export const routes:any = [
    {
        path: '/',
        redirect: '/test',
    },
    {
        path: '/resume',
        component: Resume,
    },
    {
        path: '/test',
        component: () => import('@/views/test.vue'),
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    // history: createWebHistory(),
    routes,
    // scrollBehavior(to, from, savedPosition) {
    //     return {
    //       el: document.getElementById('globalContainer'),
    //       top: 0,
    //     }
    // },
})


export default router
