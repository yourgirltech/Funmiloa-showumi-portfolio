import Reveal from '@/components/ui/Reveal'
import SectionHeader from '@/components/ui/SectionHeader'
import portrait from '@/assets/portrait.webp'

const principles = [
  'AI recommends. A human approves. Automation executes.',
  'If it involves money, eligibility or routing, it’s deterministic code.',
  'Every failure path ends with a person who knows about it.',
]

export default function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="border-t border-line py-24 md:py-32">
      <div className="mx-auto grid max-w-6xl gap-14 px-5 sm:px-8 lg:grid-cols-[1fr_1.4fr] lg:items-start">
        <Reveal className="mx-auto w-full max-w-sm lg:mx-0">
          <div className="overflow-hidden rounded-2xl border border-line bg-surface">
            <img
              src={portrait}
              alt="Portrait of Funmilola Showumi"
              width={800}
              height={738}
              loading="lazy"
              decoding="async"
              className="aspect-[4/5] h-full w-full object-cover"
            />
          </div>
        </Reveal>

        <div>
          <SectionHeader index="05" eyebrow="About" id="about-title" title="From interfaces to the systems behind them." />
          <Reveal delay={0.05} className="mt-6 space-y-5 text-lg leading-relaxed text-pretty text-muted">
            <p>
              I started as a frontend engineer and grew into full delivery — React and Next.js applications wired to
              real authentication, databases and payments. Today most of my work is AI systems: agents, voice agents
              and automations that run inside real business workflows.
            </p>
            <p>
              My background in accounting (ACCA candidate) shapes how I build. I care about reconciliation, audit
              trails and edge cases — which is exactly what AI systems need around them before anyone should trust
              them with real customers, patients or money.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <ul className="mt-10 border-t border-line">
              {principles.map((p) => (
                <li key={p} className="flex gap-4 border-b border-line py-4 text-fg/90">
                  <span aria-hidden="true" className="mt-2.5 size-1.5 shrink-0 rounded-full bg-signal" />
                  {p}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
