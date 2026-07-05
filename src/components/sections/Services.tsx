import { motion } from 'framer-motion'
import SectionHeading from '@/components/ui/SectionHeading'
import { services } from '@/data/content'

export default function Services() {
  return (
    <section id="services" className="bg-ivory px-6 py-28 md:px-10 md:py-36">
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow="Services" title="Ways I can help." />

        <div className="mt-20 grid grid-cols-1 gap-px overflow-hidden rounded-3xl border border-charcoal/10 bg-charcoal/10 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.55, delay: (i % 3) * 0.08, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ backgroundColor: '#DDE6DE' }}
              className="group flex min-h-[220px] flex-col justify-between bg-warm-white p-8 transition-colors"
            >
              <span className="font-mono text-xs text-sage-deep">
                {String(i + 1).padStart(2, '0')}
              </span>
              <div>
                <h3 className="font-display text-xl text-charcoal">{service.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
