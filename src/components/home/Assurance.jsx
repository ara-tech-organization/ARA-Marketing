import { BarChart, Users, Eye, Target, TrendingUp, Shield } from 'lucide-react'

const assurances = [
  { icon: BarChart,   title: 'Monthly Marketing Reports & Campaign Performance Tracking', desc: 'Detailed monthly campaign performance tracking with clear insights and actionable recommendations.' },
  { icon: Users,      title: 'Dedicated Marketing Expert & Direct Communication Support', desc: 'A dedicated specialist assigned to your account for direct communication and personalized support.' },
  { icon: Eye,        title: 'Google Analytics, Ads & Social Media Insights Access',      desc: 'Access to Google Analytics, Ads and Social Media Insights dashboards at all times without restrictions.' },
  { icon: Target,     title: 'Customized Strategies for SEO, SMM & Paid Advertising',    desc: 'Tailored strategies for SEO, SMM and paid advertising that align with your unique business goals.' },
  { icon: TrendingUp, title: 'ROI-Focused Campaign Optimization & Lead Generation',       desc: 'Continuous campaign refinement focused on maximizing your return on investment and lead generation.' },
  { icon: Shield,     title: 'Transparent Reporting with Continuous Growth Improvements', desc: 'No hidden metrics — honest, transparent reporting with continuous growth improvements every cycle.' },
]

export default function Assurance() {
  return (
    <section id="assurance" className="py-24 bg-white">
      <div className="max-w-[1200px] mx-auto px-7">

        {/* Header */}
        <div className="text-center mb-16 reveal">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-blue-50 text-blue-600
            border border-blue-100 rounded-full text-[11px] font-bold uppercase tracking-widest mb-4">
            <Shield size={11} /> Our Commitment
          </span>
          <h2 className="text-[clamp(28px,4vw,42px)] font-bold text-slate-900 leading-tight tracking-tight">
            Our Assurance
          </h2>
          <p className="text-base text-slate-500 leading-relaxed max-w-3xl mx-auto mt-3.5">
            At Ara Discover Marketing, we focus on search engine guidelines, ethical marketing strategies,
            transparent communication and measurable performance. Being the top branding agency in Thanjavur,
            we want to help all kinds of niches build trust, visibility and long-term customer relationships.
          </p>
        </div>

        {/* 2-column feature list */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-0">
          {assurances.map((a, i) => {
            const Icon = a.icon
            return (
              <div
                key={a.title}
                className={`reveal delay-${(i % 3) + 1} flex items-start gap-5 py-7
                  border-b border-slate-100 last:border-b-0 group cursor-default
                  transition-all duration-300 hover:pl-3
                  ${i % 2 === 1 ? 'sm:border-l sm:border-l-slate-100 sm:pl-10 sm:hover:pl-12' : ''}`}
              >
                {/* Icon */}
                <div
                  className="ass-icon-glow flex-shrink-0 w-14 h-14 rounded-2xl
                    bg-blue-50 border border-blue-100
                    flex items-center justify-center text-blue-600
                    transition-all duration-300"
                >
                  <Icon size={24} />
                </div>

                {/* Text */}
                <div className="flex-1">
                  <h4 className="text-base font-bold text-slate-900 mb-1.5 transition-colors
                    duration-300 group-hover:text-blue-700">
                    {a.title}
                  </h4>
                  <p className="text-[13px] text-slate-500 leading-relaxed">{a.desc}</p>
                </div>
              </div>
            )
          })}
        </div>

        <p className="reveal text-center text-[13.5px] text-slate-500 leading-relaxed max-w-2xl mx-auto mt-12">
          Contact us today to discuss your digital growth strategy and find out why businesses trust us
          for the best digital branding and advertising in Thanjavur.
        </p>

      </div>
    </section>
  )
}
