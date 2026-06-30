import { Sparkles, TrendingUp, Users, Award, Zap, CheckCircle, Star } from 'lucide-react'
import gdIntroImg from '../../assets/GD/G2.webp'

export default function GDIntro() {
  return (
    <section className="relative overflow-hidden py-16 bg-white">
      {/* Subtle grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(37,99,235,0.025) 1px, transparent 1px),
            linear-gradient(90deg, rgba(37,99,235,0.025) 1px, transparent 1px)`,
          backgroundSize: '48px 48px',
        }}
      />

      <div className="relative max-w-[1200px] mx-auto px-4 sm:px-6 md:px-7">

        {/* Section label */}
        <div className="reveal mb-10">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-blue-50 text-blue-600
            border border-blue-100 rounded-full text-[11px] font-bold uppercase tracking-widest">
            <Sparkles size={11} /> Creative Branding Solutions
          </span>
        </div>

        {/* ── Bento grid ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">

          {/* Cell 1 — Headline (7 cols) */}
          <div
            className="reveal lg:col-span-7 rounded-3xl overflow-hidden relative bg-white"
            style={{
              border: '1.5px solid #e2e8f0',
              boxShadow: '0 8px 40px rgba(37,99,235,0.08)',
              minHeight: '280px',
            }}
          >
            {/* Top gradient accent bar */}
            <div className="h-1.5" style={{ background: 'linear-gradient(90deg, #2563eb, #38bdf8, #818cf8)' }} />

            {/* Large watermark */}
            <div
              className="absolute bottom-0 right-2 text-[130px] font-black leading-none select-none pointer-events-none"
              style={{
                background: 'linear-gradient(135deg, #dbeafe 0%, #e0f2fe 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                lineHeight: 0.85,
              }}
            >
              ARA
            </div>

            <div className="relative p-9 h-full flex flex-col justify-between" style={{ minHeight: '260px' }}>
              <div>
                <h2 className="text-[clamp(17px,2vw,30px)] font-bold text-slate-900 leading-[1.1] tracking-tight mb-5">
                  Creative Branding Solutions<br />
                  That Define Your Business Identity
                </h2>
                <p className="text-[13.5px] text-slate-500 leading-[1.85] max-w-[500px]">
                  ARA Discover Marketing is the best graphic design service in thanjavur for businesses to create visually appealing brand identities that attract, engage and convert customers.
                </p>
              </div>
              <div className="flex items-center gap-3 mt-6">
                <div className="w-9 h-9 rounded-xl bg-blue-600 flex items-center justify-center flex-shrink-0"
                  style={{ boxShadow: '0 4px 14px rgba(37,99,235,0.3)' }}>
                  <Sparkles size={15} className="text-white" />
                </div>
                <p className="text-[12.5px] text-blue-700 font-semibold">
                  Top-rated Graphic Design Agency in Thanjavur
                </p>
              </div>
            </div>
          </div>

          {/* Cell 2 — Image (5 cols) */}
          <div className="reveal lg:col-span-5 rounded-3xl overflow-hidden relative"
            style={{ minHeight: '280px', boxShadow: '0 16px 56px rgba(37,99,235,0.18)' }}>
            <img
              src={gdIntroImg}
              alt="Creative Branding and Graphic Design Solutions in Thanjavur - ARA Discover Marketing"
              width="560" height="320" loading="lazy"
              className="w-full h-full object-cover"
            />
            <div
              className="absolute inset-0"
              style={{ background: 'linear-gradient(160deg, rgba(15,23,42,0.4) 0%, rgba(29,78,216,0.5) 50%, rgba(15,23,42,0.82) 100%)' }}
            />

            {/* Top badge */}
            <div className="absolute top-5 left-5">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[10px] font-bold text-white"
                style={{ background: 'rgba(37,99,235,0.6)', border: '1px solid rgba(96,165,250,0.3)', backdropFilter: 'blur(8px)' }}>
                <Sparkles size={9} /> ARA Discover Marketing
              </span>
            </div>

            {/* Bottom panel */}
            <div className="absolute bottom-0 left-0 right-0 px-6 py-5"
              style={{ background: 'linear-gradient(0deg, rgba(15,23,42,0.95) 0%, transparent 100%)' }}>
              <div className="flex items-end justify-between">
                <div>
                  <p className="text-[14px] font-bold text-white mb-1.5">Best Graphic Design Company</p>
                  <div className="flex items-center gap-1">
                    {[1,2,3,4,5].map(i => <Star key={i} size={10} className="text-amber-400" fill="#fbbf24" />)}
                    <span className="text-[10px] text-amber-300 font-semibold ml-1">5.0 Rating</span>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-[32px] font-black leading-none text-white">250+</p>
                  <p className="text-[9px] text-blue-300 font-bold uppercase tracking-wide mt-0.5">Brands Built</p>
                </div>
              </div>
            </div>
          </div>

          {/* Cell 3 — Dark (4 cols) */}
          <div
            className="reveal lg:col-span-4 rounded-3xl p-8 flex flex-col justify-between overflow-hidden relative"
            style={{
              background: 'linear-gradient(145deg, #0f172a 0%, #1e3a8a 100%)',
              boxShadow: '0 8px 32px rgba(15,23,42,0.28)',
              minHeight: '240px',
            }}
          >
            {/* Dot pattern */}
            <div className="absolute inset-0 rounded-3xl pointer-events-none"
              style={{
                backgroundImage: 'radial-gradient(circle, rgba(147,197,253,0.1) 1px, transparent 1px)',
                backgroundSize: '24px 24px',
              }} />
            <div className="absolute -top-16 -right-16 w-52 h-52 rounded-full pointer-events-none"
              style={{ background: 'radial-gradient(circle, rgba(37,99,235,0.28) 0%, transparent 70%)' }} />

            <div className="relative">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-5"
                style={{ background: 'rgba(37,99,235,0.28)', border: '1px solid rgba(96,165,250,0.25)' }}>
                <Sparkles size={16} className="text-blue-300" />
              </div>
              <p className="text-[14px] text-slate-300 leading-[1.9] mb-4">
                Businesses prefer us for premium branding and creative designs in thanjavur due to our creativity, consistency and result oriented design approach that enhances brand visibility across digital and print platforms.
              </p>
              <p className="text-[12.5px] text-slate-400 leading-[1.8]">
                We are one of the top graphic design companies in thanjavur providing creative and strategic design solutions that fit with your business goals.
              </p>
            </div>
            <div className="relative mt-5 inline-flex items-center gap-2 px-3.5 py-2 rounded-full self-start"
              style={{ background: 'rgba(37,99,235,0.22)', border: '1px solid rgba(96,165,250,0.22)' }}>
              <CheckCircle size={11} className="text-blue-400" />
              <span className="text-[11px] font-bold text-blue-300">Result-oriented Approach</span>
            </div>
          </div>

          {/* Cell 4 — Feature pillars (5 cols) */}
          <div
            className="reveal lg:col-span-5 rounded-3xl p-8 border border-slate-100 bg-white"
            style={{ boxShadow: '0 4px 20px rgba(37,99,235,0.07)' }}
          >
            <p className="text-[11px] font-bold text-blue-500 uppercase tracking-widest mb-6">Why We're Different</p>
            <div className="grid grid-cols-2 gap-3">
              {[
                { icon: TrendingUp, text: 'Visual storytelling & modern design trends',       color: '#2563eb', bg: '#eff6ff' },
                { icon: Users,      text: 'Customer psychology-driven brand experiences',     color: '#0284c7', bg: '#f0f9ff' },
                { icon: Award,      text: 'Consistent result-oriented design approach',       color: '#7c3aed', bg: '#f5f3ff' },
                { icon: Zap,        text: 'Enhanced visibility across digital & print media', color: '#059669', bg: '#f0fdf4' },
              ].map(({ icon: Icon, text, color, bg }) => (
                <div
                  key={text}
                  className="flex flex-col gap-3 p-4 rounded-2xl hover:-translate-y-0.5 transition-all duration-200"
                  style={{ background: bg, border: `1px solid ${color}22` }}
                >
                  <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: color + '18', color }}>
                    <Icon size={16} />
                  </div>
                  <span className="text-[12px] font-semibold text-slate-700 leading-snug">{text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Cell 5 — Stats (3 cols) */}
          <div
            className="reveal lg:col-span-3 rounded-3xl p-8 flex flex-col justify-between overflow-hidden relative"
            style={{
              background: 'linear-gradient(160deg, #eff6ff 0%, #dbeafe 50%, #bfdbfe 100%)',
              border: '1.5px solid #bfdbfe',
              boxShadow: '0 4px 20px rgba(37,99,235,0.1)',
            }}
          >
            <div className="absolute -bottom-8 -right-8 w-36 h-36 rounded-full pointer-events-none"
              style={{ background: 'radial-gradient(circle, rgba(37,99,235,0.12) 0%, transparent 70%)' }} />
            <div className="relative">
              <p className="text-[11px] font-bold text-blue-500 uppercase tracking-widest mb-5">Our Impact</p>
              {[
                { num: '500+', label: 'Designs Delivered', color: '#2563eb' },
                { num: '100+', label: 'Brands Created',    color: '#0284c7' },
                { num: '98%',  label: 'Client Satisfaction', color: '#7c3aed' },
              ].map(({ num, label, color }) => (
                <div key={label} className="flex items-center justify-between py-3.5 border-b border-blue-200/50 last:border-0">
                  <span className="text-[12px] font-semibold text-slate-600">{label}</span>
                  <span className="text-[20px] font-black leading-none" style={{ color }}>{num}</span>
                </div>
              ))}
            </div>
            <div className="relative mt-4 flex items-center gap-2 px-3 py-2 rounded-full bg-white border border-blue-200 self-start"
              style={{ boxShadow: '0 2px 8px rgba(37,99,235,0.08)' }}>
              <Sparkles size={10} className="text-blue-600" />
              <span className="text-[10px] font-bold text-blue-700">Full Brand Packages</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
