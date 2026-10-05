import type { Project, SideProject } from '@/types'
import styleAndGlitzImg from '@/assets/styleandglitz-desktop.webp'
import financeflowImg from '@/assets/financeflow-screenshot.webp'

const gh = (repo: string) => `https://github.com/yourgirltech/${repo}`

/**
 * Every claim below is taken from the project's source code. Projects without
 * a public deployment have no "Live Demo" link.
 */
export const foresight: Project = {
  id: 'foresight',
  name: 'Foresight',
  category: 'Healthcare revenue cycle · Multi-agent system',
  summary:
    'An AI patient-access and revenue-cycle platform for multi-clinic healthcare providers — specialist agents coordinated by a deterministic Commander, with a human approving every consequential action.',
  problem:
    'Clinic billing teams lose time and revenue to denied claims, unchecked eligibility, prior-authorization paperwork and appeals. Automating that work is only acceptable if the software never acts on a patient’s or payer’s behalf without a person signing off — and if one clinic’s data can never reach another’s.',
  built:
    'A multi-tenant SaaS platform where each workflow — claims risk, eligibility, prior authorization, coordination of benefits, cost estimates, appeals, insurance-card OCR and voice reminders — is handled by a specialist agent. A single Commander decides what happens next from ordered rule tables. AI explains, recommends and drafts; a person approves; only then does anything execute.',
  decisions: [
    'The Commander is a pure function with no LLM: the same state and trigger always produce the same decision. Four disjoint rule tables — claims, eligibility, prior authorization, appeals — put safety guards first and escalate by default.',
    'Human approval is structural, not a prompt: the only route to an execution agent sits behind an approved, non-low-confidence recommendation. Resubmitting a corrected claim has no automated path at all — it goes to a person.',
    'Tenant isolation lives in the database. Every table carries an organization id behind Postgres row-level security, the API forwards each user’s own token, and a 29-check proof tries every way to read or change another clinic’s data.',
    'Models never own the numbers: cost estimates are computed deterministically and Claude only phrases them; insurance-card OCR returns confidence-flagged fields that a person confirms before anything is written.',
    'Care safety is enforced in the rule tables: eligibility and prior-authorization checks can never gate emergency care.',
  ],
  demonstrates: [
    'Multi-agent orchestration',
    'Human-in-the-loop design',
    'Multi-tenant security',
    'Claude vision OCR',
    'Healthcare domain modelling',
  ],
  stack: ['React', 'TypeScript', 'Tailwind CSS', 'Python', 'FastAPI', 'Supabase', 'PostgreSQL · RLS', 'Claude', 'n8n', 'Vapi', 'Docker'],
  links: [{ kind: 'GitHub', href: gh('Foresight') }],
}

export const projects: Project[] = [
  {
    id: 'voice-reminders',
    name: 'Voice Reminder System',
    category: 'Voice AI automation · n8n + Vapi',
    summary:
      'Automated appointment-reminder calls that never dial without a recorded human enrollment and live patient consent — built as Foresight’s voice channel.',
    problem:
      'Reminder calls reduce no-shows, but an automated call to a patient who has withdrawn consent is a compliance failure, and a lost callback silently loses the result.',
    built:
      'n8n owns timing; the Foresight API owns every decision. A scheduled workflow pulls due reminders, requests a single-use dial authorization, places the Vapi call and reports it back. A second workflow receives Vapi’s end-of-call report, and the API records the outcome and escalates anything that isn’t a clean confirmation.',
    decisions: [
      'Consent is an append-only ledger re-checked at enrollment, at dispatch, immediately before dialling — an atomic, single-use authorization in Postgres — and again once the call exists, where a refusal ends the live call.',
      'Every state change is compare-and-set, so overlapping polls, replayed callbacks or late reports can never double-dial or reopen a finished reminder.',
      'Recording is disabled; only the structured outcome and call metadata are stored, never a transcript.',
      'Lost dispatches, missing callbacks and failed hang-ups are swept into escalations for a person instead of failing silently.',
    ],
    demonstrates: ['Voice AI', 'Workflow orchestration', 'Consent & compliance', 'Failure handling'],
    stack: ['n8n', 'Vapi', 'FastAPI', 'PostgreSQL', 'Docker'],
    links: [{ kind: 'GitHub', href: gh('Foresight'), label: 'Part of Foresight' }],
    flow: [
      { label: 'Schedule', detail: 'n8n, every few minutes', tone: 'trigger' },
      { label: 'Due + consent', detail: 'API leases the reminder', tone: 'rule' },
      { label: 'Authorize dial', detail: 'atomic, single-use', tone: 'rule' },
      { label: 'Vapi call', detail: 'recording off', tone: 'ai' },
      { label: 'Outcome', detail: 'end-of-call webhook', tone: 'data' },
      { label: 'Escalate', detail: 'anything not confirmed', tone: 'human' },
    ],
  },
  {
    id: 'style-and-glitz',
    name: 'Style & Glitz',
    category: 'E-commerce · AI customer agent',
    summary:
      'A luxury storefront for watches and moissanite jewellery with a full commerce backend — and an AI shopping assistant grounded in live store data.',
    problem:
      'A boutique selling high-value pieces online has to earn trust at a glance, take payments in Nigeria (where Stripe isn’t available to merchants), and answer product, policy and order questions without ever inventing an answer.',
    built:
      'A React + TypeScript storefront on Supabase — auth, Postgres, storage and Edge Functions — with Paystack checkout, customer accounts, wishlists and an admin dashboard for product management, plus an n8n AI agent embedded as the site’s chat assistant.',
    decisions: [
      'Paystack payments are initialised and verified through Supabase Edge Functions, keeping secret keys off the client.',
      'Separate customer and admin authentication; cart and wishlist state in Redux Toolkit with unit-tested reducers.',
      'The assistant answers only from tool results — the live product catalogue, and for signed-in customers their order history, profile and order items, fetched with the customer’s own session so row-level security decides what it can see.',
      'Gemini is the primary model with automatic Claude fallback; if both fail, a fixed reply routes the customer to the human concierge team.',
    ],
    demonstrates: ['Full-stack commerce', 'Payments', 'Tool-calling agent', 'Model fallback', 'Human escalation'],
    stack: ['React', 'TypeScript', 'Redux Toolkit', 'Supabase', 'Paystack', 'n8n', 'Gemini', 'Claude', 'Jest'],
    links: [
      { kind: 'Live Demo', href: 'https://styleandglitz.netlify.app/' },
      { kind: 'GitHub', href: gh('Styleandglitz'), label: 'Storefront' },
      { kind: 'GitHub', href: gh('CUSTOMER-SUPPORT-ai-chatbot-FOR-STYLEANDGLITZ'), label: 'AI agent workflow' },
    ],
    flow: [
      { label: 'Customer chat', detail: 'site widget', tone: 'trigger' },
      { label: 'AI agent', detail: 'Gemini → Claude fallback', tone: 'ai' },
      { label: 'Scoped tools', detail: 'catalogue · orders · profile', tone: 'data' },
      { label: 'Concierge', detail: 'WhatsApp · Instagram · email', tone: 'human' },
    ],
    image: {
      src: styleAndGlitzImg,
      width: 1600,
      height: 694,
      alt: 'Style & Glitz storefront home page with a cinematic watch hero image',
    },
  },
  {
    id: 'aurelia',
    name: 'Aurelia Estate Voice Agent',
    category: 'Voice AI agent · Real estate',
    summary:
      'A property-enquiry form that triggers an AI voice call within about a minute — and lets the agent search live listings mid-conversation.',
    problem:
      'Property enquiries go cold quickly. Calling every lead immediately, in their language, and answering questions about listings that are actually available is hard to staff.',
    built:
      'A React enquiry flow backed by two Supabase Edge Functions. One validates and saves the lead, then places an outbound Vapi call that greets the caller by title and name in their chosen language. The other serves the voice agent’s tools — property search and property details — straight from live Postgres listings during the call.',
    decisions: [
      'The Vapi private key exists only as an Edge Function secret — it never reaches the browser.',
      'Duplicate protection: the same number within ten minutes is still saved as a lead, but never triggers a second call.',
      'The tool endpoint is protected by a shared secret and always returns a result for every tool call, so a failed lookup becomes a spoken explanation instead of dead air.',
      'Six call languages — English, French, Spanish, German, Arabic and Portuguese — with localised salutations.',
    ],
    demonstrates: ['Voice AI', 'Real-time tool calling', 'Serverless backends', 'Lead capture'],
    stack: ['React', 'Tailwind CSS', 'Supabase', 'PostgreSQL', 'Edge Functions', 'Vapi'],
    links: [{ kind: 'GitHub', href: gh('Aurelia-Estate-Voice-Agent') }],
    flow: [
      { label: 'Enquiry form', detail: 'React', tone: 'trigger' },
      { label: 'Validate + dedupe', detail: 'Edge Function', tone: 'rule' },
      { label: 'Outbound call', detail: 'Vapi, 6 languages', tone: 'ai' },
      { label: 'Live listings', detail: 'search · details tools', tone: 'data' },
    ],
  },
  {
    id: 'financeflow',
    name: 'FinanceFlow',
    category: 'Fintech · LLM features',
    summary:
      'A personal finance app that adapts to how involved each user wants to be — with an AI assistant that never shows a number it can’t back up.',
    problem:
      'Budgeting apps either overwhelm casual users or underserve power users, and “AI insights” in finance tools often blur computed facts with plausible guesses.',
    built:
      'A React app with Supabase authentication, CSV and Excel statement import, quick-add entry, envelope budgets, savings goals and a deterministic insights engine — plus a Claude-powered assistant that answers questions about the user’s month.',
    decisions: [
      'Claude is called from a Netlify Function that verifies the user’s Supabase session first; the API key never reaches the browser.',
      'The model receives a compact, pre-computed snapshot of the month, quotes only its pre-formatted figures, and says so when the data is insufficient.',
      'Onboarding sets a Simple, Planner or Power User level that reshapes navigation and the dashboard from one codebase.',
      'Seven currencies — NGN, USD, GBP, GHS, KES, ZAR and EUR — with locale-aware formatting.',
    ],
    demonstrates: ['Grounded LLM features', 'Serverless AI proxy', 'Product thinking', 'Data import'],
    stack: ['React', 'Supabase Auth', 'Netlify Functions', 'Claude', 'TanStack Query', 'Recharts', 'Vitest', 'Tailwind CSS'],
    links: [
      { kind: 'Live Demo', href: 'https://inandoutfinanceflow.netlify.app/' },
      { kind: 'GitHub', href: gh('FinanceFlow') },
      { kind: 'Case Study', href: `${gh('FinanceFlow')}/blob/main/CASE_STUDY.md` },
    ],
    image: {
      src: financeflowImg,
      width: 1600,
      height: 698,
      alt: 'FinanceFlow dashboard showing balance, spending breakdown and budget progress',
    },
  },
  {
    id: 'crypto-swing-bot',
    name: 'Crypto Swing Bot',
    category: 'Trading automation · Python systems',
    summary:
      'A capital-preservation-first BTC/ETH swing-trading system — market-structure analysis, a risk engine with veto power, and human approval on every paper trade.',
    problem:
      'Most trading bots optimise for returns and treat risk as an afterthought. This one starts from the opposite question: what must never happen to the account?',
    built:
      'A Python system that reads closed four-hour candles, detects market structure — swings, breaks of structure, changes of character — labels the regime and runs five strategy modules. Every proposal passes a risk engine and position sizer, then waits for a human yes/no before a paper trade opens. Results are journaled to Postgres and served by a read-only FastAPI to a Next.js dashboard.',
    decisions: [
      'The risk engine can veto any trade: 1% account risk per trade, 3% daily and 6% weekly loss circuit breakers, at most two open positions, no leverage.',
      'Strategies are validated walk-forward and on held-out data; only those that pass are assigned to an asset.',
      'Paper trading only, with mandatory human approval — no real capital is connected.',
      'Unit tests cover the risk engine, position sizing, strategies and paper-engine regressions.',
    ],
    demonstrates: ['Python systems design', 'Risk engineering', 'Backtesting', 'Human-approved automation'],
    stack: ['Python', 'FastAPI', 'PostgreSQL', 'SQLAlchemy', 'Alembic', 'Next.js', 'TypeScript', 'Docker', 'Pytest'],
    links: [{ kind: 'GitHub', href: gh('crypto-swing-bot') }],
    flow: [
      { label: '4H candles', detail: 'closed only', tone: 'trigger' },
      { label: 'Structure + regime', detail: 'BOS · CHoCH', tone: 'rule' },
      { label: 'Strategy', detail: '5 modules', tone: 'rule' },
      { label: 'Risk veto', detail: 'sizing + breakers', tone: 'rule' },
      { label: 'Human y/n', detail: 'every trade', tone: 'human' },
      { label: 'Paper trade', detail: 'journaled', tone: 'action' },
    ],
  },
]

export const sideProjects: SideProject[] = [
  {
    name: 'Insurance FNOL & claims pipeline',
    description:
      'Retrieval over policy documents in pgvector for coverage checks, Gemini vision damage scoring from photos, and an adjuster approval step that routes to confirmation or senior escalation.',
    stack: ['n8n', 'pgvector', 'Gemini', 'Supabase'],
    note: 'Private workflow',
  },
  {
    name: 'Gmail AI automation',
    description:
      'Classifies incoming email, summarises and drafts replies to genuine enquiries, and sends nothing until a human approves the draft.',
    stack: ['n8n', 'Gemini', 'Gmail API'],
    href: gh('gmail-ai-automation-agent'),
  },
  {
    name: 'Job search pipeline agent',
    description:
      'Pulls remote listings from several job boards daily, filters and scores them against a profile, summarises matches with an LLM and logs them to Supabase.',
    stack: ['n8n', 'Gemini', 'Supabase'],
    href: gh('job-search-pipeline-agent'),
  },
  {
    name: 'Trackora logistics platform',
    description:
      'A Next.js logistics site whose side effects run through n8n: shipment tracking answers, AI inquiry triage with a hand-off to a sales call, and ops dashboards.',
    stack: ['Next.js', 'n8n', 'Supabase', 'Gemini'],
    href: gh('Trackora'),
  },
]
