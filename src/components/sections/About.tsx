import { motion } from 'framer-motion'
import SectionHeading from '@/components/ui/SectionHeading'

const points = [
  {
    title: 'Interfaces',
    body: 'Beautiful, considered UI built with the same care as the code behind it.',
  },
  {
    title: 'Performance',
    body: 'Fast by default \u2014 optimised renders, lazy loading, and lean bundles.',
  },
  {
    title: 'Architecture',
    body: 'Scalable React applications built on clean, reusable component systems.',
  },
  {
    title: 'Detail',
    body: 'Accessible, responsive, and animated with intention down to the pixel.',
  },
]

export default function About() {
  return (
    <section id="about" className="bg-ivory px-6 py-28 md:px-10 md:py-36">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionHeading eyebrow="About" title="Design meets engineering." />

          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-xl text-balance text-xl leading-relaxed text-slate sm:text-2xl"
            >
              I build interfaces that feel effortless to use and are engineered
              to last. My work sits at the intersection of design sensitivity
              and frontend rigour &mdash; scalable React architecture, thoughtful
              motion, and an obsession with the small details most people
              never notice, but always feel.
            </motion.p>

            <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2">
              {points.map((point, i) => (
                <motion.div
                  key={point.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="border-t border-charcoal/10 pt-5"
                >
                  <h3 className="font-display text-lg text-charcoal">{point.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate">{point.body}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
