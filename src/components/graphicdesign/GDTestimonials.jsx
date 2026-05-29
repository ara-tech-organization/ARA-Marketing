import { useState, useEffect, useRef } from 'react'
import { Quote, Star, Layers, ChevronLeft, ChevronRight } from 'lucide-react'

const testimonials = [
  {
    text: 'Ara Discover Marketing delivered the best graphic design service in thanjavur for our brand identity. Highly creative and professional team.',
    name: 'Rajan Murugan',
    role: 'Founder, RetailHub Thanjavur',
    stars: 5,
  },
  {
    text: 'One of the top graphic design agencies in thanjavur with excellent logo and brochure design services.',
    name: 'Priya Suresh',
    role: 'Director, EduFirst Academy',
    stars: 5,
  },
  {
    text: 'Their branding solutions helped us improve our business visibility and customer engagement.',
    name: 'Karthik Arumugam',
    role: 'Owner, Restaurant Group',
    stars: 5,
  },
]

const TOTAL = testimonials.length
const CLONE = 1
const extended = [
  ...testimonials.slice(-CLONE),
  ...testimonials,
  ...testimonials.slice(0, CLONE),
]
const START = CLONE  // index of the first real t0 in extended

export default function GDTestimonials() {
  const [pos, setPos] = useState(START)
  const [doTransition, setDoTransition] = useState(true)
  const timerRef = useRef(null)

  // Which testimonial index is the active center card
  const realIdx = ((pos - CLONE) % TOTAL + TOTAL) % TOTAL

  const resetTimer = () => {
    clearInterval(timerRef.current)
    timerRef.current = setInterval(() => setPos(p => p + 1), 4500)
  }

  useEffect(() => {
    resetTimer()
    return () => clearInterval(timerRef.current)
  }, [])

  // Boundary: when pos exits the real range, silently jump to the mirror position
  useEffect(() => {
    if (pos >= TOTAL + CLONE) {
      // Stepped into trailing clones — jump back to real start (same visual)
      const t = setTimeout(() => {
        setDoTransition(false)
        setPos(START)
      }, 510)
      return () => clearTimeout(t)
    }
    if (pos < CLONE) {
      // Stepped into leading clones — jump forward to real end (same visual)
      const t = setTimeout(() => {
        setDoTransition(false)
        setPos(TOTAL + CLONE - 1)
      }, 510)
      return () => clearTimeout(t)
    }
  }, [pos])

  // Re-enable transition one paint after silent jump
  useEffect(() => {
    if (!doTransition) {
      const id = requestAnimationFrame(() => requestAnimationFrame(() => setDoTransition(true)))
      return () => cancelAnimationFrame(id)
    }
  }, [doTransition])

  const goNext = () => { setPos(p => p + 1); resetTimer() }
  const goPrev = () => { setPos(p => p - 1); resetTimer() }

  // Each card is 1/3 of the container. The track's block width equals the container.
  // So translateX(-33.33%) moves exactly 1 card to the left.
  // To center card at index `pos`, shift left by (pos-1) cards:
  const tx = `${-((pos - 1) * 100) / 3}%`

  return (
    <section className="relative overflow-hidden py-24 bg-white">
      {/* Dot bg */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(37,99,235,0.045) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[300px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(219,234,254,0.45) 0%, transparent 70%)' }}
      />

      <div className="relative max-w-[1200px] mx-auto px-4 sm:px-6 md:px-7">

        {/* Header */}
        <div className="text-center mb-14 reveal">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-blue-50 text-blue-600
            border border-blue-100 rounded-full text-[11px] font-bold uppercase tracking-widest mb-5">
            <Layers size={11} /> Client Testimonials
          </span>
          <h2 className="text-[clamp(22px,2.8vw,38px)] font-bold text-slate-900 leading-tight tracking-tight">
            What Clients Say About{' '}
            <span className="text-gradient-blue">Our Branding Services</span>
          </h2>
        </div>

        {/* Mobile: stacked cards (xs/sm/md) */}
        <div className="lg:hidden grid grid-cols-1 sm:grid-cols-2 gap-5 reveal">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl px-5 py-6 border border-blue-100 flex flex-col"
              style={{ boxShadow: '0 4px 20px rgba(37,99,235,0.08)' }}
            >
              <div className="flex gap-0.5 mb-3">
                {Array.from({ length: t.stars }).map((_, j) => (
                  <Star key={j} size={13} className="text-amber-400" fill="#fbbf24" />
                ))}
              </div>
              <Quote size={22} className="text-blue-100 mb-2.5 flex-shrink-0" fill="currentColor" />
              <p className="text-[13.5px] text-slate-600 leading-[1.8] italic flex-1">&ldquo;{t.text}&rdquo;</p>
              <div className="flex items-center gap-2.5 mt-5 pt-4 border-t border-slate-100">
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center text-white text-[11px] font-black flex-shrink-0"
                  style={{ background: 'linear-gradient(135deg,#2563eb,#38bdf8)' }}
                >{t.name[0]}</div>
                <div className="min-w-0">
                  <p className="text-[12px] font-bold text-slate-800 truncate">{t.name}</p>
                  <p className="text-[10px] text-slate-400 truncate">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop: Slider (lg+) */}
        <div className="hidden lg:block reveal relative">

          {/* Track */}
          <div className="overflow-hidden">
            <div
              className="flex"
              style={{
                transform: `translateX(${tx})`,
                transition: doTransition ? 'transform 0.5s cubic-bezier(0.4,0,0.2,1)' : 'none',
              }}
            >
              {extended.map((t, i) => {
                const isCenter = i === pos
                return (
                  <div key={i} className="flex-shrink-0 w-1/3 px-2.5">
                    {isCenter ? (
                      /* ── Featured (center) card ── */
                      <div
                        className="relative rounded-3xl overflow-hidden"
                        style={{
                          background: 'linear-gradient(160deg, #eff6ff 0%, #dbeafe 45%, #bfdbfe 100%)',
                          boxShadow: '0 24px 64px rgba(37,99,235,0.18)',
                          border: '1.5px solid #bfdbfe',
                          minHeight: '360px',
                        }}
                      >
                        {/* Dot pattern */}
                        <div className="absolute inset-0 pointer-events-none"
                          style={{ backgroundImage: 'radial-gradient(circle, rgba(37,99,235,0.08) 1px, transparent 1px)', backgroundSize: '22px 22px' }} />
                        <div className="absolute -top-10 -right-10 w-48 h-48 rounded-full pointer-events-none"
                          style={{ background: 'radial-gradient(circle,rgba(147,197,253,0.4) 0%,transparent 70%)' }} />

                        <div className="relative p-7 flex flex-col justify-between h-full" style={{ minHeight: '360px' }}>
                          <div>
                            <div className="flex gap-1 mb-5">
                              {Array.from({ length: t.stars }).map((_, j) => (
                                <Star key={j} size={15} className="text-amber-400" fill="#fbbf24" />
                              ))}
                            </div>
                            <div className="relative">
                              <Quote size={44} className="absolute -top-1 -left-1 text-blue-200/50" fill="currentColor" />
                              <p className="relative text-[13.5px] text-slate-700 leading-[1.8] font-medium">
                                &ldquo;{t.text}&rdquo;
                              </p>
                            </div>
                          </div>
                          <div className="flex items-center gap-3 mt-6 pt-5 border-t border-blue-200/60">
                            <div
                              className="w-10 h-10 rounded-full flex items-center justify-center text-white text-[14px] font-black flex-shrink-0"
                              style={{ background: 'linear-gradient(135deg,#2563eb,#38bdf8)' }}
                            >
                              {t.name[0]}
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="text-[13px] font-bold text-slate-800 truncate">{t.name}</p>
                              <p className="text-[11px] text-blue-500 truncate">{t.role}</p>
                            </div>
                            <div className="flex items-center gap-1 px-2.5 py-1 bg-white rounded-full border border-blue-200"
                              style={{ boxShadow: '0 2px 8px rgba(37,99,235,0.1)' }}>
                              <Star size={9} className="text-amber-400" fill="#fbbf24" />
                              <span className="text-[10px] font-bold text-slate-700">5.0</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : (
                      /* ── Side card ── */
                      <div
                        className="bg-white rounded-2xl px-5 py-6 border border-blue-50 flex flex-col transition-all duration-300"
                        style={{
                          boxShadow: '0 2px 12px rgba(37,99,235,0.06)',
                          minHeight: '360px',
                          opacity: Math.abs(i - pos) === 1 ? 0.85 : 0.4,
                          transform: Math.abs(i - pos) === 1 ? 'scale(0.97)' : 'scale(0.92)',
                        }}
                      >
                        <div className="flex gap-0.5 mb-3">
                          {Array.from({ length: t.stars }).map((_, j) => (
                            <Star key={j} size={11} className="text-amber-400" fill="#fbbf24" />
                          ))}
                        </div>
                        <Quote size={20} className="text-blue-100 mb-2.5 flex-shrink-0" fill="currentColor" />
                        <p className="text-[12.5px] text-slate-500 leading-[1.75] italic flex-1">
                          &ldquo;{t.text}&rdquo;
                        </p>
                        <div className="flex items-center gap-2.5 mt-5 pt-4 border-t border-slate-100">
                          <div
                            className="w-8 h-8 rounded-full flex items-center justify-center text-white text-[11px] font-black flex-shrink-0"
                            style={{ background: 'linear-gradient(135deg,#2563eb,#38bdf8)' }}
                          >
                            {t.name[0]}
                          </div>
                          <div className="min-w-0">
                            <p className="text-[12px] font-bold text-slate-800 truncate">{t.name}</p>
                            <p className="text-[10px] text-slate-400 truncate">{t.role}</p>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          </div>

          {/* Arrows */}
          <button
            onClick={goPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-5
              w-10 h-10 rounded-full bg-white border border-blue-100 flex items-center justify-center
              shadow-md shadow-blue-100/50 hover:bg-blue-600 hover:border-blue-600 hover:text-white
              text-slate-600 transition-all duration-200 z-10"
            aria-label="Previous"
          >
            <ChevronLeft size={17} />
          </button>
          <button
            onClick={goNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-5
              w-10 h-10 rounded-full bg-white border border-blue-100 flex items-center justify-center
              shadow-md shadow-blue-100/50 hover:bg-blue-600 hover:border-blue-600 hover:text-white
              text-slate-600 transition-all duration-200 z-10"
            aria-label="Next"
          >
            <ChevronRight size={17} />
          </button>
        </div>

        {/* Dots — desktop only */}
        <div className="hidden lg:flex items-center justify-center gap-2 mt-8">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => { setPos(i + CLONE); resetTimer() }}
              className="transition-all duration-300"
              style={{
                width: i === realIdx ? '28px' : '8px',
                height: '8px',
                borderRadius: '9999px',
                background: i === realIdx
                  ? 'linear-gradient(90deg,#2563eb,#38bdf8)'
                  : 'rgba(37,99,235,0.18)',
              }}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  )
}
