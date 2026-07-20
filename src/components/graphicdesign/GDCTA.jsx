import { ArrowRight, Palette, Frame, BookOpen, Layers, Sparkles, PenTool, Type } from 'lucide-react'

const highlights = [
  { icon: Frame,    label: 'Logo Design' },
  { icon: BookOpen, label: 'Brochure Design' },
  { icon: Palette,  label: 'Brand Identity' },
  { icon: Layers,   label: 'Full Visual Suite' },
]

export default function GDCTA() {
  return (
    <section className="relative overflow-hidden py-16 bg-white">
      <div className="relative max-w-[820px] mx-auto px-4 sm:px-6 md:px-7">
        <div
          className="reveal relative overflow-hidden rounded-3xl text-center px-6 py-12 sm:px-12 sm:py-16"
          style={{
            background: '#f0f9ff',
            border: '1px solid #bfdbfe',
            boxShadow: '0 32px 80px rgba(37,99,235,0.12)',
          }}
        >
          {/* Dot pattern */}
          <div
            className="absolute inset-0 pointer-events-none bg-brand-gradient-dots"
            style={{ backgroundSize: '26px 26px', opacity: 0.5 }}
          />

          {/* Radial glows */}
          <div
            className="absolute -top-16 -right-16 w-72 h-72 pointer-events-none"
            style={{ background: 'var(--brand-gradient-glow)' }}
          />
          <div
            className="absolute -bottom-16 -left-16 w-72 h-72 pointer-events-none"
            style={{ background: 'var(--brand-gradient-glow)' }}
          />

          {/* Decorative rings */}
          <div className="absolute -top-24 -left-24 w-64 h-64 rounded-full pointer-events-none"
            style={{ border: '1.5px solid rgba(37,99,235,0.10)' }} />
          <div className="absolute -bottom-28 -right-20 w-72 h-72 rounded-full pointer-events-none"
            style={{ border: '1.5px solid rgba(37,99,235,0.08)' }} />

          {/* Floating decorative icons */}
          <div className="absolute top-8 left-8 w-11 h-11 rounded-2xl hidden sm:flex items-center justify-center pointer-events-none rotate-[-12deg]"
            style={{ background: 'rgba(255,255,255,0.7)', border: '1px solid #bfdbfe', boxShadow: '0 6px 18px rgba(37,99,235,0.10)' }}>
            <PenTool size={18} className="text-blue-400" />
          </div>
          <div className="absolute top-16 right-10 w-10 h-10 rounded-2xl hidden sm:flex items-center justify-center pointer-events-none rotate-[10deg]"
            style={{ background: 'rgba(255,255,255,0.7)', border: '1px solid #bfdbfe', boxShadow: '0 6px 18px rgba(37,99,235,0.10)' }}>
            <Type size={16} className="text-sky-400" />
          </div>
          <div className="absolute bottom-10 left-12 w-10 h-10 rounded-2xl hidden sm:flex items-center justify-center pointer-events-none rotate-[8deg]"
            style={{ background: 'rgba(255,255,255,0.7)', border: '1px solid #bfdbfe', boxShadow: '0 6px 18px rgba(37,99,235,0.10)' }}>
            <Sparkles size={16} className="text-blue-400" />
          </div>

          {/* Corner accent squares */}
          <div className="absolute top-12 right-1/3 w-2.5 h-2.5 rounded-sm rotate-45 pointer-events-none"
            style={{ background: 'rgba(37,99,235,0.25)' }} />
          <div className="absolute bottom-16 right-16 w-2 h-2 rounded-full pointer-events-none"
            style={{ background: 'rgba(14,165,233,0.35)' }} />
          <div className="absolute bottom-24 left-1/3 w-2 h-2 rounded-full pointer-events-none"
            style={{ background: 'rgba(37,99,235,0.25)' }} />

          <div className="relative flex flex-col items-center">
            {/* Badge */}
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-blue-600 text-white
              rounded-full text-[11px] font-bold uppercase tracking-widest mb-7"
              style={{ boxShadow: '0 4px 14px rgba(37,99,235,0.3)' }}>
              <Palette size={11} /> Build Your Brand
            </span>

            {/* Headline */}
            <h2 className="text-[clamp(26px,3.4vw,45px)] font-bold leading-[1.1] tracking-tight mb-5 text-slate-900">
              Let's Build{' '}
              <span className="text-gradient-blue">With Us</span>
            </h2>

            {/* Subtext */}
            <p className="text-[15px] text-slate-600 leading-[1.8] max-w-[520px] mb-8">
              Team up with ARA Discover Marketing — the{' '}
              leading design agency in thanjavur{' '}
              — for innovative branding, logo designing, brochure designing, and complete visual
              identity solutions for business growth.
            </p>

            {/* Service tags */}
            <div className="flex flex-wrap justify-center gap-2 mb-10">
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

            {/* CTA button */}
            <a
              href="tel:+918110025254"
              className="btn-glow inline-flex items-center justify-center gap-3 px-8 py-4
                bg-blue-600 text-white rounded-2xl font-bold text-[14px]
                hover:bg-blue-500 transition-all duration-300 shadow-lg shadow-blue-600/25 group"
            >
              <span>Start Your Project</span>
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-200" />
            </a>

            {/* Social proof mini */}
            <div className="mt-9 flex items-center gap-3 pt-7 border-t border-blue-200/60 w-full max-w-[360px] justify-center">
              <div className="flex -space-x-2">
                {['R', 'P', 'K', 'D'].map((l, i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full border-2 border-white flex items-center justify-center
                      text-white text-[11px] font-bold flex-shrink-0"
                    style={{
                      background: ['#2563eb', '#0284c7', '#2563eb', '#0ea5e9'][i],
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
