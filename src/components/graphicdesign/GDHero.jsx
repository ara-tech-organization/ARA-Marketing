import { Palette, ChevronRight, ArrowRight, ArrowUpRight, CheckCircle, Frame, Type, Layers } from 'lucide-react'

export default function GDHero() {
  return (
    <section
      className="relative overflow-hidden pt-[72px] min-h-[100vh] flex items-center"
      style={{ background: 'linear-gradient(135deg, #050a1a 0%, #0f172a 45%, #1a1040 100%)' }}
    >
      {/* Dot grid */}
      <div className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(147,197,253,0.055) 1px, transparent 1px)',
          backgroundSize: '30px 30px',
        }} />

      {/* Glow blobs */}
      <div className="absolute top-0 right-0 w-[700px] h-[700px] pointer-events-none"
        style={{ background: 'radial-gradient(circle at 65% 15%, rgba(37,99,235,0.22) 0%, transparent 55%)' }} />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] pointer-events-none"
        style={{ background: 'radial-gradient(circle at 15% 85%, rgba(124,58,237,0.14) 0%, transparent 55%)' }} />
      <div className="absolute top-[30%] left-0 w-[350px] h-[350px] pointer-events-none"
        style={{ background: 'radial-gradient(circle at 5% 50%, rgba(14,165,233,0.09) 0%, transparent 60%)' }} />

      {/* Top border line */}
      <div className="absolute top-[72px] left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(37,99,235,0.35), transparent)' }} />

      <div className="relative max-w-[1200px] mx-auto px-4 sm:px-6 md:px-7 w-full py-16">
        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* ── Left ── */}
          <div>
            {/* Breadcrumb */}
            <nav className="flex items-center gap-1.5 text-[13px] text-slate-500 mb-7 animate-hero-enter">
              <a href="/ARA-Marketing/" className="hover:text-blue-400 transition-colors">Home</a>
              <ChevronRight size={12} className="text-slate-600" />
              <span className="text-slate-600">Services</span>
              <ChevronRight size={12} className="text-slate-600" />
              <span className="text-blue-400 font-medium">Graphic Design</span>
            </nav>

            {/* Badge */}
            <div className="animate-hero-d1 mb-5">
              <span
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-widest text-blue-300"
                style={{ background: 'rgba(37,99,235,0.14)', border: '1px solid rgba(96,165,250,0.28)' }}
              >
                <Palette size={11} /> Branding &amp; Graphic Design
              </span>
            </div>

            {/* H1 */}
            <h1
              className="animate-hero-d2 tracking-tight mb-5 text-white"
              style={{ fontSize: 'clamp(28px,3.8vw,52px)', lineHeight: 1.12, fontWeight: 800 }}
            >
              Best Branding &amp; Graphic Design Services in Thanjavur{' '}
              <span style={{
                background: 'linear-gradient(90deg, #60a5fa 0%, #38bdf8 50%, #a78bfa 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>
                to Build a Powerful Brand Identity
              </span>
            </h1>

            {/* Description */}
            <p className="animate-hero-d3 text-[15px] text-slate-400 leading-[1.85] mb-4 max-w-[620px]">
              Ara Discover Marketing is the best graphic design service in thanjavur for businesses to create visually appealing brand identities that attract, engage and convert customers. We create visuals from logos to marketing creatives that tell your brand story effectively and professionally.
            </p>
            <p className="animate-hero-d3 text-[14px] text-slate-500 leading-[1.8] mb-8 max-w-[600px]">
              As the top graphic design agency in thanjavur, we offer AI powered and modern branding solutions such as logo design, brochures, social media posters, business cards, and digital creatives that help businesses stand out from competitive markets.
            </p>

            {/* CTAs */}
            <div className="animate-hero-d4 flex flex-wrap gap-3 mb-10">
              <a
                href="/ARA-Marketing/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-bold text-white transition-all duration-300 hover:opacity-90 hover:scale-[1.02]"
                style={{
                  background: 'linear-gradient(135deg, #2563eb, #0ea5e9)',
                  boxShadow: '0 8px 32px rgba(37,99,235,0.45)',
                }}
              >
                Get Free Consultation <ArrowRight size={15} />
              </a>
              <a
                href="#gd-services"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-bold text-slate-300 transition-all duration-300 hover:text-white hover:border-blue-400/60"
                style={{ border: '1.5px solid rgba(148,163,184,0.2)', background: 'rgba(255,255,255,0.03)' }}
              >
                View Services <ArrowUpRight size={15} />
              </a>
            </div>

            {/* Stats */}
            <div className="animate-hero-d5 flex flex-wrap gap-6 border-t pt-8" style={{ borderColor: 'rgba(148,163,184,0.1)' }}>
              {[
                ['500+', 'Designs Delivered'],
                ['100+', 'Brands Created'],
                ['98%',  'Client Satisfaction'],
              ].map(([num, label], i) => (
                <div key={label}
                  className={`flex flex-col ${i < 2 ? 'pr-6 border-r' : ''}`}
                  style={{ borderColor: 'rgba(148,163,184,0.1)' }}>
                  <span
                    className="text-[24px] font-black leading-tight"
                    style={{
                      background: 'linear-gradient(90deg, #60a5fa, #38bdf8)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}
                  >{num}</span>
                  <span className="text-[12px] text-slate-500 mt-0.5">{label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right: Service Tiles Grid ── */}
          <div className="animate-hero-visual hidden lg:block">
            <div className="relative grid grid-cols-2 gap-4">

              {/* Tile 1 — Logo Design */}
              <div
                className="rounded-3xl p-6 flex flex-col justify-between relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300"
                style={{
                  background: 'linear-gradient(145deg, rgba(37,99,235,0.18) 0%, rgba(37,99,235,0.08) 100%)',
                  border: '1px solid rgba(96,165,250,0.2)',
                  boxShadow: '0 8px 32px rgba(37,99,235,0.14)',
                  aspectRatio: '1',
                }}
              >
                <div className="absolute inset-0 rounded-3xl pointer-events-none"
                  style={{ backgroundImage: 'radial-gradient(circle, rgba(147,197,253,0.06) 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
                <div className="relative w-12 h-12 rounded-2xl flex items-center justify-center"
                  style={{ background: 'linear-gradient(135deg, #2563eb, #38bdf8)', boxShadow: '0 8px 24px rgba(37,99,235,0.45)' }}>
                  <Frame size={22} className="text-white" />
                </div>
                <div className="relative">
                  <p className="text-[15px] font-black text-white leading-tight mb-1">Logo Design</p>
                  <p className="text-[11px] text-slate-500">Brand mark creation</p>
                </div>
              </div>

              {/* Tile 2 — Social Media (offset down) */}
              <div
                className="rounded-3xl p-6 flex flex-col justify-between relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300"
                style={{
                  background: 'linear-gradient(145deg, rgba(14,165,233,0.18) 0%, rgba(14,165,233,0.07) 100%)',
                  border: '1px solid rgba(56,189,248,0.2)',
                  boxShadow: '0 8px 32px rgba(14,165,233,0.12)',
                  aspectRatio: '1',
                  marginTop: '32px',
                }}
              >
                <div className="absolute inset-0 rounded-3xl pointer-events-none"
                  style={{ backgroundImage: 'radial-gradient(circle, rgba(147,197,253,0.06) 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
                <div className="relative w-12 h-12 rounded-2xl flex items-center justify-center"
                  style={{ background: 'linear-gradient(135deg, #0284c7, #38bdf8)', boxShadow: '0 8px 24px rgba(14,165,233,0.45)' }}>
                  <Layers size={22} className="text-white" />
                </div>
                <div className="relative">
                  <p className="text-[15px] font-black text-white leading-tight mb-1">Social Media</p>
                  <p className="text-[11px] text-slate-500">Creative post designs</p>
                </div>
              </div>

              {/* Tile 3 — Brochure (offset up) */}
              <div
                className="rounded-3xl p-6 flex flex-col justify-between relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300"
                style={{
                  background: 'linear-gradient(145deg, rgba(124,58,237,0.18) 0%, rgba(124,58,237,0.07) 100%)',
                  border: '1px solid rgba(167,139,250,0.2)',
                  boxShadow: '0 8px 32px rgba(124,58,237,0.12)',
                  aspectRatio: '1',
                  marginTop: '-32px',
                }}
              >
                <div className="absolute inset-0 rounded-3xl pointer-events-none"
                  style={{ backgroundImage: 'radial-gradient(circle, rgba(167,139,250,0.06) 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
                <div className="relative w-12 h-12 rounded-2xl flex items-center justify-center"
                  style={{ background: 'linear-gradient(135deg, #7c3aed, #a78bfa)', boxShadow: '0 8px 24px rgba(124,58,237,0.45)' }}>
                  <Type size={22} className="text-white" />
                </div>
                <div className="relative">
                  <p className="text-[15px] font-black text-white leading-tight mb-1">Brochure</p>
                  <p className="text-[11px] text-slate-500">Print &amp; digital design</p>
                </div>
              </div>

              {/* Tile 4 — Business Card */}
              <div
                className="rounded-3xl p-6 flex flex-col justify-between relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300"
                style={{
                  background: 'linear-gradient(145deg, rgba(5,150,105,0.18) 0%, rgba(5,150,105,0.07) 100%)',
                  border: '1px solid rgba(52,211,153,0.2)',
                  boxShadow: '0 8px 32px rgba(5,150,105,0.12)',
                  aspectRatio: '1',
                }}
              >
                <div className="absolute inset-0 rounded-3xl pointer-events-none"
                  style={{ backgroundImage: 'radial-gradient(circle, rgba(52,211,153,0.06) 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
                <div className="relative w-12 h-12 rounded-2xl flex items-center justify-center"
                  style={{ background: 'linear-gradient(135deg, #059669, #34d399)', boxShadow: '0 8px 24px rgba(5,150,105,0.45)' }}>
                  <CheckCircle size={22} className="text-white" />
                </div>
                <div className="relative">
                  <p className="text-[15px] font-black text-white leading-tight mb-1">Business Card</p>
                  <p className="text-[11px] text-slate-500">Professional identity</p>
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
