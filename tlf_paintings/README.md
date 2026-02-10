# TLF Paintings — React + Vite

TLF Paintings is a responsive React single-page site built with Vite. It showcases residential and commercial painting projects and includes a contact form (EmailJS) for quotes and inquiries.

## Tech stack

- React (JSX)
- Vite (dev server and build)
- Tailwind / custom CSS
- Bootstrap utilities
- EmailJS for contact form

## Key files

- `src/main.jsx` — app entry
- `src/App.jsx` — root component
- `src/layout/TopNav.jsx`, `src/layout/Footer.jsx` — navigation and footer
- `src/components/*` — Banner, Services, Gallery, GalleryCard, Contact
- `src/styles/*` — component styles

## Setup

Install dependencies:

```bash
npm install
```

Start dev server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview production build:

```bash
npm run preview
```

## Environment variables

Create a `.env.local` with your EmailJS keys (an example is included in the repo):

```
VITE_EMAILJS_PUBLIC_KEY="your_public_key"
VITE_EMAILJS_SERVICE_KEY="your_service_id"
VITE_EMAILJS_TEMPLATE_KEY="your_template_id"
```

## Accessibility & SEO

- WCAG AA improvements were added: semantic HTML, ARIA labels, keyboard focus states, sufficient color contrast, form labels, live regions and `.sr-only` helper.
- SEO: `index.html` includes an improved title, meta description, Open Graph/Twitter tags, canonical link and JSON-LD LocalBusiness structured data. Replace placeholder URLs with your production domain.

## Contact form behavior

- Client-side validation for name, email, phone (required, `123-456-7890` format) and message length.
- Loading spinner shown on submit; submit button disabled while sending.
- Success and error responses presented in an accessible modal; auto-dismiss after 5s.

## Deployment

The site is ready for Vercel, Netlify, or similar static hosts. A `vercel --prod` command was used during development.

## Contributing

Fork and open a PR. Keep changes small and focused. If you want help adding per-route meta tags, a sitemap.xml, or `robots.txt`, I can add those next.
