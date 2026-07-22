<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

<!-- BEGIN:nexshift-theme-rules -->
# NexShift Theme & Styling Guidelines

Whenever creating or modifying components for this project, STRICTLY adhere to the following light theme aesthetic (based on landing page sections):

### 1. Typography & Colors
- **Main Headings**: Use solid brand blue: `text-[#154880] font-sans font-bold`. Add `tracking-tight` and `drop-shadow-sm` for large headers (e.g., `text-4xl md:text-5xl lg:text-6xl`).
- **Subheadings & Accents**: Use the brand gradient: `text-transparent bg-clip-text bg-gradient-to-r from-[#0D7A95] via-[#14A9D6] to-[#2E73B8]`.
- **Body Text**: Use `text-gray-700 font-medium` for high legibility, or `text-gray-500` for secondary descriptions.
- **Small Tags/Labels**: Use `text-[10px] md:text-xs font-bold uppercase tracking-widest text-gray-500` (or brand gradient for emphasis).
- **Hover/Interactive Accents**: Use the vivid teal `#0D7A95` or `#00a3d0`. Primary buttons/links can transition to `#14A9D6`.
- **Font Family**: Ensure primary text relies on `font-sans` (Geist Sans).

### 2. Layout & Backgrounds
- **Global Background**: The primary background is a very light `#FAFAFA`. Use gradients like `bg-gradient-to-t from-[#FAFAFA] via-[#FAFAFA]/80 to-transparent` for smooth section transitions.
- **Card Backgrounds**: Use `bg-white/80 backdrop-blur-md` for frosted glass cards. For dark standout cards, use `bg-[#154880] text-white`.
- **Borders & Dividers**: Use soft borders like `border-gray-200` or `border-gray-300`. For pill badges, use `bg-[#e5e7eb] border border-[#4C1D95]/30`.
- **Ambient Glows**: Use large blurred circles behind content to add depth.
  - Purple/Pink: `bg-[#4C1D95]/5 blur-[150px]` or `bg-[#4C1D95]/10 blur-[120px]`
  - White: `bg-white/40 blur-[150px]`
  - Teal/Blue: `bg-[#00a3d0]/10 blur-[140px]` or `bg-[#00a3d0]/8 blur-[180px]`
- **Special Decorative Elements**: Occasional striking accents can be used, like a vivid green diagonal strip (`bg-gradient-to-r from-transparent via-[#39FF14] to-transparent`).
- **Shadows**: Use `shadow-sm` or `shadow-md` on cards, escalating to deep, slightly colored shadows on hover (e.g., `hover:shadow-2xl hover:shadow-[#0D7A95]/10 hover:-translate-y-1.5`).
<!-- END:nexshift-theme-rules -->
