import { useState } from 'react'
import { motion } from 'framer-motion'
import { Code2, Link2, Mail, Download, ArrowUpRight, Loader2 } from 'lucide-react'
import RevealText from '@/components/ui/RevealText'
import MagneticButton from '@/components/ui/MagneticButton'


const WEB3FORMS_ACCESS_KEY = '6a6ddab1-12a7-419a-8257-b1671d8a1b76'

const socials = [
  { icon: Code2, label: 'GitHub', href: 'https://github.com/yourgirltech' },
  { icon: Link2, label: 'LinkedIn', href: 'https://www.linkedin.com/in/funmilola-showumi-01b385284/' },
  { icon: Mail, label: 'Email', href: 'mailto:hello@funmilolashowumi.com' },
]

type Status = 'idle' | 'sending' | 'sent' | 'error'

export default function Contact() {
  const [status, setStatus] = useState<Status>('idle')
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: `New portfolio message from ${form.name}`,
          from_name: form.name,
          name: form.name,
          email: form.email,
          message: form.message,
        }),
      })
      const data = await res.json()

      if (data.success) {
        setStatus('sent')
        setForm({ name: '', email: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="relative overflow-hidden bg-charcoal px-6 py-28 md:px-10 md:py-40">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[30rem] w-[30rem] -translate-x-1/2 rounded-full bg-sage/10 blur-[140px]" />
      </div>

      <div className="relative mx-auto max-w-4xl text-center">
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-sage">Contact</p>
        <RevealText
          text="Let's Build Something Exceptional."
          as="h2"
          className="mt-6 font-display text-4xl leading-[1.1] text-warm-white sm:text-5xl md:text-6xl"
        />
        <p className="mx-auto mt-6 max-w-lg text-balance text-slate/80">
          Have a project in mind, or just want to say hello? I&apos;d love to
          hear from you.
        </p>

        <form onSubmit={handleSubmit} className="mx-auto mt-14 max-w-md text-left">
          <div className="space-y-6">
            <div>
              <label htmlFor="name" className="font-mono text-[10px] uppercase tracking-[0.2em] text-sage">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={form.name}
                onChange={handleChange}
                placeholder="Your name"
                className="mt-2 w-full border-b border-warm-white/20 bg-transparent py-2 text-warm-white placeholder:text-warm-white/30 outline-none transition-colors focus:border-sage-deep"
              />
            </div>
            <div>
              <label htmlFor="email" className="font-mono text-[10px] uppercase tracking-[0.2em] text-sage">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={form.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className="mt-2 w-full border-b border-warm-white/20 bg-transparent py-2 text-warm-white placeholder:text-warm-white/30 outline-none transition-colors focus:border-sage-deep"
              />
            </div>
            <div>
              <label htmlFor="message" className="font-mono text-[10px] uppercase tracking-[0.2em] text-sage">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={3}
                value={form.message}
                onChange={handleChange}
                placeholder="Tell me about your project"
                className="mt-2 w-full resize-none border-b border-warm-white/20 bg-transparent py-2 text-warm-white placeholder:text-warm-white/30 outline-none transition-colors focus:border-sage-deep"
              />
            </div>
          </div>

          <div className="mt-10 flex justify-center">
            <MagneticButton
              type="submit"
              disabled={status === 'sending'}
              className="!bg-sage !text-charcoal hover:!bg-warm-white disabled:opacity-60"
            >
              {status === 'sending' ? (
                <Loader2 size={16} className="animate-spin" />
              ) : (
                <>
                  {status === 'sent' ? 'Message sent' : 'Send message'}
                  <ArrowUpRight size={16} />
                </>
              )}
            </MagneticButton>
          </div>
          {status === 'sent' && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-4 text-center font-mono text-xs uppercase tracking-[0.2em] text-sage"
            >
              Thank you &mdash; I&apos;ll be in touch soon.
            </motion.p>
          )}
          {status === 'error' && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-4 text-center font-mono text-xs uppercase tracking-[0.2em] text-red-400"
            >
              Something went wrong &mdash; please email me directly instead.
            </motion.p>
          )}
        </form>

        <div className="mt-16 flex items-center justify-center gap-8 border-t border-warm-white/10 pt-10">
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor-hover
              className="flex items-center gap-2 text-sm text-warm-white/70 transition-colors hover:text-sage"
            >
              <social.icon size={16} />
              {social.label}
            </a>
          ))}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            data-cursor-hover
            className="flex items-center gap-2 text-sm text-warm-white/70 transition-colors hover:text-sage"
          >
            <Download size={16} />
            Resume
          </a>
        </div>
      </div>
    </section>
  )
}
