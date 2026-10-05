import SectionHeader from '@/components/ui/SectionHeader'
import { projects } from '@/data/projects'
import ForesightCaseStudy from './work/ForesightCaseStudy'
import CaseStudy from './work/CaseStudy'
import SideProjects from './work/SideProjects'

export default function Work() {
  return (
    <section id="work" aria-labelledby="work-title" className="border-t border-line py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeader
          index="01"
          eyebrow="Selected work"
          id="work-title"
          title="Systems I’ve engineered, end to end."
          intro="Every project here is real, with code you can read. Descriptions come from the repositories themselves — no invented users, clients or metrics."
        />
        <ForesightCaseStudy />
        <div className="mt-24 space-y-24">
          {projects.map((project, i) => (
            <CaseStudy key={project.id} project={project} index={String(i + 2).padStart(2, '0')} />
          ))}
        </div>
        <SideProjects />
      </div>
    </section>
  )
}
