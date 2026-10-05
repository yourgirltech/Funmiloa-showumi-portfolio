import type { ReactNode } from 'react'

export function Label({ children }: { children: ReactNode }) {
  return <h4 className="font-mono text-[11px] uppercase tracking-[0.16em] text-faint">{children}</h4>
}

export function Block({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div>
      <Label>{title}</Label>
      <p className="mt-3 leading-relaxed text-pretty text-muted">{children}</p>
    </div>
  )
}

export function Decisions({ items, columns }: { items: string[]; columns?: boolean }) {
  return (
    <ol className={columns ? 'mt-4 grid gap-x-10 border-t border-line lg:grid-cols-2' : 'mt-4 border-t border-line'}>
      {items.map((item, i) => (
        <li key={item} className="flex gap-4 border-b border-line py-4">
          <span className="pt-0.5 font-mono text-xs text-signal">{String(i + 1).padStart(2, '0')}</span>
          <p className="text-[15px] leading-relaxed text-fg/90 text-pretty">{item}</p>
        </li>
      ))}
    </ol>
  )
}
