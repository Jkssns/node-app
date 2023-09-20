import Resume from '@/views/Resume.vue'

export const routes:any = [
    {
        path: '/',
        redirect: '/screenshot',
    },
    {
        path: '/test',
        component: () => import('@/views/test.vue'),
    },
    {
        path: '/face',
        component: () => import('@/views/Face.vue'),
    },
    {
        path: '/screenshot',
        component: () => import ('@/views/Screenshot.vue'),
    },
]

// const router = createRouter({
//     history: createWebHashHistory(),
//     // history: createWebHistory(),
//     routes,
//     // scrollBehavior(to, from, savedPosition) {
//     //     return {
//     //       el: document.getElementById('globalContainer'),
//     //       top: 0,
//     //     }
//     // },
// })


// export default router
