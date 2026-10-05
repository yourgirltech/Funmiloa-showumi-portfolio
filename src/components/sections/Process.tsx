import Reveal from '@/components/ui/Reveal'
import SectionHeader from '@/components/ui/SectionHeader'
import { processSteps } from '@/data/site'

export default function Process() {
  return (
    <section id="process" aria-labelledby="process-title" className="border-t border-line py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeader
          index="03"
          eyebrow="How I work"
          id="process-title"
          title="Engineering first, AI second."
          intro="A model is one component of a system, not the system. This is how I keep the rest of it trustworthy."
        />
        <ol className="mt-14 grid gap-x-10 gap-y-2 md:grid-cols-2">
          {processSteps.map((step, i) => (
            <li key={step.index} className="border-t border-line py-6">
              <Reveal delay={(i % 2) * 0.05} className="flex gap-5">
                <span className="font-mono text-sm text-signal">{step.index}</span>
                <div>
                  <h3 className="font-display text-lg font-semibold tracking-tight">{step.title}</h3>
                  <p className="mt-2 leading-relaxed text-pretty text-muted">{step.body}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
