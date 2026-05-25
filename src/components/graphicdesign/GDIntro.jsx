import { Sparkles, TrendingUp, Users, Award, Zap, CheckCircle, Star } from 'lucide-react'

export default function GDIntro() {
  return (
    <section className="relative overflow-hidden py-24 bg-white">
      {/* Subtle grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(37,99,235,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(37,99,235,0.03) 1px, transparent 1px)`,
          backgroundSize: '44px 44px',
        }}
      />

      <div className="relative max-w-[1200px] mx-auto px-7">

        {/* Section label */}
        <div className="reveal mb-10">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-blue-50 text-blue-600
            border border-blue-100 rounded-full text-[11px] font-bold uppercase tracking-widest">
            <Sparkles size={11} /> Creative Branding Solutions
          </span>
        </div>

        {/* ── Bento grid ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 grid-rows-auto gap-4">

          {/* Cell 1 — Big headline (spans 7 cols) */}
          <div
            className="reveal lg:col-span-7 rounded-3xl overflow-hidden relative"
            style={{
              background: 'linear-gradient(135deg, #eff6ff 0%, #dbeafe 50%, #bfdbfe 100%)',
              boxShadow: '0 16px 56px rgba(37,99,235,0.12)',
              border: '1.5px solid #bfdbfe',
            }}
          >

            <div className="relative p-9 h-full flex flex-col justify-between min-h-[260px]">
              <h2 className="text-[clamp(22px,3vw,42px)] font-black text-slate-900 leading-[1.1] tracking-tight">
                Creative Branding Solutions<br />
                That{' '}
                <span className="text-gradient-blue">Define Your</span>{' '}
                Business Identity
              </h2>
              <div className="flex items-center gap-3 mt-6">
                <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center"
                  style={{ boxShadow: '0 4px 14px rgba(37,99,235,0.3)' }}>
                  <Sparkles size={18} className="text-white" />
                </div>
                <p className="text-[13px] text-blue-700 font-semibold">
                  Top-rated Graphic Design Agencies in Thanjavur
                </p>
              </div>
            </div>
          </div>

          {/* Cell 2 — Image (spans 5 cols) */}
          <div className="reveal lg:col-span-5 rounded-3xl overflow-hidden relative min-h-[260px]"
            style={{ boxShadow: '0 16px 56px rgba(37,99,235,0.18)' }}>
            <img
              src="https://images.unsplash.com/photo-1561070791-2526d30994b5?w=560&h=320&fit=crop&auto=format&q=80"
              alt="Creative Branding and Graphic Design Solutions in Thanjavur - Ara Discover Marketing"
              width="560" height="320" loading="lazy"
              className="w-full h-full object-cover scale-105"
            />
            {/* Dark gradient overlay */}
            <div
              className="absolute inset-0"
              style={{ background: 'linear-gradient(160deg, rgba(15,23,42,0.55) 0%, rgba(29,78,216,0.45) 50%, rgba(15,23,42,0.75) 100%)' }}
            />

            {/* Top-left label */}
            <div className="absolute top-5 left-5">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest text-white"
                style={{ background: 'rgba(37,99,235,0.6)', border: '1px solid rgba(96,165,250,0.3)', backdropFilter: 'blur(8px)' }}>
                <Sparkles size={9} /> Ara Discover Marketing
              </span>
            </div>

            {/* Center badge */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div
                className="rounded-2xl px-6 py-4 text-center"
                style={{ background: 'rgba(15,23,42,0.65)', border: '1px solid rgba(96,165,250,0.2)', backdropFilter: 'blur(10px)' }}
              >
                <p
                  className="text-[38px] font-black leading-none mb-1"
                  style={{
                    background: 'linear-gradient(135deg, #93c5fd, #38bdf8)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >250+</p>
                <p className="text-[11px] font-bold text-white/90">Businesses Trust Us</p>
              </div>
            </div>

            {/* Bottom info row */}
            <div className="absolute bottom-0 left-0 right-0 px-5 py-4"
              style={{ background: 'linear-gradient(0deg, rgba(15,23,42,0.9) 0%, transparent 100%)' }}>
              <p className="text-[15px] font-bold text-white mb-1">Best Graphic Design Company in Thanjavur</p>
              <div className="flex items-center gap-1">
                {[1,2,3,4,5].map(i => <Star key={i} size={11} className="text-amber-400" fill="#fbbf24" />)}
                <span className="text-[11px] text-amber-300 font-semibold ml-1">5.0 Rating</span>
              </div>
            </div>
          </div>

          {/* Cell 3 — Description text (spans 4 cols) */}
          <div
            className="reveal lg:col-span-4 rounded-3xl p-8 flex flex-col justify-between border border-blue-100"
            style={{
              background: 'linear-gradient(160deg, #f0f9ff 0%, #e0f2fe 40%, #dbeafe 100%)',
              boxShadow: '0 4px 20px rgba(37,99,235,0.08)',
            }}
          >
            {/* Grid bg */}
            <div className="absolute inset-0 rounded-3xl pointer-events-none"
              style={{
                backgroundImage: `linear-gradient(rgba(37,99,235,0.05) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(37,99,235,0.05) 1px, transparent 1px)`,
                backgroundSize: '32px 32px',
              }} />
            <div className="relative">
              <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center mb-5"
                style={{ boxShadow: '0 4px 14px rgba(37,99,235,0.3)' }}>
                <Sparkles size={16} className="text-white" />
              </div>
              <p className="text-[14px] text-slate-700 leading-[1.9] mb-4">
                In today's competitive digital world, a strong brand identity is essential for
                business success. Ara Discover Marketing offers professional branding solutions
                for businesses to build recognition, trust and customer loyalty.
              </p>
              <p className="text-[12.5px] text-slate-500 leading-[1.85]">
                We are one of the best graphic design companies in Thanjavur providing creative
                and strategic design solutions that fit with your business goals.
              </p>
            </div>
            <div className="relative mt-5 inline-flex items-center gap-2 px-3.5 py-2 rounded-full self-start bg-white border border-blue-200"
              style={{ boxShadow: '0 2px 8px rgba(37,99,235,0.08)' }}>
              <CheckCircle size={11} className="text-emerald-500" />
              <span className="text-[11px] font-bold text-blue-700">Result-oriented Approach</span>
            </div>
          </div>

          {/* Cell 4 — Feature pillars (spans 5 cols) */}
          <div
            className="reveal lg:col-span-5 rounded-3xl p-8 border border-blue-100 bg-white"
            style={{ boxShadow: '0 4px 20px rgba(37,99,235,0.07)' }}
          >
            <p className="text-[11px] font-bold text-blue-500 uppercase tracking-widest mb-6">Why We're Different</p>
            <div className="grid grid-cols-2 gap-3">
              {[
                { icon: TrendingUp, text: 'Visual storytelling & modern design trends',       color: '#2563eb' },
                { icon: Users,      text: 'Customer psychology-driven brand experiences',     color: '#0284c7' },
                { icon: Award,      text: 'Consistent result-oriented design approach',       color: '#7c3aed' },
                { icon: Zap,        text: 'Enhanced visibility across digital & print media', color: '#059669' },
              ].map(({ icon: Icon, text, color }) => (
                <div
                  key={text}
                  className="flex flex-col gap-3 p-4 rounded-2xl border border-slate-100 hover:-translate-y-0.5 transition-all duration-200 group"
                  style={{ boxShadow: '0 2px 8px rgba(37,99,235,0.05)' }}
                >
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-200"
                    style={{ background: color + '12', color }}
                  >
                    <Icon size={16} />
                  </div>
                  <span className="text-[12px] font-semibold text-slate-700 leading-snug">{text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Cell 5 — Stat highlight (spans 3 cols) */}
          <div
            className="reveal lg:col-span-3 rounded-3xl p-8 flex flex-col justify-between border border-blue-100"
            style={{
              background: 'linear-gradient(160deg, #f0f9ff 0%, #e0f2fe 40%, #dbeafe 100%)',
              boxShadow: '0 4px 20px rgba(37,99,235,0.08)',
            }}
          >
            <div>
              <p className="text-[11px] font-bold text-blue-500 uppercase tracking-widest mb-4">Our Impact</p>
              {[
                { num: '500+', label: 'Designs Delivered' },
                { num: '100+', label: 'Brands Created' },
              ].map(({ num, label }) => (
                <div key={label} className="flex items-center justify-between py-3 border-b border-blue-200/50 last:border-0">
                  <span className="text-[13px] font-semibold text-slate-600">{label}</span>
                  <span
                    className="text-[20px] font-black leading-none"
                    style={{
                      background: 'linear-gradient(135deg, #1d4ed8, #0ea5e9)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}
                  >{num}</span>
                </div>
              ))}
            </div>
            <div className="mt-5 flex items-center gap-2 px-3.5 py-2 rounded-full bg-white border border-blue-200 self-start"
              style={{ boxShadow: '0 2px 8px rgba(37,99,235,0.08)' }}>
              <Sparkles size={11} className="text-blue-600" />
              <span className="text-[11px] font-bold text-blue-700">Full Brand Packages</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
