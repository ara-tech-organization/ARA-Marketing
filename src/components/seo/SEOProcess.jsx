import { useRef, useEffect, useCallback } from 'react'
import { Search, BarChart2, Cpu, FileText, Globe2, MapPin, LineChart, ChevronLeft, ChevronRight } from 'lucide-react'

const steps = [
  { num: '01', icon: Search,    title: 'Website SEO Audit',                  desc: 'Comprehensive audit analyzing technical health, on-page factors, backlink profile, and current keyword positions to identify growth opportunities.',                                          color: '#2563eb' },
  { num: '02', icon: BarChart2, title: 'Competitor & Keyword Analysis',       desc: 'High-intent keyword research and competitor analysis to uncover strategies that fast-track your rankings and capture qualified organic traffic.',                                               color: '#7c3aed' },
  { num: '03', icon: Cpu,       title: 'Technical SEO Optimization',          desc: "Fix crawl errors, improve Core Web Vitals, implement schema markup, and ensure your site meets Google's latest technical performance standards.",                                               color: '#0891b2' },
  { num: '04', icon: FileText,  title: 'On-Page & Content Optimization',      desc: 'Every page optimized with targeted keywords, compelling meta data, structured headings, and SEO-driven content that ranks and converts.',                                                        color: '#059669' },
  { num: '05', icon: Globe2,    title: 'Off-Page SEO & Link Building',        desc: 'Build high-authority backlinks through ethical outreach, guest posting, brand mentions, and strategic directory placements to strengthen domain authority.',                                     color: '#dc2626' },
  { num: '06', icon: MapPin,    title: 'Local SEO Enhancement',               desc: 'Optimize your Google Business Profile, build location citations, and implement local keyword strategies to maximize Google Maps and local search visibility.',                                   color: '#d97706' },
  { num: '07', icon: LineChart, title: 'Performance Monitoring & Reporting',  desc: 'Monthly reports covering keyword rankings, organic traffic trends, conversion metrics, and ongoing optimization recommendations to keep you informed.',                                         color: '#0f766e' },
]

export default function SEOProcess() {
  const scrollRef = useRef(null)
  const intervalRef = useRef(null)
  const pausedRef = useRef(false)

  const scroll = (dir) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: dir * 320, behavior: 'smooth' })
    }
  }

  const startAuto = useCallback(() => {
    intervalRef.current = setInterval(() => {
      if (pausedRef.current || !scrollRef.current) return
      const el = scrollRef.current
      const atEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 4
      if (atEnd) {
        el.scrollTo({ left: 0, behavior: 'smooth' })
      } else {
        el.scrollBy({ left: 300, behavior: 'smooth' })
      }
    }, 2800)
  }, [])

  useEffect(() => {
    startAuto()
    return () => clearInterval(intervalRef.current)
  }, [startAuto])

  return (
    <section
      className="py-12 md:py-16 lg:py-24 relative overflow-hidden"
      style={{ background: 'linear-gradient(160deg, #f8fbff 0%, #eff6ff 50%, #f0f9ff 100%)' }}
    >
      {/* Orbs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(147,197,253,0.30) 0%, transparent 70%)' }} />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(196,219,254,0.30) 0%, transparent 70%)' }} />
      <div className="absolute inset-0 pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(circle, rgba(37,99,235,0.08) 1.5px, transparent 1.5px)', backgroundSize: '36px 36px' }} />

      <div className="relative max-w-[1200px] mx-auto px-4 sm:px-6 md:px-7">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 reveal">
          <div>
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white/80 text-blue-600
              border border-blue-200 rounded-full text-[11px] font-bold uppercase tracking-widest mb-4 shadow-sm">
              <LineChart size={11} /> Our Workflow
            </span>
            <h2 className="text-[clamp(23px,2.7vw,39px)] font-bold text-slate-900 leading-tight tracking-tight mb-2">
              Our Strategic SEO Workflow{' '}
              <span className="text-gradient-blue">for Long-Term Rankings</span>
            </h2>
            <p className="text-[15px] text-slate-600 max-w-2xl leading-[1.85]">
              We are the best SEO consultancy services in Thanjavur — our systematic SEO process is designed for long-term visibility and growth.
            </p>
          </div>

          {/* Navigation arrows */}
          <div className="flex items-center gap-2 flex-shrink-0">
            <button
              type="button"
              onClick={() => { clearInterval(intervalRef.current); scroll(-1); startAuto() }}
              className="w-10 h-10 rounded-full bg-white border border-blue-100 flex items-center justify-center
                text-slate-600 hover:bg-blue-600 hover:text-white hover:border-blue-600
                transition-all duration-300 shadow-sm hover:shadow-md"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              type="button"
              onClick={() => { clearInterval(intervalRef.current); scroll(1); startAuto() }}
              className="w-10 h-10 rounded-full bg-white border border-blue-100 flex items-center justify-center
                text-slate-600 hover:bg-blue-600 hover:text-white hover:border-blue-600
                transition-all duration-300 shadow-sm hover:shadow-md"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* Horizontal scroll container */}
        <div className="reveal relative">
          {/* Left fade */}
          <div className="absolute left-0 top-0 bottom-4 w-8 z-10 pointer-events-none"
            style={{ background: 'linear-gradient(90deg, rgba(248,251,255,0.9), transparent)' }} />
          {/* Right fade */}
          <div className="absolute right-0 top-0 bottom-4 w-8 z-10 pointer-events-none"
            style={{ background: 'linear-gradient(270deg, rgba(248,251,255,0.9), transparent)' }} />

          <div
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto pb-4 scroll-smooth"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            onMouseEnter={() => { pausedRef.current = true }}
            onMouseLeave={() => { pausedRef.current = false }}
          >
            {steps.map(({ num, icon: Icon, title, desc, color }, i) => (
              <div
                key={num}
                className="group flex-shrink-0 w-[280px] bg-white/90 rounded-3xl border border-white
                  hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
                style={{ boxShadow: '0 4px 20px rgba(37,99,235,0.07)' }}
              >
                {/* Top colored bar */}
                <div className="h-1 w-full" style={{ background: `linear-gradient(90deg, ${color}, ${color}44)` }} />

                <div className="p-6">
                  {/* Step number + icon row */}
                  <div className="flex items-center justify-between mb-5">
                    <div
                      className="w-12 h-12 rounded-2xl flex items-center justify-center text-white
                        font-black text-[14px] transition-all duration-300 group-hover:scale-105"
                      style={{ background: `linear-gradient(135deg, ${color}, ${color}bb)`, boxShadow: `0 4px 14px ${color}35` }}
                    >
                      {num}
                    </div>
                    <div
                      className="w-10 h-10 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                      style={{ background: `${color}15`, border: `1.5px solid ${color}25` }}
                    >
                      <Icon size={18} style={{ color }} />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-[13px] font-bold text-slate-900 leading-snug mb-3">{title}</h3>

                  {/* Description */}
                  <p className="text-[12.5px] text-slate-500 leading-[1.78]">{desc}</p>
                </div>

                {/* Step indicator at bottom */}
                <div className="px-6 pb-5">
                  <div className="flex items-center gap-1">
                    {steps.map((_, j) => (
                      <div
                        key={j}
                        className="rounded-full transition-all duration-300"
                        style={{
                          width: j === i ? 20 : 5,
                          height: 5,
                          background: j === i ? color : `${color}30`,
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
