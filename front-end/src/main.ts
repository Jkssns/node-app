import { createApp } from 'vue'
import { routes } from './router/index'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import '@/assets/css/reset.css'
import App from './App.vue'
import { ViteSSG } from 'vite-ssg'

// `export const createApp` is required instead of the original `createApp(App).mount('#app')`
export const createApp: any = ViteSSG(
	// the root component
	App,
	// vue-router options
	{
		routes,
	},
	// function to have custom setups
	({ app, router, routes, isClient, initialState }) => {
		// install plugins etc.
		app.use(router)
		app.use(Antd)
	},
)

console.log('createApp::: ', createApp);

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

