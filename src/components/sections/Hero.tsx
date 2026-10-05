import { ArrowDown, ArrowRight } from 'lucide-react'
import Reveal from '@/components/ui/Reveal'
import TagList from '@/components/ui/TagList'
import { toneMeta } from '@/components/ui/tones'
import type { FlowNode } from '@/types'
import { cn } from '@/lib/utils'

const focus = ['AI agents', 'Multi-agent systems', 'RAG', 'Voice AI', 'n8n', 'MCP', 'Full-stack']

/** The decision pattern every system below follows. */
const pipeline: FlowNode[] = [
  { tone: 'trigger', label: 'Event', detail: 'webhook · schedule · message · upload' },
  { tone: 'rule', label: 'Deterministic rules', detail: 'routing, money, eligibility, risk' },
  { tone: 'ai', label: 'AI', detail: 'explain · extract · draft · converse' },
  { tone: 'human', label: 'Human approval', detail: 'anything consequential' },
  { tone: 'action', label: 'Execute or escalate', detail: 'audited — never silent' },
]

export default function Hero() {
  return (
    <section id="top" aria-labelledby="hero-title" className="relative overflow-hidden pb-20 pt-32 sm:pt-40 md:pb-24">
      <div aria-hidden="true" className="grid-backdrop pointer-events-none absolute inset-0" />

      <div className="relative mx-auto grid max-w-6xl gap-14 px-5 sm:px-8 lg:grid-cols-[1.3fr_1fr] lg:items-center">
        <div>
          <Reveal>
            <p className="inline-flex items-center gap-2 rounded-full border border-line px-3 py-1 font-mono text-[11px] uppercase tracking-[0.14em] text-muted">
              <span aria-hidden="true" className="size-1.5 rounded-full bg-signal" />
              AI Automation &amp; Agent Engineer
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <h1
              id="hero-title"
              className="mt-6 font-display text-4xl font-semibold leading-[1.05] tracking-tight text-balance sm:text-5xl lg:text-6xl"
            >
              I build AI-powered systems that automate real business workflows.
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-pretty text-muted">
              I design and engineer AI agents, voice agents, RAG pipelines and n8n automations — and the full-stack
              applications around them — with the guardrails real operations need: human approval, auditable
              decisions, and failures that surface instead of hiding.
            </p>
          </Reveal>
          <Reveal delay={0.15} className="mt-9 flex flex-wrap gap-3">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-signal px-5 py-3 text-sm font-semibold text-ink transition hover:brightness-110"
            >
              Let’s Work Together <ArrowRight aria-hidden="true" className="size-4" />
            </a>
            <a
              href="#work"
              className="inline-flex items-center gap-2 rounded-full border border-line-strong px-5 py-3 text-sm font-medium text-fg transition hover:bg-white/5"
            >
              View My Work <ArrowDown aria-hidden="true" className="size-4" />
            </a>
          </Reveal>
        </div>

        <Reveal delay={0.2}>
          <figure className="rounded-2xl border border-line bg-surface/80 p-5 shadow-2xl shadow-black/40 backdrop-blur sm:p-6">
            <figcaption className="flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.16em] text-faint">
              <span>How my systems decide</span>
              <span className="text-signal">by design</span>
            </figcaption>
            <ol className="mt-6">
              {pipeline.map((step, i) => (
                <li key={step.label} className="relative flex gap-4 pb-5 last:pb-0">
                  {i < pipeline.length - 1 && (
                    <span aria-hidden="true" className="absolute bottom-0 left-[7px] top-5 w-px bg-line-strong" />
                  )}
                  <span
                    aria-hidden="true"
                    className={cn('relative mt-1 size-[15px] shrink-0 rounded-full border-[3px] border-surface', toneMeta[step.tone].dot)}
                  />
                  <div>
                    <p className="text-sm font-medium text-fg">{step.label}</p>
                    <p className="text-xs text-faint">{step.detail}</p>
                  </div>
                </li>
              ))}
            </ol>
            <p className="mt-6 border-t border-line pt-4 text-sm text-muted">
              AI recommends <span className="text-faint">→</span> a human approves{' '}
              <span className="text-faint">→</span> automation executes.
            </p>
          </figure>
        </Reveal>
      </div>

      <div className="relative mx-auto mt-20 max-w-6xl px-5 sm:px-8">
        <Reveal>
          <div className="flex flex-col gap-5 border-t border-line pt-8 md:flex-row md:items-center md:justify-between">
            <p className="font-display text-lg font-medium text-balance md:max-w-md">
              I don’t just build chatbots. I engineer AI systems and business automations.
            </p>
            <TagList items={focus} label="Focus areas" />
          </div>
        </Reveal>
      </div>
    </section>
  )
}
