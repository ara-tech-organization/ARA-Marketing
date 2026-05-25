import { Sparkles, CheckCircle, TrendingUp } from 'lucide-react'

const pillars = [
  'Visual storytelling & modern design trends',
  'Industry-specific branding strategies',
  'Creativity, consistency & result-oriented approach',
  'Enhanced brand visibility across digital & print',
]

export default function GDIntro() {
  return (
    <section className="relative overflow-hidden py-24 bg-white">
      {/* Soft dot grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(37,99,235,0.06) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />

      <div className="relative max-w-[1200px] mx-auto px-7">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* ── Left — Image ── */}
          <div className="reveal-left order-2 lg:order-1">
            <div className="relative">
              <div
                className="rounded-3xl overflow-hidden"
                style={{ boxShadow: '0 24px 80px rgba(37,99,235,0.12)' }}
              >
                <img
                  src="https://images.unsplash.com/photo-1561070791-2526d30994b5?w=640&h=500&fit=crop&auto=format&q=80"
                  alt="Creative Branding and Graphic Design Solutions in Thanjavur - Ara Discover Marketing"
                  width="640"
                  height="500"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Overlay card — experience badge */}
              <div
                className="absolute -bottom-6 -right-6 bg-white rounded-2xl px-5 py-4 border border-blue-100"
                style={{ boxShadow: '0 12px 40px rgba(37,99,235,0.15)' }}
              >
                <p className="text-[10px] text-slate-400 font-semibold uppercase tracking-widest mb-1">
                  Trusted by
                </p>
                <p className="text-[22px] font-black text-blue-600 leading-tight">250+</p>
                <p className="text-[11px] text-slate-500 font-medium">Businesses in Thanjavur</p>
              </div>

              {/* Overlay card — brand identity */}
              <div
                className="absolute -top-5 -left-5 bg-white rounded-2xl px-4 py-3.5 border border-blue-100 animate-float"
                style={{ boxShadow: '0 8px 28px rgba(37,99,235,0.13)' }}
              >
                <div className="flex items-center gap-2">
                  <div
                    className="w-8 h-8 rounded-xl flex items-center justify-center"
                    style={{ background: 'linear-gradient(135deg, #2563eb, #38bdf8)' }}
                  >
                    <Sparkles size={14} className="text-white" />
                  </div>
                  <div>
                    <p className="text-[9px] text-slate-400 font-medium">Brand Identity</p>
                    <p className="text-[12px] font-bold text-slate-800">Full Package</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ── Right — Content ── */}
          <div className="reveal order-1 lg:order-2">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-blue-50 text-blue-600
              border border-blue-100 rounded-full text-[11px] font-bold uppercase tracking-widest mb-5">
              <Sparkles size={11} /> Creative Branding Solutions
            </span>

            <h2 className="text-[clamp(22px,2.8vw,38px)] font-bold text-slate-900 leading-tight tracking-tight mb-5">
              Creative Branding Solutions That{' '}
              <span className="text-gradient-blue">Define Your Business Identity</span>
            </h2>

            <p className="text-[15px] text-slate-500 leading-[1.85] mb-4">
              In today's competitive digital world, a strong brand identity is essential for
              business success. Ara Discover Marketing offers professional branding solutions for
              businesses to build recognition, trust and customer loyalty.
            </p>
            <p className="text-[14px] text-slate-400 leading-[1.8] mb-6">
              We are one of the best graphic design companies in Thanjavur providing creative and
              strategic design solutions that fit with your business goals. We are a team that
              believes in visual storytelling, modern design trends and customer psychology to build
              great brand experiences.
            </p>
            <p className="text-[14px] text-slate-400 leading-[1.8] mb-8">
              Businesses prefer us for the best graphic design service in Thanjavur due to our
              creativity, consistency and result-oriented design approach that enhances brand
              visibility across digital and print platforms.
            </p>

            <div className="space-y-3">
              {pillars.map((p) => (
                <div key={p} className="flex items-start gap-3">
                  <CheckCircle size={16} className="text-blue-500 flex-shrink-0 mt-0.5" />
                  <span className="text-[14px] text-slate-600 leading-snug">{p}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-blue-100 bg-blue-50">
              <TrendingUp size={14} className="text-blue-600" />
              <span className="text-[13px] font-semibold text-blue-700">Top-rated Graphic Design Agencies in Thanjavur</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
