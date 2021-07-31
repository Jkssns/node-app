import { createApp } from 'vue'
import router from './router/index'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';

import App from './App.vue'
import server from '@/server/server.ts'

const app:any = createApp(App)

app.config.globalProperties.$serve = server
app.use(router)

app.mount('#app')

// import i18n from '@/language/index.js'
// import storage from '@/utils/storage.js'
// import config from '@/config.js'
// import store from '@/store/index'
// 

/* 插件 */
// app.use(i18n)

// /* 全局方法|参数 */
// app.config.globalProperties.$language = reactive({ 
//     val: storage.get('country')?.language || 'zh'   // 语言
// }) 
// app.config.globalProperties.$ls = storage   // 本地存储
// app.config.globalProperties.$config = config    // 常量x
app.config.globalProperties.$server = server    // store
// app.config.globalProperties.$store = store    // store

