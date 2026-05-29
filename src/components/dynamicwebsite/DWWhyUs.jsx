import { Package, Settings, Cpu, Smartphone, Search, ArrowRight, Zap } from 'lucide-react'

const reasons = [
  { icon: Package,    title: 'Custom-Built Dynamic Website Solutions Tailored to Business Needs', desc: 'Every feature, every page, and every interaction is built specifically for your business goals — no generic templates, no compromise on quality.', color: '#2563eb' },
  { icon: Settings,   title: 'CMS Integration for Easy Content Updates',                          desc: 'Manage your website content effortlessly with user-friendly CMS platforms like WordPress. No coding required — complete control is in your hands.', color: '#0891b2' },
  { icon: Cpu,        title: 'High-Performance Backend Architecture',                             desc: 'Robust server-side technology built to handle heavy traffic, complex operations, and data-intensive tasks without slowing down your website.', color: '#2563eb' },
  { icon: Smartphone, title: 'Mobile-First Responsive Design',                                   desc: 'Every dynamic website we build is optimised for all screen sizes — delivering a flawless, engaging experience on mobile, tablet, and desktop.', color: '#0891b2' },
  { icon: Search,     title: 'SEO-Optimised Coding Structure',                                   desc: 'Clean, structured code with fast load speeds, schema markup, and performance optimisation to maximise your organic search rankings.', color: '#2563eb' },
]

const gradBlue = {
  background: 'linear-gradient(135deg,#2563eb,#0891b2)',
  WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
}

export default function DWWhyUs() {
  return (
    <section className="relative py-16 sm:py-20 lg:py-24 overflow-hidden"
      style={{ background: 'linear-gradient(160deg, #f0f7ff 0%, #eff6ff 55%, #e0f2fe 100%)' }}>

      <div className="absolute inset-0 pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(rgba(37,99,235,0.07) 1.5px, transparent 1.5px)', backgroundSize: '36px 36px' }} />
      <div className="hidden sm:block absolute -top-24 -left-24 w-[420px] h-[420px] rounded-full border border-blue-200/40 pointer-events-none animate-[spin_38s_linear_infinite]" />
      <div className="hidden sm:block absolute -top-14 -left-14 w-[280px] h-[280px] rounded-full border border-sky-200/30 pointer-events-none animate-[spin_24s_linear_infinite_reverse]" />
      <div className="hidden sm:block absolute -bottom-20 -right-20 w-[360px] h-[360px] rounded-full border border-blue-200/35 pointer-events-none animate-[spin_40s_linear_infinite]" />
      <div className="absolute top-0 right-0 w-[300px] sm:w-[480px] h-[300px] sm:h-[480px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(147,197,253,0.18) 0%, transparent 65%)' }} />
      <div className="absolute bottom-0 left-0 w-[260px] sm:w-[400px] h-[260px] sm:h-[400px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(186,230,253,0.20) 0%, transparent 65%)' }} />

      <div className="relative max-w-[1200px] mx-auto px-4 sm:px-6 md:px-7">

        {/* ── Header row ── */}
        <div className="flex flex-col lg:flex-row lg:items-end gap-6 mb-12 sm:mb-16 reveal">
          <div className="flex-1">
            <span className="inline-flex items-center gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-[11px] font-bold uppercase tracking-widest mb-4 sm:mb-5 text-blue-600 bg-white/80 shadow-sm"
              style={{ border: '1px solid rgba(37,99,235,0.18)' }}>
              <Zap size={10} /> Why Choose Us
            </span>
            <h2 className="text-[clamp(22px,4vw,46px)] font-bold text-slate-900 leading-[1.1] tracking-tight mb-4">
              Why We Stand Out{' '}
              <span style={gradBlue}>Today?</span>
            </h2>
            <p className="text-[13.5px] sm:text-[15px] text-slate-500 leading-[1.85] max-w-[580px]">
              We are a results-driven, dynamic website development company in Thanjavur, focusing on building websites that perform, convert, and scale. Here's why businesses choose us:
            </p>
          </div>
          <div className="hidden lg:block flex-shrink-0">
            <img
              src="https://images.unsplash.com/photo-1551650975-87deedd944c3?w=340&h=240&fit=crop&auto=format&q=80"
              alt="Dynamic website designing company in Thanjavur"
              loading="lazy"
              className="rounded-2xl object-cover"
              style={{ width: 320, height: 220, boxShadow: '0 20px 50px rgba(37,99,235,0.18)' }}
            />
          </div>
        </div>

        {/* ── Reason rows — no numbers ── */}
        <div className="space-y-0 reveal">
          {reasons.map(({ icon: Icon, title, desc, color }, i) => (
            <div
              key={title}
              className="group flex items-start gap-4 sm:gap-6 py-6 sm:py-7 transition-all duration-300 cursor-default"
              style={{ borderBottom: i < reasons.length - 1 ? '1px solid rgba(37,99,235,0.10)' : 'none', paddingLeft: 0 }}
              onMouseEnter={e => { e.currentTarget.style.paddingLeft = '10px' }}
              onMouseLeave={e => { e.currentTarget.style.paddingLeft = '0px' }}
            >
              {/* Icon */}
              <div className="flex-shrink-0 mt-0.5 w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg"
                style={{ background: `linear-gradient(135deg,${color}18,${color}08)`, border: `1.5px solid ${color}25` }}>
                <Icon size={17} style={{ color }} />
              </div>
              {/* Text */}
              <div className="flex-1 min-w-0">
                <h3 className="text-[14px] sm:text-[16px] font-bold text-slate-900 mb-2 leading-snug">{title}</h3>
                <p className="text-[12.5px] sm:text-[13.5px] text-slate-500 leading-[1.80]">{desc}</p>
              </div>
              {/* Hover arrow */}
              <div className="flex-shrink-0 flex items-center self-center opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-2 group-hover:translate-x-0">
                <ArrowRight size={16} style={{ color }} />
              </div>
            </div>
          ))}
        </div>

        {/* ── Bottom banner ── */}
        <div className="reveal mt-10 sm:mt-14 flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6 px-5 sm:px-8 py-5 sm:py-6 rounded-2xl sm:rounded-3xl overflow-hidden relative"
          style={{ background: 'linear-gradient(135deg, #1d4ed8 0%, #2563eb 50%, #0891b2 100%)', boxShadow: '0 20px 60px rgba(37,99,235,0.28)' }}>
          <div className="absolute inset-0 pointer-events-none"
            style={{ background: 'radial-gradient(ellipse at 25% 50%, rgba(255,255,255,0.12) 0%, transparent 60%)' }} />
          <div className="hidden sm:block absolute right-8 top-1/2 -translate-y-1/2 w-28 h-28 rounded-full border border-white/10 pointer-events-none" />
          <div className="hidden sm:block absolute right-12 top-1/2 -translate-y-1/2 w-16 h-16 rounded-full border border-white/08 pointer-events-none" />
          <div className="relative flex flex-col sm:flex-row items-center gap-3 sm:gap-4 text-center sm:text-left w-full sm:w-auto">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl flex items-center justify-center flex-shrink-0"
              style={{ background: 'rgba(255,255,255,0.15)', border: '1px solid rgba(255,255,255,0.25)' }}>
              <Zap size={18} className="text-white" />
            </div>
            <div>
              <p className="text-[13px] sm:text-[14px] font-bold text-white mb-0.5">Professional Dynamic Website Design & Development Company in Thanjavur</p>
              <p className="text-[11.5px] sm:text-[12.5px] leading-snug max-w-[480px]" style={{ color: 'rgba(255,255,255,0.70)' }}>
                Our dynamic web design services in Thanjavur are customised for the development of visually pleasing interfaces and powerful functionality.
              </p>
            </div>
          </div>
          <div className="relative flex-shrink-0">
            <a href="/ARA-Marketing/contact"
              className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full text-[12px] sm:text-[13px] font-bold transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
              style={{ background: 'white', color: '#1d4ed8' }}>
              Work With Us <ArrowRight size={13} />
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}
