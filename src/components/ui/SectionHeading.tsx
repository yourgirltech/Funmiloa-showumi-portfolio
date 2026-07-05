import RevealText from './RevealText'
import { cn } from '@/lib/utils'

interface SectionHeadingProps {
  eyebrow: string
  title: string
  align?: 'left' | 'center'
  className?: string
}

export default function SectionHeading({
  eyebrow,
  title,
  align = 'left',
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn(align === 'center' && 'text-center', className)}>
      <div
        className={cn(
          'mb-5 flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-sage-ink font-mono',
          align === 'center' && 'justify-center'
        )}
      >
        <span className="h-px w-8 bg-sage-deep" />
        {eyebrow}
      </div>
      <RevealText
        text={title}
        as="h2"
        className="font-display text-4xl leading-[1.1] text-charcoal sm:text-5xl md:text-6xl"
      />
    </div>
  )
}
