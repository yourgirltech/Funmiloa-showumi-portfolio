import { ArrowUpRight } from 'lucide-react'
import Reveal from '@/components/ui/Reveal'
import TagList from '@/components/ui/TagList'
import { sideProjects } from '@/data/projects'

export default function SideProjects() {
  return (
    <section aria-labelledby="also-built-title" className="mt-24 border-t border-line pt-12">
      <Reveal>
        <h3 id="also-built-title" className="font-display text-2xl font-semibold tracking-tight">
          Also built
        </h3>
        <p className="mt-2 text-muted">Smaller automations, each solving one workflow end to end.</p>
      </Reveal>
      <ul className="mt-8 grid gap-4 md:grid-cols-2">
        {sideProjects.map((s) => (
          <li key={s.name} className="flex h-full flex-col rounded-xl border border-line bg-surface p-5">
            <div className="flex items-start justify-between gap-4">
              <h4 className="font-medium text-fg">{s.name}</h4>
              {s.href ? (
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="-my-2 inline-flex min-h-10 shrink-0 items-center gap-1 text-sm text-muted transition-colors hover:text-fg"
                >
                  GitHub <ArrowUpRight aria-hidden="true" className="size-3.5" />
                  <span className="sr-only">for {s.name} (opens in a new tab)</span>
                </a>
              ) : (
                s.note && <span className="shrink-0 font-mono text-[11px] text-faint">{s.note}</span>
              )}
            </div>
            <p className="mt-2 flex-1 text-[15px] leading-relaxed text-muted">{s.description}</p>
            <TagList items={s.stack} label={`${s.name} stack`} className="mt-4" />
          </li>
        ))}
      </ul>
    </section>
  )
}
