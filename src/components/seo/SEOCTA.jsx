import { ArrowRight, Search, TrendingUp, Zap } from 'lucide-react'

export default function SEOCTA() {
  return (
    <section
      className="py-24 relative overflow-hidden"
      style={{ background: 'linear-gradient(160deg, #f0f7ff 0%, #dbeafe 50%, #e0f2fe 100%)' }}
    >
      {/* Orbs */}
      <div
        className="absolute -top-20 -right-20 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(147,197,253,0.45) 0%, transparent 70%)' }}
      />
      <div
        className="absolute -bottom-20 -left-20 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(196,219,254,0.4) 0%, transparent 70%)' }}
      />

      {/* Dot grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(37,99,235,0.12) 1.5px, transparent 1.5px)',
          backgroundSize: '28px 28px',
        }}
      />

      <div className="relative max-w-[1200px] mx-auto px-7">
        <div className="flex flex-col lg:flex-row items-center gap-12">

          {/* Left content */}
          <div className="flex-1 reveal">
            {/* Badge */}
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-blue-600 text-white
              rounded-full text-[11px] font-bold uppercase tracking-widest mb-6
              shadow-lg shadow-blue-600/25">
              <Zap size={11} /> Ready to Rank Higher
            </span>

            <h2 className="text-[clamp(24px,3vw,42px)] font-bold text-slate-900 leading-tight tracking-tight mb-5">
              Are You Ready to Boost Your{' '}
              <span className="text-gradient-blue">
                Rankings &amp; Organic Traffic?
              </span>
            </h2>

            <p className="text-[15px] text-slate-600 leading-[1.85] mb-8 max-w-lg">
              Partner with Ara Discover Marketing, a trusted SEO digital marketing agency in Thanjavur, offering AI-based SEO solutions, technical optimization, and content-driven strategies for sustainable online growth.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="btn-glow inline-flex items-center gap-2 px-7 py-3.5 bg-blue-600 text-white
                  rounded-full text-[14px] font-bold hover:bg-blue-500
                  shadow-xl shadow-blue-600/25 transition-all duration-300 hover:-translate-y-0.5"
              >
                Get Free SEO Consultation <ArrowRight size={15} />
              </a>
              <a
                href="#seo-services"
                className="inline-flex items-center gap-2 px-7 py-3.5 border border-blue-300
                  text-blue-700 bg-white/70 rounded-full text-[14px] font-semibold
                  hover:bg-white hover:border-blue-400 transition-all duration-300 backdrop-blur-sm"
              >
                Explore Services
              </a>
            </div>
          </div>

          {/* Right: feature package panel */}
          <div className="reveal lg:w-[340px] flex-shrink-0">
            <div
              className="bg-white/80 border border-blue-100 rounded-3xl p-7 backdrop-blur-sm"
              style={{ boxShadow: '0 16px 60px rgba(37,99,235,0.10)' }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-blue-600 rounded-2xl flex items-center justify-center text-white flex-shrink-0">
                  <Search size={18} />
                </div>
                <div>
                  <p className="text-[13px] font-bold text-slate-800">SEO Growth Package</p>
                  <p className="text-[11px] text-slate-400">Tailored for your business</p>
                </div>
              </div>

              {[
                'AI-Powered Keyword Research',
                'Technical SEO Audit',
                'On-Page Content Optimization',
                'High-Authority Link Building',
                'Monthly Performance Reports',
                'Dedicated SEO Specialist',
              ].map((item, i) => (
                <div key={item} className="flex items-center gap-3 py-2.5 border-b border-slate-100 last:border-0">
                  <div
                    className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ background: `rgba(37,99,235,${0.12 + i * 0.05})` }}
                  >
                    <TrendingUp size={10} style={{ color: '#2563eb' }} />
                  </div>
                  <span className="text-[13px] text-slate-700 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
