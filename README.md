# Rotaract Club of Karpagam Academy of Higher Education (RAC KAHE)
> Official Web Portal for Rotaract Club of KAHE — Rotary International District 3206.

---

## 🚀 Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router, Turbopack)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animation & Motion**: [GSAP](https://greensock.com/gsap/) + ScrollTrigger, [Lenis](https://lenis.darkroom.engineering/) smooth scroll
- **Language**: TypeScript
- **Icons**: [Lucide React](https://lucide.dev/)

---

## 🛠️ Quickstart for Developers

### Prerequisites
- [Node.js](https://nodejs.org/) (version 18.18+ or 20+ recommended)
- [Git](https://git-scm.com/)

### 1. Clone the repository
```bash
git clone https://github.com/<YOUR_ORGANIZATION_OR_USERNAME>/rotaract-site.git
cd rotaract-site
```

### 2. Install dependencies
```bash
npm install
```

### 3. Run development server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Build for production (Test before pushing)
```bash
npm run build
```

---

## 📁 Project Structure

```text
rotaract-site/
├── public/                # Static assets (logos, images, marquees)
│   └── assets/            # Rotaract District & Club imagery
├── src/
│   ├── app/               # Next.js App Router pages
│   │   ├── about/         # About Club & Rotary hierarchy
│   │   ├── contact/       # Contact details & social links
│   │   ├── events/        # Upcoming & past flagship events
│   │   ├── history/       # Milestones & legacy
│   │   ├── projects/      # Avenues of service & project showcases
│   │   ├── team/          # Board of Directors & leadership
│   │   ├── globals.css    # Design tokens, theme colors & typography
│   │   ├── layout.tsx     # Global layout (Navbar, Footer, Smooth Scroll)
│   │   └── page.tsx       # Landing page
│   ├── components/        # Reusable UI & section components
│   │   ├── home/          # Hero, StatsStrip, PhotoMarquee, etc.
│   │   ├── layout/        # Navbar, Footer
│   │   └── ui/            # Buttons, dialogs, cards
│   └── lib/
│       ├── data.ts        # Club data, events, board members & stats
│       └── utils.ts       # Utility helper functions
```

---

## 🎨 Theme & Design Guidelines

- **Primary Background**: Deep Navy (`#050B1A`)
- **Surfaces**: Surface-1 (`#0B1730`), Surface-2 (`#13264D`)
- **Accents**: Gold (`#D4A62A`), Gold Light (`#F1D98B`)
- **Typography**: Ivory (`#F5F1E6`) for high readability, Muted (`#A9B4C8`)
- **Contrast**: Maintain WCAG AA accessibility standards.

---

## 🤝 Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md) for step-by-step instructions on creating branches, submitting changes, and pulling updates.
