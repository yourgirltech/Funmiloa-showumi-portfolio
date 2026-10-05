import { useState, type FormEvent } from 'react'
import { ArrowRight, ArrowUpRight, Loader2 } from 'lucide-react'
import Reveal from '@/components/ui/Reveal'
import { contactHref, site } from '@/data/site'

/** Web3Forms access keys are designed for client-side use; it still lives in env, not source. */
const WEB3FORMS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY as string | undefined

const brief = [
  'The workflow as it runs today',
  'The tools and data it touches',
  'Where it breaks or costs time',
  'What “done” would look like',
]

type Status = 'idle' | 'sending' | 'sent' | 'error'

const field =
  'mt-2 w-full rounded-lg border border-line-strong bg-ink px-3.5 py-2.5 text-fg placeholder:text-faint focus:border-signal focus:outline-none focus:ring-1 focus:ring-signal'

function ContactForm({ accessKey }: { accessKey: string }) {
  const [status, setStatus] = useState<Status>('idle')

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    if (data.get('botcheck')) return

    setStatus('sending')
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: accessKey,
          subject: `Portfolio enquiry from ${String(data.get('name') ?? '')}`,
          from_name: data.get('name'),
          name: data.get('name'),
          email: data.get('email'),
          message: data.get('message'),
        }),
      })
      const json = (await res.json().catch(() => ({}))) as { success?: boolean }
      if (!res.ok || !json.success) throw new Error('submit failed')
      form.reset()
      setStatus('sent')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'sent') {
    return (
      <p role="status" className="rounded-xl border border-signal/40 bg-signal/10 p-6 text-fg">
        Thanks — your message is in. I’ll reply to the email you gave.
      </p>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <input type="checkbox" name="botcheck" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block text-sm text-muted">
          Name
          <input name="name" required autoComplete="name" className={field} />
        </label>
        <label className="block text-sm text-muted">
          Email
          <input name="email" type="email" required autoComplete="email" className={field} />
        </label>
      </div>
      <label className="block text-sm text-muted">
        What would you like to automate or build?
        <textarea name="message" required rows={5} className={`${field} resize-y`} />
      </label>
      <div className="flex flex-wrap items-center gap-4">
        <button
          type="submit"
          disabled={status === 'sending'}
          className="inline-flex items-center gap-2 rounded-full bg-signal px-5 py-3 text-sm font-semibold text-ink transition hover:brightness-110 disabled:opacity-60"
        >
          {status === 'sending' ? (
            <>
              <Loader2 aria-hidden="true" className="size-4 animate-spin" /> Sending…
            </>
          ) : (
            <>
              Send message <ArrowRight aria-hidden="true" className="size-4" />
            </>
          )}
        </button>
        <p aria-live="polite" className="text-sm text-tone-action">
          {status === 'error' && (
            <>
              That didn’t send. Please email{' '}
              <a href={contactHref} className="underline">
                {site.email}
              </a>{' '}
              instead.
            </>
          )}
        </p>
      </div>
    </form>
  )
}

export default function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="border-t border-line py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid gap-12 rounded-2xl border border-line bg-surface p-6 sm:p-10 lg:grid-cols-[1fr_1.1fr] lg:p-14">
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-faint">
              <span className="text-signal">06</span> / Contact
            </p>
            <h2 id="contact-title" className="mt-4 font-display text-3xl font-semibold tracking-tight text-balance sm:text-4xl md:text-5xl">
              Have a workflow that should run itself?
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-pretty text-muted">
              Tell me about it. I’ll tell you honestly whether AI belongs in it — and what I would build.
            </p>
            <h3 className="mt-8 font-mono text-[11px] uppercase tracking-[0.16em] text-faint">A useful first message covers</h3>
            <ul className="mt-3 space-y-2 text-fg/90">
              {brief.map((b) => (
                <li key={b} className="flex gap-3">
                  <span aria-hidden="true" className="mt-2.5 size-1.5 shrink-0 rounded-full bg-signal" />
                  {b}
                </li>
              ))}
            </ul>
            <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-1 text-sm [&_a]:inline-flex [&_a]:min-h-10 [&_a]:items-center">
              <li>
                <a href={contactHref} className="text-fg underline decoration-line-strong underline-offset-4 hover:decoration-signal">
                  {site.email}
                </a>
              </li>
              {[
                { label: 'LinkedIn', href: site.linkedin },
                { label: 'GitHub', href: site.github },
              ].map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-muted transition-colors hover:text-fg"
                  >
                    {l.label} <ArrowUpRight aria-hidden="true" className="size-3.5" />
                    <span className="sr-only">(opens in a new tab)</span>
                  </a>
                </li>
              ))}
              <li>
                <a href={site.resume} className="inline-flex items-center gap-1 text-muted transition-colors hover:text-fg" download>
                  Résumé (PDF)
                </a>
              </li>
            </ul>
          </Reveal>

          <Reveal delay={0.08}>
            {WEB3FORMS_KEY ? (
              <ContactForm accessKey={WEB3FORMS_KEY} />
            ) : (
              <div className="flex h-full flex-col justify-center gap-5">
                <p className="text-muted">The quickest way to reach me is email.</p>
                <a
                  href={contactHref}
                  className="inline-flex w-fit items-center gap-2 rounded-full bg-signal px-5 py-3 text-sm font-semibold text-ink transition hover:brightness-110"
                >
                  Let’s Work Together <ArrowRight aria-hidden="true" className="size-4" />
                </a>
              </div>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  )
}
