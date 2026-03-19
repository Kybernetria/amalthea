# Amalthea Visual Cleanup — TODO

## Phase 1: Strip the Noise ✅
- [x] Kill `corner-fold`, `organic-radius`, `organic-radius-alt` — use clean `rounded-lg`
- [x] Kill `grain-overlay` pseudo-element
- [x] Tone down paper texture (opacity 0.22 → 0.12)
- [x] Simplify `frame-photo` — no rotation, clean shadow
- [x] Remove `border-dashed` from event cards — clean `border-l-4` only
- [x] Simplify card hover — subtle translateY(-2px) + soft shadow
- [x] Remove pulsing red dot from footer

## Phase 2: Typography Cleanup ✅
- [x] Cut fonts from 6 → 3: Playfair Display, Libre Baskerville, Archivo Narrow
- [x] Dropped Special Elite, Bebas Neue, Courier Prime
- [x] Replaced all `.typewriter` → `font-heading` (Archivo Narrow) with tracking
- [x] Updated tailwind.config (removed typewriter, accent font families)
- [x] Added `spacing.18` to tailwind for navbar height

## Phase 3: Layout & Spacing Rhythm ✅
- [x] Standardized section padding: `py-20 md:py-28` everywhere
- [x] Changed Opening Times from jarring charcoal → light parchment bg
- [x] Removed Swish from Opening Times (now only hero + footer)
- [x] Clean section transitions — no mid-page bg color switches
- [x] Added `border-t border-driftwood/10` as subtle divider

## Phase 4: Language — EN primary, SV secondary ✅
- [x] EN/SV toggle in navbar (desktop + mobile)
- [x] Language preference saved to localStorage
- [x] `data-lang` attribute on `<html>` with CSS show/hide
- [x] All UI text has `lang-en` / `lang-sv` spans
- [x] English is default, Swedish toggleable
- [x] Desktop toggle says "Svenska" / "English"
- [x] Lang persists across View Transitions

## Phase 5: Hero Glow-Up ✅
- [x] Stripped hero to essentials: headline, one-liner, two CTAs
- [x] Generated WebP versions (145K full, 57K mobile — down from 239K)
- [x] `<picture>` element with WebP + JPEG fallback + mobile srcset
- [x] Preloaded hero image in `<head>` with `fetchpriority="high"`

## Phase 6: Component Polish ✅
- [x] Blog "Read →" always visible with translate-x hover
- [x] Merged Events + Calendar into one page with List/Calendar toggle
- [x] Removed standalone /calendar/ route
- [x] Hours popover shows on hover (CSS `group-hover`)
- [x] Calendar has month navigation (prev/next)
- [x] Calendar event pills larger (text-xs, px-2 py-1)
- [x] Footer simplified to 2 columns, newsletter removed

## Phase 7: Performance & Accessibility ✅
- [x] Replaced GSAP with CSS transitions + IntersectionObserver
- [x] Removed `gsap` from package.json
- [x] Added `:focus-visible` styles globally
- [x] Custom 404 page (bilingual)
- [x] Audited contrast ratios — all key combos pass WCAG AA (4.5:1+)
- [x] Bumped low-contrast footer text from /40 → /50

## Phase 8: Final Touches ✅
- [x] Astro View Transitions (`ClientRouter`) with fade animation on main content
- [x] Navbar persists across page transitions (`transition:persist`)
- [x] Language restored after view transition swaps (`astro:after-swap`)
- [x] Final spacing/alignment pass

## Done! 🎉
All phases complete. 12 pages, clean build in ~1.7s.
