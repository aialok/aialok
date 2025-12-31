// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	site: 'https://example.com',
	integrations: [mdx(), sitemap()],
	
	// Performance optimizations
	compressHTML: true,
	
	build: {
		// Inline small assets
		inlineStylesheets: 'auto',
	},
	
	vite: {
		build: {
			// Better code splitting
			cssCodeSplit: true,
			// Minify output
			minify: 'esbuild',
			// Target modern browsers
			target: 'es2020',
		},
		optimizeDeps: {
			exclude: ['globe.gl']
		}
	}
});
