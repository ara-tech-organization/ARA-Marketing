import { Film, ArrowRight, ArrowUpRight, Rocket } from 'lucide-react'

export default function VECTA() {
  return (
    <section className="relative py-20 sm:py-16 lg:py-18 overflow-hidden"
      style={{ background: '#f0f9ff' }}>

      {/* Dot grid */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(rgba(37,99,235,0.06) 1px, transparent 1px)', backgroundSize: '28px 28px' }} />

      {/* Orbs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(219,234,254,0.6) 0%, transparent 65%)' }} />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(186,230,253,0.5) 0%, transparent 65%)' }} />

      {/* Decorative rings */}
      <div className="hidden lg:block absolute pointer-events-none rounded-full"
        style={{ top: '20%', left: '-3%', width: '160px', height: '160px', border: '1.5px dashed rgba(14,165,233,0.25)' }} />
      <div className="hidden lg:block absolute pointer-events-none"
        style={{ top: '10%', right: '6%', width: '44px', height: '44px', border: '1.5px solid rgba(37,99,235,0.2)', borderRadius: '10px', transform: 'rotate(25deg)' }} />

      <div className="relative max-w-[1200px] mx-auto px-4 sm:px-6 md:px-7 text-center reveal">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-[11px]
          font-bold uppercase tracking-widest mb-6 sm:mb-8"
          style={{ background: 'white', border: '1px solid #bfdbfe', color: '#2563eb', boxShadow: '0 2px 12px rgba(37,99,235,0.08)' }}>
          <Rocket size={10} /> Let's Build With Us
        </div>

        {/* Heading */}
        <h2 className="text-[clamp(23px,3.6vw,55px)] font-bold text-slate-900 leading-[1.08] tracking-tight mb-5 sm:mb-6">
          Transform Your Videos Into{' '}
          <span style={{ background: 'linear-gradient(135deg,#2563eb,#0ea5e9)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
            Powerful Visual Stories
          </span>
        </h2>

        <p className="text-[14px] sm:text-[16px] text-slate-500 leading-[1.85] mb-3 sm:mb-4 max-w-[600px] mx-auto px-2 sm:px-0">
          Join hands with ARA Discover Marketing, a trusted video editing service provider in Thanjavur that offers creative, cinematic, and high-converting video editing solutions.
        </p>
        <p className="hidden sm:block text-[14px] text-slate-400 leading-[1.8] mb-10 sm:mb-12 max-w-[480px] mx-auto">
          From raw footage to a polished final cut — we handle every frame with precision and creativity.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-10 sm:mb-14">
          <a href="/ARA-Marketing/contact-us"
            className="inline-flex items-center gap-2 sm:gap-2.5 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full text-[13px] sm:text-[14px]
              font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:opacity-90"
            style={{ background: 'linear-gradient(135deg,#2563eb,#0ea5e9)', boxShadow: '0 12px 36px rgba(37,99,235,0.28)' }}>
            Start Your Video Project <ArrowRight size={15} />
          </a>
          <a href="#ve-services"
            className="inline-flex items-center gap-2 sm:gap-2.5 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full text-[13px] sm:text-[14px]
              font-semibold text-blue-700 bg-white border border-blue-200
              hover:bg-blue-50 hover:border-blue-300 transition-all duration-300 shadow-sm">
            <Film size={14} /> View Our Services <ArrowUpRight size={13} />
          </a>
        </div>

        {/* Stat strip */}
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 pt-6 sm:pt-8"
          style={{ borderTop: '1px solid #bfdbfe' }}>
          {[
            ['500+', 'Videos Delivered'],
            ['98%',  'Client Satisfaction'],
            ['5M+',  'Total Views Generated'],
            ['7',    'Step Editing Process'],
          ].map(([num, label]) => (
            <div key={label} className="flex flex-col items-center">
              <span className="text-[24px] sm:text-[28px] font-black leading-tight"
                style={{ background: 'linear-gradient(135deg,#2563eb,#0ea5e9)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                {num}
              </span>
              <span className="text-[10px] sm:text-[11px] mt-0.5 text-slate-400">{label}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
