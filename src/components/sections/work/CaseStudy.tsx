import Reveal from '@/components/ui/Reveal'
import ProjectLinks from '@/components/ui/ProjectLinks'
import TagList from '@/components/ui/TagList'
import FlowDiagram from '@/components/ui/FlowDiagram'
import type { Project } from '@/types'
import { Block, Decisions, Label } from './Block'

export default function CaseStudy({ project: p, index }: { project: Project; index: string }) {
  const titleId = `${p.id}-title`
  return (
    <article id={p.id} aria-labelledby={titleId} className="scroll-mt-24 border-t border-line pt-12">
      <Reveal className="grid gap-6 lg:grid-cols-12 lg:items-end">
        <div className="lg:col-span-8">
          <p className="font-mono text-xs text-faint">
            <span className="text-signal">{index}</span> · {p.category}
          </p>
          <h3 id={titleId} className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            {p.name}
          </h3>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-pretty text-muted">{p.summary}</p>
        </div>
        <ProjectLinks links={p.links} className="lg:col-span-4 lg:justify-end" />
      </Reveal>

      {p.flow && (
        <Reveal className="mt-10">
          <FlowDiagram nodes={p.flow} title={p.name} />
        </Reveal>
      )}

      <div className="mt-10 grid gap-10 lg:grid-cols-12">
        <Reveal className="space-y-8 lg:col-span-5">
          <Block title="The problem">{p.problem}</Block>
          <Block title="What I built">{p.built}</Block>
          <div>
            <Label>Demonstrates</Label>
            <TagList items={p.demonstrates} label={`${p.name} demonstrates`} className="mt-3" />
          </div>
        </Reveal>
        <Reveal delay={0.05} className="lg:col-span-7">
          {p.image && (
            <div className="mb-8 overflow-hidden rounded-xl border border-line bg-surface">
              <img
                src={p.image.src}
                alt={p.image.alt}
                width={p.image.width}
                height={p.image.height}
                loading="lazy"
                decoding="async"
                className="h-auto w-full"
              />
            </div>
          )}
          <Label>Key engineering decisions</Label>
          <Decisions items={p.decisions} />
        </Reveal>
      </div>

      <TagList items={p.stack} label={`${p.name} tech stack`} className="mt-8" />
    </article>
  )
}
