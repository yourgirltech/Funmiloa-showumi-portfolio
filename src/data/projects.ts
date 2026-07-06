import type { ProjectItem } from '@/types'
import financeflowImg from '@/assets/financeflow-screenshot.png'
import weddingWebsiteImg from '@/assets/wedding-website-screenshot.jpeg'

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
    tech: ['React', 'JavaScript', 'Framer Motion', 'Tailwind CSS'],
    liveUrl: 'https://inandoutfinanceflow.netlify.app/',
    githubUrl: 'https://github.com/yourgirltech/FinanceFlow',
    featured: true,
    device: 'macbook',
    accent: '#DDE6DE',
    image: financeflowImg,
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
      'Integrated External Elegant RSVP link flow with real-time confirmation',
      'Interactive event timeline with scroll-based reveals',
      'Custom photo gallery with fluid lightbox transitions',
      'Fully responsive, from guest phones to the couple\u2019s desktop',
    ],
    tech: ['React', 'JavaScript', 'Framer Motion', 'Tailwind CSS'],
    liveUrl: 'https://abassandlive.com',
    githubUrl: 'https://github.com/yourgirltech/live-abass-wedding',
    featured: false,
    device: 'phone',
    accent: '#E8DDD2',
    image: weddingWebsiteImg,
  },
]
