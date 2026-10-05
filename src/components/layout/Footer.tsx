import { site } from '@/data/site'

export default function Footer() {
  return (
    <footer className="border-t border-line py-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 text-sm text-faint sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p>
          © {new Date().getFullYear()} {site.name} · {site.role}
        </p>
        <ul className="flex gap-5 [&_a]:inline-flex [&_a]:min-h-10 [&_a]:items-center">
          <li>
            <a href={site.github} target="_blank" rel="noopener noreferrer" className="hover:text-fg">
              GitHub<span className="sr-only"> (opens in a new tab)</span>
            </a>
          </li>
          <li>
            <a href={site.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-fg">
              LinkedIn<span className="sr-only"> (opens in a new tab)</span>
            </a>
          </li>
          <li>
            <a href="#top" className="hover:text-fg">
              Back to top
            </a>
          </li>
        </ul>
      </div>
    </footer>
  )
}
