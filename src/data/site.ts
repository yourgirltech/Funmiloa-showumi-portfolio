import type { Capability, ProcessStep, StackGroup } from '@/types'

export const site = {
  name: 'Funmilola Showumi',
  role: 'AI Automation & Agent Engineer',
  email: 'hello@funmilolashowumi.com',
  github: 'https://github.com/yourgirltech',
  linkedin: 'https://www.linkedin.com/in/funmilola-showumi-01b385284/',
  resume: '/resume.pdf',
} as const

export const contactHref = `mailto:${site.email}?subject=${encodeURIComponent('Project enquiry')}`

export const nav = [
  { id: 'work', label: 'Work' },
  { id: 'capabilities', label: 'Capabilities' },
  { id: 'process', label: 'Process' },
  { id: 'stack', label: 'Stack' },
  { id: 'about', label: 'About' },
] as const

export const capabilities: Capability[] = [
  {
    title: 'AI agents & tool calling',
    body: 'Agents that answer from live data through scoped tools — never from memory — with model fallback and a clear hand-off to a human when they reach their limit.',
    proof: 'Style & Glitz shopping assistant',
  },
  {
    title: 'Multi-agent orchestration',
    body: 'Specialist agents coordinated by a deterministic router, so every decision is reproducible, auditable and safe to put in front of a regulated workflow.',
    proof: 'Foresight Commander',
  },
  {
    title: 'Voice AI agents',
    body: 'Outbound Vapi voice agents that call within minutes, speak the caller’s language, look up live records mid-call and respect consent before every dial.',
    proof: 'Aurelia · Voice reminders',
  },
  {
    title: 'RAG & document intelligence',
    body: 'Retrieval over vector-indexed documents and vision-based extraction from images — returned as structured, confidence-flagged output a person can verify.',
    proof: 'Claims pipeline · Card OCR',
  },
  {
    title: 'Workflow automation',
    body: 'n8n workflows on schedules and webhooks that connect APIs, databases and inboxes — with approval gates, retries and escalation instead of silent failure.',
    proof: 'Gmail triage · Job pipeline',
  },
  {
    title: 'Full-stack products',
    body: 'React, Next.js and FastAPI applications on Supabase/Postgres with real authentication, row-level security, payments and server-side secrets.',
    proof: 'Style & Glitz · FinanceFlow',
  },
]

export const processSteps: ProcessStep[] = [
  {
    index: '01',
    title: 'Map the real workflow',
    body: 'Who does what today, which decisions are routine, and where a mistake actually costs money or trust.',
  },
  {
    index: '02',
    title: 'Separate rules from judgment',
    body: 'Anything that must be exact — money, eligibility, routing — is deterministic code. Models handle language, extraction and drafting.',
  },
  {
    index: '03',
    title: 'Put a human where it matters',
    body: 'AI recommends or drafts; a person approves anything consequential; automation executes only after that approval is recorded.',
  },
  {
    index: '04',
    title: 'Design for failure',
    body: 'Fallback models, idempotent state changes and escalations — so when something breaks, a person hears about it.',
  },
  {
    index: '05',
    title: 'Prove it with tests',
    body: 'Isolation proofs, lifecycle tests and rule-table tests that check the guarantees, not just the happy path.',
  },
  {
    index: '06',
    title: 'Ship it to run',
    body: 'Environment-based configuration, containerised services and documentation the next engineer can actually follow.',
  },
]

export const stack: StackGroup[] = [
  {
    title: 'AI & automation',
    items: ['Claude (Anthropic)', 'Gemini', 'Vapi', 'n8n', 'MCP', 'RAG · pgvector', 'Structured outputs'],
  },
  {
    title: 'Frontend',
    items: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'Redux Toolkit', 'Framer Motion'],
  },
  {
    title: 'Backend & data',
    items: ['Python', 'FastAPI', 'Supabase', 'PostgreSQL', 'Row-level security', 'Edge Functions', 'REST APIs'],
  },
  {
    title: 'Delivery',
    items: ['Docker', 'Paystack', 'Netlify', 'Pytest', 'Vitest', 'Jest'],
  },
]
