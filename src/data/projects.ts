import type { ProjectItem } from '@/types'
import financeflowImg from '@/assets/financeflow-screenshot.png'
import weddingWebsiteImg from '@/assets/wedding-website-screenshot.jpeg'
import styleAndGlitzDesktopImg from '@/assets/styleandglitz-desktop.png'
import styleAndGlitzMobileImg from '@/assets/styleandglitz-mobile.jpeg'

export const projects: ProjectItem[] = [
  {
    id: 'financeflow',
    name: 'FinanceFlow',
    tagline: 'A personal finance dashboard that makes numbers feel calm.',
    overview:
      'FinanceFlow is a personal finance dashboard built to turn dense financial data into a clear, breathable interface. It brings together spending, budgets, and forecasts into a single view designed for daily use.',
    challenge:
      'Financial dashboards tend to overwhelm with charts and tables competing for attention, which makes people avoid opening them altogether.',
    solution:
      'I designed a layered information system: a calm overview first, with detail available on demand through smooth expand transitions, so the interface never shouts.',
    features: [
      'Real-time budget tracking with animated progress rings',
      'Interactive spending charts with smooth data transitions',
      'Customisable dashboard layout with drag-and-drop widgets',
      'Dark and light themes tuned for long viewing sessions',
    ],
    tech: ['React', 'JavaScript', 'Supabase', 'Framer Motion', 'Tailwind CSS'],
    liveUrl: 'https://inandoutfinanceflow.netlify.app/',
    githubUrl: 'https://github.com/yourgirltech/FinanceFlow',
    featured: true,
    device: 'macbook',
    accent: '#DDE6DE',
    image: financeflowImg,
  },
  {
    id: 'style-and-glitz',
    name: 'Style & Glitz',
    tagline: 'A luxury e-commerce flagship for watches and moissanite jewellery.',
    overview:
      'Style & Glitz is a full-stack luxury storefront styled as a boutique digital flagship \u2014 cinematic hero visuals, hover-to-video product cards, an editorial category showcase, and a complete commerce experience from browsing to checkout.',
    challenge:
      'Selling fine watches and jewellery online means earning trust at a glance, while still running real commerce underneath: accounts, inventory, and payments built for a Nigerian audience.',
    solution:
      'I paired a cinematic, editorial frontend with a genuine backend \u2014 Supabase for auth, storage, and data, and Paystack for payments \u2014 so the boutique feel is backed by a fully working store, not just a mockup.',
    features: [
      'Hover-to-video product cards and an always-on video treatment for moissanite pieces',
      'Secure checkout with server-verified Paystack payments and automatic stock updates',
      'Full admin dashboard for product management, locked to a single admin account',
      'Customer accounts with order history, wishlists, and profile management',
    ],
    tech: ['React', 'TypeScript', 'Supabase', 'Paystack', 'Framer Motion', 'Tailwind CSS'],
    liveUrl: 'https://styleandglitz.netlify.app/',
    githubUrl: 'https://github.com/yourgirltech/Styleandglitz',
    featured: false,
    device: 'macbook',
    accent: '#D8D5CF',
    image: styleAndGlitzDesktopImg,
    mobileImage: styleAndGlitzMobileImg,
  },
  {
    id: 'wedding-website',
    name: 'The Wedding Website',
    tagline: 'A bespoke invitation site built for one couple, one day.',
    overview:
      'A fully custom wedding website built for a client, covering their story, schedule, RSVP flow, and gallery. The brief called for something that felt like a printed invitation translated to the web.',
    challenge:
      'The client wanted a site that felt personal and considered, not templated, while still being simple for guests of every generation to navigate on any device.',
    solution:
      'I built a slow, editorial scroll experience with soft reveal animations and a guest-first RSVP flow, keeping every interaction obvious and every visual choice intentional.',
    features: [
      'Integrated RSVP flow with real-time confirmation',
      'Interactive event timeline with scroll-based reveals',
      'Custom photo gallery with fluid lightbox transitions',
      'Fully responsive, from guest phones to the couple\u2019s desktop',
    ],
    tech: ['React', 'JavaScript', 'Supabase', 'Framer Motion', 'Tailwind CSS'],
    liveUrl: 'https://abassandlive.com',
    githubUrl: 'https://github.com/yourgirltech/live-abass-wedding',
    featured: false,
    device: 'phone',
    accent: '#E8DDD2',
    image: weddingWebsiteImg,
  },
]