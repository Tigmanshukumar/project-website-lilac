# Dr. Maya Reynolds, PsyD — Therapy Website

A modern, elegant professional website for a licensed clinical psychologist in Santa Monica, CA. Built with Next.js 16, React 19, Tailwind CSS 4, and Framer Motion for smooth animations.
<div align="center">
  
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Framer](https://img.shields.io/badge/Framer-black?style=for-the-badge&logo=framer&logoColor=blue)
![CSS](https://img.shields.io/badge/css-%23663399.svg?style=for-the-badge&logo=css&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Next JS](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white)


[![Live Demo](https://img.shields.io/badge/🌐%20Live%20Demo-Visit%20Site-success?style=for-the-badge)](https://drmayareynoldslilac.netlify.app/)
</div>

## 🎯 Overview

This is a fully responsive, single-page website designed to help potential clients learn about Dr. Maya Reynolds' therapy practice. The site emphasizes warmth, professionalism, and accessibility while showcasing areas of focus, qualifications, and making it easy for visitors to get in touch.

## ✨ Features

- **Responsive Design** — Mobile-first approach with perfect rendering on all device sizes
- **Smooth Animations** — Reveal animations on scroll powered by Framer Motion
- **Modern Aesthetics** — Warm color palette with elegant typography and spacing
- **Performance Optimized** — Fast page loads with Next.js image optimization
- **Accessible** — Semantic HTML, proper contrast ratios, and keyboard navigation
- **Hide-on-Scroll Header** — Navigation smoothly hides/shows based on scroll direction
- **Interactive Accordion** — Expandable FAQ and professional background sections
- **SEO Ready** — Metadata configuration and proper heading hierarchy

## 🛠️ Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| **Next.js** | 16.1.6 | React framework for production |
| **React** | 19.2.3 | UI library |
| **TypeScript** | 5.9.3 | Static type checking |
| **Tailwind CSS** | 4.1.18 | Utility-first CSS framework |
| **Framer Motion** | 12.34.0 | Animation library |
| **Next Font** | Built-in | Font optimization |

## 📁 Project Structure

```
.
├── app/
│   ├── layout.tsx          # Root layout with metadata & fonts
│   ├── page.tsx            # Home page composing all sections
│   └── globals.css         # Global styles & CSS variables
├── components/
│   ├── Header.tsx          # Navigation header with mobile menu
│   ├── Hero.tsx            # Hero section with CTA
│   ├── Intro.tsx           # Two-column intro section
│   ├── Specialties.tsx     # Areas of focus with circular images
│   ├── Issues.tsx          # Common challenges & conditions
│   ├── About.tsx           # About Dr. Maya with biography
│   ├── Office.tsx          # Office location and images
│   ├── FAQ.tsx             # FAQs with accordion
│   ├── ProfessionalBackground.tsx # Credentials & certifications
│   ├── Footer.tsx          # Footer with contact info
│   ├── Accordion.tsx       # Reusable accordion component
│   └── Reveal.tsx          # Scroll reveal animation wrapper
├── package.json            # Dependencies
├── tsconfig.json           # TypeScript configuration
├── next.config.mjs         # Next.js configuration
├── postcss.config.mjs      # PostCSS configuration
├── tailwind.config.js      # Tailwind CSS theme
└── README.md               # This file
```

## 🎨 Design System

### Color Palette

| Color | Hex Code | Usage |
|-------|----------|-------|
| Background | `#F4EFE8` | Primary page background |
| Foreground | `#2E2E2E` | Text, headings |
| Primary | `#425B50` | Buttons, accents, CTA sections |
| Secondary BG | `#F4EFE8` | Card backgrounds |
| Dark BG | `#E8E0D5` | Dark sections, contrast |
| Accent | `#C37A5C` | Highlights, emphasis |

### Typography

- **Heading Font**: Cormorant Garamond (elegant, serif)
- **Body Font**: Manrope (clean, modern, sans-serif)
- Both fonts are optimized with Next.js font loading

### Spacing & Layout

- Mobile-first responsive design
- Tailwind's default spacing scale
- Max-width container: 7xl (80rem)
- Padding: 6-30px on mobile, 15-30px on desktop

## 🚀 Getting Started

### Prerequisites

- Node.js 20.9.0 or higher
- npm, yarn, or pnpm package manager

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd lilac2

# Install dependencies
npm install
# or
yarn install
```

### Development

```bash
# Start the development server
npm run dev
# or
yarn dev
```

The site will be available at `http://localhost:3000` with hot reload enabled.

### Build for Production

```bash
# Create an optimized production build
npm run build

# Start the production server
npm start
```

## 📋 Component Documentation

### Header
- Responsive navigation with mobile hamburger menu
- Hide-on-scroll animation (Framer Motion)
- Links to FAQ and contact sections
- Smooth scroll behavior

### Hero
- Large headline with CTA button
- Hero image with reveal animation
- Centered layout on mobile, grid on desktop

### Intro
- Two-column layout alternating content and image
- Motivational messaging
- Call-to-action link

### Specialties
- Three cards showcasing areas of focus
- Circular images within each card
- Staggered reveal animations

### Issues
- Full-height section with image and colored background
- List of common challenges
- Empathetic messaging

### About
- Biography with professional image
- Layered image design with overlapping circular element
- Warm, personal introduction

### Office
- Location information and description
- Grid of office images
- Responsive image layout

### FAQ
- Accordion component for frequently asked questions
- Customizable styling and icon positions
- Smooth open/close animations

### ProfessionalBackground
- Education, licensure, and certifications
- Accordion layout with detailed information
- Professional credentials display

### Footer
- CTA section with dark background
- Contact information and hours
- Quick links and navigation
- Legal links and copyright

### Accordion
Reusable component with features:
- Customizable items with title/content
- Left or right icon positioning
- Smooth height transitions
- Styling customization

### Reveal
Scroll animation wrapper component:
- Fade and slide-up animation on viewport entry
- Customizable delay, duration, and offset
- Optional width control

## 🎯 Key Features Explained

### Scroll Reveal Animations
All major elements use the `<Reveal>` component which triggers animations as they enter the viewport. This creates an engaging experience without being overwhelming.

```tsx
<Reveal delay={0.2}>
  <h2>Your content here</h2>
</Reveal>
```

### Hide-on-Scroll Header
The header intelligently hides when scrolling down and reappears when scrolling up, maximizing viewport space for content.

### Responsive Images
Next.js Image optimization ensures images are served in optimal formats and sizes based on device capabilities.

## 🌐 Deployment

This site is ready for deployment on modern platforms:

- **Vercel** (Recommended) — One-click deployment from GitHub
- **Netlify** — GitHub integration with auto-deploy
- **AWS Amplify** — AWS-hosted deployment
- **Docker** — Containerized deployment

### Deploying to Vercel

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Vercel automatically detects Next.js and configures settings
5. Click Deploy

## 📱 Browser Support

- Chrome/Edge: Latest 2 versions
- Firefox: Latest 2 versions
- Safari: Latest 2 versions
- Mobile browsers: iOS Safari 14+, Chrome Android

## 🔧 Configuration

### Tailwind CSS 4
Uses the new `@theme` inline syntax for custom color variables. All custom colors are defined in `app/globals.css` with fallback to CSS variables.

### Next.js Configuration
Minimal config in `next.config.mjs` — uses defaults for image optimization, font loading, and static generation.

### TypeScript
Strict type checking is disabled (`strict: false`) for flexibility. Enable if desired in `tsconfig.json`.

## 🎭 Customization Guide

### Update Contact Information
Edit `components/Footer.tsx` to change:
- Email address
- Phone number
- Office hours
- Address

### Change Colors
Modify CSS variables in `app/globals.css`:
```css
--background: #F4EFE8;
--primary: #425B50;
/* ... etc */
```

### Update Content
Edit individual component files in the `components/` directory:
- `Hero.tsx` — Hero section content
- `About.tsx` — Biography
- `Specialties.tsx` — Areas of focus
- `FAQ.tsx` — Frequently asked questions
- `ProfessionalBackground.tsx` — Credentials

### Add New Sections
1. Create a new component file in `components/`
2. Add it to the imports in `app/page.tsx`
3. Include it in the component composition

## 🔒 Privacy & Security

- No external form submissions (implement backend if needed)
- No cookies or analytics by default
- All form validation is client-side
- Images are optimized and lazy-loaded

## ⚡ Performance Optimization

- **Image Optimization** — Next.js automatic image optimization
- **Font Loading** — Preloaded with `display: swap`
- **Code Splitting** — Automatic with Next.js
- **CSS Optimization** — Tailwind's PurgeCSS
- **Lazy Loading** — Images lazy-load by default

Run Lighthouse audit via Chrome DevTools for detailed performance metrics.

## 📝 License

© 2026 Dr. Maya Reynolds, PsyD. All rights reserved.

This template is provided for professional use. Customize for your specific practice.

## 🤝 Support & Customization

For customization, feature requests, or issues:
1. Review the component structure
2. Check Tailwind CSS documentation for styling
3. Reference Next.js docs for framework features
4. Explore Framer Motion for animation options

## 🎨 Design Credits

- **Color Palette** — Warm, professional, calming aesthetic
- **Typography** — Elegant serif headings with modern sans-serif body
- **Imagery** — Stock photos optimized for professional therapy practice
- **Layout** — Responsive grid system with generous whitespace

---

**Built with care for helping professionals connect with clients.**
