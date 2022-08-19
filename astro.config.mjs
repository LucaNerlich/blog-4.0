import {defineConfig} from 'astro/config';
import preact from '@astrojs/preact';
import react from '@astrojs/react';
import sitemap from "@astrojs/sitemap";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
    integrations: [
        preact(),
        react(), // Enable React for the Algolia search component.
        sitemap(),
        mdx()
    ],
    site: `https://lucanerlich.com`
});
