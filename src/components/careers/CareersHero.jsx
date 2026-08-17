import { useState, useEffect } from 'react'
import { Briefcase, ArrowRight, ArrowDown, MapPin, Sparkles, Users, Clock3, FileUp } from 'lucide-react'
import { openings } from '../../data/careers'

const scrollTo = id => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

/* auto-fit + minmax lets the row fill the column at any card count: with two
   cards the empty tracks collapse and each card takes half the width, with five
   they settle into a uniform three-per-row grid. */
const CARD_GRID = 'grid gap-4 grid-cols-1 sm:grid-cols-[repeat(auto-fit,minmax(280px,1fr))]'

/* Glass surface used by every card on the dark band. */
const GLASS      = { background: 'rgba(255,255,255,0.045)', border: '1px solid rgba(255,255,255,0.09)' }
const GLASS_HOVER = { background: 'rgba(37,99,235,0.16)',   borderColor: 'rgba(59,130,246,0.34)' }

export default function CareersHero() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const move = e => setMouse({
      x: e.clientX / window.innerWidth - 0.5,
      y: e.clientY / window.innerHeight - 0.5,
    })
    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [])

  const parallax = depth => ({
    transform: `translate(${mouse.x * depth}px, ${mouse.y * depth}px)`,
    transition: 'transform 1.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
  })

  const openRoles = openings.filter(j => j.status === 'hiring')

  const facts = [
    { icon: Briefcase, value: String(openRoles.length).padStart(2, '0'), label: openRoles.length === 1 ? 'Open Role' : 'Open Roles' },
    { icon: MapPin,    value: 'Thanjavur', label: 'Work Location' },
    { icon: Users,     value: 'On-site',   label: 'Team Culture' },
  ]

  const glassIn  = e => Object.assign(e.currentTarget.style, GLASS_HOVER)
  const glassOut = e => { e.currentTarget.style.background = GLASS.background; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.09)' }

  return (
    /* The white top strip clears the fixed navbar, which is only 92% opaque —
       running the dark band up behind it would tint the whole header. */
    <section className="relative bg-white pt-[77px] lg:pt-[112px]">
      <div className="relative overflow-hidden"
        style={{ background: 'linear-gradient(165deg,#0d2244 0%,#091629 52%,#0d2244 100%)' }}>

        {/* ── Ambient light ── */}
        <div className="absolute pointer-events-none rounded-full"
          style={{ top: '-34%', left: '50%', transform: 'translateX(-50%)', width: '1200px', height: '760px',
            background: 'var(--brand-gradient-glow-dark)' }} />
        <div className="absolute pointer-events-none rounded-full animate-orb"
          style={{ ...parallax(24), top: '-16%', right: '-12%', width: '560px', height: '560px',
            background: 'var(--brand-gradient-glow-dark)' }} />
        <div className="absolute pointer-events-none rounded-full animate-orb-rev"
          style={{ ...parallax(-18), bottom: '-28%', left: '-12%', width: '520px', height: '520px',
            background: 'var(--brand-gradient-glow-dark)' }} />

        {/* Dot grid — light dots, since the brand token is tuned for white sections */}
        <div className="absolute inset-0 pointer-events-none"
          style={{ ...parallax(8),
            backgroundImage: 'radial-gradient(rgba(255,255,255,0.07) 1.5px, transparent 1.5px)',
            backgroundSize: '34px 34px' }} />

        {/* Decorative rings — mirrored either side of the centred column */}
        <div className="absolute pointer-events-none rounded-full hidden lg:block animate-decor-spin"
          style={{ ...parallax(-28), top: '15%', left: '4%', width: '210px', height: '210px',
            border: '1.5px solid rgba(255,255,255,0.08)' }} />
        <div className="absolute pointer-events-none rounded-full hidden lg:block animate-decor-spin-rev"
          style={{ ...parallax(22), top: '19%', right: '4%', width: '150px', height: '150px',
            border: '1px dashed rgba(96,165,250,0.22)' }} />

        <div className="relative z-10 max-w-[1180px] mx-auto px-5 sm:px-8 md:px-10 pt-12 md:pt-16 pb-20 md:pb-28">

          {/* ══ Centred copy ══ */}
          <div className="text-center">

            <span className="inline-flex items-center gap-2.5 px-4 py-2 mb-7 rounded-full
              text-[11px] font-bold uppercase tracking-[0.18em] text-blue-100 animate-hero-enter"
              style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)' }}>
              <span className="relative flex w-2 h-2">
                <span className="absolute inline-flex w-full h-full rounded-full bg-green-400 animate-pulse-dot" />
                <span className="relative inline-flex w-2 h-2 rounded-full bg-green-400" />
              </span>
              We&apos;re Hiring in Thanjavur
            </span>

            {/* The break is explicit so the company name always holds one line —
                the accent underline sizes to its span, and a wrapped name would
                stretch it across the whole column. */}
            <h1 className="font-bold text-white leading-[1.12] tracking-[-1.8px] mb-8 animate-hero-d1 mx-auto max-w-[1000px]"
              style={{ fontSize: 'clamp(30px,5.2vw,60px)', fontWeight: 700 }}>
              Careers at<br />
              <span className="relative inline-block">
                {/* Lighter ramp than --brand-gradient-text, which bottoms out too dark on navy */}
                <span className="text-gradient-blue"
                  style={{ backgroundImage: 'linear-gradient(135deg,#dbeafe 0%,#93c5fd 45%,#60a5fa 100%)' }}>
                  ARA Discover Marketing
                </span>
                <span className="hero-accent-underline animate-underline"
                  style={{ background: 'linear-gradient(90deg,#60a5fa,#3b82f6)' }} />
              </span>
            </h1>

            <p className="text-[16px] leading-[1.95] max-w-[620px] mx-auto mb-4 text-white/55 animate-hero-d2">
              Build your career with a growing digital marketing team in Thanjavur. We&apos;re always
              looking for talented, motivated and passionate people who want to learn, create
              and grow with us.
            </p>
            <p className="text-[14px] leading-[1.85] max-w-[560px] mx-auto mb-11 text-white/50 animate-hero-d3">
              Openings across SEO, digital marketing, content, social media, web development
              and business development.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center justify-center gap-4 mb-10 animate-hero-d4">
              <button type="button" onClick={() => scrollTo('current-openings')}
                className="btn-glow inline-flex items-center gap-2.5 px-8 py-3.5 text-white
                  rounded-full font-bold text-[14px] transition-all duration-300">
                View Open Roles <ArrowRight size={15} />
              </button>
              <button type="button" onClick={() => scrollTo('career-form')}
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full font-semibold text-[14px]
                  text-white/85 transition-all duration-300 hover:-translate-y-0.5 hover:text-white"
                style={GLASS}
                onMouseEnter={glassIn} onMouseLeave={glassOut}>
                <Sparkles size={15} /> Submit Your Resume
              </button>
            </div>

            {/* Facts as three separate tiles rather than one divided bar — it shares
                the icon-tile language of the role cards below, and each fact wraps
                as a whole unit on narrow screens instead of splitting mid-bar. */}
            {/* One per row on phones so the tiles share a width — auto-width tiles
                stacked at ragged lengths read as a mistake. */}
            <div className="grid grid-cols-1 gap-3 max-w-[360px] mx-auto
              sm:flex sm:flex-wrap sm:items-stretch sm:justify-center sm:max-w-none animate-hero-d5">
              {facts.map(({ icon: Icon, value, label }) => (
                <div key={label}
                  className="group flex items-center gap-3.5 px-5 py-3.5 rounded-[16px]
                    transition-all duration-300 hover:-translate-y-1"
                  style={GLASS}
                  onMouseEnter={glassIn} onMouseLeave={glassOut}>
                  <span className="w-9 h-9 rounded-[11px] flex items-center justify-center flex-shrink-0
                    transition-transform duration-300 group-hover:scale-110"
                    style={{ background: 'var(--brand-gradient)', boxShadow: '0 8px 22px rgba(37,99,235,0.32)' }}>
                    <Icon size={15} className="text-white" />
                  </span>
                  <span className="text-left leading-none">
                    <span className="block text-[15px] font-bold text-white">{value}</span>
                    <span className="block text-[9.5px] uppercase tracking-[0.14em] text-white/55 mt-1.5">{label}</span>
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* ══ Open roles rail ══ */}
          <div className="mt-16 md:mt-20 animate-hero-visual">

            <div className="flex items-center gap-4 mb-6">
              <span className="inline-flex items-center gap-2.5 text-[11px] font-bold uppercase
                tracking-[0.16em] text-white/60 whitespace-nowrap">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse-dot" />
                Now Hiring
              </span>
              <span className="flex-1 h-px" style={{ background: 'linear-gradient(90deg,transparent,rgba(255,255,255,0.16),transparent)' }} />
              <button type="button" onClick={() => scrollTo('current-openings')}
                className="inline-flex items-center gap-1.5 text-[12px] font-semibold text-blue-300
                  hover:text-blue-200 transition-colors duration-200 whitespace-nowrap">
                See all positions <ArrowDown size={12} />
              </button>
            </div>

            <div className={CARD_GRID}>

              {openRoles.slice(0, 4).map(job => (
                <button key={job.title} type="button" onClick={() => scrollTo('current-openings')}
                  className="group text-left flex flex-col h-full p-7 rounded-[20px]
                    transition-all duration-300 hover:-translate-y-1.5"
                  style={GLASS} onMouseEnter={glassIn} onMouseLeave={glassOut}>

                  {/* Left-aligned cluster rather than justify-between: the cards
                      stretch to half the column when few roles are live, and a
                      pinned-right badge ends up stranded from its icon. */}
                  <span className="flex items-center gap-3 mb-4">
                    <span className="w-10 h-10 rounded-[12px] flex items-center justify-center
                      transition-transform duration-300 group-hover:scale-110"
                      style={{ background: 'var(--brand-gradient)', boxShadow: '0 8px 24px rgba(37,99,235,0.35)' }}>
                      <Briefcase size={16} className="text-white" />
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full
                      text-[9.5px] font-bold uppercase tracking-[0.12em]"
                      style={{ background: 'rgba(22,163,74,0.16)', color: '#4ade80', border: '1px solid rgba(74,222,128,0.28)' }}>
                      <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse-dot" /> Hiring
                    </span>
                  </span>

                  <span className="block text-[15px] font-bold text-white leading-snug mb-2.5">
                    {job.title}
                  </span>

                  <span className="flex flex-wrap items-center gap-x-3.5 gap-y-1.5 text-[11.5px] text-white/50">
                    <span className="inline-flex items-center gap-1.5"><MapPin size={11} /> {job.location}</span>
                    <span className="inline-flex items-center gap-1.5"><Clock3 size={11} /> {job.experience}</span>
                  </span>

                  {/* mt-auto keeps the action on the baseline across a row of cards */}
                  <span className="mt-auto pt-5 inline-flex items-center gap-1.5 text-[12px] font-semibold text-blue-300">
                    View role
                    <ArrowRight size={12} className="transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </button>
              ))}

              {/* Always last: keeps the row balanced when only a role or two is live,
                  and gives people without a matching opening somewhere to go. */}
              <button type="button" onClick={() => scrollTo('career-form')}
                className="group text-left flex flex-col h-full p-7 rounded-[20px]
                  transition-all duration-300 hover:-translate-y-1.5"
                style={{ background: 'rgba(255,255,255,0.02)', border: '1.5px dashed rgba(255,255,255,0.16)' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(96,165,250,0.5)'; e.currentTarget.style.background = 'rgba(37,99,235,0.12)' }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.16)'; e.currentTarget.style.background = 'rgba(255,255,255,0.02)' }}>

                <span className="w-10 h-10 mb-4 rounded-[12px] flex items-center justify-center
                  transition-transform duration-300 group-hover:scale-110"
                  style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.12)' }}>
                  <FileUp size={16} style={{ color: '#93c5fd' }} />
                </span>

                <span className="block text-[15px] font-bold text-white leading-snug mb-2.5">
                  {openRoles.length ? 'Role not listed?' : 'No live openings right now'}
                </span>

                <span className="block text-[11.5px] leading-[1.7] text-white/50">
                  Send us your resume and we&apos;ll reach out when a matching role opens.
                </span>

                <span className="mt-auto pt-5 inline-flex items-center gap-1.5 text-[12px] font-semibold text-blue-300">
                  Submit your resume
                  <ArrowRight size={12} className="transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
