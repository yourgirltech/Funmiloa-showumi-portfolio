import Reveal from '@/components/ui/Reveal'
import ProjectLinks from '@/components/ui/ProjectLinks'
import TagList from '@/components/ui/TagList'
import { foresight } from '@/data/projects'
import CommanderDiagram from './CommanderDiagram'
import { Block, Decisions, Label } from './Block'

/** Verifiable properties of the codebase — not performance or usage metrics. */
const facts = [
  { value: '4', label: 'rule tables route every decision' },
  { value: '29', label: 'checks in the cross-clinic isolation proof' },
  { value: 'HITL', label: 'human approval before any consequential action' },
  { value: 'RLS', label: 'tenant isolation enforced in Postgres' },
]

export default function ForesightCaseStudy() {
  const p = foresight
  return (
    <article
      id={p.id}
      aria-labelledby="foresight-title"
      className="mt-16 scroll-mt-24 rounded-2xl border border-line bg-gradient-to-b from-surface to-ink p-5 sm:p-8 lg:p-12"
    >
      <Reveal className="grid gap-6 lg:grid-cols-12 lg:items-end">
        <div className="lg:col-span-8">
          <p className="font-mono text-xs text-faint">
            <span className="text-signal">01</span> · Featured case study · {p.category}
          </p>
          <h3 id="foresight-title" className="mt-3 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
            {p.name}
          </h3>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-pretty text-muted">{p.summary}</p>
        </div>
        <ProjectLinks links={p.links} className="lg:col-span-4 lg:justify-end" />
      </Reveal>

      <Reveal>
        <dl className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-line bg-line lg:grid-cols-4">
          {facts.map((f) => (
            <div key={f.label} className="bg-surface px-4 py-5">
              <dt className="sr-only">{f.label}</dt>
              <dd>
                <span className="block font-display text-3xl font-semibold text-fg">{f.value}</span>
                <span className="mt-1 block text-sm leading-snug text-muted">{f.label}</span>
              </dd>
            </div>
          ))}
        </dl>
      </Reveal>

      <Reveal className="mt-8">
        <CommanderDiagram />
      </Reveal>

      <div className="mt-12 grid gap-10 lg:grid-cols-3">
        <Reveal>
          <Block title="The problem">{p.problem}</Block>
        </Reveal>
        <Reveal delay={0.05}>
          <Block title="What I built">{p.built}</Block>
        </Reveal>
        <Reveal delay={0.1}>
          <Label>Demonstrates</Label>
          <TagList items={p.demonstrates} label="Foresight demonstrates" className="mt-3" />
        </Reveal>
      </div>

      <Reveal className="mt-12">
        <Label>Key engineering decisions</Label>
        <Decisions items={p.decisions} columns />
      </Reveal>

      <TagList items={p.stack} label="Foresight tech stack" className="mt-8" />
    </article>
  )
}
