import { motion } from 'framer-motion'
import {
  Atom,
  FileCode2,
  Braces,
  FileType2,
  Palette,
  Wind,
  Sparkles,
  Zap,
  GitBranch,
  Code2,
  Rocket,
  CloudUpload,
  MonitorCog,
} from 'lucide-react'
import SectionHeading from '@/components/ui/SectionHeading'
import { skillGroups } from '@/data/skills'

const iconMap: Record<string, React.ElementType> = {
  React: Atom,
  TypeScript: FileType2,
  JavaScript: Braces,
  HTML5: FileCode2,
  CSS3: Palette,
  'Tailwind CSS': Wind,
  'Framer Motion': Sparkles,
  GSAP: Zap,
  Git: GitBranch,
  GitHub: Code2,
  Vite: Rocket,
  Netlify: CloudUpload,
  'VS Code': MonitorCog,
}

export default function Skills() {
  return (
    <section id="skills" className="bg-warm-white px-6 py-28 md:px-10 md:py-36">
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow="Core Skills" title="Tools of the craft." align="center" />

        <div className="mt-20 space-y-16">
          {skillGroups.map((group, gi) => (
            <div key={group.category}>
              <motion.p
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.5 }}
                className="mb-6 font-mono text-xs uppercase tracking-[0.25em] text-sage-ink"
              >
                {group.category}
              </motion.p>

              <div className="flex flex-wrap gap-4">
                {group.items.map((item, i) => {
                  const Icon = iconMap[item] ?? Atom
                  return (
                    <motion.div
                      key={item}
                      data-cursor-hover
                      initial={{ opacity: 0, y: 24 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.6 }}
                      transition={{
                        duration: 0.55,
                        delay: gi * 0.05 + i * 0.06,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                      whileHover={{ y: -6, boxShadow: '0 20px 40px -20px rgba(23,23,23,0.18)' }}
                      className="flex items-center gap-3 rounded-2xl border border-charcoal/10 bg-ivory px-6 py-4 transition-colors hover:border-sage-deep/40 hover:bg-sage/30"
                    >
                      <Icon size={18} className="text-sage-deep" />
                      <span className="font-display text-base text-charcoal">{item}</span>
                    </motion.div>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
