import { cn } from '@/lib/utils'

export default function TagList({ items, label, className }: { items: string[]; label: string; className?: string }) {
  return (
    <ul aria-label={label} className={cn('flex flex-wrap gap-1.5', className)}>
      {items.map((item) => (
        <li key={item} className="rounded-md border border-line px-2 py-1 font-mono text-[11px] text-muted">
          {item}
        </li>
      ))}
    </ul>
  )
}
