import type { NodeTone } from '@/types'

export const toneMeta: Record<NodeTone, { label: string; text: string; dot: string }> = {
  trigger: { label: 'Trigger', text: 'text-tone-trigger', dot: 'bg-tone-trigger' },
  rule: { label: 'Rules', text: 'text-tone-rule', dot: 'bg-tone-rule' },
  ai: { label: 'AI', text: 'text-tone-ai', dot: 'bg-tone-ai' },
  human: { label: 'Human', text: 'text-tone-human', dot: 'bg-tone-human' },
  data: { label: 'Data', text: 'text-tone-data', dot: 'bg-tone-data' },
  action: { label: 'Action', text: 'text-tone-action', dot: 'bg-tone-action' },
}
