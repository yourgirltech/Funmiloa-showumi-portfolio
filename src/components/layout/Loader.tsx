import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface LoaderProps {
  onComplete: () => void
}

export default function Loader({ onComplete }: LoaderProps) {
  const [progress, setProgress] = useState(0)
  const [done, setDone] = useState(false)

  useEffect(() => {
    const start = performance.now()
    const duration = 1500

    let frame: number
    const tick = (now: number) => {
      const elapsed = now - start
      const pct = Math.min(100, Math.round((elapsed / duration) * 100))
      setProgress(pct)
      if (pct < 100) {
        frame = requestAnimationFrame(tick)
      } else {
        setTimeout(() => setDone(true), 250)
      }
    }
    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [])

  return (
    <AnimatePresence onExitComplete={onComplete}>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-charcoal"
          exit={{
            clipPath: 'inset(0% 0% 100% 0%)',
            transition: { duration: 0.9, ease: [0.83, 0, 0.17, 1] },
          }}
        >
          <div className="flex flex-col items-center gap-6">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="font-display text-2xl italic text-warm-white/90"
            >
              Funmilola Showumi
            </motion.p>
            <div className="h-px w-40 overflow-hidden bg-warm-white/15 sm:w-56">
              <motion.div
                className="h-full bg-sage"
                animate={{ width: `${progress}%` }}
                transition={{ ease: 'linear' }}
              />
            </div>
            <span className="font-mono text-xs tracking-[0.3em] text-warm-white/50">
              {String(progress).padStart(2, '0')}%
            </span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
