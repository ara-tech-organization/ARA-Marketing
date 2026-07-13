import { Phone, Mail, Rocket, CheckCheck } from 'lucide-react'

const trustItems = ['No Contract Lock-in', 'Free Consultation', 'Monthly Reports', 'Dedicated Support']

export default function CTA() {
  return (
    <section
      id="contact"
      className="relative py-16 overflow-hidden text-center"
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-7 relative z-10">
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

            <h2
              className="text-[clamp(23px,3.4vw,39px)] font-bold text-white
              leading-tight tracking-[-0.8px] mb-4"
              style={{ fontWeight: 700 }}
            >
              Are You Ready to Grow<br />Your Business Online?
            </h2>

            <p className="text-[17px] text-white/55 leading-[1.75] mb-11 max-w-[620px] mx-auto">
              Partner with ARA Discover Marketing â€” the best digital marketing agency in Thanjavur â€”
              to achieve higher visibility, better engagement and increased revenue through
              result-driven digital marketing strategies.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 justify-center mb-11">
              <a
                href="tel:+918110025254"
                className="btn-glow inline-flex items-center gap-2.5 px-8 py-3.5 text-white
                  rounded-full font-bold text-sm transition-all duration-300"
              >
                <Phone size={16} /> Call Us Now
              </a>
              <a
                href="mailto:aradiscovermarketing@gmail.com"
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
