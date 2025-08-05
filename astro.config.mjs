// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://lucianocabrales.vercel.app',
	compressHTML: true,
	integrations: [
		mdx(), 
		sitemap({
			changefreq: 'weekly',
			priority: 0.7,
			lastmod: new Date(),
			customPages: [
				'https://lucianocabrales.vercel.app/',
				'https://lucianocabrales.vercel.app/sobre-mi',
				'https://lucianocabrales.vercel.app/experiencia',
				'https://lucianocabrales.vercel.app/proyectos',
				'https://lucianocabrales.vercel.app/blog',
				'https://lucianocabrales.vercel.app/contacto'
			],
			filter: (page) => !page.includes('/404')
		})
	],
	vite: {
		server: {
			host: true,
			allowedHosts: [],
		}
	},
	build: {
    	inlineStylesheets: 'auto'
  	}
});