import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <footer className="border-t border-charcoal/10 bg-warm-white px-6 py-10 md:px-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 sm:flex-row">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-display text-base text-charcoal/70"
        >
          Funmilola Showumi <span className="text-sage-deep">&mdash;</span> Frontend/Full-Stack & AI/Automation Engineer
        </motion.p>
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-slate">
          &copy; {new Date().getFullYear()} &middot; Crafted with care
        </p>
      </div>
    </footer>
  )
}
