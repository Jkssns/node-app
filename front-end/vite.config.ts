import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		vue(),
	],
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "./src"),
			'@assets': path.resolve(__dirname, 'src/assets/images'),
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






