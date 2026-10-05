import Reveal from '@/components/ui/Reveal'
import SectionHeader from '@/components/ui/SectionHeader'
import { capabilities } from '@/data/site'

export default function Capabilities() {
  return (
    <section id="capabilities" aria-labelledby="capabilities-title" className="border-t border-line py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeader
          index="02"
          eyebrow="What I build"
          id="capabilities-title"
          title="AI systems that do real work — safely."
          intro="The common thread: models handle language and judgment, deterministic code handles anything that must be exact, and a person stays in control of what matters."
        />
        <ul className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((c, i) => (
            <li key={c.title} className="flex flex-col bg-ink p-6 sm:p-7">
              <Reveal delay={(i % 3) * 0.05} className="flex h-full flex-col">
                <span className="font-mono text-xs text-faint">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="mt-4 font-display text-xl font-semibold tracking-tight">{c.title}</h3>
                <p className="mt-3 flex-1 leading-relaxed text-pretty text-muted">{c.body}</p>
                <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.12em] text-faint">
                  Proof <span className="text-signal">→</span> {c.proof}
                </p>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
