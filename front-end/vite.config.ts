import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
const path = require('path')

function _resolve(dir) {
  return path.resolve(__dirname, dir);
}

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [vue()],
	resolve: {
		alias: {
		  '@': _resolve('src'),
		  '@assets': _resolve('src/assets'),
		},
	  },
	server: {
		port: 8080,
		host: '0.0.0.0',
		proxy: {
			'/api': {
				target: 'http://localhost:3000',
				changeOrigin: true,
				rewrite: (path) => path.replace(/^\/api/, '')
			},
		}
	}
})






