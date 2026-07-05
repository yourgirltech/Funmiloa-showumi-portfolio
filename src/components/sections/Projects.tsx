import { motion } from 'framer-motion'
import { ArrowUpRight, Code2 } from 'lucide-react'
import SectionHeading from '@/components/ui/SectionHeading'
import DeviceMockup from '@/components/ui/DeviceMockup'
import { projects } from '@/data/projects'
import { cn } from '@/lib/utils'

export default function Projects() {
  return (
    <section id="work" className="bg-ivory px-6 py-28 md:px-10 md:py-36">
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow="Featured Work" title="Selected projects." />

        <div className="mt-24 space-y-32">
          {projects.map((project, i) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className={cn(
                'grid grid-cols-1 items-center gap-14 lg:grid-cols-2',
                i % 2 === 1 && 'lg:[&>*:first-child]:order-2'
              )}
            >
              <div>
                {project.featured && (
                  <span className="mb-4 inline-block rounded-full bg-sage-deep/15 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-sage-ink">
                    Hero Project
                  </span>
                )}
                <h3 className="font-display text-3xl text-charcoal sm:text-4xl">
                  {project.name}
                </h3>
                <p className="mt-2 font-display text-lg italic text-slate">
                  {project.tagline}
                </p>

                <p className="mt-6 max-w-md text-sm leading-relaxed text-slate">
                  {project.overview}
                </p>

                <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-sage-ink">
                      Challenge
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-slate">{project.challenge}</p>
                  </div>
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-sage-ink">
                      Solution
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-slate">{project.solution}</p>
                  </div>
                </div>

                <ul className="mt-6 space-y-2">
                  {project.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm text-slate">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-sage-deep" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-charcoal/10 bg-warm-white px-3 py-1 font-mono text-[10px] uppercase tracking-[0.15em] text-slate"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-8 flex items-center gap-6">
                  <a
                    href={project.liveUrl}
                    data-cursor-hover
                    className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-[0.15em] text-charcoal transition-colors hover:text-sage-ink"
                  >
                    Live Demo <ArrowUpRight size={14} />
                  </a>
                  <a
                    href={project.githubUrl}
                    data-cursor-hover
                    className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-[0.15em] text-charcoal transition-colors hover:text-sage-ink"
                  >
                    <Code2 size={14} /> GitHub
                  </a>
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.92, rotate: i % 2 === 0 ? 2 : -2 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              >
                <DeviceMockup device={project.device} accent={project.accent} label={project.name} image={project.image} />
              </motion.div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
