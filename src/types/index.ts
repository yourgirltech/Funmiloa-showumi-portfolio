export type LinkKind = 'Live Demo' | 'GitHub' | 'Case Study'

export interface ProjectLink {
  kind: LinkKind
  href: string
  /** Optional qualifier when a project has more than one link of a kind. */
  label?: string
}

/** What a diagram node represents — drives its colour and legend label. */
export type NodeTone = 'trigger' | 'rule' | 'ai' | 'human' | 'data' | 'action'

export interface FlowNode {
  label: string
  detail?: string
  tone: NodeTone
}

export interface Project {
  id: string
  name: string
  category: string
  summary: string
  problem: string
  built: string
  decisions: string[]
  demonstrates: string[]
  stack: string[]
  links: ProjectLink[]
  /** Left-to-right pipeline of the system's architecture. */
  flow?: FlowNode[]
  image?: { src: string; alt: string; width: number; height: number }
  note?: string
}

export interface SideProject {
  name: string
  description: string
  stack: string[]
  href?: string
  note?: string
}

export interface Capability {
  title: string
  body: string
  proof: string
}

export interface ProcessStep {
  index: string
  title: string
  body: string
}

export interface StackGroup {
  title: string
  items: string[]
}
