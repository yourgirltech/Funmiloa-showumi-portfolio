import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'

const links = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#work', label: 'Work' },
  { href: '#approach', label: 'Approach' },
  { href: '#services', label: 'Services' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = links
      .map((l) => document.querySelector<HTMLElement>(l.href))
      .filter(Boolean) as HTMLElement[]

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`)
        })
      },
      { rootMargin: '-45% 0px -45% 0px' }
    )
    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        className={cn(
          'fixed inset-x-0 top-0 z-50 transition-all duration-500',
          scrolled ? 'bg-warm-white/80 backdrop-blur-md shadow-[0_1px_0_0_rgba(23,23,23,0.06)]' : 'bg-transparent'
        )}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-10">
          <a href="#hero" data-cursor-hover className="font-display text-lg tracking-tight text-charcoal">
            Funmilola<span className="text-sage-deep">.</span>
          </a>

          <ul className="hidden items-center gap-8 md:flex">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  data-cursor-hover
                  className={cn(
                    'relative font-mono text-xs uppercase tracking-[0.15em] transition-colors',
                    active === link.href ? 'text-charcoal' : 'text-slate hover:text-charcoal'
                  )}
                >
                  {link.label}
                  {active === link.href && (
                    <motion.span
                      layoutId="nav-indicator"
                      className="absolute -bottom-2 left-0 h-px w-full bg-sage-deep"
                    />
                  )}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#contact"
            data-cursor-hover
            className="hidden rounded-full border border-charcoal/15 px-5 py-2 font-mono text-xs uppercase tracking-[0.15em] text-charcoal transition-colors hover:border-sage-deep hover:text-sage-ink md:inline-flex"
          >
            Let&apos;s talk
          </a>

          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((o) => !o)}
            className="text-charcoal md:hidden"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ clipPath: 'inset(0 0 100% 0)' }}
            animate={{ clipPath: 'inset(0 0 0% 0)' }}
            exit={{ clipPath: 'inset(0 0 100% 0)' }}
            transition={{ duration: 0.5, ease: [0.83, 0, 0.17, 1] }}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-8 bg-charcoal md:hidden"
          >
            {links.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 + i * 0.06 }}
                className="font-display text-3xl text-warm-white/90"
              >
                {link.label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
