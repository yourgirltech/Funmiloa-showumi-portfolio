export interface SkillItem {
  name: string
  category: 'Frontend' | 'Animation' | 'Development Tools'
}

export interface SkillGroup {
  category: string
  items: string[]
}

export interface ProjectItem {
  id: string
  name: string
  tagline: string
  overview: string
  challenge: string
  solution: string
  features: string[]
  tech: string[]
  liveUrl: string
  githubUrl: string
  featured: boolean
  device: 'macbook' | 'phone'
  accent: string
  image?: string
}

export interface ServiceItem {
  title: string
  description: string
}

export interface ApproachStep {
  index: string
  title: string
  description: string
}
