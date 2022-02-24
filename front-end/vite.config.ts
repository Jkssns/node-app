import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path';

function _resolve(dir) {
	return resolve(__dirname, dir);
}

// https://vitejs.dev/config/
export default ({mode}) => {
	return defineConfig({
		base: mode === 'development' ? './' : './node-app/',
		plugins: [
			vue(),
		],
		resolve: {
			alias: {
				"@": _resolve("src"),
				'@assets': _resolve('./src/assets/images'),
			},
		},
		server: {
			port: 8080,
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







