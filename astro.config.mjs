// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://example.com',
	compressHTML: true,
	integrations: [mdx(), sitemap()],
	vite: {
		server: {
			host: true,
			allowedHosts: ['warenes.duckdns.org'],
		}
	},
	build: {
    	inlineStylesheets: 'auto'
  	}
});