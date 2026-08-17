import { Rocket, FileUp, Mail, Phone, CheckCheck, ArrowRight } from 'lucide-react'

const trustItems = [
  'Friendly interview process',
  'Learning-first culture',
  'Work from our Thanjavur studio',
  'Freshers are welcome',
]

export default function CareersJoinTeam() {
  return (
    <section className="relative py-14 md:py-20 overflow-hidden bg-white">
      <div className="relative z-10 max-w-[1280px] mx-auto px-4 sm:px-6 md:px-8">
        {/* Outer element owns the rotating border — it must NOT clip, or the
            ::before ring gets cut off at the padding box. */}
        <div className="reveal cta-border-anim rounded-[24px] sm:rounded-[32px]"
          style={{ boxShadow: '0 28px 80px rgba(13,34,68,0.28)' }}>

          {/* Inner element owns the background and clips the ambient orbs. */}
          <div className="relative rounded-[22px] sm:rounded-[30px] overflow-hidden"
            style={{ background: 'linear-gradient(135deg,#0d2244 0%,#0a1a34 45%,#0d2244 100%)' }}>

          {/* Ambient — clipped inside the card */}
          <div className="absolute -top-28 -right-24 w-[460px] h-[460px] rounded-full pointer-events-none animate-orb"
            style={{ background: 'var(--brand-gradient-glow-dark)' }} />
          <div className="absolute -bottom-28 -left-24 w-[380px] h-[380px] rounded-full pointer-events-none animate-orb-rev"
            style={{ background: 'var(--brand-gradient-glow-dark)' }} />
          <div className="absolute inset-0 pointer-events-none opacity-50"
            style={{ backgroundImage: 'radial-gradient(rgba(96,165,250,0.13) 1.5px, transparent 1.5px)', backgroundSize: '30px 30px' }} />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center p-7 sm:p-10 lg:p-12">

            {/* ── Left: copy ── */}
            <div className="lg:col-span-7">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5
                bg-blue-600/15 text-blue-300 border border-blue-600/25 rounded-full
                text-[11px] font-bold uppercase tracking-[0.16em] mb-6">
                <Rocket size={11} /> Take the First Step
              </span>

              <h2 className="text-[clamp(25px,3vw,40px)] font-bold text-white leading-[1.15] tracking-[-0.8px] mb-5"
                style={{ fontWeight: 700 }}>
                Join Our Team
              </h2>

              <p className="text-[15.5px] text-white/55 leading-[1.95] mb-3 max-w-[560px]">
                Interested in becoming part of our team? Send us your resume and take the first
                step toward building your career with ARA Discover Marketing.
              </p>
              <p className="text-[13.5px] text-white/35 leading-[1.8] mb-8">
                We look forward to hearing from you!
              </p>

              {/* Trust list */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3.5">
                {trustItems.map(t => (
                  <div key={t} className="flex items-center gap-2.5 text-[13px] font-medium text-white/50">
                    <CheckCheck size={14} className="text-blue-400 flex-shrink-0" /> {t}
                  </div>
                ))}
              </div>
            </div>

            {/* ── Right: action panel ── */}
            <div className="lg:col-span-5">
              <div className="rounded-[20px] p-6 sm:p-7"
                style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.10)' }}>

                <p className="text-[10.5px] font-bold uppercase tracking-[0.22em] text-blue-300/70 mb-5">
                  How to Apply
                </p>

                <button type="button"
                  onClick={() => document.getElementById('career-form')?.scrollIntoView({ behavior: 'smooth' })}
                  className="btn-glow w-full inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-white
                    rounded-full font-bold text-[14px] transition-all duration-300 mb-3">
                  <FileUp size={16} /> Submit Your Resume
                </button>

                <p className="text-[11.5px] text-center text-white/30 mb-5">
                  Takes under two minutes
                </p>

                <div className="pt-5 flex flex-col gap-2.5" style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}>
                  <p className="text-[11.5px] text-white/35 mb-1">Or reach our HR team directly</p>

                  <a href="mailto:aradiscovermarketing@gmail.com?subject=Career%20Enquiry"
                    className="group flex items-center gap-3 px-4 py-3 rounded-[13px] transition-all duration-300"
                    style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)' }}
                    onMouseEnter={e => { e.currentTarget.style.background = 'rgba(37,99,235,0.16)'; e.currentTarget.style.borderColor = 'rgba(59,130,246,0.32)' }}
                    onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.04)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)' }}>
                    <Mail size={15} className="text-blue-300 flex-shrink-0" />
                    <span className="text-[12.5px] font-medium text-white/75 truncate flex-1">aradiscovermarketing@gmail.com</span>
                    <ArrowRight size={13} className="text-white/25 flex-shrink-0 -translate-x-1 opacity-0
                      group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                  </a>

                  <a href="tel:+918110025254"
                    className="group flex items-center gap-3 px-4 py-3 rounded-[13px] transition-all duration-300"
                    style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)' }}
                    onMouseEnter={e => { e.currentTarget.style.background = 'rgba(37,99,235,0.16)'; e.currentTarget.style.borderColor = 'rgba(59,130,246,0.32)' }}
                    onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.04)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)' }}>
                    <Phone size={15} className="text-blue-300 flex-shrink-0" />
                    <span className="text-[12.5px] font-medium text-white/75 flex-1">(+91) 81100 25254</span>
                    <ArrowRight size={13} className="text-white/25 flex-shrink-0 -translate-x-1 opacity-0
                      group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                  </a>
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
