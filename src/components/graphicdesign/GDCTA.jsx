import { ArrowRight, Palette, Frame, BookOpen, Layers, PhoneCall } from 'lucide-react'

const highlights = [
  { icon: Frame,    label: 'Logo Design',       color: '#bfdbfe' },
  { icon: BookOpen, label: 'Brochure Design',   color: '#bfdbfe' },
  { icon: Palette,  label: 'Brand Identity',    color: '#bfdbfe' },
  { icon: Layers,   label: 'Full Visual Suite', color: '#bfdbfe' },
]

export default function GDCTA() {
  return (
    <section className="relative overflow-hidden py-24 bg-white">
      <div className="relative max-w-[1200px] mx-auto px-7">
        <div
          className="reveal grid lg:grid-cols-[1.1fr_0.9fr] rounded-3xl overflow-hidden"
          style={{ boxShadow: '0 32px 80px rgba(37,99,235,0.18)' }}
        >

          {/* ── Left — Light blue creative panel ── */}
          <div
            className="relative overflow-hidden flex flex-col justify-between p-7 sm:p-10 lg:p-14"
            style={{
              background: 'linear-gradient(135deg, #eff6ff 0%, #dbeafe 50%, #bfdbfe 100%)',
              borderRight: '1px solid #bfdbfe',
            }}
          >
            {/* Dot pattern */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                backgroundImage: 'radial-gradient(circle, rgba(37,99,235,0.1) 1px, transparent 1px)',
                backgroundSize: '26px 26px',
              }}
            />

            {/* Radial glow */}
            <div
              className="absolute top-0 right-0 w-72 h-72 pointer-events-none"
              style={{ background: 'radial-gradient(circle, rgba(147,197,253,0.4) 0%, transparent 70%)' }}
            />

            <div className="relative">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-blue-600 text-white
                rounded-full text-[11px] font-bold uppercase tracking-widest mb-7"
                style={{ boxShadow: '0 4px 14px rgba(37,99,235,0.3)' }}>
                <Palette size={11} /> Build Your Brand
              </span>

              <h2 className="text-[clamp(24px,3.5vw,46px)] font-bold leading-[1.1] tracking-tight mb-5"
                style={{ color: '#0f172a' }}>
                Let's Build{' '}
                <span style={{
                  background: 'linear-gradient(135deg, #1d4ed8, #0ea5e9)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}>
                  With Us
                </span>
              </h2>
              <p className="text-[15px] text-slate-600 leading-[1.8] max-w-[400px]">
                Team up with Ara Discover Marketing — the{' '}
                <span className="text-blue-700 font-semibold">leading design agency in thanjavur</span>{' '}
                — for innovative branding, logo designing, brochure designing, and complete visual
                identity solutions for business growth.
              </p>
            </div>

            {/* Service tags */}
            <div className="relative flex flex-wrap gap-2 mt-10">
              {highlights.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-2 px-3.5 py-2 rounded-full text-[11px] font-semibold text-blue-700 bg-white border border-blue-200"
                  style={{ boxShadow: '0 2px 8px rgba(37,99,235,0.08)' }}
                >
                  <Icon size={12} className="text-blue-500" />
                  {label}
                </div>
              ))}
            </div>
          </div>

          {/* ── Right — White action panel ── */}
          <div className="bg-white flex flex-col justify-center p-7 sm:p-10 lg:p-14">
            <p
              className="text-[clamp(28px,3vw,44px)] font-black text-slate-900 leading-tight mb-3"
            >
              Ready to create something{' '}
              <span className="text-gradient-blue">remarkable?</span>
            </p>
            <p className="text-[14px] text-slate-500 leading-[1.8] mb-8">
              From a single logo to a complete brand identity system — our creative team delivers
              designs that make your business unforgettable. Let's start today.
            </p>

            {/* Contact actions */}
            <div className="flex flex-col gap-3">
              <a
                href="/ARA-Marketing/contact"
                className="btn-glow inline-flex items-center justify-between gap-3 px-6 py-4
                  bg-blue-600 text-white rounded-2xl font-bold text-[14px]
                  hover:bg-blue-500 transition-all duration-300 shadow-lg shadow-blue-600/25 group"
              >
                <span>Start Your Project</span>
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-200" />
              </a>
              <a
                href="tel:+919876543210"
                className="inline-flex items-center justify-between gap-3 px-6 py-4
                  border-2 border-blue-100 text-blue-700 rounded-2xl font-bold text-[14px]
                  hover:bg-blue-50 hover:border-blue-300 transition-all duration-300"
              >
                <span>Call For a Free Consultation</span>
                <PhoneCall size={16} />
              </a>
            </div>

            {/* Social proof mini */}
            <div className="mt-8 flex items-center gap-3 pt-6 border-t border-slate-100">
              <div className="flex -space-x-2">
                {['R', 'P', 'K', 'D'].map((l, i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full border-2 border-white flex items-center justify-center
                      text-white text-[11px] font-bold flex-shrink-0"
                    style={{
                      background: ['#2563eb', '#0284c7', '#7c3aed', '#059669'][i],
                    }}
                  >
                    {l}
                  </div>
                ))}
              </div>
              <p className="text-[12px] text-slate-500">
                <span className="font-bold text-slate-800">250+ businesses</span> trust our designs
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
