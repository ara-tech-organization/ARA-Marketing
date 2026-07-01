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
    grad: 'linear-gradient(135deg, #0ea5e9, #60a5fa)',
  },
  {
    num: '02',
    icon: Shield,
    title: 'Enhanced Security — No Database Vulnerabilities',
    desc: 'With no backend server or database, static sites are immune to SQL injection, server exploits, and CMS vulnerabilities. Your business data and user experience stay safe 24/7.',
    color: '#2563eb',
    metric: '0',
    metricLabel: 'DB Risk',
    grad: 'linear-gradient(135deg, #2563eb, #60a5fa)',
  },
  {
    num: '03',
    icon: TrendingUp,
    title: 'Better SEO Performance',
    desc: 'Fast load speed, clean semantic HTML, structured data, and mobile-first design all contribute to higher Google rankings. Our static websites are built to be found and indexed easily.',
    color: '#0ea5e9',
    metric: '98+',
    metricLabel: 'SEO Score',
    grad: 'linear-gradient(135deg, #0ea5e9, #60a5fa)',
  },
  {
    num: '04',
    icon: DollarSign,
    title: 'Low Hosting & Maintenance Costs',
    desc: 'Deploy on Netlify, Vercel, or GitHub Pages for free or at minimal cost. No server bills, no CMS licenses, and virtually zero ongoing maintenance expenses.',
    color: '#2563eb',
    metric: '90%',
    metricLabel: 'Cost Saving',
    grad: 'linear-gradient(135deg, #2563eb, #60a5fa)',
  },
  {
    num: '05',
    icon: Server,
    title: 'High Reliability & Uptime',
    desc: 'Static files hosted on CDNs deliver near-perfect uptime with global distribution. Even during traffic spikes, your website stays fast and fully available to every visitor worldwide.',
    color: '#0ea5e9',
    metric: '99.9%',
    metricLabel: 'Uptime',
    grad: 'linear-gradient(135deg, #0ea5e9, #60a5fa)',
  },
]

export default function SWBenefits() {
  return (
    <section
      className="relative overflow-hidden py-20 sm:py-24"
      style={{ background: 'linear-gradient(160deg, #06090f 0%, #090e1c 55%, #06090f 100%)' }}
    >
      {/* Orbs */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(37,99,235,0.08) 0%, transparent 65%)' }} />
      <div className="absolute bottom-0 right-0 w-[450px] h-[450px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(14,165,233,0.07) 0%, transparent 65%)' }} />

      {/* Dot grid */}
      <div className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.09) 1px, transparent 1px)',
          backgroundSize: '38px 38px',
          opacity: 0.4,
        }} />

      <div className="relative max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">

          {/* ── LEFT: Header + metric stack ── */}
          <div className="lg:w-[36%] lg:sticky lg:top-24 lg:self-start reveal">

            {/* Badge */}
            <span
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-widest mb-6"
              style={{ background: 'rgba(14,165,233,0.12)', color: '#60a5fa', border: '1px solid rgba(14,165,233,0.28)' }}
            >
              <Star size={11} /> Key Benefits
            </span>

            {/* Heading */}
            <h2 className="text-[clamp(22px,2.5vw,36px)] font-bold text-white leading-tight tracking-tight mb-4">
              Benefits of{' '}
              <span style={{
                background: 'linear-gradient(135deg, #2563eb, #0ea5e9)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>
                Static Websites
              </span>
            </h2>

            {/* Description */}
            <p className="text-[13.5px] leading-[1.85] mb-10" style={{ color: '#475569' }}>
              Static websites can be a huge boon for businesses that value speed and performance. Our
              static website development services in Thanjavur ensure maximum impact with minimum maintenance.
            </p>

            {/* Stat grid panel */}
            <div className="rounded-2xl overflow-hidden"
              style={{ border: '1px solid rgba(255,255,255,0.08)', background: 'rgba(255,255,255,0.02)' }}>

              {/* 2 × 2 top grid */}
              <div className="grid grid-cols-2">
                {benefits.slice(0, 4).map(({ icon: Icon, metric, metricLabel, color, grad }, i) => (
                  <div
                    key={metricLabel}
                    className="p-5 transition-all duration-300 hover:bg-white/[0.03]"
                    style={{
                      borderRight: i % 2 === 0 ? '1px solid rgba(255,255,255,0.07)' : 'none',
                      borderBottom: '1px solid rgba(255,255,255,0.07)',
                    }}
                  >
                    {/* Icon */}
                    <div className="w-7 h-7 rounded-lg flex items-center justify-center mb-3"
                      style={{ background: `${color}18`, border: `1px solid ${color}30` }}>
                      <Icon size={13} style={{ color }} />
                    </div>
                    {/* Metric */}
                    <div
                      className="font-black tabular-nums leading-none mb-1"
                      style={{
                        fontSize: '30px',
                        background: grad,
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                      }}
                    >
                      {metric}
                    </div>
                    {/* Label */}
                    <div className="text-[10px] font-semibold uppercase tracking-wider" style={{ color: '#374151' }}>
                      {metricLabel}
                    </div>
                  </div>
                ))}
              </div>

              {/* 5th stat — full width row */}
              {(() => {
                const { icon: Icon, metric, metricLabel, color, grad } = benefits[4]
                return (
                  <div className="flex items-center gap-5 px-5 py-4 transition-all duration-300 hover:bg-white/[0.03]">
                    <div className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ background: `${color}18`, border: `1px solid ${color}30` }}>
                      <Icon size={13} style={{ color }} />
                    </div>
                    <div>
                      <div
                        className="font-black tabular-nums leading-none mb-0.5"
                        style={{
                          fontSize: '26px',
                          background: grad,
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                          backgroundClip: 'text',
                        }}
                      >
                        {metric}
                      </div>
                      <div className="text-[10px] font-semibold uppercase tracking-wider" style={{ color: '#374151' }}>
                        {metricLabel}
                      </div>
                    </div>
                    {/* Decorative divider */}
                    <div className="flex-1 h-px ml-2" style={{ background: `linear-gradient(90deg, ${color}30, transparent)` }} />
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
                  borderBottom: i < benefits.length - 1 ? '1px solid rgba(255,255,255,0.06)' : 'none',
                }}
                onMouseEnter={e => { e.currentTarget.style.paddingLeft = '12px' }}
                onMouseLeave={e => { e.currentTarget.style.paddingLeft = '0px' }}
              >
                {/* Icon col */}
                <div className="flex flex-col items-center gap-2 flex-shrink-0">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300"
                    style={{
                      background: `${color}14`,
                      border: `1px solid ${color}30`,
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.background = `${color}25`
                      e.currentTarget.style.boxShadow = `0 0 24px ${color}30`
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.background = `${color}14`
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
                    <h3 className="text-[15px] sm:text-[16px] font-bold text-white leading-snug
                      group-hover:text-transparent transition-all duration-300"
                      style={{
                        backgroundImage: `linear-gradient(135deg, #ffffff, ${color})`,
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'inherit',
                      }}
                      onMouseEnter={e => {
                        e.currentTarget.style.WebkitTextFillColor = 'transparent'
                      }}
                      onMouseLeave={e => {
                        e.currentTarget.style.WebkitTextFillColor = 'inherit'
                      }}
                    >
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
                  <p className="text-[12.5px] sm:text-[13px] leading-[1.82]" style={{ color: '#374151' }}>
                    {desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Bottom note */}
        <div className="mt-16 pt-10 reveal" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
            {[
              'We are experts in developing static web pages in Thanjavur — your website will be lightweight yet powerful enough to handle consistent traffic.',
              'We also offer static web design services in Thanjavur according to modern UI/UX principles to keep visitors engaged.',
              'Our approach of developing static web pages in Thanjavur guarantees that all pages are designed for user experience and SEO.',
            ].map((note, i) => (
              <p key={i} className="text-[12.5px] leading-[1.82] px-2" style={{ color: '#64748b' }}>
                {note}
              </p>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
