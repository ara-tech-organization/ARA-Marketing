import { Bot, Target, Users, BarChart2, Sparkles, DollarSign, Award, ArrowRight, CheckCircle2, TrendingUp } from 'lucide-react'
import omWhyUsImg from '../../assets/Other-services/o2.webp'

const reasons = [
  {
    icon: Bot,
    title: 'AI-Focused Marketing Strategies',
    desc: 'We leverage AI-driven insights to build smarter campaigns that reach the right audience at the right time — maximising engagement and minimising wasted spend.',
    color: '#2563eb', num: '01',
    highlight: 'Smart Targeting',
  },
  {
    icon: Target,
    title: 'Customised Campaign Planning',
    desc: 'Tailored marketing campaigns that align precisely with your brand goals, customer personas, and budget — no one-size-fits-all solutions here.',
    color: '#2563eb', num: '02',
    highlight: 'Audience-First',
  },
  {
    icon: Users,
    title: 'Multi-Channel Customer Engagement',
    desc: 'Cohesive brand experience across email, influencer platforms, and SMS — we keep your customers engaged at every touchpoint in their journey.',
    color: '#0ea5e9', num: '03',
    highlight: '3 Channels',
  },
  {
    icon: BarChart2,
    title: 'Transparent Reporting & Analytics',
    desc: 'Clear monthly campaign performance reports with engagement metrics, conversion tracking, and full ROI visibility — you always know where your money goes.',
    color: '#2563eb', num: '04',
    highlight: 'Full Visibility',
  },
  {
    icon: Sparkles,
    title: 'ROI-Driven Marketing Solutions',
    desc: 'Every strategy is optimised for measurable results — from email open rates and influencer reach to SMS delivery rates and revenue attribution.',
    color: '#2563eb', num: '05',
    highlight: '4x Avg ROI',
  },
  {
    icon: DollarSign,
    title: 'Affordable Plans for Every Business',
    desc: 'Flexible pricing packages for startups, SMEs, and growing brands — premium multi-channel marketing without the premium agency cost.',
    color: '#2563eb', num: '06',
    highlight: 'No Setup Fees',
  },
]

const stats = [
  { value: '500+', label: 'Campaigns Delivered', color: '#2563eb' },
  { value: '98%',  label: 'Client Satisfaction',  color: '#2563eb' },
  { value: '2.4M', label: 'Audience Reached',     color: '#0ea5e9' },
  { value: '4x',   label: 'Average Campaign ROI', color: '#2563eb' },
]

export default function OMWhyUs() {
  return (
    <section className="relative py-20 overflow-hidden"
      style={{ background: 'linear-gradient(160deg,#f0f9ff 0%,#eff6ff 50%,#e0f2fe 100%)' }}>

      <div className="absolute inset-0 pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(rgba(37,99,235,0.05) 1.5px,transparent 1.5px)', backgroundSize: '36px 36px' }} />
      <div className="absolute top-0 right-0 w-[520px] h-[520px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle,rgba(37,99,235,0.14) 0%,transparent 65%)' }} />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle,rgba(37,99,235,0.10) 0%,transparent 65%)' }} />

      <div className="relative max-w-[1200px] mx-auto px-4 sm:px-6 md:px-7">

        {/* Header */}
        <div className="text-center mb-12 reveal">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white text-violet-600
            border border-violet-200 rounded-full text-[11px] font-bold uppercase tracking-widest mb-5 shadow-sm">
            <Award size={11} /> Why Choose Us
          </span>
          <h2 className="text-[clamp(25px,3.1vw,45px)] font-bold text-slate-900 leading-[1.1] tracking-tight mb-4">
            Why Businesses Choose{' '}
            <span style={{ background: 'linear-gradient(135deg,#2563eb,#0ea5e9)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              ARA Discover Marketing
            </span>
          </h2>
          <p className="text-[14.5px] text-slate-500 leading-[1.85] max-w-[580px] mx-auto">
            AI-driven strategies, audience targeting, and multi-channel expertise to deliver impactful campaigns with measurable business results.
          </p>
        </div>

        {/* Stats ribbon */}
        <div className="reveal grid grid-cols-2 sm:flex sm:flex-wrap justify-center gap-3 mb-12">
          {stats.map(({ value, label, color }) => (
            <div key={label}
              className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-white border border-slate-100 shadow-sm"
              style={{ boxShadow: '0 2px 12px rgba(0,0,0,0.04)' }}>
              <span className="text-[28px] font-bold leading-none"
                style={{ background: `linear-gradient(135deg,${color},${color}99)`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                {value}
              </span>
              <span className="text-[12px] text-slate-500 font-medium max-w-[80px] leading-snug">{label}</span>
            </div>
          ))}
        </div>

        {/* Split layout: image left + alternating strips right */}
        <div className="reveal flex flex-col lg:flex-row gap-8 items-stretch">

          {/* Left: stacked image panel */}
          <div className="w-full lg:w-[340px] flex-shrink-0">
            <div className="relative h-full min-h-[240px] sm:min-h-[320px] lg:min-h-[420px] rounded-3xl overflow-hidden"
              style={{ boxShadow: '0 24px 64px rgba(37,99,235,0.16)' }}>
              <img
                src={omWhyUsImg}
                alt="ARA Discover Marketing team planning digital marketing strategies in Thanjavur"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>

          {/* Right: horizontal feature strips */}
          <div className="flex-1 flex flex-col gap-3">
            {reasons.map(({ icon: Icon, title, desc, color, num, highlight }) => (
              <div key={num}
                className="group flex items-start gap-4 px-5 py-4 rounded-2xl bg-white border border-slate-100
                  hover:-translate-x-1 transition-all duration-300"
                onMouseEnter={e => { e.currentTarget.style.borderColor = color + '25' }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = '#f1f5f9' }}>

                <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5 transition-all duration-300 group-hover:scale-110"
                  style={{ background: `linear-gradient(135deg,${color}16,${color}08)`, border: `1.5px solid ${color}25` }}>
                  <Icon size={15} style={{ color }} />
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1 flex-wrap">
                    <p className="text-[13.5px] font-bold text-slate-900">{title}</p>
                    <span className="text-[9.5px] font-bold px-2 py-0.5 rounded-full"
                      style={{ background: color + '12', color }}>
                      {highlight}
                    </span>
                  </div>
                  <p className="text-[12.5px] text-slate-500 leading-[1.68]">{desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Bottom CTA banner */}
        <div className="reveal mt-10 flex flex-col sm:flex-row items-center justify-between gap-5 px-7 py-5 rounded-2xl overflow-hidden relative"
          style={{ background: 'linear-gradient(135deg,#1d4ed8,#0ea5e9)', boxShadow: '0 16px 48px rgba(37,99,235,0.25)' }}>
          <div className="absolute inset-0 pointer-events-none"
            style={{ background: 'radial-gradient(ellipse at 20% 50%,rgba(255,255,255,0.10) 0%,transparent 60%)' }} />
          <div className="relative flex items-center gap-4">
            <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
              style={{ background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.22)' }}>
              <TrendingUp size={20} className="text-white" />
            </div>
            <div>
              <p className="text-[13.5px] font-bold text-white">Trusted Digital Marketing Agency in Thanjavur</p>
              <p className="text-[12px] mt-0.5" style={{ color: 'rgba(255,255,255,0.65)' }}>
                AI-powered, audience-centric campaigns that deliver measurable results across all channels.
              </p>
            </div>
          </div>
          <a href="/ARA-Marketing/contact-us"
            className="relative flex-shrink-0 inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-[12.5px] font-bold transition-all duration-300 hover:-translate-y-0.5"
            style={{ background: 'white', color: '#2563eb' }}>
            Work With Us <ArrowRight size={13} />
          </a>
        </div>

      </div>
    </section>
  )
}
