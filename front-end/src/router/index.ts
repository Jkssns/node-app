import {
    createRouter,
    createWebHistory,
} from 'vue-router'

const routes = [
    {
        path: '/',
        component: () => import('@/views/Home.vue'),
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    // scrollBehavior(to, from, savedPosition) {
    //     return {
    //       el: document.getElementById('globalContainer'),
    //       top: 0,
    //     }
    // },
})


export default router
