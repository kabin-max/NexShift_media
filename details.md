# NexShift Website — Typography & Design Consistency Guide

---

## 🔤 Fonts in Use

| Role | Font | CSS Variable / Class | Where Used |
|------|------|----------------------|------------|
| **Logo / Brand Mark** | **Permanent Marker** (Google Font) | `--font-permanent-marker` / inline style | `AnimatedLogo.tsx`, `NavOverlay.tsx` header logo, `ContactSection.tsx` footer logo |
| **Primary Body / UI** | **Geist Sans** (Vercel) | `--font-geist-sans` / `font-sans` Tailwind class | All section headings and body copy |
| **Monospace** | **Geist Mono** (Vercel) | `--font-geist-mono` | Registered in layout — **not used anywhere yet** |

All three fonts are registered in `layout.tsx` and injected via className on `<html>`.

---

## 📐 Section Heading Style (h2) — Established Pattern

All section headings use the **exact same** Tailwind class string:

```html
<div className="text-center px-6 mb-12">
  <h2 className="font-sans font-bold text-white text-4xl md:text-5xl lg:text-6xl tracking-tight drop-shadow-xl">
    Section Title
  </h2>
</div>
```

| Property | Value |
|----------|-------|
| Font family | `font-sans` → Geist Sans |
| Weight | `font-bold` (700) |
| Color | `text-white` |
| Size (mobile) | `text-4xl` → 2.25rem |
| Size (tablet md) | `md:text-5xl` → 3rem |
| Size (desktop lg) | `lg:text-6xl` → 3.75rem |
| Letter spacing | `tracking-tight` |
| Shadow | `drop-shadow-xl` |
| Wrapper alignment | `text-center px-6 mb-12` |

### Components using this heading pattern

| Component | Heading Text |
|-----------|-------------|
| `AboutSection2.tsx` | "About Us" |
| `TrustedPartners.tsx` | "Trusted Partners" |
| `ClientsSection.tsx` | "Clients & Projects" |
| `ContactSection.tsx` | "Get in Touch" |

---

## 🏷️ Logo / Brand Mark Style (h1 — AnimatedLogo only)

Used **only** in `AnimatedLogo.tsx`. This is the hero brand mark, not a section heading.

```html
<motion.h1
  className="text-[7rem] sm:text-[10rem] md:text-[14rem] lg:text-[17rem]
             text-white tracking-tight drop-shadow-2xl
             whitespace-nowrap leading-none select-none"
  style={{ fontFamily: "var(--font-permanent-marker), cursive" }}
>
  XYX!
</motion.h1>
```

| Property | Value |
|----------|-------|
| Font | Permanent Marker (handwritten) |
| Sizes | 7rem → 10rem → 14rem → 17rem |
| Color | `text-white` |
| Letter spacing | `tracking-tight` |

Reused as **small logo** (text-2xl / text-3xl) in:
- `NavOverlay.tsx` header area
- `ContactSection.tsx` center CTA area

Always apply via: `style={{ fontFamily: "var(--font-permanent-marker), cursive" }}`

---

## 🧭 NavOverlay — Primary Link Style

Large navigation links in the full-screen overlay:

```html
className="text-5xl md:text-6xl lg:text-[5rem] font-bold tracking-tight transition-colors duration-300"
```

| State | Color |
|-------|-------|
| Active | `text-white hover:text-gray-300` |
| Inactive | `text-zinc-600 hover:text-white` |

---

## 🧭 NavOverlay — Secondary Link Style

Smaller category links beneath the primary links:

```html
className="flex items-center gap-2 text-xs md:text-sm tracking-[0.2em] font-medium text-zinc-400 hover:text-white transition-colors"
```

---

## ⚠️ Inconsistencies Found

### 1. Duplicate keyframe animations
`TrustedPartners.tsx` defines `scroll-left` and `scroll-right` inline in a `<style>` block.
These same animations are **already defined in `globals.css`**.
`ClientsSection.tsx` also defines its own `scroll-gallery` inline.

**Fix:** Remove inline `<style>` blocks. Use the global `.animate-scroll-left` and `.animate-scroll-right` classes from `globals.css`, or add `.animate-scroll-gallery` there.

---

### 2. `body` in `globals.css` falls back to Arial instead of Geist Sans

```css
/* Current — inconsistent */
body {
  font-family: Arial, Helvetica, sans-serif;
}

/* Should be */
body {
  font-family: var(--font-geist-sans), Arial, Helvetica, sans-serif;
}
```

---

### 3. `HeroSection.tsx` is empty — no heading or content

The section renders only a blank `<section>` wrapper. It should eventually follow the h2 pattern above.

---

### 4. `Geist Mono` is loaded but unused

`--font-geist-mono` adds to bundle size without benefit. Either:
- Use it for code snippets, small data labels, or version strings
- Remove it from `layout.tsx` to reduce load

---

## ✅ Rules to Keep the Site Consistent

### Rule 1: Section Headings (h2)
```tsx
<div className="text-center px-6 mb-12">
  <h2 className="font-sans font-bold text-white text-4xl md:text-5xl lg:text-6xl tracking-tight drop-shadow-xl">
    Section Title
  </h2>
</div>
```

### Rule 2: Logo / Brand Mark
```tsx
style={{ fontFamily: "var(--font-permanent-marker), cursive" }}
```

### Rule 3: Body / Paragraph Text
```tsx
className="text-zinc-300 text-base md:text-lg leading-relaxed"
```

### Rule 4: Small Labels / Meta Text (uppercase)
```tsx
className="text-[10px] tracking-[0.2em] uppercase font-bold text-white"
```

### Rule 5: Footer / Copyright
```tsx
className="text-zinc-500 text-xs tracking-wide"
```

### Rule 6: Animations — use global classes, not inline `<style>` blocks
Define all keyframes in `globals.css`. Use Tailwind classes or global CSS class names in components.

---

## 📁 Component File Index

| File | Purpose |
|------|---------|
| `layout.tsx` | Font registration (Permanent Marker, Geist Sans, Geist Mono) |
| `globals.css` | CSS variables, scroll keyframes |
| `page.tsx` | Root page, component assembly order |
| `AnimatedLogo.tsx` | Scroll-animated giant logo (Permanent Marker) |
| `Header.tsx` | Fixed top nav, hamburger button, "Get In Touch" CTA |
| `NavOverlay.tsx` | Full-screen overlay with primary + secondary nav links |
| `HeroSection.tsx` | Hero viewport (currently empty — needs content) |
| `AboutSection1.tsx` | Full-screen image with animated spinning badge |
| `AboutSection2.tsx` | Bio text + 4-photo scattered collage |
| `TrustedPartners.tsx` | Dual-row scrolling brand name marquee |
| `ClientsSection.tsx` | Client card image gallery marquee |
| `ContactSection.tsx` | Email CTA + footer copyright |
| `SocialIcons.tsx` | Reusable social icon component |
| `Background.tsx` | Static background layer |
