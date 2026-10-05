import { ArrowUpRight } from 'lucide-react'
import type { ProjectLink } from '@/types'
import { cn } from '@/lib/utils'

const styles: Record<ProjectLink['kind'], string> = {
  'Live Demo': 'border-signal/40 bg-signal/10 text-signal hover:bg-signal/20',
  GitHub: 'border-line-strong text-fg hover:border-fg/40 hover:bg-white/5',
  'Case Study': 'border-line-strong text-fg hover:border-fg/40 hover:bg-white/5',
}

export default function ProjectLinks({ links, className }: { links: ProjectLink[]; className?: string }) {
  if (links.length === 0) return null
  return (
    <ul className={cn('flex flex-wrap gap-2', className)}>
      {links.map((link) => (
        <li key={link.href}>
          <a
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              'inline-flex items-center gap-1.5 rounded-full border px-3.5 py-1.5 text-sm font-medium transition-colors',
              styles[link.kind],
            )}
          >
            {link.kind}
            {link.label && <span className="text-muted">· {link.label}</span>}
            <ArrowUpRight aria-hidden="true" className="size-3.5" />
            <span className="sr-only">(opens in a new tab)</span>
          </a>
        </li>
      ))}
    </ul>
  )
}
