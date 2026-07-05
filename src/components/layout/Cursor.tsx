import { useEffect, useRef, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function Cursor() {
  const [isVisible, setIsVisible] = useState(false)
  const [isHovering, setIsHovering] = useState(false)
  const [isTouch, setIsTouch] = useState(false)
  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)
  const springX = useSpring(cursorX, { damping: 30, stiffness: 300, mass: 0.4 })
  const springY = useSpring(cursorY, { damping: 30, stiffness: 300, mass: 0.4 })
  const raf = useRef<number | null>(null)

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) {
      setIsTouch(true)
      return
    }

    const move = (e: MouseEvent) => {
      cursorX.set(e.clientX)
      cursorY.set(e.clientY)
      if (!isVisible) setIsVisible(true)

      const target = e.target as HTMLElement
      const interactive = target.closest('a, button, [data-cursor-hover]')
      setIsHovering(!!interactive)
    }

    window.addEventListener('mousemove', move)
    return () => {
      window.removeEventListener('mousemove', move)
      if (raf.current) cancelAnimationFrame(raf.current)
    }
  }, [cursorX, cursorY, isVisible])

  if (isTouch) return null

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[70] mix-blend-multiply hidden md:block"
      style={{
        x: springX,
        y: springY,
        translateX: '-50%',
        translateY: '-50%',
        opacity: isVisible ? 1 : 0,
      }}
    >
      <motion.div
        animate={{
          width: isHovering ? 56 : 18,
          height: isHovering ? 56 : 18,
          backgroundColor: isHovering ? 'rgba(143,163,150,0.35)' : 'rgba(23,23,23,0.5)',
        }}
        transition={{ type: 'spring', damping: 20, stiffness: 300 }}
        className="rounded-full"
      />
    </motion.div>
  )
}
