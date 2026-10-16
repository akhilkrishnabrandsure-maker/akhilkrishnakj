# Akhil Krishna — Premium Personal Portfolio Website

A production-grade personal portfolio website for **Akhil Krishna**, designed at the intersection of **Search Engine Optimization (SEO)**, **modern web engineering**, and **AI workflow automation**.

---

## 🚀 Key Highlights & Architectural Features

- **Dark Visual Identity**: Tailored dark palette (`#08090D`, `#0F1118`, `#141720`) with vibrant Lime (`#B7F34A`) and Cyan (`#63DDFD`) accents, subtle ambient glows, and clean typography.
- **Next.js App Router & TypeScript**: Built with Server Components by default, with optimized Client Component islands for motion and interactivity.
- **Dynamic Case Studies (`/projects/[slug]`)**: Rich, evidence-grounded project breakdowns (Green World Holidays, Wexley SEO audit, n8n automation) with individual JSON-LD metadata.
- **Interactive Automation Visualizer**: Flowchart breakdown of n8n pipelines detailing Triggers, Input Data, AI processing, and human-in-the-loop review safeguards.
- **SEO & Search Readiness**: Automated `sitemap.xml`, `robots.txt`, Open Graph / Twitter Card metadata, and Schema.org (`Person`, `WebSite`, `CreativeWork`) JSON-LD scripts.
- **Validated Contact Form**: Full client and server validation using `react-hook-form` and `zod`, with honeypot anti-spam and direct `Resend` email delivery.
- **Accessible & Performance-Minded**: Tested for keyboard navigation, visible focus rings, responsive layouts from 320px mobile to 1600px+ monitors, and full `prefers-reduced-motion` compliance.

---

## 🛠️ Technology Stack

| Layer | Technologies |
| :--- | :--- |
| **Framework** | Next.js (App Router), React |
| **Language** | TypeScript |
| **Styling** | Tailwind CSS v4 (`@theme inline`), CSS Variables |
| **Motion & Micro-interactions** | Framer Motion (`LazyMotion`, `domMax`, `useReducedMotion`) |
| **Icons** | Lucide React + custom SVGs |
| **Form Handling & Validation** | React Hook Form, Zod, `@hookform/resolvers` |
| **Email API** | Resend (with graceful fallback mode) |

---

## 📂 Project Directory Structure

```text
portfolio/
├── app/
│   ├── about/page.tsx               # Dedicated About route
│   ├── actions/contact.ts           # Contact Server Action (Zod + Resend)
│   ├── contact/page.tsx             # Dedicated Contact route
│   ├── error.tsx                    # Error boundary
│   ├── globals.css                  # Design tokens, @theme, base styles
│   ├── layout.tsx                   # Root layout, Navbar, Footer, MotionProvider
│   ├── not-found.tsx                # Custom 404 page
│   ├── page.tsx                     # Full homepage integration (10 core sections)
│   ├── projects/
│   │   ├── [slug]/page.tsx          # Dynamic case study route
│   │   └── page.tsx                 # Dedicated Projects listing route
│   ├── robots.ts                    # robots.txt generator
│   ├── services/page.tsx            # Dedicated Services route
│   └── sitemap.ts                   # sitemap.xml generator
├── components/
│   ├── animations/
│   │   ├── MotionProvider.tsx       # Framer Motion config & reduced-motion provider
│   │   └── Reveal.tsx               # Reusable scroll-reveal & stagger primitives
│   ├── layout/
│   │   ├── Footer.tsx               # Dynamic copyright, links, back-to-top
│   │   └── Navbar.tsx               # Frosted sticky navigation, mobile menu
│   ├── sections/
│   │   ├── AboutSection.tsx         # 6 core growth pillars & background
│   │   ├── AutomationShowcase.tsx   # Interactive n8n node flowchart
│   │   ├── ContactSection.tsx       # Contact cards + validated form
│   │   ├── ExperienceSection.tsx    # Chronological timeline & credentials
│   │   ├── HeroSection.tsx          # Value proposition + growth architecture visual
│   │   ├── ProjectsSection.tsx      # Filterable project gallery
│   │   ├── ResultsSection.tsx       # Verifiable telemetry & methodology
│   │   ├── SkillsSection.tsx        # Concrete skills with notes
│   │   ├── ServicesSection.tsx      # 4 core service cards with deliverables
│   │   └── TrustStrip.tsx           # Category trust strip
│   └── ui/
│       ├── Badge.tsx                # Status and category badges
│       ├── BrandIcons.tsx           # Clean SVGs for GitHub, LinkedIn, WhatsApp
│       ├── Button.tsx               # Primary / Secondary / Ghost button links
│       ├── Monogram.tsx             # Typographic AK monogram
│       ├── Placeholder.tsx          # Visual dashed review flag
│       └── SectionHeading.tsx       # Standardized section headings
├── data/
│   ├── experience.ts                # Timeline & education data
│   ├── projects.ts                  # Case study and client build records
│   ├── results.ts                   # SEO methodology and telemetry
│   ├── services.ts                  # Services scope and deliverables
│   ├── skills.ts                    # Repertoire and category mappings
│   └── workflows.ts                 # Visual node definitions for automations
└── lib/
    ├── site.ts                      # Central site configuration (URLs, social links)
    └── utils.ts                     # Utility helpers (cn, formatMonth)
```

---

## ⚙️ Local Development & Setup

1. **Clone or open the repository**:
   ```bash
   cd portfolio
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Configure Environment Variables**:
   Create a `.env.local` file from `.env.example`:
   ```bash
   cp .env.example .env.local
   ```
   Add your Resend API key and public URL:
   ```env
   NEXT_PUBLIC_SITE_URL=http://localhost:3000
   RESEND_API_KEY=re_your_api_key_here
   CONTACT_EMAIL=youremail@example.com
   ```

4. **Run the development server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

5. **Run production build**:
   ```bash
   npm run build
   ```

---

## 📝 Customizing Personal Details

All personal details, social URLs, email addresses, and availability status are centrally managed in:
- [`lib/site.ts`](file:///d:/portfolio/lib/site.ts)

Update:
- `site.email`: Your public contact email.
- `site.social`: URLs for your LinkedIn, GitHub, and WhatsApp.
- `site.resumeUrl`: Path to your resume PDF in the `public/` directory.
- `site.availability`: Current freelance availability status.
