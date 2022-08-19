import {defineConfig} from 'astro/config';
import react from '@astrojs/react';
import sitemap from "@astrojs/sitemap";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
    integrations: [
        react(), // Enable React for the Algolia search component.
        sitemap(),
        mdx()
    ],
    site: `https://lucanerlich.com`
});
