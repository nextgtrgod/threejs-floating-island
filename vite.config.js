import { defineConfig } from 'vite'

export default defineConfig({
	root: './src',
	server: {
		port: 8080,
	},
	build: {
		outDir: '../dist',
		emptyOutDir: true,
	},
	publicDir: '../public',
})