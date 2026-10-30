# Ujjwal Bhatt — Developer Portfolio

Responsive portfolio built with Next.js App Router, TypeScript, Tailwind CSS, and Lucide icons.

## Requirements
- Node.js 20.9 or newer
- npm
- VS Code (recommended)

## Run locally
1. Extract this ZIP and open the folder in VS Code.
2. Open the integrated terminal.
3. Run `npm install`.
4. Run `npm run dev`.
5. Open http://localhost:3000.

## Before publishing
- Add your approved resume PDF to `public/Ujjwal-Bhatt-Resume.pdf`.
- Review project descriptions and verify that every detail reflects your actual contribution.
- Add only real, approved demo/repository links and sanitized screenshots.
- Replace metadata's placeholder domain with your real domain after deployment.
- Do not publish client secrets, private source code, customer data, internal dashboards, or API keys.

## Deploy to Vercel
1. Push the project to a GitHub repository.
2. Sign in to Vercel with GitHub and import the repository.
3. Keep the standard Next.js build settings and deploy.
4. Test the live site on desktop and mobile.

## Structure
- `app/page.tsx` — home page
- `app/projects/[slug]/page.tsx` — dynamic case studies
- `app/globals.css` — responsive visual design
- `components/` — reusable site components
- `lib/projects.ts` — project content
- `public/` — resume and approved assets

## Accuracy and privacy
The starter avoids invented metrics, fake testimonials, and fabricated project URLs. Add only public or approved project details. Project write-ups are intentionally high-level; update them with specific, verifiable technical decisions before publishing.
