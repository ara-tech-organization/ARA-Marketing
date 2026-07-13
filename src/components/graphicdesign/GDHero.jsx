import { useRef } from 'react'
import { Palette, ChevronRight, ArrowRight, ArrowUpRight, CheckCircle, Frame, Type, Layers } from 'lucide-react'
import gdHeroImg from '../../assets/GD/G1.webp'
import CursorSpotlight from '../common/CursorSpotlight'

export default function GDHero() {
  const heroRef = useRef(null)

  return (
    <section
      ref={heroRef}
      className="relative overflow-hidden pt-[72px] min-h-[100vh] flex items-center"
      style={{ background: 'linear-gradient(135deg,#eff6ff 0%,#dbeafe 40%,#eff6ff 100%)' }}
    >
      {/* Cursor-follow spotlight */}
      <CursorSpotlight
        targetRef={heroRef}
        size={720}
        blur={110}
        blendMode="normal"
        opacity={0.5}
        background="conic-gradient(from 0deg at 50% 50%, #1e3a8a 0%, #2563eb 25%, #60a5fa 50%, #2563eb 75%, #1e3a8a 100%)"
      />

      {/* Dot grid */}
      <div className="absolute inset-0 pointer-events-none bg-brand-gradient-dots"
        style={{ backgroundSize: '30px 30px' }} />

      {/* Glow blobs */}
      <div className="absolute top-0 right-0 w-[700px] h-[700px] pointer-events-none"
        style={{ background: 'var(--brand-gradient-glow)' }} />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] pointer-events-none"
        style={{ background: 'var(--brand-gradient-glow)' }} />
      <div className="absolute top-[30%] left-0 w-[350px] h-[350px] pointer-events-none"
        style={{ background: 'var(--brand-gradient-glow)' }} />

      {/* Top border line */}
      <div className="absolute top-[72px] left-0 right-0 h-px"
        style={{ background: 'var(--brand-gradient-line)' }} />

      <div className="relative max-w-[1300px] mx-auto px-4 sm:px-6 md:px-7 w-full py-16">
        <div className="grid lg:grid-cols-[0.65fr_1.4fr_0.7fr] gap-6 items-center">

          {/* â”€â”€ Left: Image â”€â”€ */}
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

          {/* â”€â”€ Center: Content â”€â”€ */}
          <div className="flex flex-col items-center text-center lg:items-center">

            {/* Breadcrumb */}
            <nav className="flex flex-wrap items-center gap-x-1.5 gap-y-1 text-[12px] text-slate-400 mb-8 animate-hero-enter">
              <a href="/" className="whitespace-nowrap hover:text-blue-600 transition-colors">Home</a>
              <ChevronRight size={11} className="text-slate-300 flex-shrink-0" />
              <span className="whitespace-nowrap text-slate-500">Digital Marketing</span>
              <ChevronRight size={11} className="text-slate-300 flex-shrink-0" />
              <span className="whitespace-nowrap text-blue-600 font-medium">Graphic Design</span>
            </nav>

            {/* Badge */}
            <div className="animate-hero-d1 mb-7">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-widest text-blue-600"
                style={{ background: 'rgba(255,255,255,0.8)', border: '1px solid #bfdbfe' }}>
                <Palette size={11} /> Branding &amp; Graphic Design
              </span>
            </div>

            {/* H1 */}
            <h1 className="animate-hero-d2 tracking-tight mb-7 text-slate-900"
              style={{ fontSize: 'clamp(16px,1.7vw,27px)', lineHeight: 1.12, fontWeight: 700 }}>
              Best Branding &amp; Graphic Design Services in Thanjavur
            </h1>

            {/* Description */}
            <p className="animate-hero-d3 text-[14px] text-slate-600 leading-[1.85] mb-4">
              ARA Discover Marketing is the best graphic design service in thanjavur for businesses to create visually appealing brand identities that attract, engage and convert customers. We create visuals from logos to marketing creatives that tell your brand story effectively and professionally.
            </p>
            <p className="animate-hero-d3 text-[13.5px] text-slate-500 leading-[1.8] mb-10">
              As the top graphic design agency in thanjavur, we offer AI powered and modern branding solutions such as logo design, brochures, social media posters, business cards, and digital creatives that help businesses stand out from competitive markets.
            </p>

            {/* CTAs */}
            <div className="animate-hero-d4 flex flex-wrap justify-center gap-3 mb-10">
              <a href="tel:+918110025254"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-bold text-white transition-all duration-300 hover:opacity-90 hover:scale-[1.02]"
                style={{ background: 'var(--brand-gradient)', boxShadow: '0 8px 32px rgba(37,99,235,0.35)' }}>
                Take a First Step <ArrowRight size={15} />
              </a>
              <a href="#gd-services"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-bold text-blue-600 transition-all duration-300 hover:text-white hover:bg-blue-600"
                style={{ border: '1px solid rgba(37,99,235,0.3)' }}>
                View Services <ArrowUpRight size={15} />
              </a>
            </div>

            {/* Stats */}
            <div className="animate-hero-d5 flex flex-wrap justify-center gap-6 border-t pt-8 w-full"
              style={{ borderColor: 'rgba(37,99,235,0.12)' }}>
              {[
                ['500+', 'Designs Delivered'],
                ['100+', 'Brands Created'],
                ['98%',  'Client Satisfaction'],
              ].map(([num, label], i) => (
                <div key={label} className={`flex flex-col items-center ${i < 2 ? 'pr-6 border-r' : ''}`}
                  style={{ borderColor: 'rgba(37,99,235,0.12)' }}>
                  <span className="text-[24px] font-black leading-tight text-gradient-blue">
                    {num}
                  </span>
                  <span className="text-[12px] text-slate-400 mt-0.5">{label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* â”€â”€ Right: Grid tiles â”€â”€ */}
          <div className="hidden lg:block animate-hero-visual">
            <div className="flex gap-3" style={{ minHeight: 420 }}>

              {/* Left column: Box 1 top, Box 3 bottom */}
              <div className="flex-1 flex flex-col gap-3">
                {/* Box 1 â€” Logo Design: top */}
                <div className="rounded-2xl p-4 flex flex-col gap-3 relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300"
                  style={{ background: 'var(--brand-gradient-soft)', border: '1px solid rgba(96,165,250,0.2)' }}>
                  <div className="absolute inset-0 rounded-2xl pointer-events-none bg-brand-gradient-dots"
                    style={{ backgroundSize: '18px 18px' }} />
                  <div className="relative w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{ background: 'var(--brand-gradient)', boxShadow: '0 6px 18px #2563eb44' }}>
                    <Frame size={18} className="text-white" />
                  </div>
                  <div className="relative">
                    <p className="text-[13px] font-black text-white leading-tight mb-1">Logo Design</p>
                    <p className="text-[11px] text-slate-400">Brand mark creation</p>
                  </div>
                </div>

                {/* Box 3 â€” Brochure: centered in remaining space */}
                <div className="flex-1 flex items-center">
                <div className="w-full rounded-2xl p-4 flex flex-col gap-3 relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300"
                  style={{ background: 'var(--brand-gradient-soft)', border: '1px solid rgba(96,165,250,0.2)' }}>
                  <div className="absolute inset-0 rounded-2xl pointer-events-none bg-brand-gradient-dots"
                    style={{ backgroundSize: '18px 18px' }} />
                  <div className="relative w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{ background: 'var(--brand-gradient)', boxShadow: '0 6px 18px #2563eb44' }}>
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
                  {[{ icon: Layers, label: 'Social Media', sub: 'Creative post designs', g: ['#0284c7','#38bdf8'], br: 'rgba(56,189,248,0.2)' }].map(({ icon: Icon, label, sub, g, br }) => (
                    <div key={label} className="w-full rounded-2xl p-4 flex flex-col gap-3 relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300"
                      style={{ background: 'var(--brand-gradient-soft)', border: `1px solid ${br}` }}>
                      <div className="absolute inset-0 rounded-2xl pointer-events-none bg-brand-gradient-dots"
                        style={{ backgroundSize: '18px 18px' }} />
                      <div className="relative w-10 h-10 rounded-xl flex items-center justify-center"
                        style={{ background: 'var(--brand-gradient)', boxShadow: `0 6px 18px ${g[0]}44` }}>
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
                  style={{ background: 'var(--brand-gradient-soft)', border: '1px solid rgba(56,189,248,0.2)' }}>
                  <div className="absolute inset-0 rounded-2xl pointer-events-none bg-brand-gradient-dots"
                    style={{ backgroundSize: '18px 18px' }} />
                  <div className="relative w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{ background: 'var(--brand-gradient)', boxShadow: '0 6px 18px #0ea5e944' }}>
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
