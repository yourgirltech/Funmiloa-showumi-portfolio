import type { ServiceItem, ApproachStep } from '@/types'

export const services: ServiceItem[] = [
  {
    title: 'React, JavaScript & TypeScript',
    description:
      'Scalable, type-safe applications built on modern React patterns, clean architecture, and dependable ES6+ JavaScript under the hood.',
  },
  {
    title: 'Interactive UI Implementation',
    description:
      'Pixel-accurate translation of design files into living interfaces, with micro-interactions and motion that make them feel alive.',
  },
  {
    title: 'Landing Pages',
    description:
      'High-craft, high-converting pages built to make a strong first impression.',
  },
  {
    title: 'Modern Web Applications',
    description:
      'End-to-end frontend builds for products that need to feel fast and premium.',
  },
  {
    title: 'Responsive Websites',
    description:
      'Interfaces tuned for every screen, from small phones to ultrawide displays.',
  },
  {
    title: 'Performance Optimisation',
    description:
      'Faster load times and smoother interactions through disciplined engineering.',
  },
]

export const approachSteps: ApproachStep[] = [
  { index: '01', title: 'Research', description: 'Understanding the product, the audience, and the problem worth solving.' },
  { index: '02', title: 'Plan', description: 'Mapping structure, content, and interaction before a single pixel is placed.' },
  { index: '03', title: 'Design', description: 'Shaping type, colour, and layout into a system with a clear point of view.' },
  { index: '04', title: 'Develop', description: 'Building clean, scalable React and TypeScript with production standards.' },
  { index: '05', title: 'Refine', description: 'Polishing motion, spacing, and detail until nothing feels accidental.' },
  { index: '06', title: 'Launch', description: 'Shipping fast, accessible, and measured against real performance targets.' },
]
