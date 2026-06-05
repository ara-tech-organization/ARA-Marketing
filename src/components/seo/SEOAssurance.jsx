import { FileBarChart, Headphones, Activity, Shield, TrendingUp, Cpu, Award, ArrowRight } from 'lucide-react'

const promises = [
  { icon: FileBarChart, title: 'Monthly SEO Reports & Performance Tracking',       desc: 'Transparent monthly reports covering keyword rankings, traffic trends, and actionable growth insights.',                       color: '#2563eb' },
  { icon: Headphones,   title: 'Dedicated SEO Expert & Direct Support Access',      desc: 'A personal SEO expert assigned to your account with direct communication and priority support.',                                 color: '#7c3aed' },
  { icon: Activity,     title: 'Google Analytics & Search Console Monitoring',      desc: "Continuous monitoring of your website's health, search performance, and audience behavior data.",                                color: '#0891b2' },
  { icon: Shield,       title: 'White-Hat SEO Practices with Safe Optimization',    desc: 'Strictly ethical, Google-compliant SEO techniques that protect your website from algorithm penalties.',                          color: '#059669' },
  { icon: TrendingUp,   title: 'Continuous Keyword Ranking & Traffic Improvement',  desc: 'We relentlessly optimize your keyword portfolio and content strategy to drive ongoing organic growth.',                           color: '#dc2626' },
  { icon: Cpu,          title: 'AI-Based SEO Strategies Focused on ROI & Growth',   desc: 'Leveraging AI-powered tools and data intelligence to deliver maximum return on your SEO investment.',                             color: '#d97706' },
]

function PromiseRow({ icon: Icon, title, desc, color, index }) {
  return (
    <div
      className={`group flex items-start gap-4 py-5 transition-all duration-300
        ${index < promises.length - 1 ? 'border-b border-slate-100' : ''}`}
    >
      <div
        className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5
          transition-all duration-300 group-hover:scale-110"
        style={{ background: `${color}15`, border: `1.5px solid ${color}25` }}
      >
        <Icon size={18} style={{ color }} />
      </div>
      <div className="flex-1 min-w-0">
        <h3 className="text-[14px] font-bold text-slate-900 mb-1 leading-snug">{title}</h3>
        <p className="text-[13px] text-slate-500 leading-[1.75]">{desc}</p>
      </div>
    </div>
  )
}

export default function SEOAssurance() {
  return (
    <section className="py-12 md:py-16 lg:py-24 bg-white">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-7">

        {/* Header */}
        <div className="text-center mb-8 md:mb-10 lg:mb-14 reveal">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-blue-50 text-blue-600
            border border-blue-100 rounded-full text-[11px] font-bold uppercase tracking-widest mb-5">
            <Award size={11} /> Our Assurance
          </span>
          <h2 className="text-[clamp(24px,3vw,40px)] font-bold text-slate-900 leading-tight tracking-tight mb-4">
            Our Assurance
          </h2>
          <p className="text-[15px] text-slate-600 max-w-2xl mx-auto leading-[1.85]">
            ARA Discover Marketing is an ethical SEO agency that delivers sustainable rankings and measurable business growth. As one of the best top companies in Thanjavur, we promise complete transparency, consistency in optimization, and long-term SEO success for each project.
          </p>
        </div>

        {/* Split layout: sticky header left + promise list right */}
        <div className="reveal flex flex-col md:flex-row gap-6 md:gap-8 lg:gap-10 items-start">

          {/* Left: sticky header panel */}
          <div className="md:w-[280px] lg:w-[320px] flex-shrink-0 lg:sticky lg:top-28">
            <div
              className="rounded-3xl p-4 sm:p-5 md:p-6 lg:p-7 border border-blue-100"
              style={{
                background: 'linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%)',
                boxShadow: '0 12px 40px rgba(37,99,235,0.10)',
              }}
            >
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 text-white"
                style={{ background: '#2563eb', boxShadow: '0 6px 20px rgba(37,99,235,0.30)' }}>
                <Award size={24} />
              </div>
              <h3 className="text-[18px] font-bold text-slate-900 leading-snug mb-3">
                6 Core Commitments to Your SEO Success
              </h3>
              <p className="text-[13px] text-slate-600 leading-[1.8] mb-6">
                Every client gets a dedicated commitment from our team — from transparent reporting to AI-powered strategy. We don't just rank you, we grow your business.
              </p>
              <a
                href="/ARA-Marketing/contact"
                className="btn-glow inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white
                  rounded-xl text-[13px] font-semibold shadow-lg shadow-blue-600/25
                  hover:bg-blue-500 transition-all duration-300 hover:-translate-y-0.5"
              >
                Call our team today for customized Search Engine Optimization Service in Thanjavur <ArrowRight size={14} />
              </a>
            </div>
          </div>

          {/* Right: promises list */}
          <div
            className="flex-1 bg-white rounded-3xl border border-slate-100 px-4 py-2 sm:px-5 md:px-6 lg:px-7"
            style={{ boxShadow: '0 8px 32px rgba(0,0,0,0.05)' }}
          >
            {promises.map((p, i) => (
              <PromiseRow key={p.title} {...p} index={i} />
            ))}
          </div>

        </div>

      </div>
    </section>
  )
}
