import { ShoppingCart, BookOpen, Newspaper, Home, Briefcase, ArrowRight, Users, CheckCircle2 } from 'lucide-react'

const industries = [
  { icon: ShoppingCart, label: 'E-Commerce Businesses',     desc: 'Online stores that need product catalogue updates, cart systems, and real-time inventory management for seamless shopping.',             color: '#2563eb' },
  { icon: BookOpen,     label: 'Educational Platforms',     desc: 'Schools, colleges, and e-learning portals needing dynamic course listings, student portals, and admission management systems.',          color: '#0ea5e9' },
  { icon: Newspaper,    label: 'News & Media Websites',     desc: 'Publishers and media houses that publish daily content, breaking news, articles, and multimedia with instant live updates.',             color: '#2563eb' },
  { icon: Home,         label: 'Real Estate Companies',     desc: 'Property businesses that regularly update listings, pricing, availability, virtual tours, and project status pages.',                   color: '#0ea5e9' },
  { icon: Briefcase,    label: 'Service-Based Enterprises', desc: 'Businesses offering professional services that need dynamic booking, portfolio showcase, testimonials, and client management tools.',    color: '#2563eb' },
]

const gradInd = {
  background: 'linear-gradient(135deg,#2563eb,#0ea5e9)',
  WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
}

export default function DWWhoShould() {
  return (
    <section className="relative py-16 sm:py-20 lg:py-16 overflow-hidden"
      style={{ background: 'linear-gradient(160deg, #f0f7ff 0%, #eff6ff 55%, #e0f2fe 100%)' }}>

      <div className="absolute inset-0 pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(rgba(37,99,235,0.06) 1.5px, transparent 1.5px)', backgroundSize: '34px 34px' }} />
      <div className="hidden sm:block absolute -top-20 -left-20 w-[360px] h-[360px] rounded-full border border-blue-200/30 pointer-events-none animate-[spin_36s_linear_infinite]" />
      <div className="hidden sm:block absolute -top-10 -left-10 w-[230px] h-[230px] rounded-full border border-sky-200/22 pointer-events-none animate-[spin_24s_linear_infinite_reverse]" />
      <div className="hidden sm:block absolute -bottom-16 -right-16 w-[300px] h-[300px] rounded-full border border-blue-200/25 pointer-events-none" />
      <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle,rgba(14,165,233,0.16) 0%,transparent 65%)' }} />

      <div className="relative max-w-[1200px] mx-auto px-4 sm:px-6 md:px-7">

        {/* ── Header ── */}
        <div className="text-center mb-10 sm:mb-14 reveal">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-widest mb-5 text-blue-600 bg-white/80 shadow-sm"
            style={{ border: '1px solid rgba(37,99,235,0.18)' }}>
            <Users size={10} /> Ideal For
          </span>
          <h2 className="text-[clamp(21px,3.6vw,45px)] font-bold text-slate-900 leading-[1.1] tracking-tight mb-4">
            Who Should Invest in a{' '}
            <span style={gradInd}>Dynamic Website?</span>
          </h2>
          <p className="text-[13.5px] sm:text-[15px] text-slate-500 leading-[1.85] max-w-2xl mx-auto px-2 sm:px-0">
            Dynamic websites are ideal choices for businesses requiring regular updates, user interaction, and advanced features. If you are looking for the best dynamic website development service in Thanjavur, we are here to help you scale your online presence.
          </p>
        </div>

        {/* ── Industry tiles — 3×2 grid with CTA as 6th tile ── */}
        <div className="reveal grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {industries.map(({ icon: Icon, label, desc, color }) => (
            <div
              key={label}
              className="group p-5 sm:p-6 rounded-2xl sm:rounded-3xl transition-all duration-500 hover:-translate-y-2"
              style={{
                background: 'rgba(255,255,255,0.85)',
                backdropFilter: 'blur(16px)',
                border: '1.5px solid rgba(255,255,255,0.95)',
                boxShadow: '0 4px 20px rgba(37,99,235,0.07)',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.boxShadow = `0 20px 50px ${color}18`
                e.currentTarget.style.borderColor = color + '30'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(37,99,235,0.07)'
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.95)'
              }}
            >
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg"
                style={{ background: `linear-gradient(135deg, ${color}18, ${color}08)`, border: `1.5px solid ${color}28` }}>
                <Icon size={18} style={{ color }} />
              </div>
              <h3 className="text-[13px] sm:text-[14px] font-bold text-slate-900 mb-2">{label}</h3>
              <p className="text-[12px] sm:text-[13px] text-slate-500 leading-[1.75]">{desc}</p>
              <div className="flex items-center gap-1.5 mt-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <CheckCircle2 size={12} style={{ color }} />
                <span className="text-[11px] font-semibold" style={{ color }}>Perfect fit for dynamic websites</span>
              </div>
            </div>
          ))}

          {/* 6th tile — CTA box */}
          <div className="flex flex-col items-center justify-center gap-3 p-5 sm:p-6 rounded-2xl sm:rounded-3xl text-center"
            style={{ background: 'linear-gradient(135deg,#2563eb,#0ea5e9)', boxShadow: '0 12px 40px rgba(37,99,235,0.28)' }}>
            <p className="text-[11px] font-black uppercase tracking-widest text-white/80">Get Your Custom Website Plan Today</p>
            <p className="text-[13px] sm:text-[13.5px] font-medium text-white/90 leading-snug">Start building a powerful digital presence with our expert team.</p>
            <a href="/ARA-Marketing/contact-us"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-[13px] font-bold transition-all duration-300 hover:-translate-y-0.5 mt-1"
              style={{ background: 'white', color: '#2563eb', boxShadow: '0 4px 16px rgba(0,0,0,0.15)' }}>
              Get Started Today <ArrowRight size={13} />
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}
