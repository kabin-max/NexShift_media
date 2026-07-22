<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

<!-- BEGIN:nexshift-theme-rules -->
# NexShift Theme & Styling Guidelines

Whenever creating or modifying components for this project, STRICTLY adhere to the following light theme aesthetic (based on `AboutSection2.tsx`):

### 1. Typography & Colors
- **Main Headings**: Use solid brand blue: `text-[#154880] font-sans font-bold`.
- **Subheadings, Tags, and Accents**: Use the brand gradient: `text-transparent bg-clip-text bg-gradient-to-r from-[#0D7A95] via-[#14A9D6] to-[#2E73B8]`.
- **Body Text**: Use `text-gray-700 font-medium` for high legibility, or `text-gray-600` for secondary text.
- **Hover/Interactive Accents**: Use the vivid teal `#0D7A95` or `#00a3d0`.
- **Font Family**: Ensure primary text relies on `font-sans` (Geist Sans).

### 2. Layout & Backgrounds
- **Backgrounds**: The global background is a very light `#FAFAFA`. Components should generally use `bg-transparent` to let this shine through, or `bg-white/80 backdrop-blur-md` for frosted glass cards. DO NOT use `bg-black` or dark mode styling unless explicitly requested.
- **Borders & Dividers**: Use soft borders like `border-gray-200` or `border-gray-300`.
- **Ambient Glows**: Use subtle, large blurs for decorative glows (e.g., `bg-[#4C1D95]/5 blur-[150px]` or `bg-white/40 blur-[150px]`).
- **Shadows**: Use soft shadows like `shadow-sm` on cards, escalating to deep, slightly colored shadows on hover (e.g., `hover:shadow-2xl hover:shadow-[#0D7A95]/10 hover:-translate-y-1.5`).
<!-- END:nexshift-theme-rules -->
