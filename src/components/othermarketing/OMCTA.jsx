import {
  ArrowRight, Zap, CheckCircle2, TrendingUp,
  Mail, Users, Smartphone, BarChart2, Bot, FileText,
} from 'lucide-react'

const packageItems = [
  { icon: Mail,       label: 'Strategic Email Campaign Setup',         color: '#2563eb' },
  { icon: Zap,        label: 'Automated Email Workflow Creation',      color: '#7c3aed' },
  { icon: Users,      label: 'Influencer Outreach & Management',       color: '#0891b2' },
  { icon: Smartphone, label: 'Bulk SMS Campaign Management',           color: '#059669' },
  { icon: Bot,        label: 'AI-Driven Marketing Optimization',       color: '#dc2626' },
  { icon: BarChart2,  label: 'Monthly Campaign Performance Reports',   color: '#d97706' },
  { icon: FileText,   label: 'Transparent Reporting & Communication',  color: '#0f766e' },
]

const promises = ['No setup fees', 'Free consultation', 'Monthly transparent reporting']

export default function OMCTA() {
  return (
    <section className="relative overflow-hidden py-20"
      style={{ background: 'linear-gradient(160deg,#f0f7ff 0%,#eff6ff 55%,#f5f3ff 100%)' }}>


      <div className="relative max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-7">

        {/* Split layout */}
        <div className="flex flex-col lg:flex-row gap-12 items-center reveal">

          {/* Left: image — outer wrapper (no overflow-hidden so badge is visible) */}
          <div className="w-full lg:w-[460px] flex-shrink-0">
            <div className="relative pt-6 pr-6 sm:pt-6 sm:pr-6">

              {/* Floating badge — sits outside overflow-hidden container */}
              <div className="absolute top-0 right-0 z-10 flex items-center gap-2 px-3.5 py-2 bg-white rounded-2xl shadow-xl border border-emerald-100 animate-float"
                style={{ boxShadow: '0 12px 32px rgba(5,150,105,0.15)' }}>
                <CheckCircle2 size={13} className="text-emerald-500" />
                <span className="text-[11px] font-bold text-slate-800">Results Guaranteed</span>
              </div>

              {/* Image container — overflow-hidden only here */}
              <div className="relative rounded-3xl overflow-hidden"
                style={{ boxShadow: '0 32px 80px rgba(37,99,235,0.18)' }}>
                <img
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900&auto=format&fit=crop&q=80"
                  alt="Business growth through digital marketing campaigns — Ara Discover Marketing Thanjavur"
                  className="w-full h-[620px] object-cover object-center"
                />

                {/* Light blue overlay instead of dark */}
                <div className="absolute inset-0"
                  style={{ background: 'linear-gradient(160deg,rgba(37,99,235,0.35) 0%,rgba(124,58,237,0.25) 55%,rgba(8,145,178,0.20) 100%)' }} />

                {/* Overlay content */}
                <div className="absolute inset-0 flex flex-col justify-between p-7">
                  <div>
                    <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest"
                      style={{ background: 'rgba(255,255,255,0.25)', border: '1px solid rgba(255,255,255,0.40)', color: '#fff', backdropFilter: 'blur(8px)' }}>
                      <Zap size={10} /> Growth Package
                    </span>
                  </div>
                  <div>
                    <p className="text-white text-[20px] font-bold leading-snug mb-4 drop-shadow-sm">
                      Multi-Channel Marketing Growth Package
                    </p>
                    <div className="flex gap-3">
                      {[['500+','Campaigns'],['98%','Satisfied'],['2.4M','Reach']].map(([v, l]) => (
                        <div key={l} className="flex-1 text-center rounded-xl py-2.5"
                          style={{ background: 'rgba(255,255,255,0.20)', backdropFilter: 'blur(12px)', border: '1px solid rgba(255,255,255,0.30)' }}>
                          <p className="text-[18px] font-bold text-white leading-none">{v}</p>
                          <p className="text-[9px] font-semibold mt-0.5" style={{ color: 'rgba(255,255,255,0.70)' }}>{l}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: CTA content */}
          <div className="flex-1 min-w-0">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-[11px]
              font-bold uppercase tracking-widest mb-6 bg-white border border-violet-200 text-violet-600 shadow-sm">
              <Zap size={11} /> Ready to Grow Your Business
            </span>

            <h2 className="text-[clamp(24px,3.5vw,48px)] font-bold text-slate-900 leading-[1.08] tracking-tight mb-5">
              Ready to Improve{' '}
              <span style={{ background: 'linear-gradient(135deg,#2563eb,#7c3aed)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                Customer Engagement
              </span>{' '}
              & Business Growth?
            </h2>

            <p className="text-[14.5px] text-slate-500 leading-[1.85] mb-7 max-w-[480px]">
              Partner with Ara Discover Marketing to build strategic email marketing, influencer collaborations, and SMS marketing tactics that boost audience engagement and drive measurable business results.
            </p>

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-3 mb-8">
              <a href="/ARA-Marketing/contact"
                className="btn-glow inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-[14px] font-bold text-white transition-all duration-300 hover:-translate-y-0.5"
                style={{ background: 'linear-gradient(135deg,#2563eb,#7c3aed)', boxShadow: '0 10px 32px rgba(124,58,237,0.28)' }}>
                Start Your Campaign <ArrowRight size={15} />
              </a>
              <a href="#om-services"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-[14px] font-semibold text-violet-700 bg-white border border-violet-200 hover:bg-violet-50 hover:border-violet-300 transition-all duration-300 shadow-sm">
                Explore Services
              </a>
            </div>

            {/* Package items */}
            <div className="rounded-2xl border border-slate-200 bg-white overflow-hidden"
              style={{ boxShadow: '0 8px 32px rgba(37,99,235,0.07)' }}>
              <div className="flex items-center gap-3 px-5 py-3.5 border-b border-slate-100">
                <div className="w-8 h-8 rounded-xl flex items-center justify-center text-white"
                  style={{ background: 'linear-gradient(135deg,#2563eb,#7c3aed)' }}>
                  <TrendingUp size={14} />
                </div>
                <p className="text-[12.5px] font-bold text-slate-800">What's Included in Your Package</p>
              </div>
              <div className="flex flex-wrap gap-2.5 px-5 py-4">
                {packageItems.map(({ icon: Icon, label, color }) => (
                  <div key={label}
                    className="inline-flex items-center gap-2 px-3 py-2 rounded-xl border transition-all duration-200 hover:shadow-md"
                    style={{ background: `${color}07`, borderColor: `${color}20` }}>
                    <div className="w-5 h-5 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ background: `linear-gradient(135deg,${color},${color}bb)` }}>
                      <Icon size={10} className="text-white" />
                    </div>
                    <span className="text-[11.5px] font-semibold text-slate-700">{label}</span>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap items-center gap-4 px-5 py-3 border-t border-slate-100"
                style={{ background: 'linear-gradient(135deg,#f5f3ff,#eff6ff)' }}>
                {promises.map((text, i) => (
                  <span key={text} className="flex items-center gap-1.5 text-[11px] text-slate-500 font-medium">
                    {i > 0 && <span className="w-px h-3 bg-slate-200 mr-2" />}
                    <CheckCircle2 size={10} className="text-violet-400 flex-shrink-0" /> {text}
                  </span>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
