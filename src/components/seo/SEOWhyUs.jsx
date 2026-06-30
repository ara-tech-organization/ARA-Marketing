import { Cpu, Users, BarChart2, Shield, DollarSign, Target, Award, ArrowRight } from 'lucide-react'

const reasons = [
  { icon: Target,     num: '01', title: 'Customized SEO Strategies',    desc: 'Tailored SEO solutions designed for every business type, industry, and target audience.',                      color: '#2563eb' },
  { icon: Cpu,        num: '02', title: 'AI-Targeted SEO Optimization', desc: 'Advanced AI-powered methods that identify ranking opportunities and accelerate results.',                      color: '#7c3aed' },
  { icon: Users,      num: '03', title: 'Experienced SEO Specialists',  desc: 'A dedicated team of SEO analysts and specialists with proven expertise across industries.',                    color: '#0891b2' },
  { icon: BarChart2,  num: '04', title: 'Transparent Ranking Reports',  desc: 'Clear, detailed monthly ranking and traffic reports so you always know your progress.',                        color: '#059669' },
  { icon: Shield,     num: '05', title: 'White-Hat SEO Techniques',     desc: 'Ethical, Google-compliant optimization practices that ensure safe, sustainable rankings.',                     color: '#dc2626' },
  { icon: DollarSign, num: '06', title: 'Affordable SEO Solutions',     desc: 'Cost-effective SEO packages built for startups, local businesses, and large enterprises alike.',              color: '#d97706' },
]

function ReasonCard({ icon: Icon, num, title, desc, color }) {
  return (
    <div
      className="group flex items-start gap-4 p-5 rounded-2xl bg-white border border-slate-100
        hover:shadow-lg hover:border-blue-100 hover:-translate-y-0.5 transition-all duration-300"
    >
      <div
        className="w-11 h-11 rounded-2xl flex items-center justify-center flex-shrink-0 mt-0.5
          transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg"
        style={{ background: `${color}15`, border: `1.5px solid ${color}25` }}
      >
        <Icon size={19} style={{ color }} />
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-1.5">
          <span className="text-[10px] font-black text-slate-300 tracking-widest">{num}</span>
          <h3 className="text-[13px] font-bold text-slate-900 leading-snug">{title}</h3>
        </div>
        <p className="text-[13px] text-slate-500 leading-[1.75]">{desc}</p>
      </div>
    </div>
  )
}

export default function SEOWhyUs() {
  return (
    <section
      className="py-12 md:py-16 lg:py-16 relative overflow-hidden"
      style={{ background: 'linear-gradient(160deg, #f0f7ff 0%, #dbeafe 40%, #e0f2fe 100%)' }}
    >
      {/* Orbs */}
      <div className="absolute -top-24 right-0 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(147,197,253,0.5) 0%, transparent 70%)' }} />
      <div className="absolute bottom-0 -left-24 w-[450px] h-[450px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(96,165,250,0.35) 0%, transparent 70%)' }} />
      <div className="absolute inset-0 pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(circle, rgba(37,99,235,0.1) 1.5px, transparent 1.5px)', backgroundSize: '36px 36px' }} />

      <div className="relative max-w-[1200px] mx-auto px-4 sm:px-6 md:px-7">

        {/* Header */}
        <div className="flex flex-col md:flex-row gap-6 md:gap-8 lg:gap-10 items-end mb-10 md:mb-12 lg:mb-14 reveal">
          <div className="flex-1">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white/80 text-blue-600
              border border-blue-200 rounded-full text-[11px] font-bold uppercase tracking-widest mb-5 shadow-sm">
              <Award size={11} /> Why Choose Us
            </span>
            <h2 className="text-[clamp(23px,2.7vw,39px)] font-bold text-slate-900 leading-tight tracking-tight">
              Why Do Businesses Choose Our{' '}
              <span className="text-gradient-blue">SEO Expertise?</span>
            </h2>
          </div>
          <div className="md:max-w-[440px] lg:max-w-[440px]">
            <p className="text-[15px] text-slate-600 leading-[1.85]">
              Businesses trust ARA Discover Marketing because we do ethical SEO, measurable growth, and transparent reporting. As one of the top SEO agencies in Thanjavur, we help businesses achieve sustainable rankings through data-driven optimization techniques.
            </p>
          </div>
        </div>

        {/* Two-column card list */}
        <div className="flex flex-col md:flex-row gap-4 md:gap-5 reveal">
          {/* Left column: items 0, 2, 4 */}
          <div className="flex-1 flex flex-col gap-4">
            {reasons.filter((_, i) => i % 2 === 0).map(r => (
              <ReasonCard key={r.title} {...r} />
            ))}
          </div>
          {/* Right column: items 1, 3, 5 */}
          <div className="flex-1 flex flex-col gap-4 md:mt-6 lg:mt-8">
            {reasons.filter((_, i) => i % 2 === 1).map(r => (
              <ReasonCard key={r.title} {...r} />
            ))}
          </div>
        </div>

        {/* Professional SEO Company bar */}
        <div
          className="reveal mt-8 bg-white/90 border border-blue-100 rounded-2xl px-4 py-4 sm:px-6 sm:py-5 md:px-7
            flex flex-col sm:flex-row items-center gap-4 sm:gap-6 backdrop-blur-sm"
          style={{ boxShadow: '0 8px 32px rgba(37,99,235,0.08)' }}
        >
          <div className="flex-1">
            <p className="text-[11px] font-bold text-blue-600 uppercase tracking-widest mb-1">Professional SEO Company</p>
            <p className="text-[14px] text-slate-700 leading-[1.7]">
              ARA is a professional SEO services company offering scalable SEO services for local and international businesses.
            </p>
          </div>
          <div className="sm:w-[240px] flex-shrink-0">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[12px] font-semibold text-slate-500">Client Satisfaction</span>
              <span className="text-[13px] font-black text-blue-600">95%</span>
            </div>
            <div className="h-2 rounded-full overflow-hidden" style={{ background: '#dbeafe' }}>
              <div className="h-full rounded-full" style={{ width: '95%', background: 'linear-gradient(90deg, #2563eb, #60a5fa)' }} />
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
