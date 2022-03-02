import {
    createRouter,
    createWebHistory,
    createWebHashHistory,
} from 'vue-router'
import Resume from '@/views/Resume.vue'

export const routes:any = [
    {
        path: '/',
        redirect: '/resume',
    },
    {
        path: '/resume',
        component: Resume,
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
