import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path';

function _resolve(dir) {
	return resolve(__dirname, dir);
}

// https://vitejs.dev/config/
export default ({mode}) => {
	return defineConfig({
		base: '/',
		plugins: [
			vue(),
		],
		resolve: {
			alias: [
				{
					find: '@',
					replacement: _resolve('src')
				},
			]
		},
		server: {
			port: 5100,
			host: '0.0.0.0',
			proxy: {
				// '/api': {
				// 	target: 'http://localhost:3000',
				// 	changeOrigin: true,
				// 	rewrite: (path) => path.replace(/^\/api/, '')
				// },
			}
		}
	})
}







