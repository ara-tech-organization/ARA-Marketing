import { ClipboardList, Monitor, Code2, Puzzle, Rocket, ChevronRight } from 'lucide-react'

const steps = [
  {
    icon: ClipboardList,
    num: '01',
    title: 'Requirement Analysis & Planning',
    desc: 'We understand your business goals, target audience, and content strategy. A detailed project blueprint is crafted before a single line of code is written.',
    tags: ['Discovery Call', 'Sitemap', 'Feature Scoping'],
    color: '#2563eb',
    glow: 'rgba(37,99,235,0.22)',
  },
  {
    icon: Monitor,
    num: '02',
    title: 'UI/UX Design & Wireframing',
    desc: 'Pixel-perfect wireframes and high-fidelity mockups reflecting your brand — reviewed and approved by you before development begins.',
    tags: ['Wireframes', 'Brand Alignment', 'Mobile-First'],
    color: '#2563eb',
    glow: 'rgba(37,99,235,0.22)',
  },
  {
    icon: Code2,
    num: '03',
    title: 'WordPress Setup & Custom Development',
    desc: 'We build on a clean, optimised WordPress foundation — custom themes, page builders, and backend configuration for peak performance.',
    tags: ['Custom Theme', 'Plugin Setup', 'Performance'],
    color: '#1d4ed8',
    glow: 'rgba(29,78,216,0.22)',
  },
  {
    icon: Puzzle,
    num: '04',
    title: 'Plugin Integration & Optimisation',
    desc: 'Essential plugins are integrated and configured — SEO, security, caching, forms, analytics, and all the third-party tools you need.',
    tags: ['SEO Setup', 'Security', 'API Integrations'],
    color: '#3b82f6',
    glow: 'rgba(59,130,246,0.22)',
  },
  {
    icon: Rocket,
    num: '05',
    title: 'Testing, SEO Setup & Launch',
    desc: 'Rigorous cross-device testing, speed optimisation, and on-page SEO precede every launch. Your site performs flawlessly from day one.',
    tags: ['QA Testing', 'Speed Audit', 'Go-Live'],
    color: '#1d4ed8',
    glow: 'rgba(29,78,216,0.22)',
  },
]

export default function CMSProcess() {
  return (
    <section
      className="relative py-16 sm:py-16 overflow-hidden bg-white"
    >
      {/* Subtle orbs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(37,99,235,0.05) 0%, transparent 65%)' }} />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(29,78,216,0.04) 0%, transparent 65%)' }} />

      {/* Dot grid */}
      <div className="absolute inset-0 pointer-events-none opacity-25"
        style={{ backgroundImage: 'radial-gradient(rgba(37,99,235,0.12) 1px, transparent 1px)', backgroundSize: '42px 42px' }} />

      <div className="relative max-w-[1280px] mx-auto px-4 sm:px-6 md:px-7">

        {/* ── Header ── */}
        <div className="text-center mb-16 reveal">
          <span
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-widest mb-5"
            style={{ background: 'rgba(37,99,235,0.08)', color: '#1d4ed8', border: '1px solid rgba(37,99,235,0.2)' }}
          >
            <Rocket size={11} /> Our Development Process
          </span>
          <h2 className="text-[clamp(23px,2.7vw,43px)] font-bold text-slate-900 leading-[1.1] tracking-tight mb-5">
            How We Build{' '}
            <span style={{ background: 'linear-gradient(135deg, #1d4ed8, #2563eb, #3b82f6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              WordPress Websites
            </span>
          </h2>
          <p className="text-[15px] leading-[1.85] max-w-2xl mx-auto" style={{ color: '#64748b' }}>
            A structured, transparent process — web development with WordPress in Thanjavur driven by performance, usability, and on-time delivery.
          </p>
        </div>

        {/* ── Desktop: 5-column grid (guaranteed equal width) ── */}
        <div className="reveal hidden lg:block">


          {/* Step badges row — one per column */}
          <div className="grid grid-cols-5 mb-3">
            {steps.map(({ num, color }) => (
              <div key={num} className="flex justify-center">
                <span
                  className="text-[10px] font-black tracking-widest px-3 py-1 rounded-full"
                  style={{ color, background: `${color}10`, border: `1px solid ${color}22` }}
                >
                  STEP {num}
                </span>
              </div>
            ))}
          </div>

          {/* Cards row — equal-width grid columns */}
          <div className="grid grid-cols-5 gap-4">
            {steps.map(({ icon: Icon, num, title, desc, tags, color, glow }, i) => (
              <div
                key={num}
                className="rounded-2xl p-5 flex flex-col gap-3 transition-all duration-300 hover:-translate-y-1 cursor-default"
                style={{
                  background: '#ffffff',
                  border: '1px solid #e2e8f0',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = `${color}05`
                  e.currentTarget.style.borderColor = `${color}35`
                  e.currentTarget.style.boxShadow = `0 12px 36px rgba(37,99,235,0.12), 0 0 0 1px ${color}18`
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = '#ffffff'
                  e.currentTarget.style.borderColor = '#e2e8f0'
                  e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.06)'
                }}
              >
                {/* Icon + top accent */}
                <div className="flex items-center gap-3 mb-1">
                  <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300"
                    style={{ background: `linear-gradient(135deg, ${color}, ${color}bb)`, boxShadow: `0 4px 14px ${glow}` }}>
                    <Icon size={15} className="text-white" />
                  </div>
                  <div className="h-0.5 flex-1 rounded-full" style={{ background: `linear-gradient(90deg, ${color}50, transparent)` }} />
                </div>

                <h3 className="text-[11px] font-bold text-slate-800 leading-snug">{title}</h3>
                <p className="text-[11.5px] leading-[1.75] flex-1" style={{ color: '#64748b' }}>{desc}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mt-auto pt-1">
                  {tags.map(tag => (
                    <span key={tag} className="text-[10px] font-semibold px-2 py-0.5 rounded-full"
                      style={{ background: `${color}10`, color: `${color}cc`, border: `1px solid ${color}1e` }}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* ── md: 2-col + 3-col grid ── */}
        <div className="reveal hidden sm:block lg:hidden">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {steps.map(({ icon: Icon, num, title, desc, tags, color, glow }) => (
              <div
                key={num}
                className="rounded-2xl p-5 flex flex-col gap-3 transition-all duration-300 hover:-translate-y-1 cursor-default"
                style={{ background: '#ffffff', border: '1px solid #e2e8f0', boxShadow: '0 4px 20px rgba(0,0,0,0.06)' }}
                onMouseEnter={e => { e.currentTarget.style.background = `${color}05`; e.currentTarget.style.borderColor = `${color}35`; e.currentTarget.style.boxShadow = `0 12px 36px rgba(37,99,235,0.12)` }}
                onMouseLeave={e => { e.currentTarget.style.background = '#ffffff'; e.currentTarget.style.borderColor = '#e2e8f0'; e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.06)' }}
              >
                <div className="flex items-center gap-3 mb-1">
                  <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: `linear-gradient(135deg, ${color}, ${color}bb)`, boxShadow: `0 4px 14px ${glow}` }}>
                    <Icon size={15} className="text-white" />
                  </div>
                  <span className="text-[10px] font-black tracking-widest px-2 py-0.5 rounded-full"
                    style={{ color, background: `${color}10`, border: `1px solid ${color}22` }}>
                    STEP {num}
                  </span>
                </div>
                <h3 className="text-[12px] font-bold text-slate-800 leading-snug">{title}</h3>
                <p className="text-[12px] leading-[1.75] flex-1" style={{ color: '#64748b' }}>{desc}</p>
                <div className="flex flex-wrap gap-1.5 mt-auto pt-1">
                  {tags.map(tag => (
                    <span key={tag} className="text-[10px] font-semibold px-2 py-0.5 rounded-full"
                      style={{ background: `${color}10`, color: `${color}cc`, border: `1px solid ${color}1e` }}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Mobile: vertical list (xs only) ── */}
        <div className="reveal sm:hidden flex flex-col gap-0">
          {steps.map(({ icon: Icon, num, title, desc, tags, color, glow }, i) => (
            <div key={num} className="flex gap-4">

              {/* Left: number circle + connector */}
              <div className="flex flex-col items-center flex-shrink-0">
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0"
                  style={{ background: `linear-gradient(135deg, ${color}, ${color}bb)`, boxShadow: `0 6px 20px ${glow}` }}
                >
                  <Icon size={17} className="text-white" />
                </div>
                {i < steps.length - 1 && (
                  <div className="w-px flex-1 mt-2 mb-2" style={{ background: `linear-gradient(180deg, ${color}50, transparent)`, minHeight: 32 }} />
                )}
              </div>

              {/* Right: content */}
              <div className={`flex-1 ${i < steps.length - 1 ? 'pb-8' : ''}`}>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[10px] font-black tracking-widest px-2.5 py-0.5 rounded-full"
                    style={{ color, background: `${color}12`, border: `1px solid ${color}20` }}>
                    {num}
                  </span>
                  <h3 className="text-[13px] font-bold text-slate-800 leading-snug">{title}</h3>
                </div>
                <p className="text-[12.5px] leading-[1.75] mb-3" style={{ color: '#64748b' }}>{desc}</p>
                <div className="flex flex-wrap gap-1.5">
                  {tags.map(tag => (
                    <span key={tag} className="text-[10px] font-semibold px-2.5 py-1 rounded-full"
                      style={{ background: `${color}12`, color: `${color}cc`, border: `1px solid ${color}20` }}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* ── Bottom CTA strip ── */}
        <div className="reveal mt-14 flex flex-col sm:flex-row items-center justify-between gap-5 px-6 py-5 rounded-2xl"
          style={{ background: 'rgba(37,99,235,0.04)', border: '1px solid rgba(37,99,235,0.15)' }}>
          <div>
            <p className="text-[14px] font-bold text-slate-800 mb-0.5">Ready to start your WordPress project?</p>
            <p className="text-[12.5px]" style={{ color: '#64748b' }}>
              We provide web development with WordPress in Thanjavur driven by performance and usability, on par with modern digital standards.
            </p>
          </div>
          <a
            href="/ARA-Marketing/contact-us"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-[13px] font-bold text-white flex-shrink-0 transition-all duration-300 hover:scale-[1.04]"
            style={{ background: 'linear-gradient(135deg, #1d4ed8, #2563eb)', boxShadow: '0 4px 16px rgba(37,99,235,0.28)' }}
          >
            Start Your Project <ChevronRight size={14} />
          </a>
        </div>

      </div>
    </section>
  )
}

