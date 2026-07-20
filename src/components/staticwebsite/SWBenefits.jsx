import { Zap, Shield, TrendingUp, DollarSign, Server, Star } from 'lucide-react'

const benefits = [
  {
    num: '01',
    icon: Zap,
    title: 'Extremely Fast Loading Speed',
    desc: 'Static websites serve pre-rendered HTML files directly — no server processing, no wait times. Visitors get instant page loads that reduce bounce rates and improve engagement significantly.',
    color: '#0ea5e9',
    metric: '<1s',
    metricLabel: 'Load Time',
    grad: 'var(--brand-gradient)',
  },
  {
    num: '02',
    icon: Shield,
    title: 'Enhanced Security — No Database Vulnerabilities',
    desc: 'With no backend server or database, static sites are immune to SQL injection, server exploits, and CMS vulnerabilities. Your business data and user experience stay safe 24/7.',
    color: '#2563eb',
    metric: '0',
    metricLabel: 'DB Risk',
    grad: 'var(--brand-gradient)',
  },
  {
    num: '03',
    icon: TrendingUp,
    title: 'Better SEO Performance',
    desc: 'Fast load speed, clean semantic HTML, structured data, and mobile-first design all contribute to higher Google rankings. Our static websites are built to be found and indexed easily.',
    color: '#0ea5e9',
    metric: '98+',
    metricLabel: 'SEO Score',
    grad: 'var(--brand-gradient)',
  },
  {
    num: '04',
    icon: DollarSign,
    title: 'Low Hosting & Maintenance Costs',
    desc: 'Deploy on Netlify, Vercel, or GitHub Pages for free or at minimal cost. No server bills, no CMS licenses, and virtually zero ongoing maintenance expenses.',
    color: '#2563eb',
    metric: '90%',
    metricLabel: 'Cost Saving',
    grad: 'var(--brand-gradient)',
  },
  {
    num: '05',
    icon: Server,
    title: 'High Reliability & Uptime',
    desc: 'Static files hosted on CDNs deliver near-perfect uptime with global distribution. Even during traffic spikes, your website stays fast and fully available to every visitor worldwide.',
    color: '#0ea5e9',
    metric: '99.9%',
    metricLabel: 'Uptime',
    grad: 'var(--brand-gradient)',
  },
]

export default function SWBenefits() {
  return (
    <section
      className="relative overflow-hidden py-20 sm:py-24"
      style={{ background: 'linear-gradient(135deg,#0d2244 0%,#0a1a34 40%,#0d2244 100%)' }}
    >
      {/* Orbs */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: 'var(--brand-gradient-glow-dark)' }} />
      <div className="absolute bottom-0 right-0 w-[450px] h-[450px] rounded-full pointer-events-none"
        style={{ background: 'var(--brand-gradient-glow-dark)' }} />

      {/* Dot grid */}
      <div className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'var(--brand-gradient-dots)',
          backgroundSize: '28px 28px',
        }} />

      <div className="relative max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">

          {/* ── LEFT: Header + metric stack ── */}
          <div className="lg:w-[36%] lg:sticky lg:top-24 lg:self-start reveal">

            <div className="text-center lg:text-left">
              {/* Badge */}
              <span
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-widest mb-6"
                style={{ background: 'rgba(255,255,255,0.06)', color: '#60a5fa', border: '1px solid rgba(96,165,250,0.25)' }}
              >
                <Star size={11} /> Key Benefits
              </span>

              {/* Heading */}
              <h2 className="text-[clamp(22px,2.5vw,36px)] font-bold text-white leading-tight tracking-tight mb-4">
                Benefits of{' '}
                <span className="text-gradient-blue">
                  Static Websites
                </span>
              </h2>

              {/* Description */}
              <p className="text-[13.5px] text-white/60 leading-[1.85] mb-10">
                Static websites can be a huge boon for businesses that value speed and performance. Our
                static website development services in Thanjavur ensure maximum impact with minimum maintenance.
              </p>
            </div>

            {/* Stat grid panel */}
            <div className="rounded-2xl overflow-hidden"
              style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', boxShadow: '0 4px 20px rgba(0,0,0,0.2)' }}>

              {/* 2 × 2 top grid */}
              <div className="grid grid-cols-2">
                {benefits.slice(0, 4).map(({ icon: Icon, metric, metricLabel, color, grad }, i) => (
                  <div
                    key={metricLabel}
                    className="p-5 transition-all duration-300 hover:bg-white/5 cursor-default"
                    style={{
                      borderRight: i % 2 === 0 ? '1px solid rgba(255,255,255,0.1)' : 'none',
                      borderBottom: '1px solid rgba(255,255,255,0.1)',
                    }}
                  >
                    <div className="w-7 h-7 rounded-lg flex items-center justify-center mb-3"
                      style={{ background: color === '#0ea5e9' ? 'rgba(14,165,233,0.12)' : 'rgba(37,99,235,0.12)', border: `1px solid ${color === '#0ea5e9' ? 'rgba(14,165,233,0.3)' : 'rgba(37,99,235,0.3)'}` }}>
                      <Icon size={13} style={{ color }} />
                    </div>
                    <div
                      className="font-black tabular-nums leading-none mb-1 text-gradient-blue"
                      style={{ fontSize: '30px' }}
                    >
                      {metric}
                    </div>
                    <div className="text-[10px] font-semibold uppercase tracking-wider text-white/50">
                      {metricLabel}
                    </div>
                  </div>
                ))}
              </div>

              {/* 5th stat — full width row */}
              {(() => {
                const { icon: Icon, metric, metricLabel, color, grad } = benefits[4]
                return (
                  <div className="flex items-center gap-5 px-5 py-4 hover:bg-white/5 transition-all duration-300 cursor-default">
                    <div className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ background: 'rgba(14,165,233,0.12)', border: '1px solid rgba(14,165,233,0.3)' }}>
                      <Icon size={13} style={{ color }} />
                    </div>
                    <div>
                      <div
                        className="font-black tabular-nums leading-none mb-0.5 text-gradient-blue"
                        style={{ fontSize: '26px' }}
                      >
                        {metric}
                      </div>
                      <div className="text-[10px] font-semibold uppercase tracking-wider text-white/50">
                        {metricLabel}
                      </div>
                    </div>
                    <div className="flex-1 h-px ml-2" style={{ background: 'var(--brand-gradient-line)' }} />
                  </div>
                )
              })()}
            </div>
          </div>

          {/* ── RIGHT: Benefit list ── */}
          <div className="lg:w-[64%] flex flex-col reveal">
            {benefits.map(({ num, icon: Icon, title, desc, color, metric, grad }, i) => (
              <div
                key={num}
                className="group flex gap-5 py-7 transition-all duration-300 cursor-default"
                style={{
                  borderBottom: i < benefits.length - 1 ? '1px solid rgba(255,255,255,0.08)' : 'none',
                }}
                onMouseEnter={e => { e.currentTarget.style.paddingLeft = '12px' }}
                onMouseLeave={e => { e.currentTarget.style.paddingLeft = '0px' }}
              >
                {/* Icon col */}
                <div className="flex flex-col items-center gap-2 flex-shrink-0">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300"
                    style={{
                      background: color === '#0ea5e9' ? 'rgba(14,165,233,0.12)' : 'rgba(37,99,235,0.12)',
                      border: `1px solid ${color === '#0ea5e9' ? 'rgba(14,165,233,0.3)' : 'rgba(37,99,235,0.3)'}`,
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.boxShadow = `0 0 24px ${color}30`
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.boxShadow = 'none'
                    }}
                  >
                    <Icon size={16} style={{ color }} />
                  </div>
                  <span className="text-[9px] font-black tracking-widest" style={{ color: `${color}55` }}>
                    {num}
                  </span>
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-3 mb-2.5">
                    <h3 className="text-[15px] sm:text-[16px] font-bold text-white leading-snug group-hover:text-blue-300 transition-colors duration-300">
                      {title}
                    </h3>
                    {/* Metric pill */}
                    <span
                      className="flex-shrink-0 px-3 py-1 rounded-full text-[12px] font-black text-white leading-none"
                      style={{ background: grad, boxShadow: `0 2px 12px ${color}40` }}
                    >
                      {metric}
                    </span>
                  </div>
                  <p className="text-[12.5px] sm:text-[13px] text-white/55 leading-[1.82]">
                    {desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Bottom note */}
        <div className="mt-16 pt-10 reveal" style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
            {[
              'We are experts in developing static web pages in Thanjavur — your website will be lightweight yet powerful enough to handle consistent traffic.',
              'We also offer static web design services in Thanjavur according to modern UI/UX principles to keep visitors engaged.',
              'Our approach of developing static web pages in Thanjavur guarantees that all pages are designed for user experience and SEO.',
            ].map((note, i) => (
              <p key={i} className="text-[12.5px] text-white/55 leading-[1.82] px-2">
                {note}
              </p>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
