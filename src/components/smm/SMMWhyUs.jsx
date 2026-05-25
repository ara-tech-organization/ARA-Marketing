import { Target, Palette, Zap, TrendingUp, Activity, BarChart2, Layers } from 'lucide-react'

const reasons = [
  {
    icon: Target,
    title: 'Platform-Specific Strategies',
    desc: 'Custom marketing strategies crafted for each social platform to maximize reach and engagement across every channel.',
  },
  {
    icon: Palette,
    title: 'Creative Ad Campaigns',
    desc: 'Visually stunning ad creatives and branding campaigns that capture audience attention and drive brand recognition.',
  },
  {
    icon: Zap,
    title: 'AI-Driven Targeting',
    desc: 'AI-powered audience segmentation and targeting for smarter, high-converting campaigns that reach the right people.',
  },
  {
    icon: TrendingUp,
    title: 'Organic & Paid Growth',
    desc: 'Combined organic growth strategies and paid advertising campaigns for consistent, long-term social media results.',
  },
  {
    icon: Activity,
    title: 'Real-Time Monitoring',
    desc: 'Continuous campaign monitoring and optimization to ensure peak performance and maximum ROI at all times.',
  },
  {
    icon: BarChart2,
    title: 'Transparent Reporting',
    desc: 'Clear, detailed analytics and monthly reports so you always know exactly how your campaigns are performing.',
  },
]

export default function SMMWhyUs() {
  return (
    <section
      className="py-24"
      style={{ background: 'linear-gradient(180deg, #f8faff 0%, #eff6ff 100%)' }}
    >
      <div className="max-w-[1200px] mx-auto px-7">

        {/* Header */}
        <div className="text-center mb-10 reveal">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white text-blue-600
            border border-blue-100 rounded-full text-[11px] font-bold uppercase tracking-widest mb-5 shadow-sm">
            <Layers size={11} /> Why Choose Us
          </span>
          <h2 className="text-[clamp(24px,3vw,40px)] font-bold text-slate-900 leading-tight tracking-tight mb-4">
            Why Do Businesses Choose Our{' '}
            <span className="text-gradient-blue">Social Media Marketing</span> Expertise?
          </h2>
          <p className="text-[15px] text-slate-500 leading-relaxed max-w-2xl mx-auto">
            We focus on Engagement, Creativity, and Measurable Growth. Businesses trust Ara Discover
            Marketing — one of the best social media companies in Thanjavur — for social media
            branding services in Thanjavur, paid social media marketing and agency in Thanjavur, and
            custom campaigns that match business goals and consumer behaviour.
          </p>
        </div>

        {/* Banner image */}
        <div className="reveal rounded-3xl overflow-hidden mb-14" style={{ height: 260 }}>
          <img
            src="https://images.unsplash.com/photo-1776248783518-400b6d0da64c?w=1200&h=260&fit=crop&auto=format&q=80"
            alt="Best Social Media Marketing Agency in Thanjavur - Why Choose Ara Discover Marketing"
            loading="lazy"
            width="1200"
            height="260"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {reasons.map(({ icon: Icon, title, desc }, i) => (
            <div
              key={title}
              className={`reveal delay-${(i % 4) + 1} svc-card-top relative bg-white border border-blue-50
                rounded-2xl p-7 group transition-all duration-300
                hover:shadow-xl hover:shadow-blue-100/50 hover:-translate-y-1.5`}
            >
              <div
                className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center
                  text-blue-600 mb-4 transition-all duration-300
                  group-hover:bg-blue-600 group-hover:text-white group-hover:shadow-lg group-hover:shadow-blue-600/25"
              >
                <Icon size={22} />
              </div>
              <h3 className="text-[15px] font-bold text-slate-800 mb-2">{title}</h3>
              <p className="text-[13px] text-slate-500 leading-[1.75]">{desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
