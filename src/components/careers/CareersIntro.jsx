import { Sparkles, Search, TrendingUp, PenLine, Share2, Code2, Handshake, ArrowUpRight } from 'lucide-react'
import SectionDecor from '../common/SectionDecor'

const fields = [
  { icon: Search,    label: 'SEO',                  desc: 'On-page, off-page & technical' },
  { icon: TrendingUp,label: 'Digital Marketing',    desc: 'Paid ads & performance' },
  { icon: PenLine,   label: 'Content',              desc: 'Copy, blogs & scripts' },
  { icon: Share2,    label: 'Social Media',         desc: 'Strategy & community' },
  { icon: Code2,     label: 'Web Development',      desc: 'Front-end & CMS builds' },
  { icon: Handshake, label: 'Business Development', desc: 'Client growth & sales' },
]

export default function CareersIntro() {
  return (
    <section className="relative py-14 md:py-20 lg:py-24 bg-white overflow-hidden">
      <SectionDecor variant="a" />

      <div className="relative z-10 max-w-[1280px] mx-auto px-4 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">

          {/* ── Left: heading + copy ── */}
          <div className="lg:col-span-6 reveal reveal-left lg:sticky lg:top-28">

            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-blue-50 text-blue-600
              border border-blue-100 rounded-full text-[11px] font-bold uppercase tracking-[0.16em] mb-6">
              <Sparkles size={11} /> Join Our Growing Team
            </span>

            <h2 className="text-[clamp(26px,3vw,42px)] font-bold text-slate-900 leading-[1.15] tracking-[-1px] mb-7">
              Grow Your Career{' '}
              <span className="text-gradient-blue">With Us</span>
            </h2>

            {/* Accent hairline */}
            <div className="w-16 h-[3px] rounded-full mb-7"
              style={{ background: 'var(--brand-gradient-soft)' }} />

            <p className="text-[15.5px] text-slate-600 leading-[2] mb-5">
              At ARA Discover Marketing, we&apos;re always looking for talented, motivated, and
              passionate people to join our growing team.
            </p>
            <p className="text-[15.5px] text-slate-600 leading-[2] mb-5">
              We believe in creating a positive work environment where employees can learn new
              skills, take on new challenges, share ideas, and grow professionally.
            </p>
            <p className="text-[15.5px] text-slate-600 leading-[2]">
              Whether you are starting your career or looking for your next opportunity in SEO,
              digital marketing, content, social media, web development, or business development,
              we would love to hear from you.
            </p>
          </div>

          {/* ── Right: discipline list panel ── */}
          <div className="lg:col-span-6 reveal reveal-right">
            <div className="rounded-[28px] overflow-hidden"
              style={{
                background: 'linear-gradient(160deg,#0d2244 0%,#0a1a34 55%,#0d2244 100%)',
                boxShadow: '0 24px 70px rgba(13,34,68,0.28)',
              }}>

              {/* Panel head */}
              <div className="relative px-6 sm:px-8 pt-8 pb-6 overflow-hidden">
                <div className="absolute -top-16 -right-16 w-56 h-56 rounded-full pointer-events-none"
                  style={{ background: 'var(--brand-gradient-glow-dark)' }} />
                <div className="relative">
                  <p className="text-[10.5px] font-bold uppercase tracking-[0.22em] text-blue-300/70 mb-2.5">
                    Where You Could Fit
                  </p>
                  <h3 className="text-[17px] font-bold text-white leading-snug">
                    Six disciplines, one growing team
                  </h3>
                </div>
              </div>

              {/* Rows */}
              <div className="px-6 sm:px-8 pb-8">
                {fields.map(({ icon: Icon, label, desc }, i) => (
                  <div key={label}
                    className="group flex items-center gap-4 py-4 transition-all duration-300"
                    style={{ borderTop: i === 0 ? 'none' : '1px solid rgba(255,255,255,0.07)' }}>

                    <span className="text-[11px] font-bold tabular-nums w-6 flex-shrink-0 transition-colors duration-300
                      text-white/20 group-hover:text-blue-400">
                      {String(i + 1).padStart(2, '0')}
                    </span>

                    <span className="w-10 h-10 rounded-[12px] flex items-center justify-center flex-shrink-0
                      transition-all duration-300 group-hover:scale-110"
                      style={{ background: 'rgba(37,99,235,0.16)', border: '1px solid rgba(59,130,246,0.22)' }}>
                      <Icon size={16} style={{ color: '#93c5fd' }} />
                    </span>

                    <span className="min-w-0 flex-1">
                      <span className="block text-[13.5px] font-semibold text-white/90 leading-tight">{label}</span>
                      <span className="block text-[11.5px] text-white/35 mt-1">{desc}</span>
                    </span>

                    <ArrowUpRight size={14}
                      className="flex-shrink-0 text-white/15 group-hover:text-blue-400
                        group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all duration-300" />
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
