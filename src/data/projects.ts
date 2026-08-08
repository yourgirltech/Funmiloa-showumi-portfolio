import type { ProjectItem } from '@/types'
import financeflowImg from '@/assets/financeflow-screenshot.png'
import atlasImg from '@/assets/atlas-screenshot.png'
import weddingWebsiteImg from '@/assets/wedding-website-screenshot.jpeg'
import styleAndGlitzDesktopImg from '@/assets/styleandglitz-desktop.png'
import styleAndGlitzMobileImg from '@/assets/styleandglitz-mobile.jpeg'
import gmailAiAutomationImg from '@/assets/gmail-ai-automation-screenshot.png'

export const projects: ProjectItem[] = [
  {
    id: 'financeflow',
    name: 'FinanceFlow',
    tagline: 'A personal finance dashboard that makes numbers feel calm \u2014 and never invents one.',
    overview:
      'FinanceFlow is a personal finance dashboard built to turn dense financial data into a clear, breathable interface. It brings together spending, budgets, forecasts, and a genuine AI assistant into a single view designed for daily use \u2014 without ever showing a number it can\u2019t back up.',
    challenge:
      'Financial dashboards tend to overwhelm with charts and tables competing for attention, and most "AI-powered" finance tools blur the line between real computed facts and plausible-sounding guesses.',
    solution:
      'I built a layered information system \u2014 a calm overview first, detail on demand \u2014 and drew a hard line between two kinds of insight. A pure computed engine handles "did my spending change," instantly and verifiably. A genuine Claude API integration handles the harder judgment calls, like "where can I cut back," reasoning over a structured snapshot of real data and explicitly saying "I don\u2019t have enough information" rather than guessing.',
    features: [
      'A Claude-powered AI Assistant (Anthropic Claude API) answering free-form spending questions, grounded in a compact structured snapshot \u2014 never a live database connection, never able to invent a transaction',
      'A Netlify Function proxy that checks the caller\u2019s Supabase session before forwarding any request to Claude, keeping the API key off the client entirely',
      'Real-time budget tracking with animated progress rings, and CSV/Excel statement import via one shared parsing pipeline',
      'Personalized onboarding (Simple / Planner / Power User) that reshapes the entire dashboard layout per user, from the same codebase',
    ],
    metric: '93 Accessibility \u00b7 100 Best Practices \u00b7 100 SEO (Lighthouse, throttled mobile)',
    tech: ['React', 'JavaScript', 'TanStack Query', 'Anthropic Claude API', 'Netlify Functions', 'Supabase', 'Vitest', 'React Testing Library', 'Recharts', 'Tailwind CSS'],
    liveUrl: 'https://inandoutfinanceflow.netlify.app/',
    githubUrl: 'https://github.com/yourgirltech/FinanceFlow',
    featured: true,
    device: 'macbook',
    accent: '#DDE6DE',
    image: financeflowImg,
  },
  {
    id: 'atlas',
    name: 'Atlas',
    tagline: 'A cinematic interactive universe, not a portfolio site \u2014 an experience.',
    overview:
      'Atlas opens in space: a star appears, narration plays, and the camera pulls back to reveal a small solar system of six planets, each a self-contained showcase of a different frontend discipline \u2014 from custom shaders to a playable game to real-time data feeds.',
    challenge:
      'A conventional homepage-and-navbar portfolio leaves no room to actually demonstrate range across 3D, audio, and real-time data \u2014 and spectacle usually comes at the cost of performance and accessibility.',
    solution:
      'I built a capability check that reads device performance, viewport, and connection quality to decide between a full 3D galaxy or a lightweight fallback, plus a plain accessible sitemap as an alternative to the spatial navigation \u2014 so the experience scales down gracefully instead of breaking.',
    features: [
      'Six explorable planets, each demonstrating a distinct discipline \u2014 shaders, real-time APIs, a playable physics game, and synthesized audio',
      'Automatic performance-based fallback between a full 3D scene and a lightweight 2D equivalent',
      'Live external data throughout \u2014 real ISS telemetry, live weather, and a real-time "Now Playing on Spotify" widget',
      'A fully accessible, non-spatial sitemap view as an alternative to the 3D navigation',
    ],
    metric: '92 Performance \u00b7 100 Accessibility \u00b7 100 Best Practices \u00b7 100 SEO (Lighthouse, throttled mobile)',
    tech: ['Next.js', 'React', 'TypeScript', 'Three.js', 'Framer Motion', 'Supabase'],
    liveUrl: 'https://atlas-gamma-seven.vercel.app/',
    githubUrl: 'https://github.com/yourgirltech/Atlas',
    featured: false,
    device: 'macbook',
    accent: '#56606C',
    image: atlasImg,
  },
  {
    id: 'style-and-glitz',
    name: 'Style & Glitz',
    tagline: 'A luxury e-commerce flagship for watches and moissanite jewellery.',
    overview:
      'Style & Glitz is a full-stack luxury storefront styled as a boutique digital flagship \u2014 cinematic hero visuals, hover-to-video product cards, an editorial category showcase, and a complete commerce experience from browsing to checkout.',
    challenge:
      'Selling fine watches and jewellery online means earning trust at a glance, while still running real commerce underneath: accounts, inventory, and payments for a Nigerian audience \u2014 where Stripe isn\u2019t an option for merchants.',
    solution:
      'I paired a cinematic, editorial frontend with a genuine backend \u2014 Supabase for auth, storage, and data, and Paystack (chosen over Stripe, which doesn\u2019t support Nigerian merchants) for payments. Payment success is verified server-side through a dedicated Edge Function rather than trusted from the client redirect alone, so the boutique feel is backed by a real, secure store.',
    features: [
      'Hover-to-video product cards and an always-on video treatment for moissanite pieces',
      'Two-step Paystack payment flow: initialize server-side, then independently verify success before confirming an order',
      'Cart and wishlist state managed with Redux Toolkit, with unit-tested reducer logic for edge cases like quantity limits and toggle behavior',
      'Full admin dashboard for product management, locked to a single admin account at both the database (RLS) and frontend level',
      'Customer accounts with order history, wishlists, and profile management',
    ],
    metric: '500+ client visits since launch',
    tech: ['React', 'TypeScript', 'Redux Toolkit', 'React Router', 'React Testing Library', 'Jest', 'Supabase', 'Paystack', 'Framer Motion', 'Tailwind CSS'],
    liveUrl: 'https://styleandglitz.netlify.app/',
    githubUrl: 'https://github.com/yourgirltech/Styleandglitz',
    featured: false,
    device: 'macbook',
    accent: '#D8D5CF',
    image: styleAndGlitzDesktopImg,
    mobileImage: styleAndGlitzMobileImg,
  },
  {
    id: 'gmail-ai-automation',
    name: 'Gmail AI Automation',
    tagline: 'A human-in-the-loop AI email assistant — drafts, never sends, without a human saying yes.',
    overview:
      'An n8n workflow that reads incoming Gmail messages, classifies them with AI, drafts a reply for genuine enquiries, and holds every reply for explicit human approval before anything sends — nothing goes out on autopilot.',
    challenge:
      'AI-drafted replies are useful. AI-sent replies with nobody checking them are a liability the moment the model gets something wrong — and most demo automations skip that safeguard entirely.',
    solution:
      'I built a classification step ahead of the expensive work: emails are sorted into sales enquiry, spam, or promotion before summarization and drafting ever run, so API calls aren’t wasted on emails that were never getting a reply. Genuine enquiries get summarized and drafted, then emailed back to me for approval — the reply only sends after I confirm it, correctly threaded in the original conversation.',
    features: [
      'AI classification (Google Gemini) routes emails into sales, spam, or promotion before any expensive summarization or drafting runs',
      'Structured Output Parser with auto-fix forces clean, predictable classification output instead of loose free-text',
      'Human-in-the-loop approval gate — every AI-drafted reply is emailed to me first and only sends after explicit confirmation',
      'Declined drafts are logged with a status and timestamp rather than silently disappearing',
    ],
    tech: ['n8n', 'Google Gemini API', 'Gmail API', 'Workflow Automation', 'AI Agent Development'],
    githubUrl: 'https://github.com/yourgirltech/gmail-ai-automation',
    featured: false,
    device: 'macbook',
    accent: '#EADFC8',
    image: gmailAiAutomationImg,
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
    metric: '200+ guest RSVPs collected',
    tech: ['React', 'JavaScript', 'Supabase', 'Framer Motion', 'Tailwind CSS'],
    liveUrl: 'https://abassandlive.com',
    githubUrl: 'https://github.com/yourgirltech/live-abass-wedding',
    featured: false,
    device: 'phone',
    accent: '#E8DDD2',
    image: weddingWebsiteImg,
  },
]