import Reveal from './Reveal'

interface SectionHeaderProps {
  index: string
  eyebrow: string
  title: string
  intro?: string
  id?: string
}

export default function SectionHeader({ index, eyebrow, title, intro, id }: SectionHeaderProps) {
  return (
    <Reveal className="max-w-3xl">
      <p className="font-mono text-xs uppercase tracking-[0.18em] text-faint">
        <span className="text-signal">{index}</span> / {eyebrow}
      </p>
      <h2 id={id} className="mt-4 font-display text-3xl font-semibold tracking-tight text-balance sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {intro && <p className="mt-5 text-lg leading-relaxed text-pretty text-muted">{intro}</p>}
    </Reveal>
  )
}
