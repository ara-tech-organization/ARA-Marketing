import { Zap, Shield, Search, DollarSign, ArrowRight, Sparkles } from 'lucide-react'
import swIntroImg from '../../assets/static/s2.webp'

const features = [
  {
    icon: Zap,
    title: 'Blazing Fast Performance',
    desc: 'Pre-built HTML files served directly — no server processing. Pages load in milliseconds.',
    color: '#0ea5e9',
  },
  {
    icon: Shield,
    title: 'Bulletproof Security',
    desc: 'No backend, no database — static websites eliminate entire categories of vulnerabilities.',
    color: '#2563eb',
  },
  {
    icon: Search,
    title: 'SEO-Ready Structure',
    desc: 'Search engines love fast, clean HTML. Static sites naturally rank better with our optimization.',
    color: '#0ea5e9',
  },
  {
    icon: DollarSign,
    title: 'Cost Effective Solution',
    desc: 'Minimal hosting costs, no server maintenance — long-term value for every business.',
    color: '#2563eb',
  },
]

export default function SWIntro() {
  return (
    <section
      id="sw-intro"
      className="relative overflow-hidden py-14 sm:py-16"
      style={{ background: 'linear-gradient(160deg, #03111f 0%, #04131c 50%, #030e18 100%)' }}
    >
      {/* BG orbs */}
      <div className="absolute -top-28 -right-28 w-[480px] h-[480px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(14,165,233,0.13) 0%, transparent 65%)' }} />
      <div className="absolute -bottom-20 -left-20 w-[360px] h-[360px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(37,99,235,0.09) 0%, transparent 65%)' }} />
      <div className="absolute inset-0 pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.025) 1px, transparent 1px)', backgroundSize: '38px 38px' }} />

      <div className="relative max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8">

        {/* ── Header ── */}
        <div className="text-center mb-10 reveal">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full
            text-[10px] font-bold uppercase tracking-widest mb-4"
            style={{ background: 'rgba(14,165,233,0.15)', color: '#60a5fa', border: '1px solid rgba(14,165,233,0.28)' }}>
            <Sparkles size={9} /> Why Static Websites
          </span>
          <h2 className="font-bold leading-tight tracking-tight text-white mb-3"
            style={{ fontSize: 'clamp(20px,2.5vw,34px)' }}>
            Powering Digital Growth with{' '}
            <span style={{
              background: 'linear-gradient(135deg, #60a5fa, #60a5fa)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              Static Websites
            </span>
          </h2>
          <p className="text-[13px] leading-[1.85] max-w-2xl mx-auto" style={{ color: 'rgba(255,255,255,0.48)' }}>
            Fast, secure, and easy to maintain — our static website development services help
            startups, local businesses, and professionals build a strong online presence with
            minimal cost and maximum performance.
          </p>
        </div>

        {/* ── Image + Text row ── */}
        <div className="reveal flex flex-col lg:flex-row gap-7 lg:gap-12 items-stretch mb-8">

          {/* Image */}
          <div className="lg:w-[46%] flex-shrink-0 relative rounded-2xl overflow-hidden"
            style={{ minHeight: 230, boxShadow: '0 20px 56px rgba(0,0,0,0.45), 0 0 0 1px rgba(14,165,233,0.18)' }}>
            <img
              src={swIntroImg}
              alt="Static Website Development Services Thanjavur"
              loading="lazy"
              className="w-full h-full object-cover scale-105 hover:scale-100 transition-transform duration-[1.5s]"
              style={{ minHeight: 230 }}
            />
            <div className="absolute inset-0"
              style={{ background: 'linear-gradient(135deg, rgba(14,165,233,0.28) 0%, rgba(37,99,235,0.18) 100%)' }} />

            {/* Glass caption */}
            <div className="absolute bottom-4 left-4 right-4 px-4 py-3 rounded-xl"
              style={{ background: 'rgba(3,17,31,0.78)', backdropFilter: 'blur(12px)', border: '1px solid rgba(14,165,233,0.22)' }}>
              <p className="text-[10px] font-black uppercase tracking-widest text-cyan-400 mb-1">
                Static Website Development · Thanjavur
              </p>
              <p className="text-[12px] font-semibold text-white leading-snug">
                Quick · SEO Ready · Mobile Responsive · Secure
              </p>
            </div>

            {/* Stat chip — top right */}
            <div className="absolute top-4 right-4 flex items-center gap-2 px-3 py-2 rounded-xl"
              style={{ background: 'rgba(255,255,255,0.92)', backdropFilter: 'blur(8px)' }}>
              <Zap size={12} style={{ color: '#0ea5e9' }} />
              <div>
                <p className="text-[8px] text-slate-400 font-medium leading-none">Load Time</p>
                <p className="text-[13px] font-black text-slate-800 leading-tight">&lt;1 Sec</p>
              </div>
            </div>
          </div>

          {/* Text */}
          <div className="flex-1 flex flex-col justify-center gap-4">
            <h3 className="text-[13.5px] font-bold text-white leading-snug">
              Static Website Development Services Thanjavur
            </h3>
            <p className="text-[13px] leading-[1.85]" style={{ color: 'rgba(255,255,255,0.50)' }}>
              We are a static website design &amp; development company in Thanjavur delivering
              solutions that are quick, SEO ready, and mobile responsive. Whether you are a small
              business owner or an enterprise, our solutions will make your brand shine online.
            </p>
            <p className="text-[13px] leading-[1.85]" style={{ color: 'rgba(255,255,255,0.50)' }}>
              We specialize in static web page development in Thanjavur — websites that load
              instantly and look great on all devices, helping you attract more customers and
              grow your business online.
            </p>

            {/* Mini stats */}
            <div className="flex gap-5 pt-2"
              style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}>
              <div>
                <p className="text-[20px] font-black leading-tight"
                  style={{ background: 'linear-gradient(135deg,#60a5fa,#60a5fa)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                  &lt;1s
                </p>
                <p className="text-[10px] font-semibold" style={{ color: 'rgba(255,255,255,0.35)' }}>Page Load Time</p>
              </div>
              <div>
                <p className="text-[20px] font-black leading-tight"
                  style={{ background: 'linear-gradient(135deg,#60a5fa,#60a5fa)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                  98/100
                </p>
                <p className="text-[10px] font-semibold" style={{ color: 'rgba(255,255,255,0.35)' }}>SEO Score</p>
              </div>
              <div>
                <p className="text-[20px] font-black leading-tight"
                  style={{ background: 'linear-gradient(135deg,#60a5fa,#60a5fa)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                  100%
                </p>
                <p className="text-[10px] font-semibold" style={{ color: 'rgba(255,255,255,0.35)' }}>Secure</p>
              </div>
            </div>

            <a
              href="/ARA-Marketing/contact-us"
              className="inline-flex items-center gap-2 self-start px-5 py-2.5 rounded-full
                text-[12.5px] font-bold text-white transition-all duration-200 hover:-translate-y-0.5 mt-1"
              style={{
                background: 'linear-gradient(135deg, #0ea5e9, #2563eb)',
                boxShadow: '0 6px 20px rgba(14,165,233,0.32)',
              }}
            >
              Start Your Project Today <ArrowRight size={13} />
            </a>
          </div>
        </div>

        {/* ── Feature cards — horizontal row ── */}
        <div className="reveal grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map(({ icon: Icon, title, desc, color }, i) => (
            <div
              key={title}
              className={`group delay-${i + 1} flex flex-col gap-3 p-5 rounded-2xl transition-all duration-300 hover:-translate-y-1`}
              style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}
              onMouseEnter={e => {
                e.currentTarget.style.background = `${color}0d`
                e.currentTarget.style.borderColor = `${color}35`
                e.currentTarget.style.boxShadow = `0 8px 28px rgba(0,0,0,0.22)`
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.04)'
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'
                e.currentTarget.style.boxShadow = 'none'
              }}
            >
              <div className="h-[3px] w-8 rounded-full" style={{ background: color }} />
              <div className="w-9 h-9 rounded-xl flex items-center justify-center"
                style={{ background: `${color}18`, border: `1px solid ${color}28` }}>
                <Icon size={16} style={{ color }} />
              </div>
              <div>
                <h4 className="text-[12px] font-bold text-white mb-1.5 leading-snug">{title}</h4>
                <p className="text-[11.5px] leading-[1.7]" style={{ color: 'rgba(255,255,255,0.42)' }}>{desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
