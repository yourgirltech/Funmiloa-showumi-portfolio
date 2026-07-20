import { useRef } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { ArrowDown, ArrowUpRight, Sparkles } from 'lucide-react'
import MagneticButton from '@/components/ui/MagneticButton'
import RevealText from '@/components/ui/RevealText'
import portrait from '@/assets/portrait.jpeg'

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null)
  const mx = useMotionValue(0)
  const my = useMotionValue(0)

  const rotateX = useSpring(useTransform(my, [-0.5, 0.5], [6, -6]), { damping: 20, stiffness: 120 })
  const rotateY = useSpring(useTransform(mx, [-0.5, 0.5], [-6, 6]), { damping: 20, stiffness: 120 })
  const cardX = useSpring(useTransform(mx, [-0.5, 0.5], [-14, 14]), { damping: 20, stiffness: 100 })
  const cardY = useSpring(useTransform(my, [-0.5, 0.5], [-14, 14]), { damping: 20, stiffness: 100 })

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect()
    if (!rect) return
    mx.set((e.clientX - rect.left) / rect.width - 0.5)
    my.set((e.clientY - rect.top) / rect.height - 0.5)
  }

  return (
    <section
      id="hero"
      ref={ref}
      onMouseMove={handleMouseMove}
      className="relative flex min-h-[100svh] items-center overflow-hidden bg-warm-white px-6 pt-32 pb-20 md:px-10"
    >
      {/* ambient background */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <motion.div
          animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -left-40 top-10 h-[28rem] w-[28rem] rounded-full bg-sage/50 blur-[110px]"
        />
        <motion.div
          animate={{ x: [0, -20, 0], y: [0, 25, 0] }}
          transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          className="absolute -right-32 bottom-0 h-[24rem] w-[24rem] rounded-full bg-champagne/60 blur-[110px]"
        />
      </div>

      <div className="relative mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-10 md:grid-cols-[1.15fr_0.85fr] md:gap-8 lg:gap-16">
        {/* headline — original first position, unchanged on desktop */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.7 }}
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-charcoal/10 bg-ivory px-4 py-1.5 font-mono text-xs uppercase tracking-[0.2em] text-sage-ink"
          >
            <Sparkles size={13} className="text-sage-deep" />
            Available for select projects
          </motion.div>

          <RevealText
            text="Funmilola Showumi"
            as="h1"
            splitBy="char"
            delay={0.3}
            className="font-display text-[13vw] leading-[0.98] tracking-tight text-charcoal sm:text-[9vw] md:text-[6.2vw] lg:text-[5.4vw]"
          />

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="mt-4 flex items-center gap-4"
          >
            <span className="h-px w-10 bg-sage-deep" />
            <p className="font-display text-xl italic text-slate sm:text-2xl">Frontend Developer</p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 max-w-md text-balance text-base leading-relaxed text-slate sm:text-lg"
          >
            Crafting premium web experiences with React, Next.js, Javascript, TypeScript and modern
            frontend technologies.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <MagneticButton
              onClick={() =>
                document.querySelector('#work')?.scrollIntoView({ behavior: 'smooth' })
              }
            >
              View Projects
              <ArrowUpRight size={16} />
            </MagneticButton>
            <MagneticButton
              variant="secondary"
              onClick={() =>
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
              }
            >
              Get In Touch
            </MagneticButton>
          </motion.div>
        </div>

        {/* portrait + floating card — original second position; order-first only reorders visually on mobile */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 1, ease: [0.16, 1, 0.3, 1] }}
          style={{ perspective: 1200 }}
          className="relative order-first mx-auto mb-4 aspect-[5/4] w-full max-w-md md:order-none md:mb-0 md:aspect-[4/5] md:max-w-sm"
        >
          <motion.div
            style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
            className="relative h-full w-full"
          >
            <motion.div
              initial={{ clipPath: 'inset(0% 0% 100% 0%)' }}
              animate={{ clipPath: 'inset(0% 0% 0% 0%)' }}
              transition={{ delay: 0.3, duration: 1.1, ease: [0.83, 0, 0.17, 1] }}
              className="absolute inset-0 overflow-hidden rounded-[2rem] border border-charcoal/10 shadow-[0_40px_80px_-30px_rgba(23,23,23,0.25)]"
            >
              <img
                src={portrait}
                alt="Portrait of Funmilola Showumi"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/25 via-transparent to-sage/10" />
              <div className="absolute inset-0 bg-gradient-to-br from-white/15 via-transparent to-transparent mix-blend-overlay" />
            </motion.div>

            {/* floating glass card — sits inside the frame on mobile, floats outside it on desktop */}
            <motion.div
              style={{ x: cardX, y: cardY, transformStyle: 'preserve-3d', translateZ: 60 }}
              className="absolute bottom-4 left-4 w-40 rounded-2xl border border-white/40 bg-white/60 p-4 shadow-lg backdrop-blur-xl md:-left-8 md:top-10 md:bottom-auto md:w-44 lg:-left-10 lg:w-48"
            >
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-sage-ink">Focus</p>
              <p className="mt-1 font-display text-base leading-snug text-charcoal">React, Next.js &amp; TypeScript</p>
            </motion.div>

            {/* rotating seal badge — mobile-only signature detail */}
            <motion.div
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.9, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="absolute -top-4 -right-4 z-10 md:hidden"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 16, repeat: Infinity, ease: 'linear' }}
                className="relative flex h-20 w-20 items-center justify-center"
              >
                <svg viewBox="0 0 100 100" className="h-20 w-20 drop-shadow-md">
                  <defs>
                    <path
                      id="badgeCirclePath"
                      d="M 50,50 m -38,0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0"
                    />
                  </defs>
                  <circle cx="50" cy="50" r="49" className="fill-warm-white/95" />
                  <text className="font-mono fill-sage-ink" style={{ fontSize: '7.2px', letterSpacing: '1.5px' }}>
                    <textPath href="#badgeCirclePath" startOffset="0%">
                      AVAILABLE FOR WORK &#8226; FRONTEND DEVELOPER &#8226;{' '}
                    </textPath>
                  </text>
                </svg>
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 16, repeat: Infinity, ease: 'linear' }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-sage-deep text-warm-white shadow-sm">
                    <Sparkles size={14} />
                  </span>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.7, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-slate"
        aria-label="Scroll to About section"
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowDown size={16} />
        </motion.span>
      </motion.a>
    </section>
  )
}