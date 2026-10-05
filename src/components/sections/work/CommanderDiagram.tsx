import { ChevronDown, ChevronRight } from 'lucide-react'
import type { ReactNode } from 'react'
import type { NodeTone } from '@/types'
import { cn } from '@/lib/utils'
import { toneMeta } from '@/components/ui/tones'

const triggers = ['Claim ingested', 'Appointment scheduled', 'Emergency registration', 'Claim denied']

/** The Commander's four disjoint rule tables (backend/app/agents/commander.py). */
const ruleTables: [string, string][] = [
  ['Claims', 'R1–R20'],
  ['Eligibility', 'E1–E7'],
  ['Prior authorization', 'A1–A11'],
  ['Appeals', 'AP1–AP12'],
]

const agents: { label: string; detail: string; tone: NodeTone }[] = [
  { label: 'Risk scoring', detail: 'deterministic rules', tone: 'rule' },
  { label: 'Eligibility', detail: 'coverage checks', tone: 'rule' },
  { label: 'Prior authorization', detail: 'determiner', tone: 'rule' },
  { label: 'Benefits order (COB)', detail: 'cited rules', tone: 'rule' },
  { label: 'Cost estimate', detail: 'computed; Claude phrases', tone: 'rule' },
  { label: 'Reasoning', detail: 'Claude explains', tone: 'ai' },
  { label: 'Recommendation', detail: 'next action + confidence', tone: 'rule' },
  { label: 'Appeals', detail: 'Claude drafts from evidence', tone: 'ai' },
]

function Arrow() {
  return (
    <span aria-hidden="true" className="flex items-center justify-center py-1 text-faint lg:px-1 lg:py-0">
      <ChevronDown className="size-4 lg:hidden" />
      <ChevronRight className="hidden size-4 lg:block" />
    </span>
  )
}

function Column({
  title,
  children,
  highlight,
  className,
}: {
  title: string
  children: ReactNode
  highlight?: boolean
  className?: string
}) {
  return (
    <div
      className={cn(
        'min-w-0 flex-1 rounded-xl border p-4',
        highlight ? 'border-signal/40 bg-signal/[0.04]' : 'border-line bg-raised/50',
        className,
      )}
    >
      <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-faint">{title}</p>
      <div className="mt-3 space-y-2">{children}</div>
    </div>
  )
}

function Node({ label, detail, tone }: { label: string; detail?: string; tone: NodeTone }) {
  return (
    <div className="flex items-start gap-2.5 rounded-md border border-line bg-surface px-3 py-2">
      <span aria-hidden="true" className={cn('mt-1.5 size-1.5 shrink-0 rounded-full', toneMeta[tone].dot)} />
      <div className="min-w-0">
        <p className="text-[13px] font-medium leading-snug text-fg">{label}</p>
        {detail && <p className="text-[11px] leading-snug text-faint">{detail}</p>}
      </div>
    </div>
  )
}

/** Foresight's decision architecture: events → Commander → specialist agents → human gate. */
export default function CommanderDiagram() {
  return (
    <figure className="rounded-xl border border-line bg-ink/60 p-4 sm:p-5">
      <figcaption className="flex flex-wrap items-center justify-between gap-3 font-mono text-[11px] uppercase tracking-[0.16em] text-faint">
        <span>Architecture · Foresight decision flow</span>
        <span className="flex flex-wrap gap-3 normal-case tracking-normal">
          {(['rule', 'ai', 'human', 'action'] as NodeTone[]).map((t) => (
            <span key={t} className="flex items-center gap-1.5">
              <span aria-hidden="true" className={cn('size-1.5 rounded-full', toneMeta[t].dot)} />
              {toneMeta[t].label}
            </span>
          ))}
        </span>
      </figcaption>

      <div className="mt-5 flex flex-col lg:flex-row lg:items-stretch">
        <Column title="Events">
          {triggers.map((t) => (
            <Node key={t} label={t} tone="trigger" />
          ))}
        </Column>
        <Arrow />
        <Column title="Commander · no LLM" highlight>
          <p className="text-[13px] leading-snug text-muted">
            A pure function: the same state and trigger always give the same decision.
          </p>
          {ruleTables.map(([name, range]) => (
            <div key={name} className="flex items-center justify-between rounded-md border border-line bg-surface px-3 py-2">
              <span className="text-[13px] text-fg">{name}</span>
              <span className="shrink-0 whitespace-nowrap pl-2 font-mono text-[11px] text-tone-rule">{range}</span>
            </div>
          ))}
          <p className="text-[11px] leading-snug text-faint">Safety guards first · escalate by default</p>
        </Column>
        <Arrow />
        <Column title="Specialist agents" className="lg:flex-[1.25]">
          <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-1">
            {agents.map((a) => (
              <Node key={a.label} {...a} />
            ))}
          </div>
        </Column>
        <Arrow />
        <Column title="Outcome">
          <Node label="Human approval" detail="required for anything consequential" tone="human" />
          <Node label="Execute" detail="follow-up · payer reminder" tone="action" />
          <Node label="Escalate" detail="a person owns it" tone="human" />
        </Column>
      </div>

      <div className="mt-4 grid gap-2 sm:grid-cols-2">
        <div className="rounded-lg border border-line bg-surface px-4 py-3 text-[13px] text-muted">
          <span className="font-medium text-fg">Outside the Commander:</span> insurance-card OCR (Claude vision, human
          confirms) and voice reminders (n8n + Vapi, consent-gated).
        </div>
        <div className="rounded-lg border border-line bg-surface px-4 py-3 text-[13px] text-muted">
          <span className="font-medium text-fg">Under everything:</span> Supabase Auth + Postgres row-level security —
          each clinic is an isolated tenant.
        </div>
      </div>
    </figure>
  )
}
