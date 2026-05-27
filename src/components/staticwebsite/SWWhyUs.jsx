import { Code2, Smartphone, Zap, DollarSign, Users, Award, ArrowRight } from 'lucide-react'

const reasons = [
  {
    num: '01',
    icon: Code2,
    title: 'Clean and SEO-Optimized Coding Structure',
    desc: 'Every website we build follows best practices for semantic HTML, clean CSS, and structured code that search engines love and browsers render at peak speed.',
    color: '#0891b2',
  },
  {
    num: '02',
    icon: Smartphone,
    title: 'Mobile-First Responsive Design Approach',
    desc: 'We design every layout starting from mobile up — ensuring your website looks and works perfectly across smartphones, tablets, and desktops.',
    color: '#2563eb',
  },
  {
    num: '03',
    icon: Zap,
    title: 'Lightning-Fast Loading Speed',
    desc: 'Static pages load in under a second with no database roundtrips. Faster sites rank higher, retain visitors longer, and convert better.',
    color: '#7c3aed',
  },
  {
    num: '04',
    icon: DollarSign,
    title: 'Affordable Pricing for All Business Sizes',
    desc: 'From startups to established enterprises, we offer transparent, budget-friendly packages with no hidden fees and maximum ROI.',
    color: '#059669',
  },
  {
    num: '05',
    icon: Users,
    title: 'Expert Team of Designers and Developers',
    desc: 'Our experienced team combines creative design with technical excellence to deliver websites that are both beautiful and high-performing.',
    color: '#dc2626',
  },
]

export default function SWWhyUs() {
  return (
    <section className="py-16 sm:py-24 bg-white relative overflow-hidden">
      {/* Subtle background tint top-right */}
      <div
        className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(8,145,178,0.05) 0%, transparent 65%)' }}
      />

      <div className="max-w-[1280px] mx-auto px-4 sm:px-7">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">

          {/* ── Left: Intro block ── */}
          <div className="lg:w-[380px] flex-shrink-0 reveal-left">
            <span
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-widest mb-5"
              style={{ background: 'rgba(8,145,178,0.08)', color: '#0891b2', border: '1px solid rgba(8,145,178,0.2)' }}
            >
              <Award size={11} /> Why Choose Us
            </span>

            <h2 className="text-[clamp(24px,2.8vw,40px)] font-bold text-slate-900 leading-tight tracking-tight mb-5">
              Why Clients{' '}
              <span
                style={{
                  background: 'linear-gradient(135deg, #0891b2, #2563eb)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Prefer Us
              </span>
            </h2>

            <p className="text-[14.5px] text-slate-600 leading-[1.85] mb-4">
              We are a trusted <strong className="text-slate-800 font-semibold">static website development company in Thanjavur</strong> for all sizes of business, offering modern, conversion-focused websites built to perform.
            </p>
            <p className="text-[14.5px] text-slate-600 leading-[1.85] mb-4">
              As a leading <strong className="text-slate-800 font-semibold">static website development company in Thanjavur</strong>, we make sure that every website we develop is performance-driven and future-ready.
            </p>
            <p className="text-[14.5px] text-slate-600 leading-[1.85] mb-8">
              We're also a trusted <strong className="text-slate-800 font-semibold">static web design company in Thanjavur</strong>, creating conversion-oriented, visually-appealing layouts that match your brand identity.
            </p>

            {/* Highlights box */}
            <div
              className="rounded-2xl p-6"
              style={{ background: 'linear-gradient(135deg, rgba(8,145,178,0.06), rgba(37,99,235,0.06))', border: '1px solid rgba(8,145,178,0.14)' }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ background: 'linear-gradient(135deg, #0891b2, #2563eb)' }}
                >
                  <Award size={16} className="text-white" />
                </div>
                <div>
                  <p className="text-[12px] font-bold text-slate-800">Trusted By</p>
                  <p className="text-[10px] text-slate-500">Local businesses across Thanjavur</p>
                </div>
              </div>
              <div className="flex gap-4">
                {[
                  { val: '150+', lbl: 'Sites Built' },
                  { val: '7 Days', lbl: 'Delivery' },
                  { val: '5★', lbl: 'Rating' },
                ].map(({ val, lbl }) => (
                  <div key={lbl} className="flex-1 text-center">
                    <p
                      className="text-[20px] font-black leading-tight"
                      style={{
                        background: 'linear-gradient(135deg, #0891b2, #2563eb)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                      }}
                    >
                      {val}
                    </p>
                    <p className="text-[10px] text-slate-500 font-medium">{lbl}</p>
                  </div>
                ))}
              </div>
            </div>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 mt-8 px-6 py-3 rounded-full text-[13px] font-semibold text-white transition-all duration-300 hover:scale-[1.03]"
              style={{ background: 'linear-gradient(135deg, #2563eb, #1d4ed8)' }}
            >
              Get Started Today <ArrowRight size={14} />
            </a>
          </div>

          {/* ── Right: Stacked reason rows ── */}
          <div className="flex-1 flex flex-col gap-4 reveal-right">
            {reasons.map(({ num, icon: Icon, title, desc, color }, i) => (
              <div
                key={num}
                className={`flex items-start gap-5 p-5 rounded-2xl transition-all duration-300 cursor-default reveal delay-${i + 1}`}
                style={{
                  background: '#f8fafc',
                  border: '1px solid #e2e8f0',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = `${color}06`
                  e.currentTarget.style.border = `1px solid ${color}30`
                  e.currentTarget.style.boxShadow = `0 4px 24px ${color}12`
                  e.currentTarget.style.transform = 'translateX(4px)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = '#f8fafc'
                  e.currentTarget.style.border = '1px solid #e2e8f0'
                  e.currentTarget.style.boxShadow = 'none'
                  e.currentTarget.style.transform = 'translateX(0)'
                }}
              >
                {/* Number */}
                <span
                  className="text-[11px] font-black flex-shrink-0 mt-0.5 w-7 h-7 rounded-lg flex items-center justify-center"
                  style={{ background: `${color}14`, color }}
                >
                  {num}
                </span>

                {/* Icon */}
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: `${color}12`, border: `1px solid ${color}25` }}
                >
                  <Icon size={17} style={{ color }} />
                </div>

                {/* Text */}
                <div className="flex-1 min-w-0">
                  <h3 className="text-[14px] font-bold text-slate-800 mb-1 leading-snug">{title}</h3>
                  <p className="text-[12.5px] text-slate-500 leading-[1.7]">{desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
