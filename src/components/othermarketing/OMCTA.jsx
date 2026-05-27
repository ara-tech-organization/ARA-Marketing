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

export default function OMCTA() {
  return (
    <section className="relative overflow-hidden py-20"
      style={{ background: 'linear-gradient(160deg,#f8fbff 0%,#eff6ff 60%,#f5f3ff 100%)' }}>

      <div className="absolute inset-0 pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(rgba(37,99,235,0.06) 1.5px,transparent 1.5px)', backgroundSize: '30px 30px' }} />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle,rgba(167,139,250,0.25) 0%,transparent 65%)' }} />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle,rgba(37,99,235,0.14) 0%,transparent 65%)' }} />

      <div className="relative max-w-[880px] mx-auto px-4 sm:px-6 lg:px-7">

        {/* Header */}
        <div className="text-center mb-10 reveal">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-[11px]
            font-bold uppercase tracking-widest mb-6 bg-white border border-violet-200 text-violet-600 shadow-sm">
            <Zap size={11} /> Ready to Grow Your Business
          </span>
          <h2 className="text-[clamp(26px,3.8vw,52px)] font-bold text-slate-900 leading-[1.08] tracking-tight mb-5">
            Ready to Improve Customer Engagement{' '}
            <span style={{ background: 'linear-gradient(135deg,#2563eb,#7c3aed)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              & Business Growth?
            </span>
          </h2>
          <p className="text-[15px] text-slate-500 leading-[1.85] mb-8 max-w-[600px] mx-auto">
            Partner with Ara Discover Marketing to build strategic email marketing, influencer collaborations, and SMS marketing tactics that boost audience engagement and drive measurable business results.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            <a href="#contact"
              className="btn-glow inline-flex items-center gap-2 px-8 py-4 rounded-full
                text-[15px] font-bold text-white transition-all duration-300 hover:-translate-y-0.5"
              style={{ background: 'linear-gradient(135deg,#2563eb,#7c3aed)', boxShadow: '0 10px 36px rgba(124,58,237,0.28)' }}>
              Start Your Campaign <ArrowRight size={16} />
            </a>
            <a href="#om-services"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-[15px]
                font-semibold text-violet-700 bg-white border border-violet-200
                hover:bg-violet-50 hover:border-violet-300 transition-all duration-300 shadow-sm">
              Explore Services
            </a>
          </div>
        </div>

        {/* Package strip */}
        <div className="reveal rounded-3xl overflow-hidden border border-violet-100/80"
          style={{ boxShadow: '0 12px 48px rgba(124,58,237,0.09)' }}>
          <div className="flex items-center gap-3 px-6 py-4 bg-white border-b border-violet-100">
            <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 text-white"
              style={{ background: 'linear-gradient(135deg,#2563eb,#7c3aed)', boxShadow: '0 4px 14px rgba(124,58,237,0.25)' }}>
              <TrendingUp size={16} />
            </div>
            <div>
              <p className="text-[13px] font-bold text-slate-800">Multi-Channel Marketing Growth Package</p>
              <p className="text-[11px] text-slate-400">Everything you need to grow with email, influencer & SMS marketing</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-3 px-6 py-5 bg-white">
            {packageItems.map(({ icon: Icon, label, color }) => (
              <div key={label}
                className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-xl border hover:shadow-md transition-all duration-200"
                style={{ background: `${color}07`, borderColor: `${color}20` }}>
                <div className="w-6 h-6 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ background: `linear-gradient(135deg,${color},${color}bb)` }}>
                  <Icon size={12} className="text-white" />
                </div>
                <span className="text-[12.5px] font-semibold text-slate-700">{label}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap items-center justify-center gap-5 px-6 py-3.5 border-t border-violet-100"
            style={{ background: 'linear-gradient(135deg,#f5f3ff,#eff6ff)' }}>
            {['No setup fees', 'Free consultation', 'Monthly transparent reporting'].map((text, i) => (
              <span key={text} className="flex items-center gap-1.5 text-[11px] text-slate-500 font-medium">
                {i > 0 && <span className="w-px h-3 bg-slate-200 mr-3" />}
                <CheckCircle2 size={11} className="text-violet-400" /> {text}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
