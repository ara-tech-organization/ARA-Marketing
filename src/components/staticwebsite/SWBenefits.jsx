import { Zap, Shield, TrendingUp, DollarSign, Server, Star } from 'lucide-react'

const benefits = [
  {
    num: '01',
    icon: Zap,
    title: 'Extremely Fast Loading Speed',
    desc: 'Static websites serve pre-rendered HTML files directly — no server processing, no wait times. Visitors get instant page loads that reduce bounce rates and improve engagement significantly.',
    color: '#2563eb',
    metric: '<1s',
    metricLabel: 'Load Time',
    grad: 'linear-gradient(135deg, #2563eb, #3b82f6)',
  },
  {
    num: '02',
    icon: Shield,
    title: 'Enhanced Security — No Database Vulnerabilities',
    desc: 'With no backend server or database, static sites are immune to SQL injection, server exploits, and CMS vulnerabilities. Your business data and user experience stay safe 24/7.',
    color: '#1d4ed8',
    metric: '0',
    metricLabel: 'DB Risk',
    grad: 'linear-gradient(135deg, #1d4ed8, #2563eb)',
  },
  {
    num: '03',
    icon: TrendingUp,
    title: 'Better SEO Performance',
    desc: 'Fast load speed, clean semantic HTML, structured data, and mobile-first design all contribute to higher Google rankings. Our static websites are built to be found and indexed easily.',
    color: '#2563eb',
    metric: '98+',
    metricLabel: 'SEO Score',
    grad: 'linear-gradient(135deg, #2563eb, #60a5fa)',
  },
  {
    num: '04',
    icon: DollarSign,
    title: 'Low Hosting & Maintenance Costs',
    desc: 'Deploy on Netlify, Vercel, or GitHub Pages for free or at minimal cost. No server bills, no CMS licenses, and virtually zero ongoing maintenance expenses.',
    color: '#1d4ed8',
    metric: '90%',
    metricLabel: 'Cost Saving',
    grad: 'linear-gradient(135deg, #1d4ed8, #3b82f6)',
  },
  {
    num: '05',
    icon: Server,
    title: 'High Reliability & Uptime',
    desc: 'Static files hosted on CDNs deliver near-perfect uptime with global distribution. Even during traffic spikes, your website stays fast and fully available to every visitor worldwide.',
    color: '#2563eb',
    metric: '99.9%',
    metricLabel: 'Uptime',
    grad: 'linear-gradient(135deg, #2563eb, #93c5fd)',
  },
]

function BenefitCard({ benefit, large }) {
  const { num, icon: Icon, title, desc, color, metric, metricLabel, grad } = benefit
  return (
    <div
      className="relative rounded-3xl overflow-hidden flex flex-col transition-all duration-300 cursor-default group"
      style={{
        background: 'rgba(255,255,255,0.03)',
        border: '1px solid rgba(255,255,255,0.07)',
        flex: 1,
      }}
      onMouseEnter={e => {
        e.currentTarget.style.border = `1px solid ${color}50`
        e.currentTarget.style.boxShadow = `0 16px 48px ${color}20`
        e.currentTarget.style.transform = 'translateY(-4px)'
        e.currentTarget.style.background = `${color}08`
      }}
      onMouseLeave={e => {
        e.currentTarget.style.border = '1px solid rgba(255,255,255,0.07)'
        e.currentTarget.style.boxShadow = 'none'
        e.currentTarget.style.transform = 'translateY(0)'
        e.currentTarget.style.background = 'rgba(255,255,255,0.03)'
      }}
    >
      {/* Top gradient bar */}
      <div className="h-[3px] w-full flex-shrink-0" style={{ background: grad }} />

      {/* Faded number watermark */}
      <span
        className="absolute top-4 right-5 text-[64px] font-black leading-none select-none pointer-events-none"
        style={{
          background: `linear-gradient(135deg, ${color}20, ${color}06)`,
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        }}
      >
        {num}
      </span>

      <div className={`relative flex flex-col flex-1 ${large ? 'p-8' : 'p-6'}`}>

        {/* Icon */}
        <div
          className={`${large ? 'w-14 h-14' : 'w-12 h-12'} rounded-2xl flex items-center justify-center mb-5 flex-shrink-0`}
          style={{
            background: `${color}16`,
            border: `1px solid ${color}30`,
            boxShadow: `0 0 24px ${color}18`,
          }}
        >
          <Icon size={large ? 22 : 18} style={{ color }} />
        </div>

        {/* Title */}
        <h3
          className={`${large ? 'text-[18px]' : 'text-[15px]'} font-bold text-white leading-snug mb-3`}
        >
          {title}
        </h3>

        {/* Description */}
        <p
          className={`${large ? 'text-[14px]' : 'text-[12.5px]'} leading-[1.8] flex-1`}
          style={{ color: '#94a3b8' }}
        >
          {desc}
        </p>

        {/* Divider */}
        <div
          className="my-4 h-px"
          style={{ background: `linear-gradient(90deg, ${color}40, transparent)` }}
        />

        {/* Metric */}
        <div className="flex items-end gap-2">
          <span
            className={`${large ? 'text-[32px]' : 'text-[26px]'} font-black leading-none tabular-nums`}
            style={{
              background: grad,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            {metric}
          </span>
          <span className="text-[11px] font-semibold pb-1" style={{ color: `${color}aa` }}>
            {metricLabel}
          </span>
        </div>
      </div>
    </div>
  )
}

export default function SWBenefits() {
  return (
    <section
      className="relative overflow-hidden py-16 sm:py-24"
      style={{ background: 'linear-gradient(160deg, #030e18 0%, #04131c 60%, #030e18 100%)' }}
    >
      {/* Orbs */}
      <div
        className="absolute top-0 right-0 w-[550px] h-[550px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(8,145,178,0.11) 0%, transparent 65%)' }}
      />
      <div
        className="absolute bottom-0 left-0 w-[450px] h-[450px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(37,99,235,0.09) 0%, transparent 65%)' }}
      />
      {/* Dot grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(8,145,178,0.4) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      <div className="relative max-w-[1280px] mx-auto px-4 sm:px-6 md:px-7">

        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14 reveal">
          <div>
            <span
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-widest mb-5"
              style={{ background: 'rgba(37,99,235,0.18)', color: '#93c5fd', border: '1px solid rgba(37,99,235,0.35)' }}
            >
              <Star size={11} /> Key Benefits
            </span>
            <h2 className="text-[clamp(24px,3vw,42px)] font-bold text-white leading-tight tracking-tight">
              Benefits of{' '}
              <span className="text-gradient-blue">
                Static Websites
              </span>
            </h2>
          </div>
          <p className="text-[14.5px] leading-[1.8] lg:max-w-md" style={{ color: '#94a3b8' }}>
            Static websites can be a huge boon for businesses that value speed and performance. Our <strong style={{ color: '#93c5fd' }}>static website development services in Thanjavur</strong> ensure your website makes maximum impact with minimum maintenance.
          </p>
        </div>

        {/* Row 1: Two wide cards */}
        <div className="flex flex-col sm:flex-row gap-5 mb-5 reveal">
          <BenefitCard benefit={benefits[0]} large />
          <BenefitCard benefit={benefits[1]} large />
        </div>

        {/* Row 2: Three equal cards */}
        <div className="flex flex-col sm:flex-row gap-5 reveal">
          {benefits.slice(2).map(b => (
            <BenefitCard key={b.num} benefit={b} large={false} />
          ))}
        </div>

        {/* Bottom note */}
        <div className="mt-14 text-center reveal">
          <p className="text-[14px] leading-[1.8] mb-1.5" style={{ color: '#94a3b8' }}>
            We are experts in <strong style={{ color: '#7dd3fc' }}>developing static web pages in Thanjavur</strong> — your website will be lightweight yet powerful enough to handle consistent traffic.
          </p>
          <p className="text-[14px] leading-[1.8] mb-1.5" style={{ color: '#94a3b8' }}>
            We also offer <strong style={{ color: '#7dd3fc' }}>static web design services in Thanjavur</strong> according to modern UI/UX principles to keep visitors engaged.
          </p>
          <p className="text-[14px] leading-[1.8]" style={{ color: '#94a3b8' }}>
            Our approach of <strong style={{ color: '#7dd3fc' }}>developing static web pages in Thanjavur</strong> guarantees that all pages are designed for user experience and SEO.
          </p>
        </div>

      </div>
    </section>
  )
}
