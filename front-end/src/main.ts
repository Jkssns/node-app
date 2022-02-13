import { createApp } from 'vue'
import router from './router/index'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import '@/assets/css/reset.css'

import App from './App.vue'

const app:any = createApp(App)

app.use(router)

app.mount('#app')

// import storage from '@/utils/storage.js'
// import config from '@/config.js'
// import store from '@/store/index'

/* 插件 */

// /* 全局方法|参数 */
// app.config.globalProperties.$language = reactive({ 
//     val: storage.get('country')?.language || 'zh'   // 语言
// }) 
// app.config.globalProperties.$ls = storage   // 本地存储
// app.config.globalProperties.$config = config    // 常量x
// app.config.globalProperties.$store = store    // store

