import { Palette, ChevronRight, ArrowRight, ArrowUpRight, CheckCircle, Frame, Type, Layers } from 'lucide-react'
import gdHeroImg from '../../assets/GD/G1.webp'

export default function GDHero() {
  return (
    <section
      className="relative overflow-hidden pt-[72px] min-h-[100vh] flex items-center"
      style={{ background: 'linear-gradient(135deg, #050a1a 0%, #0f172a 45%, #1a1040 100%)' }}
    >
      {/* Dot grid */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(circle, rgba(147,197,253,0.055) 1px, transparent 1px)', backgroundSize: '30px 30px' }} />

      {/* Glow blobs */}
      <div className="absolute top-0 right-0 w-[700px] h-[700px] pointer-events-none"
        style={{ background: 'radial-gradient(circle at 65% 15%, rgba(37,99,235,0.22) 0%, transparent 55%)' }} />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] pointer-events-none"
        style={{ background: 'radial-gradient(circle at 15% 85%, rgba(37,99,235,0.14) 0%, transparent 55%)' }} />
      <div className="absolute top-[30%] left-0 w-[350px] h-[350px] pointer-events-none"
        style={{ background: 'radial-gradient(circle at 5% 50%, rgba(14,165,233,0.09) 0%, transparent 60%)' }} />

      {/* Top border line */}
      <div className="absolute top-[72px] left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(37,99,235,0.35), transparent)' }} />

      <div className="relative max-w-[1300px] mx-auto px-4 sm:px-6 md:px-7 w-full py-16">
        <div className="grid lg:grid-cols-[0.65fr_1.4fr_0.7fr] gap-6 items-center">

          {/* ── Left: Image ── */}
          <div className="hidden lg:block animate-hero-enter">
            <div className="relative rounded-3xl overflow-hidden"
              style={{ height: 'clamp(340px,45vw,480px)', boxShadow: '0 24px 64px rgba(37,99,235,0.18)' }}>
              <img
                src={gdHeroImg}
                alt="Graphic Design Services in Thanjavur"
                loading="eager"
                className="w-full h-full object-cover"
              />

              {/* Overlay badge */}
              <div className="absolute top-5 left-5 flex items-center gap-2 px-3.5 py-2 rounded-xl"
                style={{ background: 'rgba(255,255,255,0.12)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.2)' }}>
                <Palette size={13} className="text-white" />
                <span className="text-[10px] font-bold text-white uppercase tracking-wider">Creative Design</span>
              </div>

              {/* Overlay stat */}
              <div className="absolute bottom-5 left-5 right-5 flex gap-3">
                {[['500+','Designs'],['100+','Brands']].map(([n,l]) => (
                  <div key={l} className="flex-1 text-center px-3 py-2.5 rounded-xl"
                    style={{ background: 'rgba(255,255,255,0.10)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.18)' }}>
                    <p className="text-[18px] font-bold text-white leading-none">{n}</p>
                    <p className="text-[9px] text-white/60 font-semibold mt-0.5">{l}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ── Center: Content ── */}
          <div className="flex flex-col items-center text-center lg:items-center">

            {/* Breadcrumb */}
            <nav className="flex flex-wrap items-center gap-x-1.5 gap-y-1 text-[12px] text-slate-500 mb-8 animate-hero-enter">
              <a href="/ARA-Marketing/" className="whitespace-nowrap hover:text-blue-400 transition-colors">Home</a>
              <ChevronRight size={11} className="text-slate-600 flex-shrink-0" />
              <span className="whitespace-nowrap">Digital Marketing</span>
              <ChevronRight size={11} className="text-slate-600 flex-shrink-0" />
              <span className="whitespace-nowrap text-blue-600 font-medium">Graphic Design</span>
            </nav>

            {/* Badge */}
            <div className="animate-hero-d1 mb-7">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-widest text-blue-300"
                style={{ background: 'rgba(37,99,235,0.14)', border: '1px solid rgba(96,165,250,0.28)' }}>
                <Palette size={11} /> Branding &amp; Graphic Design
              </span>
            </div>

            {/* H1 */}
            <h1 className="animate-hero-d2 tracking-tight mb-7 text-white"
              style={{ fontSize: 'clamp(16px,1.7vw,27px)', lineHeight: 1.12, fontWeight: 700 }}>
              Best Branding &amp; Graphic Design Services in Thanjavur
            </h1>

            {/* Description */}
            <p className="animate-hero-d3 text-[14px] text-slate-400 leading-[1.85] mb-4">
              ARA Discover Marketing is the best graphic design service in thanjavur for businesses to create visually appealing brand identities that attract, engage and convert customers. We create visuals from logos to marketing creatives that tell your brand story effectively and professionally.
            </p>
            <p className="animate-hero-d3 text-[13.5px] text-slate-500 leading-[1.8] mb-10">
              As the top graphic design agency in thanjavur, we offer AI powered and modern branding solutions such as logo design, brochures, social media posters, business cards, and digital creatives that help businesses stand out from competitive markets.
            </p>

            {/* CTAs */}
            <div className="animate-hero-d4 flex flex-wrap justify-center gap-3 mb-10">
              <a href="/ARA-Marketing/contact-us"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-bold text-white transition-all duration-300 hover:opacity-90 hover:scale-[1.02]"
                style={{ background: 'linear-gradient(135deg, #2563eb, #0ea5e9)', boxShadow: '0 8px 32px rgba(37,99,235,0.45)' }}>
                Take a First Step <ArrowRight size={15} />
              </a>
              <a href="#gd-services"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-bold text-slate-300 transition-all duration-300 hover:text-white"
                style={{ border: '1.5px solid rgba(148,163,184,0.2)', background: 'rgba(255,255,255,0.03)' }}>
                View Services <ArrowUpRight size={15} />
              </a>
            </div>

            {/* Stats */}
            <div className="animate-hero-d5 flex flex-wrap justify-center gap-6 border-t pt-8 w-full"
              style={{ borderColor: 'rgba(148,163,184,0.1)' }}>
              {[
                ['500+', 'Designs Delivered'],
                ['100+', 'Brands Created'],
                ['98%',  'Client Satisfaction'],
              ].map(([num, label], i) => (
                <div key={label} className={`flex flex-col items-center ${i < 2 ? 'pr-6 border-r' : ''}`}
                  style={{ borderColor: 'rgba(148,163,184,0.1)' }}>
                  <span className="text-[24px] font-black leading-tight"
                    style={{ background: 'linear-gradient(90deg, #60a5fa, #38bdf8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                    {num}
                  </span>
                  <span className="text-[12px] text-slate-500 mt-0.5">{label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right: Grid tiles ── */}
          <div className="hidden lg:block animate-hero-visual">
            <div className="flex gap-3" style={{ minHeight: 420 }}>

              {/* Left column: Box 1 top, Box 3 bottom */}
              <div className="flex-1 flex flex-col gap-3">
                {/* Box 1 — Logo Design: top */}
                <div className="rounded-2xl p-4 flex flex-col gap-3 relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300"
                  style={{ background: 'linear-gradient(145deg,rgba(37,99,235,0.18),rgba(37,99,235,0.07))', border: '1px solid rgba(96,165,250,0.2)' }}>
                  <div className="absolute inset-0 rounded-2xl pointer-events-none"
                    style={{ backgroundImage: 'radial-gradient(circle,rgba(147,197,253,0.05) 1px,transparent 1px)', backgroundSize: '18px 18px' }} />
                  <div className="relative w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{ background: 'linear-gradient(135deg,#2563eb,#38bdf8)', boxShadow: '0 6px 18px #2563eb44' }}>
                    <Frame size={18} className="text-white" />
                  </div>
                  <div className="relative">
                    <p className="text-[13px] font-black text-white leading-tight mb-1">Logo Design</p>
                    <p className="text-[11px] text-slate-400">Brand mark creation</p>
                  </div>
                </div>

                {/* Box 3 — Brochure: centered in remaining space */}
                <div className="flex-1 flex items-center">
                <div className="w-full rounded-2xl p-4 flex flex-col gap-3 relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300"
                  style={{ background: 'linear-gradient(145deg,rgba(37,99,235,0.18),rgba(37,99,235,0.07))', border: '1px solid rgba(96,165,250,0.2)' }}>
                  <div className="absolute inset-0 rounded-2xl pointer-events-none"
                    style={{ backgroundImage: 'radial-gradient(circle,rgba(147,197,253,0.05) 1px,transparent 1px)', backgroundSize: '18px 18px' }} />
                  <div className="relative w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{ background: 'linear-gradient(135deg,#2563eb,#60a5fa)', boxShadow: '0 6px 18px #2563eb44' }}>
                    <Type size={18} className="text-white" />
                  </div>
                  <div className="relative">
                    <p className="text-[13px] font-black text-white leading-tight mb-1">Brochure</p>
                    <p className="text-[11px] text-slate-400">Print &amp; digital design</p>
                  </div>
                </div>
                </div>
              </div>

              {/* Right column: Box 2 centered, Box 4 bottom */}
              <div className="flex-1 flex flex-col gap-3">
                {/* Spacer to push Box 2 to center */}
                <div className="flex-1 flex items-center">
                  {[{ icon: Layers, label: 'Social Media', sub: 'Creative post designs', g: ['#0284c7','#38bdf8'], b: 'rgba(14,165,233,0.18)', br: 'rgba(56,189,248,0.2)' }].map(({ icon: Icon, label, sub, g, b, br }) => (
                    <div key={label} className="w-full rounded-2xl p-4 flex flex-col gap-3 relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300"
                      style={{ background: `linear-gradient(145deg,${b},${b.replace('0.18','0.07')})`, border: `1px solid ${br}` }}>
                      <div className="absolute inset-0 rounded-2xl pointer-events-none"
                        style={{ backgroundImage: 'radial-gradient(circle,rgba(147,197,253,0.05) 1px,transparent 1px)', backgroundSize: '18px 18px' }} />
                      <div className="relative w-10 h-10 rounded-xl flex items-center justify-center"
                        style={{ background: `linear-gradient(135deg,${g[0]},${g[1]})`, boxShadow: `0 6px 18px ${g[0]}44` }}>
                        <Icon size={18} className="text-white" />
                      </div>
                      <div className="relative">
                        <p className="text-[13px] font-black text-white leading-tight mb-1">{label}</p>
                        <p className="text-[11px] text-slate-400">{sub}</p>
                      </div>
                    </div>
                  ))}
                </div>
                {/* Box 4 bottom */}
                <div className="rounded-2xl p-4 flex flex-col gap-3 relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300"
                  style={{ background: 'linear-gradient(145deg,rgba(14,165,233,0.18),rgba(14,165,233,0.07))', border: '1px solid rgba(56,189,248,0.2)' }}>
                  <div className="absolute inset-0 rounded-2xl pointer-events-none"
                    style={{ backgroundImage: 'radial-gradient(circle,rgba(147,197,253,0.05) 1px,transparent 1px)', backgroundSize: '18px 18px' }} />
                  <div className="relative w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{ background: 'linear-gradient(135deg,#0ea5e9,#60a5fa)', boxShadow: '0 6px 18px #0ea5e944' }}>
                    <CheckCircle size={18} className="text-white" />
                  </div>
                  <div className="relative">
                    <p className="text-[13px] font-black text-white leading-tight mb-1">Business Card</p>
                    <p className="text-[11px] text-slate-400">Professional identity</p>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
