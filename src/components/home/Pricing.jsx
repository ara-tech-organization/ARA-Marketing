import { Check, Zap, TrendingUp, Crown, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const plans = [
  {
    icon: Zap,
    name: 'Starter',
    subtitle: 'Perfect for startups & small businesses',
    price: '₹8,999',
    period: '/month',
    color: '#2563eb',
    light: '#dbeafe',
    badge: null,
    features: [
      'SEO On-Page Optimization',
      'Social Media Management (2 platforms)',
      'Monthly Performance Report',
      '10 Social Media Posts/Month',
      'Google Business Profile Setup',
      'Basic Keyword Research',
      'Email Support',
    ],
    cta: 'Get Started',
    ctaLink: '/contact-us',
  },
  {
    icon: TrendingUp,
    name: 'Growth',
    subtitle: 'Best for growing local businesses',
    price: '₹18,999',
    period: '/month',
    color: '#7c3aed',
    light: '#ede9fe',
    badge: 'Most Popular',
    features: [
      'SEO On-Page + Off-Page + Technical',
      'Social Media Management (4 platforms)',
      'Google Ads / Meta Ads Management',
      '20 Social Media Posts/Month',
      'Monthly Analytics & Reporting',
      'Competitor Analysis',
      'Graphic Design (10 creatives/month)',
      'Lead Generation Campaign',
      'Dedicated Account Manager',
    ],
    cta: 'Start Growing',
    ctaLink: '/contact-us',
  },
  {
    icon: Crown,
    name: 'Premium',
    subtitle: 'Ideal for enterprises & large brands',
    price: 'Custom',
    period: '',
    color: '#d97706',
    light: '#fef3c7',
    badge: null,
    features: [
      'Full-Scale SEO + SEM Strategy',
      'Unlimited Social Media Platforms',
      'Advanced Paid Ad Campaigns',
      'Video Editing & Production',
      'Influencer Marketing',
      'Email & SMS Marketing',
      'Custom Branding & Graphic Design',
      'Weekly Strategy Calls',
      'Dedicated Team of Experts',
    ],
    cta: 'Contact Us',
    ctaLink: '/contact-us',
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="py-16 bg-slate-50">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-7">

        {/* Header */}
        <div className="text-center mb-14 reveal">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-blue-50 text-blue-600
            border border-blue-100 rounded-full text-[11px] font-bold uppercase tracking-widest mb-4">
            <TrendingUp size={11} /> Transparent Pricing
          </span>
          <h2 className="text-[clamp(23px,3.1vw,35px)] font-bold text-slate-900 leading-tight tracking-tight">
            Simple, Results-Driven Pricing
          </h2>
          <p className="text-base text-slate-500 leading-relaxed max-w-2xl mx-auto mt-3.5">
            Choose a plan that fits your business goals. All plans include dedicated support,
            transparent reporting and measurable ROI — no hidden fees.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan, i) => {
            const Icon = plan.icon
            const isPopular = !!plan.badge
            return (
              <div
                key={plan.name}
                className={`reveal delay-${i + 1} relative flex flex-col rounded-2xl border
                  transition-all duration-300 hover:-translate-y-1 hover:shadow-xl
                  ${isPopular
                    ? 'border-violet-300 shadow-lg shadow-violet-100 bg-white'
                    : 'border-slate-200 bg-white hover:border-blue-200'
                  }`}
              >
                {/* Popular badge */}
                {isPopular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="px-4 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider text-white"
                      style={{ background: plan.color }}>
                      {plan.badge}
                    </span>
                  </div>
                )}

                <div className="p-7 flex flex-col flex-1">
                  {/* Plan header */}
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: plan.light, color: plan.color }}>
                      <Icon size={20} />
                    </div>
                    <div>
                      <div className="text-[15px] font-bold text-slate-900">{plan.name}</div>
                      <div className="text-[12px] text-slate-500">{plan.subtitle}</div>
                    </div>
                  </div>

                  {/* Price */}
                  <div className="mb-6">
                    <span className="text-[clamp(28px,3vw,36px)] font-bold text-slate-900"
                      style={{ color: plan.color }}>
                      {plan.price}
                    </span>
                    {plan.period && (
                      <span className="text-[13px] text-slate-500 ml-1">{plan.period}</span>
                    )}
                  </div>

                  {/* Divider */}
                  <div className="border-t border-slate-100 mb-5" />

                  {/* Features */}
                  <ul className="flex flex-col gap-3 mb-8 flex-1">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-[13.5px] text-slate-700">
                        <Check size={15} className="mt-0.5 flex-shrink-0" style={{ color: plan.color }} />
                        {f}
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <Link
                    to={plan.ctaLink}
                    className="flex items-center justify-center gap-2 w-full py-3 rounded-xl
                      text-[14px] font-bold transition-all duration-200 group no-underline"
                    style={isPopular
                      ? { background: plan.color, color: '#fff' }
                      : { background: plan.light, color: plan.color }
                    }
                    onMouseEnter={e => {
                      if (!isPopular) {
                        e.currentTarget.style.background = plan.color
                        e.currentTarget.style.color = '#fff'
                      }
                    }}
                    onMouseLeave={e => {
                      if (!isPopular) {
                        e.currentTarget.style.background = plan.light
                        e.currentTarget.style.color = plan.color
                      }
                    }}
                  >
                    {plan.cta}
                    <ArrowRight size={15} className="transition-transform duration-200 group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            )
          })}
        </div>

        <p className="reveal text-center text-[13px] text-slate-500 mt-10">
          Need a custom plan?{' '}
          <Link to="/contact-us" className="text-blue-600 font-semibold hover:underline">
            Contact us
          </Link>{' '}
          and we'll build a strategy tailored to your business.
        </p>

      </div>
    </section>
  )
}
