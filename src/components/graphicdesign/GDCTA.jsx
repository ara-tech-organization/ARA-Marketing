import { ArrowRight, Palette, Frame, BookOpen, Layers } from 'lucide-react'

const highlights = [
  { icon: Palette, label: 'Logo Design' },
  { icon: Frame,   label: 'Brochure Design' },
  { icon: BookOpen, label: 'Flyer & Poster' },
  { icon: Layers,  label: 'Full Brand Identity' },
]

export default function GDCTA() {
  return (
    <section className="relative overflow-hidden py-24 bg-white">
      <div className="relative max-w-[960px] mx-auto px-7">
        <div
          className="reveal relative rounded-3xl overflow-hidden px-10 py-16 text-center"
          style={{
            background: 'linear-gradient(135deg, #1e3a8a 0%, #1d4ed8 55%, #0284c7 100%)',
            boxShadow: '0 32px 80px rgba(37,99,235,0.30)',
          }}
        >
          {/* Diagonal shine overlay */}
          <div
            className="absolute inset-0 pointer-events-none opacity-10"
            style={{
              backgroundImage: 'repeating-linear-gradient(45deg, rgba(255,255,255,0.4) 0px, rgba(255,255,255,0.4) 1px, transparent 1px, transparent 28px)',
            }}
          />

          {/* Glow orbs */}
          <div
            className="absolute -top-16 -left-16 w-60 h-60 rounded-full pointer-events-none"
            style={{ background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)' }}
          />
          <div
            className="absolute -bottom-16 -right-16 w-60 h-60 rounded-full pointer-events-none"
            style={{ background: 'radial-gradient(circle, rgba(255,255,255,0.08) 0%, transparent 70%)' }}
          />

          <div className="relative">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white/15 text-white
              border border-white/25 rounded-full text-[11px] font-bold uppercase tracking-widest mb-6">
              <Palette size={11} /> Build Your Brand
            </span>

            <h2 className="text-[clamp(22px,3vw,40px)] font-black text-white leading-tight tracking-tight mb-4">
              Let&apos;s Build With Us
            </h2>
            <p className="text-[16px] text-blue-100 leading-[1.8] mb-6 max-w-[560px] mx-auto">
              <strong className="text-white">Best Graphic Design Company in Thanjavur</strong> — team up
              with Ara Discover Marketing for innovative branding, logo designing, brochure designing,
              and complete visual identity solutions for business growth.
            </p>

            {/* Service chips */}
            <div className="flex flex-wrap justify-center gap-2.5 mb-10">
              {highlights.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 border border-white/20 text-white text-[12px] font-semibold"
                >
                  <Icon size={12} />
                  {label}
                </div>
              ))}
            </div>

            <div className="flex flex-wrap justify-center gap-3">
              <a
                href="#contact"
                className="btn-glow inline-flex items-center gap-2 px-8 py-3.5 bg-white text-blue-700
                  rounded-full text-sm font-bold shadow-xl shadow-black/20
                  hover:bg-blue-50 transition-all duration-300"
              >
                Start Your Project <ArrowRight size={15} />
              </a>
              <a
                href="tel:+919876543210"
                className="inline-flex items-center gap-2 px-8 py-3.5 border-2 border-white/40
                  text-white rounded-full text-sm font-semibold
                  hover:bg-white/10 transition-all duration-300"
              >
                Call Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
