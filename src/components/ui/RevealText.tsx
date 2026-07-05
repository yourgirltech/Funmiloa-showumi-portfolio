import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface RevealTextProps {
  text: string
  as?: 'h1' | 'h2' | 'h3' | 'p'
  className?: string
  splitBy?: 'word' | 'char'
  delay?: number
  once?: boolean
}

export default function RevealText({
  text,
  as = 'h2',
  className,
  splitBy = 'word',
  delay = 0,
  once = true,
}: RevealTextProps) {
  const Tag = as
  const pieces = splitBy === 'char' ? Array.from(text) : text.split(' ')

  return (
    <Tag className={cn('overflow-hidden', className)}>
      <motion.span
        className="inline-block"
        initial="hidden"
        whileInView="visible"
        viewport={{ once, amount: 0.6 }}
        transition={{ staggerChildren: splitBy === 'char' ? 0.018 : 0.06, delayChildren: delay }}
      >
        {pieces.map((piece, i) => (
          <motion.span
            key={i}
            className="inline-block"
            variants={{
              hidden: { y: '110%', rotate: 4 },
              visible: { y: '0%', rotate: 0 },
            }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          >
            {piece === ' ' ? '\u00A0' : piece}
            {splitBy === 'word' && i < pieces.length - 1 ? '\u00A0' : ''}
          </motion.span>
        ))}
      </motion.span>
    </Tag>
  )
}
