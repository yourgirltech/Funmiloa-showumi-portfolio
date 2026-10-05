import Reveal from '@/components/ui/Reveal'
import SectionHeader from '@/components/ui/SectionHeader'
import { stack } from '@/data/site'

export default function Stack() {
  return (
    <section id="stack" aria-labelledby="stack-title" className="border-t border-line py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeader
          index="04"
          eyebrow="Technical stack"
          id="stack-title"
          title="Tools I ship with."
          intro="Chosen per problem, not per trend."
        />
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stack.map((group, i) => (
            <Reveal key={group.title} delay={i * 0.05}>
              <h3 className="font-mono text-[11px] uppercase tracking-[0.16em] text-faint">{group.title}</h3>
              <ul className="mt-4 space-y-2.5 border-t border-line pt-4">
                {group.items.map((item) => (
                  <li key={item} className="text-fg/90">
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
