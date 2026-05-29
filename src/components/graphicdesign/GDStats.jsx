import { useRef, useEffect, useState } from 'react'

const stats = [
  { value: 500, suffix: '+', label: 'Designs Delivered',   sub: 'Logos · Brochures · Creatives' },
  { value: 250, suffix: '+', label: 'Brands Created',      sub: 'Startups to corporates' },
  { value: 98,  suffix: '%', label: 'Client Satisfaction', sub: 'Repeat business rate' },
  { value: 100, suffix: '+', label: 'Business Categories', sub: 'Industry-specific designs' },
]

function Counter({ target, suffix }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const started = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true
        const steps = 50
        const step = target / steps
        let cur = 0
        const timer = setInterval(() => {
          cur = Math.min(cur + step, target)
          setCount(Math.round(cur))
          if (cur >= target) clearInterval(timer)
        }, 1600 / steps)
      }
    }, { threshold: 0.3 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [target])

  return <span ref={ref}>{count}{suffix}</span>
}

export default function GDStats() {
  return (
    <section
      className="relative overflow-hidden py-2"
      style={{
        background: 'linear-gradient(135deg, #eff6ff 0%, #dbeafe 50%, #bfdbfe 100%)',
      }}
    >
      {/* Subtle dot pattern */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(37,99,235,0.08) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />

      <div className="relative max-w-[1200px] mx-auto px-4 sm:px-6 md:px-7">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x-0 md:divide-x divide-blue-200/60">
          {stats.map(({ value, suffix, label, sub }) => (
            <div
              key={label}
              className="reveal flex flex-col items-center text-center py-12 px-4
                hover:bg-blue-100/40 transition-colors duration-300 group"
            >
              {/* Number */}
              <p
                className="text-[clamp(26px,3.5vw,48px)] font-black leading-none mb-3 transition-transform duration-300 group-hover:scale-105"
                style={{
                  background: 'linear-gradient(135deg, #1d4ed8 0%, #0ea5e9 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                <Counter target={value} suffix={suffix} />
              </p>
              {/* Accent line */}
              <div
                className="w-8 h-0.5 rounded-full mb-3"
                style={{ background: 'linear-gradient(90deg, #2563eb, #38bdf8)' }}
              />
              <p className="text-[14px] font-bold text-slate-800 mb-1">{label}</p>
              <p className="text-[11px] text-slate-500">{sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
