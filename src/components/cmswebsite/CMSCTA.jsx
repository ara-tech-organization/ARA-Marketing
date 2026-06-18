import { ArrowRight, Phone, Globe, Sparkles, CheckCircle2, Users, Star, Clock } from 'lucide-react'

const stats = [
  { icon: Globe,  val: '200+', lbl: 'WordPress Sites Delivered', color: '#2563eb' },
  { icon: Star,   val: '5★',   lbl: 'Average Client Rating',     color: '#f59e0b' },
  { icon: Users,  val: '150+', lbl: 'Happy Business Clients',    color: '#2563eb' },
  { icon: Clock,  val: '5 Days', lbl: 'Average Project Kickoff', color: '#1d4ed8' },
]

const perks = [
  'Free consultation — no commitment',
  'Custom WordPress solutions',
  'On-time delivery guaranteed',
  'Post-launch support included',
]

export default function CMSCTA() {
  return (
    <section className="relative py-16 sm:py-24 overflow-hidden bg-white">
      {/* Subtle orbs */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(37,99,235,0.05) 0%, transparent 65%)' }} />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(29,78,216,0.04) 0%, transparent 65%)' }} />

      {/* Dot pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-20"
        style={{ backgroundImage: 'radial-gradient(rgba(37,99,235,0.12) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      <div className="relative max-w-[1280px] mx-auto px-4 sm:px-6 md:px-7">
        <div className="flex flex-col md:flex-row gap-10 md:gap-12 lg:gap-16 items-center">

          {/* ── Left: Heading + CTAs ── */}
          <div className="flex-1 reveal">

            {/* Badge */}
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-widest mb-6"
              style={{ background: 'rgba(37,99,235,0.08)', color: '#1d4ed8', border: '1px solid rgba(37,99,235,0.2)' }}>
              <Sparkles size={11} /> Let's Build Together
            </span>

            {/* Heading */}
            <h2 className="text-[clamp(25px,3.1vw,47px)] font-bold text-slate-900 leading-[1.1] tracking-tight mb-5">
              Let's Build Your WordPress{' '}
              <span style={{ background: 'linear-gradient(135deg, #1d4ed8, #2563eb, #3b82f6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                Website Together
              </span>
            </h2>

            {/* Sub */}
            <p className="text-[15px] text-slate-500 leading-[1.85] mb-8 max-w-lg">
              Are you ready to grow your business online with a powerful WordPress website? Collaborate with one of the <span className="text-slate-600">best WordPress development firms in Thanjavur</span> and elevate your online presence to the next level.
            </p>

            {/* Perks checklist */}
            <div className="flex flex-col gap-2.5 mb-8">
              {perks.map(p => (
                <div key={p} className="flex items-center gap-3">
                  <CheckCircle2 size={15} className="flex-shrink-0" style={{ color: '#2563eb' }} />
                  <span className="text-[13px] text-slate-600 font-medium">{p}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="/ARA-Marketing/contact-us"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-[14px] font-bold text-white transition-all duration-300 hover:scale-[1.03]"
                style={{ background: 'linear-gradient(135deg, #1d4ed8, #2563eb)', boxShadow: '0 8px 28px rgba(37,99,235,0.28)' }}
                onMouseEnter={e => e.currentTarget.style.boxShadow = '0 12px 36px rgba(37,99,235,0.4)'}
                onMouseLeave={e => e.currentTarget.style.boxShadow = '0 8px 28px rgba(37,99,235,0.28)'}
              >
                <Phone size={14} /> Call Us Now
              </a>
              <a
                href="/ARA-Marketing/contact-us"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-[14px] font-bold transition-all duration-300 hover:scale-[1.03]"
                style={{ background: 'white', border: '1.5px solid rgba(37,99,235,0.3)', color: '#1d4ed8', boxShadow: '0 4px 16px rgba(37,99,235,0.1)' }}
              >
                Talk to an Expert <ArrowRight size={14} />
              </a>
            </div>

          </div>

          {/* ── Right: Stats panel ── */}
          <div className="md:w-[340px] lg:w-[420px] flex-shrink-0 reveal">
            <div className="rounded-3xl p-7 relative overflow-hidden"
              style={{ background: 'linear-gradient(135deg, #1d4ed8 0%, #2563eb 60%, #3b82f6 100%)', boxShadow: '0 24px 64px rgba(37,99,235,0.35)' }}>

              {/* Panel glow */}
              <div className="absolute top-0 right-0 w-64 h-64 rounded-full pointer-events-none"
                style={{ background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 65%)' }} />
              <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full pointer-events-none"
                style={{ background: 'radial-gradient(circle, rgba(29,78,216,0.4) 0%, transparent 65%)' }} />

              {/* Panel header */}
              <div className="relative mb-6">
                <p className="text-[11px] font-bold uppercase tracking-widest text-blue-200 mb-1">Our Track Record</p>
                <h3 className="text-[19px] font-bold text-white leading-snug">
                  Trusted by Businesses<br />Across Thanjavur & Beyond
                </h3>
              </div>

              {/* Stats grid */}
              <div className="relative grid grid-cols-2 gap-3 mb-6">
                {stats.map(({ icon: Icon, val, lbl, color }) => (
                  <div key={lbl} className="rounded-2xl p-4"
                    style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.15)', backdropFilter: 'blur(8px)' }}>
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center mb-3"
                      style={{ background: 'rgba(255,255,255,0.15)' }}>
                      <Icon size={15} className="text-white" />
                    </div>
                    <p className="text-[24px] font-black text-white leading-none mb-1"
                      style={{ color: val === '5★' ? '#fbbf24' : 'white' }}>{val}</p>
                    <p className="text-[10.5px] font-medium leading-snug" style={{ color: 'rgba(255,255,255,0.65)' }}>{lbl}</p>
                  </div>
                ))}
              </div>

              {/* Bottom note */}
              <div className="relative flex items-center gap-3 p-4 rounded-2xl"
                style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.15)' }}>
                <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: 'rgba(255,255,255,0.2)' }}>
                  <Sparkles size={15} className="text-white" />
                </div>
                <div>
                  <p className="text-[12px] font-bold text-white leading-tight">100% Custom-Built Websites</p>
                  <p className="text-[10.5px]" style={{ color: 'rgba(255,255,255,0.6)' }}>No templates. Every site is built from scratch.</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
