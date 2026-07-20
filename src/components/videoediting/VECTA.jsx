import { Film, ArrowRight, ArrowUpRight, Rocket } from 'lucide-react'

export default function VECTA() {
  return (
    <section className="relative py-20 sm:py-16 lg:py-18 overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #020b18 0%, #071428 45%, #040e1f 100%)' }}>

      {/* Dot grid */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ backgroundImage: 'var(--brand-gradient-dots)', backgroundSize: '28px 28px' }} />

      {/* Orbs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: 'var(--brand-gradient-glow-dark)' }} />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background: 'var(--brand-gradient-glow-dark)' }} />

      {/* Decorative rings */}
      <div className="hidden lg:block absolute pointer-events-none rounded-full"
        style={{ top: '20%', left: '-3%', width: '160px', height: '160px', border: '1.5px dashed rgba(96,165,250,0.20)' }} />
      <div className="hidden lg:block absolute pointer-events-none"
        style={{ top: '10%', right: '6%', width: '44px', height: '44px', border: '1.5px solid rgba(96,165,250,0.20)', borderRadius: '10px', transform: 'rotate(25deg)' }} />

      <div className="relative max-w-[1200px] mx-auto px-4 sm:px-6 md:px-7 text-center reveal">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-[11px]
          font-bold uppercase tracking-widest mb-6 sm:mb-8"
          style={{ background: 'rgba(37,99,235,0.18)', border: '1px solid rgba(96,165,250,0.30)', color: '#93c5fd', backdropFilter: 'blur(8px)' }}>
          <Rocket size={10} /> Let's Build With Us
        </div>

        {/* Heading */}
        <h2 className="text-[clamp(23px,3.6vw,55px)] font-bold leading-[1.08] tracking-tight mb-5 sm:mb-6" style={{ color: '#ffffff' }}>
          Transform Your Videos Into{' '}
          <span className="text-gradient-blue">
            Powerful Visual Stories
          </span>
        </h2>

        <p className="text-[14px] sm:text-[16px] leading-[1.85] mb-3 sm:mb-4 max-w-[600px] mx-auto px-2 sm:px-0" style={{ color: 'rgba(255,255,255,0.55)' }}>
          Join hands with ARA Discover Marketing, a trusted video editing service provider in Thanjavur that offers creative, cinematic, and high-converting video editing solutions.
        </p>
        <p className="hidden sm:block text-[14px] leading-[1.8] mb-10 sm:mb-12 max-w-[480px] mx-auto" style={{ color: 'rgba(255,255,255,0.35)' }}>
          From raw footage to a polished final cut — we handle every frame with precision and creativity.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-10 sm:mb-14">
          <a href="tel:+918110025254"
            className="inline-flex items-center gap-2 sm:gap-2.5 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full text-[13px] sm:text-[14px]
              font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:opacity-90"
            style={{ background: 'var(--brand-gradient)', boxShadow: '0 12px 36px rgba(37,99,235,0.28)' }}>
            Start Your Video Project <ArrowRight size={15} />
          </a>
          <a href="#ve-services"
            className="inline-flex items-center gap-2 sm:gap-2.5 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full text-[13px] sm:text-[14px]
              font-semibold transition-all duration-300 hover:-translate-y-0.5"
            style={{
              color: 'rgba(255,255,255,0.80)',
              background: 'rgba(255,255,255,0.06)',
              border: '1px solid rgba(255,255,255,0.15)',
              backdropFilter: 'blur(8px)',
            }}>
            <Film size={14} /> View Our Services <ArrowUpRight size={13} />
          </a>
        </div>

        {/* Stat strip */}
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 pt-6 sm:pt-8"
          style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}>
          {[
            ['500+', 'Videos Delivered'],
            ['98%',  'Client Satisfaction'],
            ['5M+',  'Total Views Generated'],
            ['7',    'Step Editing Process'],
          ].map(([num, label]) => (
            <div key={label} className="flex flex-col items-center">
              <span className="text-[24px] sm:text-[28px] font-black leading-tight text-gradient-blue">
                {num}
              </span>
              <span className="text-[10px] sm:text-[11px] mt-0.5" style={{ color: 'rgba(255,255,255,0.35)' }}>{label}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
