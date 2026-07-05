import { useRef, type ReactNode, type ButtonHTMLAttributes } from 'react'
import { motion, useMotionValue, useSpring, type HTMLMotionProps } from 'framer-motion'
import { cn } from '@/lib/utils'

type NativeButtonProps = Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  'onAnimationStart' | 'onAnimationEnd' | 'onDrag' | 'onDragStart' | 'onDragEnd'
>

interface MagneticButtonProps extends NativeButtonProps, Pick<HTMLMotionProps<'button'>, never> {
  children: ReactNode
  variant?: 'primary' | 'secondary'
}

export default function MagneticButton({
  children,
  variant = 'primary',
  className,
  ...props
}: MagneticButtonProps) {
  const ref = useRef<HTMLButtonElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 200, damping: 15, mass: 0.3 })
  const springY = useSpring(y, { stiffness: 200, damping: 15, mass: 0.3 })

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const relX = e.clientX - rect.left - rect.width / 2
    const relY = e.clientY - rect.top - rect.height / 2
    x.set(relX * 0.35)
    y.set(relY * 0.35)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.button
      ref={ref}
      data-cursor-hover
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: springX, y: springY }}
      whileTap={{ scale: 0.96 }}
      className={cn(
        'group relative inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 text-sm font-medium tracking-wide transition-colors duration-300',
        variant === 'primary'
          ? 'bg-charcoal text-warm-white hover:bg-sage-ink'
          : 'border border-charcoal/15 text-charcoal hover:border-sage-deep hover:text-sage-ink',
        className
      )}
      {...props}
    >
      {children}
    </motion.button>
  )
}
