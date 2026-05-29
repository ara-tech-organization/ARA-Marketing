import { Phone, Mail, Rocket, CheckCheck } from 'lucide-react'

const trustItems = ['No Contract Lock-in', 'Free Consultation', 'Monthly Reports', 'Dedicated Support']

export default function CTA() {
  return (
    <section
      id="contact"
      className="relative py-24 overflow-hidden text-center"
      style={{ background: 'linear-gradient(135deg, #eff6ff 0%, #dbeafe 40%, #eff6ff 100%)' }}
    >
      {/* Dot grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(37,99,235,0.18) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
          opacity: 0.4,
        }}
      />
      {/* Orb top right */}
      <div
        className="absolute w-[650px] h-[650px] rounded-full pointer-events-none"
        style={{ background: 'rgba(37,99,235,0.08)', top: '-250px', right: '-150px' }}
      />
      {/* Orb bottom left */}
      <div
        className="absolute w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background: 'rgba(96,165,250,0.07)', bottom: '-160px', left: '-100px' }}
      />

      <div className="max-w-[1200px] mx-auto px-7 relative z-10">
        <div className="max-w-[720px] mx-auto reveal">
          <div
            className="cta-border-anim rounded-[20px] sm:rounded-[32px] p-6 sm:p-12"
            style={{ background: 'rgba(10,26,52,0.9)', backdropFilter: 'blur(20px)' }}
          >
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5
              bg-blue-600/15 text-blue-400 border border-blue-600/25 rounded-full
              text-[11px] font-bold uppercase tracking-widest mb-6">
              <Rocket size={11} /> Ready to Grow?
            </span>

            <h2 className="text-[clamp(28px,4.5vw,48px)] font-bold text-white
              leading-tight tracking-[-0.8px] mb-4">
              Are You Ready to Grow<br />Your Business Online?
            </h2>

            <p className="text-[17px] text-white/55 leading-[1.75] mb-11 max-w-[620px] mx-auto">
              Partner with Ara Discover Marketing — the best digital marketing agency in Thanjavur —
              to achieve higher visibility, better engagement and increased revenue through
              result-driven digital marketing strategies.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 justify-center mb-11">
              <a
                href="tel:+919876543210"
                className="btn-glow inline-flex items-center gap-2.5 px-8 py-3.5 bg-blue-600 text-white
                  rounded-full font-bold text-sm transition-all duration-300
                  hover:bg-blue-500 shadow-xl shadow-blue-600/30"
              >
                <Phone size={16} /> Call Us Now
              </a>
              <a
                href="mailto:aradicovertech02@gmail.com"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 text-white
                  glass border border-white/20 rounded-full font-semibold text-sm
                  transition-all duration-300 hover:border-white/40 hover:bg-white/10 hover:-translate-y-0.5"
              >
                <Mail size={16} /> Send a Message
              </a>
            </div>

            {/* Trust strip */}
            <div className="flex flex-wrap justify-center gap-8 pt-8 border-t border-white/10">
              {trustItems.map(t => (
                <div key={t} className="flex items-center gap-2 text-[13px] font-semibold text-white/45">
                  <CheckCheck size={14} className="text-blue-400" /> {t}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
