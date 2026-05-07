# Performance Budgets

These are hard targets, not aspirations. Check before merging any page or asset change.

## Budgets

| Metric | Mobile | Desktop |
|---|---|---|
| Lighthouse Performance | ≥ 95 | 100 |
| LCP (Largest Contentful Paint) | < 1.5s (4G) | — |
| CLS (Cumulative Layout Shift) | < 0.05 | < 0.05 |
| Total initial page weight | < 500KB | < 500KB |
| Render-blocking JS on homepage | 0 | 0 |

Hero imagery is excluded from the 500KB weight budget and optimised separately (AVIF + WebP, appropriate `sizes`, lazy below fold, eager above).

## How we hit them

### Fonts
- Self-hosted WOFF2 only — no Google Fonts CDN round-trip
- `font-display: swap` on every `@font-face`
- Only the weights we actually use are loaded:
  - Fraunces 700 (headers/display)
  - Inter 300 (body)
  - Inter 500 (nav, labels, emphasis)
- `<link rel="preload" as="font">` for the two above-fold fonts (Fraunces 700, Inter 300)
- No italic variants unless copy explicitly requires them

### Images
- All images via Astro's `<Image>` component — never raw `<img>` tags
- Always supply `width`, `height`, and `alt`
- Output format: AVIF with WebP fallback (Astro handles this automatically)
- Above-fold images: `loading="eager"` + `fetchpriority="high"`
- Everything below the fold: `loading="lazy"`

### JavaScript
- Zero client-side JS on the homepage by default (Astro's default — preserve it)
- `client:*` directives only when a component genuinely requires interactivity
- No analytics or third-party scripts that block rendering

### CSS
- One global stylesheet, inlined into `<head>` for critical styles where practical
- No CSS-in-JS, no runtime style injection

## How to measure

```bash
# Build first — Lighthouse should run against the production build
npm run build && npm run preview

# Then run Lighthouse CLI or PageSpeed Insights against the preview URL
npx lighthouse http://localhost:4321 --preset=perf --form-factor=mobile --throttling-method=simulate
```

Cloudflare Pages preview URLs can be tested with PageSpeed Insights before merging to production.
