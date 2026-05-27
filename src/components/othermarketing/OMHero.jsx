import {
  Mail, Smartphone, Users, ChevronRight, ArrowRight, ArrowUpRight,
  TrendingUp, CheckCircle2, Zap, Send, Star,
} from 'lucide-react'

const channels = [
  { icon: Mail,       label: 'Email Marketing',      metric: '68%',  sub: 'Average open rate',   pct: 68, color: '#2563eb', bg: 'rgba(37,99,235,0.12)',  border: 'rgba(37,99,235,0.25)' },
  { icon: Users,      label: 'Influencer Marketing', metric: '2.4M', sub: 'Monthly reach',        pct: 82, color: '#a78bfa', bg: 'rgba(167,139,250,0.12)', border: 'rgba(167,139,250,0.28)' },
  { icon: Smartphone, label: 'SMS Marketing',        metric: '99%',  sub: 'Delivery rate',        pct: 99, color: '#38bdf8', bg: 'rgba(56,189,248,0.12)', border: 'rgba(56,189,248,0.25)' },
]

const gradMain = {
  background: 'linear-gradient(135deg,#60a5fa 0%,#a78bfa 100%)',
  WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
}

export default function OMHero() {
  return (
    <section className="relative overflow-hidden pt-[72px] min-h-screen flex items-center"
      style={{ background: 'linear-gradient(135deg,#020b18 0%,#071428 50%,#040e1f 100%)' }}>

      <div className="absolute inset-0 pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(rgba(37,99,235,0.12) 1px,transparent 1px)', backgroundSize: '36px 36px' }} />
      <div className="absolute -top-40 -left-40 w-[700px] h-[700px] rounded-full pointer-events-none animate-orb"
        style={{ background: 'radial-gradient(circle,rgba(37,99,235,0.20) 0%,transparent 65%)' }} />
      <div className="absolute -bottom-32 -right-32 w-[600px] h-[600px] rounded-full pointer-events-none animate-orb-rev"
        style={{ background: 'radial-gradient(circle,rgba(124,58,237,0.14) 0%,transparent 65%)' }} />
      <div className="absolute top-20 right-[8%] w-52 h-52 rounded-full border border-white/[0.05] pointer-events-none animate-[spin_40s_linear_infinite]" />
      <div className="absolute bottom-20 left-[5%] w-36 h-36 rounded-full border border-blue-400/[0.06] pointer-events-none animate-[spin_30s_linear_infinite_reverse]" />
      <div className="absolute top-1/2 left-0 right-0 h-px pointer-events-none"
        style={{ background: 'linear-gradient(90deg,transparent,rgba(37,99,235,0.18) 30%,rgba(124,58,237,0.22) 50%,rgba(37,99,235,0.14) 70%,transparent)' }} />

      <div className="relative max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-7 py-20 w-full">
        <div className="flex flex-col lg:flex-row gap-16 items-center">

          {/* Left */}
          <div className="flex-1 min-w-0 animate-hero-enter">
            <nav className="flex items-center gap-1.5 text-[12px] mb-8" style={{ color: 'rgba(255,255,255,0.32)' }}>
              <a href="/ARA-Marketing/" className="hover:text-sky-300 transition-colors">Home</a>
              <ChevronRight size={12} style={{ color: 'rgba(255,255,255,0.18)' }} />
              <span>Services</span>
              <ChevronRight size={12} style={{ color: 'rgba(255,255,255,0.18)' }} />
              <span style={{ color: '#a78bfa' }} className="font-semibold">Other Marketing</span>
            </nav>

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-[11px] font-bold uppercase tracking-widest mb-7"
              style={{ background: 'rgba(167,139,250,0.14)', border: '1px solid rgba(167,139,250,0.25)', color: '#c4b5fd' }}>
              <Send size={11} /> Advanced Digital Marketing Services
            </div>

            <h1 className="text-[clamp(32px,4.2vw,60px)] font-bold leading-[1.06] tracking-tight mb-5" style={{ color: '#fff' }}>
              Advanced Digital Marketing{' '}
              <span style={gradMain}>Services in Thanjavur</span>
            </h1>

            <p className="text-[14.5px] leading-[1.85] mb-4 max-w-[520px]" style={{ color: 'rgba(255,255,255,0.48)' }}>
              Email Marketing &bull; Influencer Marketing &bull; SMS Marketing
            </p>
            <p className="text-[13.5px] leading-[1.85] mb-10 max-w-[520px]" style={{ color: 'rgba(255,255,255,0.40)' }}>
              Ara Discover Marketing offers results-oriented digital marketing solutions aimed at driving customer engagement, brand awareness, and measurable leads for startups and growing businesses.
            </p>

            <div className="flex flex-wrap gap-3 mb-12">
              <a href="#contact"
                className="btn-glow inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-bold text-white transition-all duration-300 hover:-translate-y-0.5"
                style={{ background: 'linear-gradient(135deg,#2563eb,#7c3aed)', boxShadow: '0 8px 32px rgba(124,58,237,0.38)' }}>
                Start Your Campaign <ArrowRight size={15} />
              </a>
              <a href="#om-services"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5"
                style={{ color: 'rgba(255,255,255,0.75)', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)' }}>
                Explore Services <ArrowUpRight size={15} />
              </a>
            </div>

            <div className="flex flex-wrap gap-8 pt-7" style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}>
              {[['500+','Campaigns'],['98%','Satisfaction'],['3','Channels']].map(([num, label]) => (
                <div key={label}>
                  <span className="text-[28px] font-black leading-tight block" style={gradMain}>{num}</span>
                  <span className="text-[11px]" style={{ color: 'rgba(255,255,255,0.30)' }}>{label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: 3 channel cards stacked */}
          <div className="lg:w-[420px] flex-shrink-0 reveal-right">
            <div className="relative">
              <div className="absolute -inset-6 rounded-[3rem] pointer-events-none"
                style={{ background: 'radial-gradient(ellipse,rgba(124,58,237,0.18) 0%,transparent 70%)' }} />

              <div className="relative flex flex-col gap-3">
                {channels.map(({ icon: Icon, label, metric, sub, pct, color, bg, border }) => (
                  <div key={label} className="group relative rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-x-1"
                    style={{ background: 'rgba(255,255,255,0.04)', border: `1px solid ${border}`, backdropFilter: 'blur(20px)' }}>
                    <div className="h-0.5 w-full" style={{ background: `linear-gradient(90deg,${color},${color}44)` }} />
                    <div className="flex items-center gap-5 px-5 py-4">
                      <div className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0"
                        style={{ background: bg, border: `1px solid ${border}` }}>
                        <Icon size={20} style={{ color }} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-2">
                          <p className="text-[12px] font-bold" style={{ color: 'rgba(255,255,255,0.70)' }}>{label}</p>
                          <span className="text-[18px] font-black" style={{ color }}>{metric}</span>
                        </div>
                        <div className="h-1.5 rounded-full mb-1.5" style={{ background: 'rgba(255,255,255,0.08)' }}>
                          <div style={{ height: '100%', width: `${pct}%`, borderRadius: 4, background: `linear-gradient(90deg,${color}80,${color})` }} />
                        </div>
                        <p className="text-[10.5px]" style={{ color: 'rgba(255,255,255,0.32)' }}>{sub}</p>
                      </div>
                    </div>
                  </div>
                ))}

                {/* Summary card */}
                <div className="rounded-2xl overflow-hidden"
                  style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', backdropFilter: 'blur(20px)' }}>
                  <div className="flex items-center gap-4 px-5 py-4">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: 'linear-gradient(135deg,#2563eb,#7c3aed)' }}>
                      <TrendingUp size={16} className="text-white" />
                    </div>
                    <div className="flex-1">
                      <p className="text-[11px] font-bold text-white/60 mb-0.5">Total Campaign Reach</p>
                      <p className="text-[22px] font-black" style={{ background: 'linear-gradient(135deg,#60a5fa,#a78bfa)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>2.4M+ Audiences</p>
                    </div>
                    <span className="flex items-center gap-1.5 text-[10px] font-bold text-emerald-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse-dot" /> LIVE
                    </span>
                  </div>
                </div>
              </div>

              {/* Floating badges */}
              <div className="absolute -top-5 -right-5 flex items-center gap-2 px-3.5 py-2 rounded-2xl bg-white border border-violet-200 animate-float"
                style={{ boxShadow: '0 12px 36px rgba(0,0,0,0.35)' }}>
                <Star size={12} className="text-violet-600" />
                <span className="text-[11px] font-bold text-slate-700">Premium Agency</span>
              </div>
              <div className="absolute -bottom-5 -left-5 flex items-center gap-2 px-3.5 py-2 rounded-2xl bg-white border border-sky-100 animate-float-delay"
                style={{ boxShadow: '0 12px 36px rgba(0,0,0,0.30)' }}>
                <CheckCircle2 size={12} className="text-emerald-500" />
                <span className="text-[11px] font-bold text-slate-700">500+ Campaigns</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
