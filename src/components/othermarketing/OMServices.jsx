import { useState } from 'react'
import {
  Mail, Users, Smartphone, CheckCircle2, ArrowRight, Sparkles,
  Send, UserCheck, MessageSquare, BellRing, Share2,
  MailOpen, RefreshCw, Heart, Megaphone, Activity, InboxIcon,
} from 'lucide-react'

const services = [
  {
    id: 'email',
    label: 'Email Marketing',
    icon: Mail,
    color: '#2563eb',
    bg: '#eff6ff',
    badge: 'Best Email Marketing in Thanjavur',
    heading: 'Strategic Email Marketing Campaigns',
    desc: 'Email marketing remains one of the most powerful means of reaching your targeted customers and improving conversions. Our team develops strategic email campaigns to engage, nurture leads, and retain customers. As one of the best email marketing agencies in Thanjavur, we design customised campaigns to improve open rates and drive measurable engagement.',
    items: [
      { icon: Megaphone,  text: 'Promotional Email Campaigns' },
      { icon: Send,       text: 'Newsletter Marketing' },
      { icon: RefreshCw,  text: 'Automated Email Workflows' },
      { icon: MailOpen,   text: 'Customer Retargeting Emails' },
      { icon: Activity,   text: 'Lead Nurturing Campaigns' },
      { icon: InboxIcon,  text: 'Email Performance Tracking' },
    ],
    stats: [
      { value: '68%', label: 'Avg. Open Rate' },
      { value: '35%', label: 'Click-Through Rate' },
      { value: '4x',  label: 'ROI on Campaigns' },
    ],
  },
  {
    id: 'influencer',
    label: 'Influencer Marketing',
    icon: Users,
    color: '#7c3aed',
    bg: '#f5f3ff',
    badge: 'Influencer Marketing in Thanjavur',
    heading: 'Influencer Marketing & Brand Collaborations',
    desc: 'Influencer marketing connects your brand with people via content creators they trust. Our influencer marketing services in Thanjavur help brands improve visibility, customer engagement, and online credibility. We are a trusted influencer advertising agency in Thanjavur that specialises in connecting businesses with the right creators for authentic campaigns.',
    items: [
      { icon: Sparkles,  text: 'Influencer Campaign Planning' },
      { icon: Share2,    text: 'Brand Collaboration Strategies' },
      { icon: Heart,     text: 'Social Media Influencer Promotions' },
      { icon: Megaphone, text: 'Product Promotion Campaigns' },
      { icon: UserCheck, text: 'Influencer Outreach & Management' },
      { icon: Activity,  text: 'Campaign Performance Analysis' },
    ],
    stats: [
      { value: '2.4M', label: 'Audience Reach' },
      { value: '41%',  label: 'Engagement Growth' },
      { value: '3x',   label: 'Brand Trust Boost' },
    ],
  },
  {
    id: 'sms',
    label: 'SMS Marketing',
    icon: Smartphone,
    color: '#0891b2',
    bg: '#ecfeff',
    badge: 'Bulk SMS Promotion in Thanjavur',
    heading: 'SMS Marketing & Bulk Promotional Campaigns',
    desc: 'SMS marketing allows businesses to instantly send updates, offers, and promotional messages to customers. Our SMS marketing strategies are tailored for engagement, promotions, and retention. We are a trusted SMS agency in Thanjavur, providing reliable bulk SMS campaign management and audience targeting solutions for businesses across all sectors.',
    items: [
      { icon: Megaphone,    text: 'Promotional SMS Campaigns' },
      { icon: Send,         text: 'Transactional SMS Services' },
      { icon: MessageSquare, text: 'Customer Engagement Messaging' },
      { icon: BellRing,     text: 'Event & Offer Promotions' },
      { icon: Activity,     text: 'OTP & Notification SMS Services' },
      { icon: RefreshCw,    text: 'Bulk SMS Campaign Management' },
    ],
    stats: [
      { value: '99%', label: 'Delivery Rate' },
      { value: '45%', label: 'Response Rate' },
      { value: '5x',  label: 'Engagement Lift' },
    ],
  },
]

export default function OMServices() {
  const [active, setActive] = useState('email')
  const s = services.find(x => x.id === active)

  return (
    <section id="om-services" className="py-14 bg-white overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-7">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10 reveal">
          <div>
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-blue-50 text-blue-600
              border border-blue-100 rounded-full text-[11px] font-bold uppercase tracking-widest mb-5">
              <Sparkles size={11} /> Our Services
            </span>
            <h2 className="text-[clamp(24px,3.5vw,44px)] font-bold text-slate-900 leading-[1.1] tracking-tight">
              Strategic Marketing Services That{' '}
              <span style={{ background: 'linear-gradient(135deg,#2563eb,#7c3aed)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                Drive Real Results
              </span>
            </h2>
          </div>
          <p className="text-[14px] text-slate-500 sm:max-w-[320px] leading-[1.85]">
            Trusted by businesses in Thanjavur for creative, performance-oriented email, influencer, and SMS marketing campaigns.
          </p>
        </div>

        {/* Tab selectors */}
        <div className="reveal flex flex-wrap gap-2.5 mb-8">
          {services.map(({ id, label, icon: Icon, color }) => (
            <button
              key={id}
              onClick={() => setActive(id)}
              className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-xl text-[13px] font-bold transition-all duration-300"
              style={
                active === id
                  ? { background: color, color: 'white', boxShadow: `0 6px 20px ${color}30` }
                  : { background: 'white', color: '#64748b', border: `1.5px solid #e2e8f0`, boxShadow: '0 1px 6px rgba(0,0,0,0.04)' }
              }
            >
              <Icon size={14} style={{ color: active === id ? 'white' : color }} />
              {label}
            </button>
          ))}
        </div>

        {/* Service panel */}
        <div className="reveal flex flex-col lg:flex-row gap-0 rounded-2xl overflow-hidden border"
          style={{ borderColor: s.color + '20', boxShadow: `0 12px 40px ${s.color}08` }}>

          {/* Left: description */}
          <div className="flex-1 bg-white p-6 sm:p-8 border-b lg:border-b-0 lg:border-r border-slate-100">
            <div className="h-0.5 w-12 rounded-full mb-6" style={{ background: `linear-gradient(90deg,${s.color},${s.color}44)` }} />

            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest mb-5"
              style={{ background: s.bg, color: s.color, border: `1px solid ${s.color}22` }}>
              <s.icon size={10} /> {s.badge}
            </span>

            <h3 className="text-[20px] sm:text-[22px] font-bold text-slate-900 leading-snug mb-4">{s.heading}</h3>
            <p className="text-[13.5px] text-slate-500 leading-[1.85] mb-7">{s.desc}</p>

            {/* Stats */}
            <div className="flex flex-wrap gap-5 pt-5 mb-7" style={{ borderTop: `1px solid ${s.color}10` }}>
              {s.stats.map(({ value, label }) => (
                <div key={label}>
                  <span className="text-[24px] font-black leading-none block mb-0.5"
                    style={{ background: `linear-gradient(135deg,${s.color},${s.color}99)`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                    {value}
                  </span>
                  <span className="text-[11px] text-slate-500 font-medium">{label}</span>
                </div>
              ))}
            </div>

            <a href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-[13px] font-bold text-white transition-all duration-300 hover:-translate-y-0.5"
              style={{ background: `linear-gradient(135deg,${s.color},${s.color}cc)`, boxShadow: `0 6px 20px ${s.color}28` }}>
              Get Started <ArrowRight size={13} />
            </a>
          </div>

          {/* Right: service list */}
          <div className="lg:w-[320px] flex-shrink-0 p-6 sm:p-8" style={{ background: s.bg + '70' }}>
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-5">What We Offer</p>
            <div className="flex flex-col gap-2.5">
              {s.items.map(({ icon: Icon, text }) => (
                <div key={text}
                  className="group flex items-center gap-3.5 px-4 py-3.5 rounded-xl bg-white border transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
                  style={{ borderColor: s.color + '14', boxShadow: `0 1px 6px ${s.color}04` }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = s.color + '30' }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = s.color + '14' }}
                >
                  <div className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: `linear-gradient(135deg,${s.color}18,${s.color}08)`, border: `1px solid ${s.color}18` }}>
                    <Icon size={14} style={{ color: s.color }} />
                  </div>
                  <span className="text-[13px] font-semibold text-slate-700">{text}</span>
                  <CheckCircle2 size={12} className="ml-auto flex-shrink-0" style={{ color: s.color + '70' }} />
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
