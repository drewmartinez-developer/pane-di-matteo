// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://panedimatteo.com',
  output: 'static',
  image: {
    service: { entrypoint: 'astro/assets/services/sharp' },
    // Default formats for Astro's <Image> component — AVIF first, WebP fallback
    formats: ['avif', 'webp'],
    // Allow Cloudflare CDN origin for any remote images (e.g. Google Maps embed)
    remotePatterns: [],
  },
  compressHTML: true,
});
