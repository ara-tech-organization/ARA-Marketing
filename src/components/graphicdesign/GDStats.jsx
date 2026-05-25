import { useRef, useEffect, useState } from 'react'
import { Frame, Users, Star, Briefcase } from 'lucide-react'

const stats = [
  { icon: Frame,    value: 500,  suffix: '+', label: 'Designs Delivered',    desc: 'Across logos, brochures & more' },
  { icon: Users,    value: 250,  suffix: '+', label: 'Brands Created',       desc: 'Startups to corporates' },
  { icon: Star,     value: 98,   suffix: '%', label: 'Client Satisfaction',  desc: 'Repeat business rate' },
  { icon: Briefcase,value: 100,  suffix: '+', label: 'Business Categories',  desc: 'Industry-specific designs' },
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
        const duration = 1600
        const steps = 50
        const step = target / steps
        let cur = 0
        const timer = setInterval(() => {
          cur = Math.min(cur + step, target)
          setCount(Math.round(cur))
          if (cur >= target) clearInterval(timer)
        }, duration / steps)
      }
    }, { threshold: 0.3 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [target])

  return (
    <span ref={ref} className="text-[clamp(32px,4vw,48px)] font-black leading-tight"
      style={{
        background: 'linear-gradient(135deg, #1d4ed8, #38bdf8)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
      }}>
      {count}{suffix}
    </span>
  )
}

export default function GDStats() {
  return (
    <section
      className="relative overflow-hidden py-20"
      style={{ background: 'linear-gradient(135deg, #1e3a8a 0%, #1d4ed8 50%, #0284c7 100%)' }}
    >
      {/* Diagonal lines pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-10"
        style={{
          backgroundImage: 'repeating-linear-gradient(45deg, rgba(255,255,255,0.3) 0px, rgba(255,255,255,0.3) 1px, transparent 1px, transparent 24px)',
        }}
      />

      {/* Radial glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(255,255,255,0.07) 0%, transparent 70%)' }}
      />

      <div className="relative max-w-[1100px] mx-auto px-7">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map(({ icon: Icon, value, suffix, label, desc }) => (
            <div
              key={label}
              className="reveal flex flex-col items-center text-center group"
            >
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4
                  bg-white/10 border border-white/20 group-hover:bg-white/20 transition-all duration-300"
              >
                <Icon size={24} className="text-white" />
              </div>
              <Counter target={value} suffix={suffix} />
              <p className="text-[14px] font-bold text-white mt-2 mb-1">{label}</p>
              <p className="text-[12px] text-blue-200">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
