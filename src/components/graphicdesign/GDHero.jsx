import { Palette, ChevronRight, ArrowRight, ArrowUpRight } from 'lucide-react'

const serviceChips = [
  'Logo Design', 'Banner Design', 'Brochure Design', 'Business Card',
  'Letterhead Design', 'Social Media Post', 'Flyer Design', 'Pamphlet Design',
]


export default function GDHero() {
  return (
    <section
      className="relative overflow-hidden pt-[72px]"
      style={{ background: 'linear-gradient(160deg, #0c1527 0%, #0f1f4a 45%, #0d2b6e 75%, #1a4db5 100%)' }}
    >
      {/* Abstract orbs */}
      <div className="absolute top-10 left-[8%] w-[480px] h-[480px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(37,99,235,0.28) 0%, transparent 70%)', filter: 'blur(70px)' }} />
      <div className="absolute top-32 right-[8%] w-[360px] h-[360px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(14,165,233,0.22) 0%, transparent 70%)', filter: 'blur(60px)' }} />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(96,165,250,0.1) 0%, transparent 70%)', filter: 'blur(40px)' }} />

      {/* Subtle grid */}
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: `linear-gradient(rgba(96,165,250,0.04) 1px, transparent 1px),
          linear-gradient(90deg, rgba(96,165,250,0.04) 1px, transparent 1px)`,
        backgroundSize: '64px 64px',
      }} />

      {/* Top gradient line */}
      <div className="absolute top-[72px] left-0 right-0 h-px pointer-events-none"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(96,165,250,0.3), transparent)' }} />

      <div className="relative max-w-[1100px] mx-auto px-7 w-full pt-16 pb-0 text-center">

        {/* Breadcrumb */}
        <nav className="flex items-center justify-center gap-1.5 text-[13px] text-blue-300/60 mb-8 animate-hero-enter">
          <a href="/ARA-Marketing/" className="hover:text-blue-300 transition-colors">Home</a>
          <ChevronRight size={12} className="text-blue-400/30" />
          <span className="text-blue-300/40">Services</span>
          <ChevronRight size={12} className="text-blue-400/30" />
          <span className="text-blue-300 font-medium">Graphic Design</span>
        </nav>

        {/* Badge */}
        <div className="animate-hero-d1 flex justify-center mb-6">
          <span className="inline-flex items-center gap-2 px-4 py-2
            bg-blue-500/15 text-blue-300 border border-blue-400/25
            rounded-full text-[11px] font-bold uppercase tracking-widest">
            <Palette size={11} /> Branding &amp; Graphic Design
          </span>
        </div>

        {/* H1 */}
        <h1
          className="animate-hero-d2 text-white tracking-tight mb-6 mx-auto"
          style={{ fontSize: 'clamp(26px,3.5vw,48px)', lineHeight: 1.18, maxWidth: '1000px', fontWeight: 700 }}
        >
          Best Branding &amp; Graphic Design<br />
          <span style={{
            background: 'linear-gradient(135deg, #93c5fd, #38bdf8)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>Services in Thanjavur</span>
        </h1>

        {/* Description */}
        <p className="animate-hero-d3 text-[16px] text-blue-100/65 leading-[1.9] mb-4 mx-auto"
          style={{ maxWidth: '600px' }}>
          Ara Discover Marketing creates visually appealing brand identities — logos, brochures,
          social media creatives and business cards — that attract, engage and convert customers.
        </p>
        <p className="animate-hero-d3 text-[13.5px] text-blue-200/40 leading-[1.8] mb-10 mx-auto"
          style={{ maxWidth: '520px' }}>
          Top-rated graphic design agencies in Thanjavur providing AI-powered and modern branding
          solutions that help businesses stand out in a competitive market.
        </p>

        {/* CTAs */}
        <div className="animate-hero-d4 flex justify-center flex-wrap gap-3 mb-10">
          <a href="#contact"
            className="btn-glow inline-flex items-center gap-2 px-8 py-4 bg-blue-500 text-white
              rounded-full text-sm font-bold shadow-xl shadow-blue-500/40
              hover:bg-blue-400 transition-all duration-300">
            Get Free Consultation <ArrowRight size={15} />
          </a>
          <a href="#gd-services"
            className="inline-flex items-center gap-2 px-8 py-4 border border-blue-400/35
              text-blue-200 rounded-full text-sm font-bold
              hover:bg-blue-500/15 hover:border-blue-400/60 transition-all duration-300">
            Explore Services <ArrowUpRight size={15} />
          </a>
        </div>

        {/* Service chips */}
        <div className="animate-hero-d5 flex flex-wrap justify-center gap-2 mb-12">
          {serviceChips.map(s => (
            <span key={s}
              className="text-[11px] font-semibold px-3 py-1.5 rounded-full"
              style={{
                background: 'rgba(37,99,235,0.18)',
                border: '1px solid rgba(96,165,250,0.18)',
                color: 'rgba(147,197,253,0.8)',
              }}
            >{s}</span>
          ))}
        </div>

        {/* Stats row */}
        <div className="flex justify-center mb-16 border-t border-white/8 pt-10 gap-0">
          {[
            ['500+', 'Designs Delivered'],
            ['100+', 'Brands Created'],
            ['98%',  'Client Satisfaction'],
          ].map(([num, label], i) => (
            <div
              key={label}
              className={`flex flex-col items-center px-10 ${i < 2 ? 'border-r border-white/10' : ''}`}
            >
              <span
                className="text-[28px] font-black leading-tight"
                style={{
                  background: 'linear-gradient(135deg, #93c5fd, #38bdf8)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >{num}</span>
              <span className="text-[12px] text-blue-300/55 mt-0.5">{label}</span>
            </div>
          ))}
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
