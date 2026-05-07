// @ts-check
import { defineConfig } from 'astro/config';

import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  site: 'https://panedimatteo.com.au',
  output: 'static',

  image: {
    service: { entrypoint: 'astro/assets/services/sharp' },
    // Default formats for Astro's <Image> component — AVIF first, WebP fallback
    formats: ['avif', 'webp'],
    // Allow Cloudflare CDN origin for any remote images (e.g. Google Maps embed)
    remotePatterns: [],
  },

  compressHTML: true,
  adapter: cloudflare(),
});