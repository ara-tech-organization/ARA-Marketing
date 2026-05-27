import { Bot, Target, Users, BarChart2, Sparkles, DollarSign, Award, ArrowRight, CheckCircle2, TrendingUp } from 'lucide-react'

const reasons = [
  { icon: Bot,        title: 'AI-Focused Marketing Strategies',    desc: 'We leverage AI-driven insights to build smarter campaigns that reach the right audience at the right time.',       color: '#2563eb', num: '01' },
  { icon: Target,     title: 'Customised Campaign Planning',        desc: 'Tailored marketing campaigns that align precisely with your brand goals and target audience segments.',             color: '#7c3aed', num: '02' },
  { icon: Users,      title: 'Multi-Channel Customer Engagement',   desc: 'Cohesive brand experience across email, influencer platforms, and SMS at every customer touchpoint.',             color: '#0891b2', num: '03' },
  { icon: BarChart2,  title: 'Transparent Reporting & Analytics',   desc: 'Clear monthly campaign performance reports with engagement metrics, conversion tracking, and ROI visibility.',     color: '#059669', num: '04' },
  { icon: Sparkles,   title: 'ROI-Driven Marketing Solutions',      desc: 'Every strategy optimised for measurable results — from open rates and influencer reach to SMS delivery rates.',   color: '#2563eb', num: '05' },
  { icon: DollarSign, title: 'Affordable Plans for Every Business', desc: 'Flexible pricing packages for startups, SMEs, and growing brands — premium marketing without the premium cost.', color: '#7c3aed', num: '06' },
]

const stats = [
  { value: '500+', label: 'Campaigns Delivered', color: '#2563eb' },
  { value: '98%',  label: 'Client Satisfaction',  color: '#7c3aed' },
  { value: '2.4M', label: 'Audience Reached',     color: '#0891b2' },
  { value: '4x',   label: 'Average Campaign ROI', color: '#059669' },
]

const gradMain = {
  background: 'linear-gradient(135deg,#2563eb,#7c3aed)',
  WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
}

export default function OMWhyUs() {
  return (
    <section className="relative py-24 overflow-hidden bg-white">

      <div className="absolute inset-0 pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(rgba(37,99,235,0.05) 1.5px,transparent 1.5px)', backgroundSize: '36px 36px' }} />
      <div className="absolute -top-24 -left-24 w-[420px] h-[420px] rounded-full border border-blue-100/60 pointer-events-none animate-[spin_38s_linear_infinite]" />
      <div className="absolute -bottom-20 -right-20 w-[360px] h-[360px] rounded-full border border-violet-100/50 pointer-events-none animate-[spin_40s_linear_infinite]" />
      <div className="absolute top-0 right-0 w-[480px] h-[480px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle,rgba(167,139,250,0.10) 0%,transparent 65%)' }} />

      <div className="relative max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-7">

        {/* Header */}
        <div className="text-center mb-14 reveal">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[11px]
            font-bold uppercase tracking-widest mb-6 text-violet-600 bg-violet-50"
            style={{ border: '1px solid rgba(124,58,237,0.15)' }}>
            <Award size={11} /> Why Choose Us
          </span>
          <h2 className="text-[clamp(26px,3.5vw,46px)] font-bold text-slate-900 leading-[1.1] tracking-tight mb-4">
            Why Businesses Choose Our{' '}
            <span style={gradMain}>Digital Marketing Expertise</span>
          </h2>
          <p className="text-[15px] text-slate-500 leading-[1.85] max-w-[620px] mx-auto">
            Ara Discover Marketing blends AI-driven strategies, audience targeting, and multi-channel expertise to deliver impactful campaigns with measurable business results.
          </p>
        </div>

        {/* Stats strip */}
        <div className="reveal grid grid-cols-2 md:grid-cols-4 gap-4 mb-14">
          {stats.map(({ value, label, color }) => (
            <div key={label} className="flex flex-col items-center text-center px-4 py-6 rounded-2xl bg-white border border-slate-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              style={{ boxShadow: '0 2px 12px rgba(0,0,0,0.04)' }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = color + '30' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = '#f1f5f9' }}>
              <span className="text-[32px] sm:text-[38px] font-black leading-none mb-1"
                style={{ background: `linear-gradient(135deg,${color},${color}99)`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                {value}
              </span>
              <span className="text-[12px] text-slate-500 font-medium leading-snug">{label}</span>
            </div>
          ))}
        </div>

        {/* Reason cards */}
        <div className="reveal flex flex-wrap gap-5 mb-14">
          {reasons.map(({ icon: Icon, title, desc, color, num }, i) => (
            <div
              key={title}
              className={`group relative flex-1 min-w-[280px] rounded-3xl overflow-hidden cursor-default
                transition-all duration-400 hover:-translate-y-2 hover:shadow-2xl delay-${i + 1}`}
              style={{ background: 'white', border: '1.5px solid #eef2ff', boxShadow: '0 4px 20px rgba(37,99,235,0.05)' }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = color + '30'; e.currentTarget.style.boxShadow = `0 24px 56px ${color}14` }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = '#eef2ff'; e.currentTarget.style.boxShadow = '0 4px 20px rgba(37,99,235,0.05)' }}
            >
              <div className="h-1 w-full" style={{ background: `linear-gradient(90deg,${color},${color}55)` }} />
              <span className="absolute -bottom-3 -right-1 text-[80px] font-black leading-none select-none pointer-events-none transition-all duration-400 group-hover:scale-110 origin-bottom-right"
                style={{ color: color + '09' }}>
                {num}
              </span>
              <div className="p-7">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                    style={{ background: `linear-gradient(135deg,${color}18,${color}08)`, border: `1.5px solid ${color}22` }}>
                    <Icon size={24} style={{ color }} />
                  </div>
                  <span className="text-[11px] font-black px-2.5 py-1 rounded-xl"
                    style={{ background: color + '10', color, border: `1px solid ${color}20` }}>
                    {num}
                  </span>
                </div>
                <h3 className="text-[15px] font-bold text-slate-900 leading-snug mb-3">{title}</h3>
                <p className="text-[13px] text-slate-500 leading-[1.78]">{desc}</p>
                <div className="flex items-center gap-2 mt-5 opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-y-1 group-hover:translate-y-0">
                  <CheckCircle2 size={13} style={{ color }} />
                  <span className="text-[11.5px] font-semibold" style={{ color }}>Delivered with precision</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom banner */}
        <div className="reveal flex flex-col sm:flex-row items-center justify-between gap-6 px-8 py-6 rounded-3xl overflow-hidden relative"
          style={{ background: 'linear-gradient(135deg,#1d4ed8 0%,#7c3aed 50%,#0891b2 100%)', boxShadow: '0 20px 60px rgba(124,58,237,0.28)' }}>
          <div className="absolute inset-0 pointer-events-none"
            style={{ background: 'radial-gradient(ellipse at 25% 50%,rgba(255,255,255,0.12) 0%,transparent 60%)' }} />
          <div className="absolute right-8 top-1/2 -translate-y-1/2 w-28 h-28 rounded-full border border-white/10 pointer-events-none" />
          <div className="absolute right-12 top-1/2 -translate-y-1/2 w-16 h-16 rounded-full border border-white/08 pointer-events-none" />
          <div className="relative flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0"
              style={{ background: 'rgba(255,255,255,0.15)', border: '1px solid rgba(255,255,255,0.25)' }}>
              <TrendingUp size={22} className="text-white" />
            </div>
            <div>
              <p className="text-[14px] font-bold text-white mb-0.5">Trusted Digital Marketing Agency in Thanjavur</p>
              <p className="text-[12.5px] leading-snug max-w-[480px]" style={{ color: 'rgba(255,255,255,0.70)' }}>
                AI-powered, audience-centric campaigns — email, influencer, and SMS strategies that deliver measurable results.
              </p>
            </div>
          </div>
          <div className="relative flex-shrink-0">
            <a href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-[13px] font-bold transition-all duration-300 hover:-translate-y-0.5"
              style={{ background: 'white', color: '#7c3aed' }}>
              Work With Us <ArrowRight size={14} />
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}
