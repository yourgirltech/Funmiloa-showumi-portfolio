import { motion } from 'framer-motion'
import SectionHeading from '@/components/ui/SectionHeading'
import { approachSteps } from '@/data/content'

export default function Approach() {
  return (
    <section id="approach" className="bg-warm-white px-6 py-28 md:px-10 md:py-36">
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow="My Approach" title="How I build products." align="center" />

        <div className="relative mt-24">
          <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-charcoal/10 md:block" />

          <div className="space-y-16 md:space-y-24">
            {approachSteps.map((step, i) => (
              <motion.div
                key={step.index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className={`grid grid-cols-1 items-center gap-6 md:grid-cols-2 md:gap-16 ${
                  i % 2 === 1 ? 'md:text-right' : ''
                }`}
              >
                <div className={i % 2 === 1 ? 'md:order-2' : ''}>
                  <span className="font-display text-6xl italic text-sage-deep/40 sm:text-7xl">
                    {step.index}
                  </span>
                  <h3 className="mt-2 font-display text-3xl text-charcoal">{step.title}</h3>
                  <p className="mt-3 max-w-sm text-sm leading-relaxed text-slate md:ml-0">
                    {step.description}
                  </p>
                </div>
                <div
                  className={`hidden md:flex md:items-center ${
                    i % 2 === 1 ? 'md:order-1 md:justify-end' : 'md:justify-start'
                  }`}
                >
                  <motion.span
                    whileInView={{ scale: [0.8, 1] }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="h-3 w-3 rounded-full border-2 border-sage-deep bg-warm-white"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
