import { motion } from 'framer-motion'

interface DeviceMockupProps {
  device: 'macbook' | 'phone'
  accent: string
  label: string
  image?: string
  mobileImage?: string
}

export default function DeviceMockup({ device, accent, label, image, mobileImage }: DeviceMockupProps) {
  if (device === 'phone') {
    return (
      <div className="relative mx-auto w-[220px] rounded-[2.2rem] border-[6px] border-charcoal bg-charcoal shadow-[0_50px_100px_-30px_rgba(23,23,23,0.35)] sm:w-[240px]">
        <div className="absolute left-1/2 top-0 z-10 h-5 w-24 -translate-x-1/2 rounded-b-2xl bg-charcoal" />
        <div
          className="aspect-[9/19.5] w-full overflow-hidden rounded-[1.7rem]"
          style={!image ? { background: `linear-gradient(160deg, ${accent}, #FAF9F7 70%)` } : undefined}
        >
          {image ? (
            <img src={image} alt={`${label} screenshot`} className="h-full w-full object-cover object-top" />
          ) : (
            <div className="flex h-full flex-col justify-between p-5">
              <div className="flex justify-between">
                <span className="font-mono text-[9px] uppercase tracking-widest text-charcoal/50">
                  9:41
                </span>
                <span className="font-mono text-[9px] uppercase tracking-widest text-charcoal/50">
                  {label}
                </span>
              </div>
              <div className="space-y-3">
                {[0, 1, 2].map((i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * i, duration: 0.5 }}
                    className="h-14 rounded-xl border border-charcoal/10 bg-white/60 backdrop-blur"
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    )
  }

  return (
    <div className="relative mx-auto w-full max-w-lg">
      <div className="rounded-t-xl border border-b-0 border-charcoal/15 bg-charcoal p-2 shadow-[0_50px_100px_-30px_rgba(23,23,23,0.35)]">
        <div className="mb-2 flex gap-1.5 px-1">
          <span className="h-2 w-2 rounded-full bg-warm-white/25" />
          <span className="h-2 w-2 rounded-full bg-warm-white/25" />
          <span className="h-2 w-2 rounded-full bg-warm-white/25" />
        </div>
        <div
          className="aspect-[16/10] w-full overflow-hidden rounded-md"
          style={!image ? { background: `linear-gradient(135deg, ${accent}, #F7F5F2 75%)` } : undefined}
        >
          {image ? (
            <img src={image} alt={`${label} screenshot`} className="h-full w-full object-cover object-top" />
          ) : (
            <div className="grid h-full grid-cols-3 gap-3 p-5">
              <div className="col-span-1 space-y-3">
                {[0, 1].map((i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * i, duration: 0.5 }}
                    className="h-16 rounded-lg border border-charcoal/10 bg-white/60"
                  />
                ))}
              </div>
              <div className="col-span-2">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  className="h-full rounded-lg border border-charcoal/10 bg-white/60"
                />
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="mx-auto h-3 w-2/3 rounded-b-xl bg-gradient-to-b from-charcoal to-charcoal/70" />
      <div className="mx-auto h-1 w-1/4 rounded-b-md bg-charcoal/40" />

      {mobileImage && (
        <motion.div
          initial={{ opacity: 0, y: 16, rotate: -4 }}
          whileInView={{ opacity: 1, y: 0, rotate: -4 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="absolute -bottom-8 -right-6 w-[84px] rounded-[1.3rem] border-[4px] border-charcoal bg-charcoal shadow-[0_30px_60px_-20px_rgba(23,23,23,0.4)] sm:-bottom-10 sm:-right-8 sm:w-[104px]"
        >
          <div className="absolute left-1/2 top-0 z-10 h-2.5 w-10 -translate-x-1/2 rounded-b-lg bg-charcoal" />
          <div className="aspect-[9/19.5] w-full overflow-hidden rounded-[0.9rem]">
            <img
              src={mobileImage}
              alt={`${label} mobile screenshot`}
              className="h-full w-full object-cover object-top"
            />
          </div>
        </motion.div>
      )}
    </div>
  )
}
