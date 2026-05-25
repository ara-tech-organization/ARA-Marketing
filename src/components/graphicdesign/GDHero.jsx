import {
  Palette, Pen, Layers, ChevronRight, ArrowRight, ArrowUpRight,
  Star, Frame, Sparkles
} from 'lucide-react'

export default function GDHero() {
  return (
    <section
      className="relative overflow-hidden pt-[72px] min-h-[92vh] flex items-center"
      style={{ background: '#ffffff' }}
    >
      {/* Canvas-grid background (design-tool feel) */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(37,99,235,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(37,99,235,0.04) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
        }}
      />

      {/* Gradient blob — top-left */}
      <div
        className="absolute -top-20 -left-20 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(219,234,254,0.65) 0%, transparent 70%)' }}
      />

      {/* Gradient blob — bottom-right */}
      <div
        className="absolute -bottom-20 -right-20 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(186,230,255,0.5) 0%, transparent 70%)' }}
      />

      <div className="relative max-w-[1200px] mx-auto px-7 w-full py-20">
        <div className="grid lg:grid-cols-[54%_46%] gap-14 items-center">

          {/* ── Left Content ── */}
          <div>
            <nav className="flex items-center gap-1.5 text-[13px] text-slate-400 mb-6 animate-hero-enter">
              <a href="/ARA-Marketing/" className="hover:text-blue-600 transition-colors duration-200">Home</a>
              <ChevronRight size={13} className="text-slate-300" />
              <span>Services</span>
              <ChevronRight size={13} className="text-slate-300" />
              <span className="text-blue-600 font-medium">Graphic Design</span>
            </nav>

            <div className="animate-hero-d1">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-blue-50 text-blue-600
                border border-blue-200 rounded-full text-[11px] font-bold uppercase tracking-widest mb-5">
                <Palette size={11} /> Branding &amp; Graphic Design
              </span>
            </div>

            <h1 className="animate-hero-d2 text-[clamp(28px,3.8vw,52px)] font-bold text-slate-900
              leading-[1.12] tracking-tight mb-5">
              Best Branding &amp; Graphic Design{' '}
              <span className="text-gradient-blue">Services in Thanjavur</span>{' '}
              to Build a Powerful Brand Identity
            </h1>

            <p className="animate-hero-d3 text-[15px] text-slate-500 leading-[1.85] mb-3 max-w-[520px]">
              Ara Discover Marketing is the best graphic design service in Thanjavur for businesses
              to create visually appealing brand identities that attract, engage and convert customers.
              We create visuals from logos to marketing creatives that tell your brand story effectively.
            </p>
            <p className="animate-hero-d3 text-[13.5px] text-slate-400 leading-[1.8] mb-8 max-w-[500px]">
              As the top-rated graphic design agencies in Thanjavur, we offer AI-powered and modern
              branding solutions — logo design, brochures, social media posters, business cards, and
              digital creatives that help businesses stand out from competitive markets.
            </p>

            <div className="animate-hero-d4 flex flex-wrap gap-3 mb-10">
              <a
                href="#contact"
                className="btn-glow inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white
                  rounded-full text-sm font-semibold shadow-lg shadow-blue-600/25
                  hover:bg-blue-500 transition-all duration-300"
              >
                Get Free Consultation <ArrowRight size={15} />
              </a>
              <a
                href="#gd-services"
                className="inline-flex items-center gap-2 px-6 py-3 border border-blue-200
                  text-blue-600 bg-white/80 rounded-full text-sm font-semibold
                  hover:bg-blue-50 hover:border-blue-300 transition-all duration-300"
              >
                Explore Services <ArrowUpRight size={15} />
              </a>
            </div>

            <div className="animate-hero-d5 flex flex-wrap gap-8">
              {[
                ['500+', 'Designs Delivered'],
                ['100+', 'Brands Created'],
                ['98%',  'Client Satisfaction'],
              ].map(([num, label]) => (
                <div key={label} className="flex flex-col">
                  <span className="text-2xl font-bold text-blue-600 leading-tight">{num}</span>
                  <span className="text-[12px] text-slate-400 mt-0.5">{label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right Visual — Design Studio Canvas ── */}
          <div className="animate-hero-visual hidden lg:block">
            <div className="relative">
              {/* Main canvas card */}
              <div
                className="bg-white rounded-3xl overflow-hidden border border-blue-100"
                style={{ boxShadow: '0 24px 80px rgba(37,99,235,0.12)' }}
              >
                {/* Fake toolbar */}
                <div className="flex items-center gap-2 px-5 py-3 border-b border-slate-100 bg-slate-50/80">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                  </div>
                  <div className="flex-1 flex justify-center">
                    <span className="text-[11px] text-slate-400 font-medium">Brand Identity — Ara Design Studio</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Pen size={11} className="text-blue-500" />
                    <Layers size={11} className="text-slate-400" />
                  </div>
                </div>

                {/* Canvas body */}
                <div className="p-5 bg-[#f8faff]">
                  {/* Logo preview */}
                  <div
                    className="bg-white rounded-2xl p-5 mb-3.5 border border-blue-50"
                    style={{ boxShadow: '0 4px 16px rgba(37,99,235,0.06)' }}
                  >
                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mb-3">Logo Design</p>
                    <div className="flex items-center gap-4">
                      <div
                        className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0"
                        style={{ background: 'linear-gradient(135deg, #1d4ed8, #38bdf8)' }}
                      >
                        <Frame size={24} className="text-white" />
                      </div>
                      <div>
                        <div className="h-3 w-28 rounded-full bg-slate-800 mb-2" />
                        <div className="h-2 w-20 rounded-full bg-slate-300" />
                      </div>
                    </div>
                  </div>

                  {/* Colour palette */}
                  <div className="bg-white rounded-2xl p-4 mb-3.5 border border-blue-50">
                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mb-2.5">Brand Colors</p>
                    <div className="flex gap-2">
                      {['#2563eb', '#0ea5e9', '#1e40af', '#bfdbfe', '#f8faff', '#1e293b'].map((c) => (
                        <div key={c} className="flex flex-col items-center gap-1">
                          <div className="w-8 h-8 rounded-xl border border-slate-100 transition-transform duration-200 hover:scale-110" style={{ background: c }} />
                          <span className="text-[8px] text-slate-400 font-mono">{c.slice(1, 4).toUpperCase()}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Typography */}
                  <div className="bg-white rounded-2xl p-4 border border-blue-50">
                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mb-2">Typography</p>
                    <div className="space-y-1.5">
                      <div className="flex items-baseline gap-3">
                        <span className="text-[22px] font-black text-blue-600 leading-none">Aa</span>
                        <span className="text-[11px] text-slate-500 font-semibold">Brand Primary</span>
                      </div>
                      <div className="flex items-baseline gap-3">
                        <span className="text-[15px] font-semibold text-slate-500 leading-none">Aa</span>
                        <span className="text-[11px] text-slate-400">Body Regular</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating — Design Types */}
              <div
                className="absolute -top-5 -right-5 bg-white rounded-2xl p-4 border border-blue-100 animate-float"
                style={{ boxShadow: '0 8px 32px rgba(37,99,235,0.15)' }}
              >
                <p className="text-[10px] text-slate-400 font-medium mb-2">Design Types</p>
                {['Banner', 'Brochure', 'Business Card', 'Flyer'].map((t) => (
                  <div key={t} className="flex items-center gap-1.5 mb-1 last:mb-0">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                    <span className="text-[11px] font-semibold text-slate-700">{t}</span>
                  </div>
                ))}
              </div>

              {/* Floating — Delivery */}
              <div
                className="absolute -bottom-5 -left-4 bg-white rounded-2xl p-4 border border-blue-100 animate-float-delay"
                style={{ boxShadow: '0 8px 32px rgba(37,99,235,0.15)' }}
              >
                <p className="text-[10px] text-slate-400 font-medium mb-1">Fast Delivery</p>
                <p className="text-[18px] font-bold text-blue-600">24–48h</p>
                <p className="text-[9px] text-emerald-600 font-semibold mt-0.5">With Revisions</p>
              </div>

              {/* Floating — Star */}
              <div
                className="absolute top-1/2 -right-10 -translate-y-1/2 bg-white rounded-2xl p-3.5 border border-blue-100"
                style={{ boxShadow: '0 8px 32px rgba(37,99,235,0.12)' }}
              >
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 bg-amber-50 rounded-xl flex items-center justify-center">
                    <Star size={13} className="text-amber-500" fill="#f59e0b" />
                  </div>
                  <div>
                    <p className="text-[9px] text-slate-400 font-medium">Rating</p>
                    <p className="text-[13px] font-bold text-slate-800">5.0 / 5</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Hidden SEO image */}
      <img
        src="https://images.unsplash.com/photo-1626785774573-4b799315345d?w=1&h=1&fit=crop&auto=format&q=10"
        alt="Best Graphic Design Service in Thanjavur - Ara Discover Marketing"
        width="1" height="1" loading="lazy"
        className="absolute opacity-0 pointer-events-none" aria-hidden="true"
      />
    </section>
  )
}
