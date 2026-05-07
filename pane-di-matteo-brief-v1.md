# Pane di Matteo — Website Brief

**Version 1.0 · May 2026**

---

## Overview

Rebuild the existing WordPress website (currently down) as a modern, fast, mobile-first, content-led site for Pane di Matteo — a boutique Italian artisan bakery in Highton, Geelong. The new site will be a static site built with Astro and hosted on Cloudflare Pages: fast, easy to update, and low-maintenance.

---

## The bakery

- **Pane di Matteo** — *"Bread by Matt"* — boutique Italian artisan bakery & pasticceria
- Founded 2014 by Matt Santoro, after 14 years apprenticing in his father's wholesale bakery — building on 40+ years of family bread-making
- 12 Porter Ave, Highton VIC 3216
- Phone: (03) 5245 7492
- Hours (all *unless sold out earlier*):
  - Mon–Fri  7:00am – 1:00pm
  - Sat       7:30am – 12:30pm
  - Sun       8:30am – 11:30am
- Google rating: 4.7

---

## What they sell

| Category | Items |
|---|---|
| **Bread** | Sourdough, ciabatta, baguettes, focaccia, rye, spelt, more |
| **Pastries** | Croissants (plain, chocolate, almond), cannoli, Nutella lobsters, biscotti |
| **Coffee** | Italian beans, full espresso menu, alternative milks |
| **Lunch** | Focaccia with toppings, baguettes, panini |
| **Seasonal** | Hot cross buns (Easter), Christmas tarts (Christmas), more being added. Pre-order recommended — sells out fast |
| **Pantry** | Small grocery: eggs, drinks, sauces, cups, Bialetti cafetières. For yourself or as gifts |

---

## Goals (in priority order)

1. **Be discoverable on mobile.** Most traffic is mobile; site is designed mobile-first. Rank well for "bread / bakery / best coffee in Highton / Geelong."
2. **Look as good as the product.** The site is an extension of the shop, not a brochure.
3. **Set seasonal expectations.** Hot cross buns, Christmas tarts, future specials surfaced clearly with pre-order CTAs.
4. **Easy to update hours and specials.** Those are the two things that change.
5. **Set-and-forget infrastructure.** No plugins, no theme upgrades, no breakage.

---

## Audience

- Locals in Highton & Belmont
- Wider Geelong searching for bread, pastries, or coffee
- Visiting customers checking hours or seasonal drops before making the trip

---

## Brand & voice

- **Heritage:** Italian, family craft. Bread-making goes back 40+ years through Matt's dad. 14 years apprenticing before founding Pane di Matteo in 2014.
- **Vibe:** *Elegant industrial.* Architectural and considered, not warm-and-fuzzy. Quiet confidence.
- **Voice:** Short, declarative, occasional Italian. *"Pane, fatto a mano."* · *"Sells out by 11 — come early."*

---

## Design direction (locked)

**Anchor concept: *Hard surfaces, warm bread.***

The shop tells the whole story: black steel framed shopfront, polished concrete floor, white painted brick walls, walnut cubby shelves, glass cases. The architecture is dark, hard, and considered. The bread is the only warm thing in the room — and that's the point. The site mirrors that.

This is the deliberate inverse of Born & Bread (peach background, lowercase, soft, friendly). Pane di Matteo is structured and architectural; the bread does the warming.

### Palette
- **Primary surfaces:** Deep charcoal / near-black — anchored by the logo
- **Secondary:** Warm off-white — the painted brick
- **Mid-tone:** Walnut brown — the shelving
- **Accent / warmth:** Comes entirely from the bread photography. No decorative color.

### Typography
- **Display:** **Fraunces** (free, characterful, condensed weights). All-caps headers — echoing the logo and differentiating from Born & Bread's lowercase.
- **Body:** **Inter** — clean, neutral, excellent at small sizes.

### Imagery
- Full-bleed, generous margins, magazine pacing
- Shop textures (concrete, brick, steel, walnut, glass) carry the visual identity. No CSS-faked textures.
- **Hero:** strong candidate is a short video loop — there are 5 .MOV clips in the Drive that could anchor a Lune-style hero
- **Logo lockups:** round (primary, like the shop sign), rectangle (secondary, for stickers/merch)

### Motion
- Minimal. Gentle fades only. Fast loads matter more than tricks.

### Mobile-first
- Single-column layouts at base size (~380px), large tap targets
- Hours and address one tap from anywhere
- All design decisions tested at mobile size first, then scaled up

---

## Sitemap (6 pages)

1. **Home** — hero (video loop or moody bread shot), one-paragraph intro, today's highlights, hours/location/phone, links onward
2. **Menu** — bread / pastries / coffee / lunch / seasonal / pantry. Photos + short descriptions. No prices.
3. **Our Story** — Matt, the family bakery (40+ years), the 14-year apprenticeship, why Pane di Matteo exists
4. **Stories / News** — built into the site, lightly populated. Future home for seasonal pre-order announcements (*"Christmas tarts now open for orders"*) even without editorial posts initially.
5. **Visit** — address, hours, embedded map, phone, parking notes, *"we sell out — come early"* honesty
6. **Gallery** — simple photo grid

**Out of scope:** contact form (phone is enough), online ordering, reservations.

---

## Tech stack

| Layer | Choice | Why |
|---|---|---|
| Framework | **Astro** | Static site generator built for content sites. ~100/100 Lighthouse out of the box. Content as markdown files. |
| Hosting | **Cloudflare Pages** | Free, global CDN, fast deploys, generous free tier. |
| Domain | Keep `panedimatteo.com.au` at **Crazy Domains** | DNS switch at launch — no transfer needed. |
| CMS | **None** — markdown in Git | Updates via GitHub web UI; no terminal needed for content changes. |
| Build tool | **Claude Code** (Drew's terminal) | AI-assisted build; Drew directs in plain English, reviews output. |

---

## Asset inventory (Google Drive)

| Asset | Status |
|---|---|
| Logo (round + rectangle lockups) | ✅ Provided |
| Shop photos | ✅ 3 photos (shopfront, counter, bread shelves) |
| Final product photos | ✅ 11 photos |
| Bakery & making | ✅ ~7 photos + 5 video clips (.MOV) |
| Story copy | 🟡 Starter paragraph from old site — to be expanded with Matt |

---

## Open with Matt

- Beyond hot cross buns and Christmas tarts, what other seasonal items are coming?
- Newsletter signup for seasonal pre-orders? (Low effort, high value.)
- Other social channels besides Instagram & Facebook?
- Final voice/tone check on draft copy

---

## Build phases

### Phase 1 — Foundation (proof of concept)
- Astro project scaffolded
- Design tokens locked (palette, typography, spacing)
- Homepage built end-to-end: hero, intro, today's highlights, hours, links
- Deployed to a Cloudflare Pages preview URL for Drew + Matt to review

### Phase 2 — Build out
- Menu, Visit, Story, Gallery, Stories pages
- Photography processed and integrated
- SEO, schema, sitemap, robots
- Mobile testing

### Phase 3 — Launch
- DNS cutover from WordPress to Cloudflare Pages
- Final QA on production domain
- Hand-off doc: how Drew/Matt update hours, post a seasonal announcement
