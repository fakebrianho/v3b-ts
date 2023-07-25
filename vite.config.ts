import { defineConfig } from 'vite'
import glsl from 'vite-plugin-glsl'
import { resolve, dirname } from 'pathe'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))

export default defineConfig({
	resolve: {
		alias: {
			'/@': resolve(__dirname, './src'),
		},
	},
	plugins: [glsl()],
})
