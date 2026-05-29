import { Film, ArrowRight, ArrowUpRight, Rocket } from 'lucide-react'

export default function VECTA() {
  return (
    <section className="relative py-20 sm:py-24 lg:py-28 overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #071a36 0%, #0f1f4a 35%, #1a0a3d 70%, #0a0a0f 100%)' }}>

      <div className="absolute inset-0 pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.08) 1.5px, transparent 1.5px)', backgroundSize: '34px 34px' }} />
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(255,255,255,0.12) 0%, transparent 60%)' }} />

      <div className="absolute top-0 left-1/4 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] rounded-full pointer-events-none animate-orb"
        style={{ background: 'radial-gradient(circle, rgba(99,102,241,0.18) 0%, transparent 65%)' }} />
      <div className="absolute bottom-0 right-1/4 w-[250px] sm:w-[400px] h-[250px] sm:h-[400px] rounded-full pointer-events-none animate-orb-rev"
        style={{ background: 'radial-gradient(circle, rgba(124,58,237,0.22) 0%, transparent 65%)' }} />

      <div className="hidden sm:block absolute -top-16 -left-16 w-[320px] h-[320px] rounded-full border border-white/10 pointer-events-none animate-[spin_40s_linear_infinite]" />
      <div className="hidden sm:block absolute -top-8 -left-8 w-[200px] h-[200px] rounded-full border border-white/08 pointer-events-none" />
      <div className="hidden sm:block absolute -bottom-16 -right-16 w-[320px] h-[320px] rounded-full border border-white/08 pointer-events-none animate-[spin_35s_linear_infinite_reverse]" />
      <div className="hidden sm:block absolute -bottom-8 -right-8 w-[200px] h-[200px] rounded-full border border-white/06 pointer-events-none" />

      <div className="relative max-w-[860px] mx-auto px-4 sm:px-6 lg:px-7 text-center reveal">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full text-[10px] sm:text-[11px]
          font-bold uppercase tracking-widest mb-6 sm:mb-8 text-blue-100"
          style={{ background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.22)', backdropFilter: 'blur(8px)' }}>
          <Rocket size={10} /> Let's Build With Us
        </div>

        {/* Heading */}
        <h2 className="text-[clamp(24px,4vw,56px)] font-bold text-white leading-[1.08] tracking-tight mb-5 sm:mb-6 drop-shadow-sm">
          Transform Your Videos Into{' '}
          <span style={{ background: 'linear-gradient(135deg,#bfdbfe,#a5f3fc)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
            Powerful Visual Stories
          </span>
        </h2>

        <p className="text-[14px] sm:text-[16px] leading-[1.85] mb-3 sm:mb-4 max-w-[600px] mx-auto px-2 sm:px-0"
          style={{ color: 'rgba(255,255,255,0.75)' }}>
          Join hands with Ara Discover Marketing, a trusted video editing service provider in Thanjavur that offers creative, cinematic, and high-converting video editing solutions.
        </p>
        <p className="hidden sm:block text-[14px] leading-[1.8] mb-10 sm:mb-12 max-w-[480px] mx-auto"
          style={{ color: 'rgba(255,255,255,0.45)' }}>
          From raw footage to a polished final cut — we handle every frame with precision and creativity.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-10 sm:mb-14">
          <a href="/ARA-Marketing/contact"
            className="btn-glow inline-flex items-center gap-2 sm:gap-2.5 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full text-[13px] sm:text-[14px]
              font-bold transition-all duration-300 hover:-translate-y-1"
            style={{ color: '#1e3a8a', background: 'white', boxShadow: '0 12px 36px rgba(0,0,0,0.20)' }}>
            Start Your Video Project <ArrowRight size={15} />
          </a>
          <a href="#ve-services"
            className="inline-flex items-center gap-2 sm:gap-2.5 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full text-[13px] sm:text-[14px] font-semibold text-white
              transition-all duration-300 hover:-translate-y-1"
            style={{ background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.25)', backdropFilter: 'blur(8px)' }}>
            <Film size={14} /> View Our Services <ArrowUpRight size={13} />
          </a>
        </div>

        {/* Stat strip */}
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 pt-6 sm:pt-8"
          style={{ borderTop: '1px solid rgba(255,255,255,0.15)' }}>
          {[
            ['500+', 'Videos Delivered'],
            ['98%',  'Client Satisfaction'],
            ['5M+',  'Total Views Generated'],
            ['7',    'Step Editing Process'],
          ].map(([num, label]) => (
            <div key={label} className="flex flex-col items-center">
              <span className="text-[24px] sm:text-[28px] font-black leading-tight text-white">{num}</span>
              <span className="text-[10px] sm:text-[11px] mt-0.5" style={{ color: 'rgba(255,255,255,0.50)' }}>{label}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
