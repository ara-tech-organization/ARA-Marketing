import { ArrowRight, Search, TrendingUp, Zap } from 'lucide-react'

export default function SEOCTA() {
  return (
    <section
      className="py-12 md:py-16 lg:py-16 relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg,#0d2244 0%,#0a1a34 40%,#0d2244 100%)' }}
    >
      {/* Orbs */}
      <div
        className="absolute -top-20 -right-20 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: 'var(--brand-gradient-glow-dark)' }}
      />
      <div
        className="absolute -bottom-20 -left-20 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background: 'var(--brand-gradient-glow-dark)' }}
      />

      {/* Dot grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'var(--brand-gradient-dots)',
          backgroundSize: '28px 28px',
        }}
      />

      <div className="relative max-w-[1200px] mx-auto px-4 sm:px-6 md:px-7">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-10 lg:gap-12">

          {/* Left content */}
          <div className="flex-1 reveal text-center md:text-left">
            {/* Badge */}
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-blue-600 text-white
              rounded-full text-[11px] font-bold uppercase tracking-widest mb-6
              shadow-lg shadow-blue-600/25">
              <Zap size={11} /> Ready to Rank Higher
            </span>

            <h2 className="text-[clamp(23px,2.7vw,41px)] font-bold text-white leading-tight tracking-tight mb-5">
              Are You Ready to Boost Your{' '}
              <span className="text-gradient-blue">
                Rankings &amp; Organic Traffic?
              </span>
            </h2>

            <p className="text-[15px] text-white/70 leading-[1.85] mb-8 max-w-lg">
              Partner with ARA Discover Marketing, a trusted SEO digital marketing agency in Thanjavur, offering AI-based SEO solutions, technical optimization, and content-driven strategies for sustainable online growth.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              <a
                href="tel:+918110025254"
                className="btn-glow inline-flex items-center gap-2 px-7 py-3.5 text-white
                  rounded-full text-[14px] font-bold transition-all duration-300 hover:-translate-y-0.5"
              >
                Get Free SEO Consultation <ArrowRight size={15} />
              </a>
            </div>
          </div>

          {/* Right: feature package panel */}
          <div className="reveal w-full md:w-[300px] lg:w-[340px] flex-shrink-0">
            <div
              className="bg-white/5 border border-white/10 rounded-3xl p-4 sm:p-5 md:p-6 lg:p-7 backdrop-blur-sm"
              style={{ boxShadow: '0 16px 60px rgba(0,0,0,0.25)' }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-blue-600 rounded-2xl flex items-center justify-center text-white flex-shrink-0">
                  <Search size={18} />
                </div>
                <div>
                  <p className="text-[13px] font-bold text-white">SEO Growth Package</p>
                  <p className="text-[11px] text-white/40">Tailored for your business</p>
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
                <div key={item} className="flex items-center gap-3 py-2.5 border-b border-white/10 last:border-0">
                  <div
                    className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ background: `rgba(96,165,250,${0.15 + i * 0.05})` }}
                  >
                    <TrendingUp size={10} style={{ color: '#60a5fa' }} />
                  </div>
                  <span className="text-[13px] text-white/80 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
