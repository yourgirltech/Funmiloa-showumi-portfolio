import { Fragment } from 'react'
import type { FlowNode } from '@/types'
import { cn } from '@/lib/utils'
import { toneMeta } from './tones'

function Connector() {
  return (
    <span
      aria-hidden="true"
      className="relative ml-6 block h-5 w-px shrink-0 overflow-hidden bg-line-strong lg:ml-0 lg:h-px lg:w-6 lg:self-center"
    >
      <span className="connector-pulse absolute inset-y-0 left-0 hidden w-1/3 bg-signal/70 lg:block" />
    </span>
  )
}

interface FlowDiagramProps {
  nodes: FlowNode[]
  title: string
  className?: string
}

/** A left-to-right (stacked on small screens) architecture pipeline. */
export default function FlowDiagram({ nodes, title, className }: FlowDiagramProps) {
  return (
    <figure className={cn('rounded-xl border border-line bg-surface p-4 sm:p-5', className)}>
      <figcaption className="mb-4 font-mono text-[11px] uppercase tracking-[0.16em] text-faint">
        Architecture · {title}
      </figcaption>
      <ol className="flex flex-col lg:flex-row lg:items-stretch">
        {nodes.map((node, i) => {
          const tone = toneMeta[node.tone]
          return (
            <Fragment key={node.label}>
              <li className="min-w-0 lg:flex-1">
                <div className="h-full rounded-lg border border-line bg-raised px-3.5 py-3">
                  <span className={cn('flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-wider', tone.text)}>
                    <span aria-hidden="true" className={cn('size-1.5 rounded-full', tone.dot)} />
                    {tone.label}
                  </span>
                  <p className="mt-1.5 text-sm font-medium text-fg">{node.label}</p>
                  {node.detail && <p className="mt-0.5 text-xs leading-snug text-faint">{node.detail}</p>}
                </div>
              </li>
              {i < nodes.length - 1 && <Connector />}
            </Fragment>
          )
        })}
      </ol>
    </figure>
  )
}
