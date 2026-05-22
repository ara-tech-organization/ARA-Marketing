import { Bot, BarChart, Target, Users, Shield, Clock, Zap, Star, CheckCheck } from 'lucide-react'

const reasons = [
  { icon: Bot,    title: 'AI-Focused Campaigns',   desc: 'We leverage AI-powered tools to optimize every campaign for maximum ROI and measurable results.' },
  { icon: BarChart, title: 'Transparent Analytics', desc: 'Real-time reporting dashboards so you always know exactly how your campaigns perform.' },
  { icon: Target, title: 'Customized Strategies',  desc: 'Strategies built around your goals, target audience and competitive landscape — never generic.' },
  { icon: Users,  title: 'Experienced Experts',    desc: 'A dedicated team of SEO, advertising and branding specialists with proven, measurable results.' },
  { icon: Shield, title: 'Ethical & Compliant',    desc: 'We follow search engine guidelines and ethical practices ensuring sustainable long-term growth.' },
  { icon: Clock,  title: 'Dedicated Support',      desc: 'Direct communication and continuous campaign optimization every step of the way.' },
]

const credStats = [
  { val: '150+', label: 'Projects Completed' },
  { val: '95%',  label: 'Client Satisfaction' },
  { val: '100+', label: 'Brands Promoted' },
  { val: '200%', label: 'Avg. Traffic Growth' },
]

export default function WhyUs() {
  return (
    <section id="why-us" className="py-24 bg-white">
      <div className="max-w-[1200px] mx-auto px-7">

        {/* Header */}
        <div className="text-center mb-14 reveal">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-blue-50 text-blue-600
            border border-blue-100 rounded-full text-[11px] font-bold uppercase tracking-widest mb-4">
            <Zap size={11} /> Why Choose Us
          </span>
          <h2 className="text-[clamp(28px,4vw,42px)] font-bold text-slate-900 leading-tight tracking-tight">
            Why Do Businesses Choose<br />Ara Discover Marketing?
          </h2>
          <p className="text-base text-slate-500 leading-relaxed max-w-2xl mx-auto mt-3.5">
            Businesses and startups trust Ara because we focus on measurable growth, transparency and
            long-term success. As one of the top digital marketing companies in Thanjavur, our approach
            is centered around AI-driven customized strategies that generate real ROI.
          </p>
        </div>

        {/* Main layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[5fr_7fr] gap-8 items-stretch">

          {/* Left: Dark credential panel */}
          <div
            className="hidden lg:flex reveal-left flex-col rounded-[28px] overflow-hidden"
            style={{ background: '#050d1a' }}
          >
            {/* Image */}
            <div className="relative h-52 flex-shrink-0 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&h=350&fit=crop&q=80"
                alt="Ara Discover Marketing team — best digital marketing agency in Thanjavur"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0"
                style={{ background: 'linear-gradient(to top, #050d1a 0%, transparent 60%)' }}
              />
            </div>

            <div className="p-8 flex flex-col flex-1">
              {/* Stars */}
              <div className="flex items-center gap-2 mb-4">
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={14} fill="#f59e0b" color="#f59e0b" />
                  ))}
                </div>
                <span className="text-[13px] font-bold text-white/80">5.0 — Excellent</span>
              </div>

              <h3 className="text-[18px] font-bold text-white leading-snug mb-7">
                #1 Rated Digital Marketing<br />Agency in Thanjavur
              </h3>

              {/* Stats grid */}
              <div className="grid grid-cols-2 gap-3 mb-auto">
                {credStats.map(s => (
                  <div
                    key={s.label}
                    className="rounded-2xl p-4 border border-white/8"
                    style={{ background: 'rgba(255,255,255,0.05)' }}
                  >
                    <div className="text-[22px] font-bold text-white leading-none">{s.val}</div>
                    <div className="text-[11px] text-white/40 font-medium mt-1.5 leading-tight">{s.label}</div>
                  </div>
                ))}
              </div>

              {/* Verified */}
              <div className="mt-6 pt-5 border-t border-white/8 flex items-center gap-2
                text-[12px] text-white/35 font-medium">
                <CheckCheck size={13} className="text-blue-400" />
                All metrics verified by Google Analytics
              </div>
            </div>
          </div>

          {/* Right: Numbered feature list */}
          <div className="reveal-right flex flex-col divide-y divide-slate-100">
            {reasons.map((r, i) => {
              const Icon = r.icon
              return (
                <div
                  key={r.title}
                  className="flex items-start gap-5 py-[22px] group cursor-default
                    transition-all duration-300 hover:pl-2"
                >
                  {/* Number */}
                  <span className="text-[12px] font-extrabold text-slate-200 flex-shrink-0 w-6 mt-1.5
                    leading-none transition-colors duration-300 group-hover:text-blue-500 select-none">
                    0{i + 1}
                  </span>

                  {/* Icon */}
                  <div className="w-11 h-11 bg-blue-50 border border-blue-100 rounded-xl
                    flex items-center justify-center text-blue-600 flex-shrink-0
                    transition-all duration-300
                    group-hover:bg-blue-600 group-hover:text-white
                    group-hover:border-transparent group-hover:shadow-lg group-hover:shadow-blue-600/30">
                    <Icon size={20} />
                  </div>

                  {/* Text */}
                  <div className="flex-1">
                    <h4 className="text-[15px] font-bold text-slate-900 mb-1.5
                      transition-colors duration-300 group-hover:text-blue-700">
                      {r.title}
                    </h4>
                    <p className="text-[13px] text-slate-500 leading-relaxed">{r.desc}</p>
                  </div>
                </div>
              )
            })}

            {/* Bottom CTA strip */}
            <div className="pt-7 pb-1 flex flex-wrap items-center justify-between gap-4">
              <p className="text-[13px] text-slate-500 leading-relaxed max-w-sm">
                Looking for the best digital marketing agency in Thanjavur?
                Ara Discover Marketing offers a complete digital solution.
              </p>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white
                  rounded-full text-[13px] font-bold transition-all duration-300
                  hover:bg-blue-700 hover:-translate-y-0.5 shadow-lg shadow-blue-600/25"
              >
                Get Started <Zap size={13} />
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
