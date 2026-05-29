import { useState } from 'react'
import { Quote, Star, MessageSquare } from 'lucide-react'

const testimonials = [
  {
    text: 'Ara Discover Marketing improved our Google rankings and increased website traffic significantly.',
    name: 'Rajan Krishnamurthy',
    role: 'Business Owner, Thanjavur',
    initials: 'RK',
    color: '#2563eb',
  },
  {
    text: 'One of the best SEO companies in Thanjavur with transparent communication and excellent SEO expertise.',
    name: 'Priya Subramanian',
    role: 'Marketing Head',
    initials: 'PS',
    color: '#7c3aed',
  },
  {
    text: "Ara's SEO and digital marketing services in Thanjavur helped us generate high quality leads consistently.",
    name: 'Selvam Arumugam',
    role: 'eCommerce Entrepreneur',
    initials: 'SA',
    color: '#059669',
  },
]

export default function SEOTestimonials() {
  const [active, setActive] = useState(0)

  return (
    <section
      className="py-12 md:py-16 lg:py-24 relative overflow-hidden"
      style={{ background: 'linear-gradient(160deg, #f8fbff 0%, #eff6ff 50%, #f0f9ff 100%)' }}
    >
      {/* Orbs */}
      <div className="absolute -top-16 right-0 w-[480px] h-[480px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(147,197,253,0.35) 0%, transparent 70%)' }} />
      <div className="absolute bottom-0 -left-16 w-[420px] h-[420px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(196,219,254,0.35) 0%, transparent 70%)' }} />
      <div className="absolute inset-0 pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(circle, rgba(37,99,235,0.08) 1.5px, transparent 1.5px)', backgroundSize: '36px 36px' }} />

      <div className="relative max-w-[1200px] mx-auto px-4 sm:px-6 md:px-7">

        {/* Header */}
        <div className="text-center mb-8 md:mb-10 lg:mb-14 reveal">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white/80 text-blue-600
            border border-blue-200 rounded-full text-[11px] font-bold uppercase tracking-widest mb-5 shadow-sm">
            <MessageSquare size={11} /> Testimonials
          </span>
          <h2 className="text-[clamp(24px,3vw,40px)] font-bold text-slate-900 leading-tight tracking-tight mb-4">
            What Our{' '}
            <span className="text-gradient-blue">Clients Say</span>
          </h2>
          <p className="text-[15px] text-slate-500 max-w-xl mx-auto">
            Real results, real voices — businesses that trusted Ara Discover Marketing for their SEO growth.
          </p>
        </div>

        {/* Three-card horizontal layout */}
        <div className="reveal flex flex-col sm:flex-row gap-4 sm:gap-5">
          {testimonials.map(({ text, name, role, initials, color }, i) => {
            const isActive = active === i
            return (
              <button
                key={name}
                type="button"
                onClick={() => setActive(i)}
                className={`flex-1 text-left rounded-3xl p-4 sm:p-5 md:p-6 lg:p-7 border transition-all duration-300
                  hover:-translate-y-1 ${isActive ? 'shadow-2xl' : 'bg-white/70 border-slate-100 hover:bg-white hover:shadow-lg'}`}
                style={isActive
                  ? {
                      background: `linear-gradient(135deg, ${color}12 0%, white 60%)`,
                      border: `1.5px solid ${color}30`,
                      boxShadow: `0 20px 60px ${color}18`,
                    }
                  : {}
                }
              >
                {/* Top color bar — only on active */}
                <div
                  className="h-1 rounded-full mb-6 transition-all duration-300"
                  style={{
                    background: isActive ? `linear-gradient(90deg, ${color}, ${color}40)` : '#e2e8f0',
                  }}
                />

                {/* Quote icon */}
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-5 transition-all duration-300"
                  style={isActive
                    ? { background: color, boxShadow: `0 6px 20px ${color}35` }
                    : { background: '#f1f5f9' }
                  }
                >
                  <Quote size={16} style={{ color: isActive ? 'white' : '#94a3b8' }} />
                </div>

                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[1,2,3,4,5].map(s => (
                    <Star
                      key={s}
                      size={13}
                      className={isActive ? 'text-amber-400 fill-amber-400' : 'text-slate-300 fill-slate-300'}
                    />
                  ))}
                </div>

                {/* Quote */}
                <p
                  className="text-[14px] leading-[1.8] italic mb-7 transition-colors duration-300"
                  style={{ color: isActive ? '#334155' : '#94a3b8' }}
                >
                  &ldquo;{text}&rdquo;
                </p>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center text-[12px] font-black
                      flex-shrink-0 transition-all duration-300"
                    style={isActive
                      ? { background: color, color: 'white' }
                      : { background: '#e2e8f0', color: '#94a3b8' }
                    }
                  >
                    {initials}
                  </div>
                  <div>
                    <p
                      className="text-[13px] font-bold transition-colors duration-300"
                      style={{ color: isActive ? '#0f172a' : '#94a3b8' }}
                    >
                      {name}
                    </p>
                    <p className="text-[11px] text-slate-400">{role}</p>
                  </div>
                </div>
              </button>
            )
          })}
        </div>

      </div>
    </section>
  )
}
