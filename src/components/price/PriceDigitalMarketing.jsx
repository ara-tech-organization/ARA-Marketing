import { Megaphone, Check, X } from 'lucide-react'

const features = [
  { label: 'Facebook & Instagram Management', pro: true,  proPlus: true },
  { label: 'YouTube Management',              pro: false, proPlus: true },
  { label: 'Google My Business Management',  pro: true,  proPlus: true },
  { label: 'Creative Posters',                pro: '12',  proPlus: '14' },
  { label: 'Videos / Reels',                 pro: '8',   proPlus: '10' },
  { label: 'Professional Photo & Video Shoot', pro: false, proPlus: '1 Day' },
  { label: 'SEO',                            pro: false, proPlus: true },
  { label: 'SEM (Search Engine Marketing)',  pro: false, proPlus: true },
  { label: 'WhatsApp Marketing',             pro: false, proPlus: true },
  { label: 'Google Sheet Lead Tracking',     pro: true,  proPlus: true },
  { label: 'Analytics & Reporting',          pro: true,  proPlus: true },
  { label: 'Dedicated Account Manager',      pro: true,  proPlus: true },
]

function Cell({ value, color }) {
  if (value === true) return <Check size={16} style={{ color }} className="mx-auto" />
  if (value === false) return <X size={14} className="mx-auto text-slate-300" />
  return <span className="text-[13px] font-semibold" style={{ color }}>{value}</span>
}

export default function PriceDigitalMarketing() {
  return (
    <section className="py-16 sm:py-20" style={{ background: '#071a36' }}>
      <div className="max-w-[900px] mx-auto px-4 sm:px-6 md:px-8">

        {/* Header */}
        <div className="text-center mb-12 reveal">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full
            text-[11px] font-bold uppercase tracking-widest mb-4 text-blue-400"
            style={{ background: 'rgba(37,99,235,0.1)', border: '1px solid rgba(37,99,235,0.28)' }}>
            <Megaphone size={11} /> Digital Marketing
          </span>
          <h2 className="font-bold text-white leading-tight mb-4"
            style={{ fontSize: 'clamp(22px,3vw,34px)' }}>
            Digital Marketing{' '}
            <span style={{
              background: 'linear-gradient(135deg, #93c5fd 0%, #60a5fa 25%, #3b82f6 55%, #818cf8 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>Packages</span>
          </h2>
          <p className="text-[15px] max-w-[600px] mx-auto leading-relaxed"
            style={{ color: 'rgba(255,255,255,0.42)' }}>
            Comprehensive social media and digital marketing management to grow your brand online every month.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="reveal rounded-[24px] overflow-hidden"
          style={{ border: '1px solid rgba(255,255,255,0.08)' }}>

          {/* Table header */}
          <div className="grid grid-cols-3"
            style={{ background: 'rgba(255,255,255,0.04)' }}>
            <div className="px-5 py-5 text-[13px] font-bold text-white/60 uppercase tracking-widest">
              Features
            </div>
            {/* PRO */}
            <div className="px-5 py-5 text-center"
              style={{ borderLeft: '1px solid rgba(255,255,255,0.06)' }}>
              <div className="text-[11px] font-bold text-blue-400 uppercase tracking-widest mb-1">PRO</div>
              <div className="text-[28px] font-bold text-white" style={{ letterSpacing: '-1px' }}>₹35,000</div>
              <div className="text-[11px] text-white/40 font-semibold">/month</div>
            </div>
            {/* PRO+ */}
            <div className="px-5 py-5 text-center relative"
              style={{ borderLeft: '1px solid rgba(255,255,255,0.06)',
                background: 'rgba(37,99,235,0.07)' }}>
              <div className="absolute top-0 left-0 right-0 h-[3px] rounded-b-none"
                style={{ background: 'linear-gradient(90deg, #3b82f6, #818cf8)' }} />
              <div className="text-[11px] font-bold text-blue-400 uppercase tracking-widest mb-1">PRO+</div>
              <div className="text-[28px] font-bold text-white" style={{ letterSpacing: '-1px' }}>₹50,000</div>
              <div className="text-[11px] text-white/40 font-semibold">/month</div>
              <div className="inline-block mt-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold
                text-white bg-blue-600">Best Value</div>
            </div>
          </div>

          {/* Rows */}
          {features.map(({ label, pro, proPlus }, i) => (
            <div
              key={label}
              className="grid grid-cols-3 transition-colors duration-150 hover:bg-white/[0.02]"
              style={{
                borderTop: '1px solid rgba(255,255,255,0.06)',
              }}
            >
              <div className="px-5 py-3.5 text-[13px] text-white/65 flex items-center">
                {label}
              </div>
              <div className="px-5 py-3.5 flex items-center justify-center"
                style={{ borderLeft: '1px solid rgba(255,255,255,0.06)' }}>
                <Cell value={pro} color="#60a5fa" />
              </div>
              <div className="px-5 py-3.5 flex items-center justify-center"
                style={{ borderLeft: '1px solid rgba(255,255,255,0.06)',
                  background: i % 2 === 0 ? 'rgba(37,99,235,0.03)' : 'transparent' }}>
                <Cell value={proPlus} color="#93c5fd" />
              </div>
            </div>
          ))}

          {/* CTA row */}
          <div className="grid grid-cols-3"
            style={{ borderTop: '1px solid rgba(255,255,255,0.08)',
              background: 'rgba(255,255,255,0.02)' }}>
            <div className="px-5 py-5 text-[12px] text-white/30 flex items-center">
              * Ad budget charged separately
            </div>
            <div className="px-5 py-5 flex items-center justify-center"
              style={{ borderLeft: '1px solid rgba(255,255,255,0.06)' }}>
              <a href="/ARA-Marketing/contact-us"
                className="px-5 py-2.5 rounded-full text-[12px] font-bold text-blue-400
                  border border-blue-500/40 hover:border-blue-500/70 hover:text-blue-300
                  transition-all duration-200 hover:-translate-y-0.5">
                Get PRO
              </a>
            </div>
            <div className="px-5 py-5 flex items-center justify-center"
              style={{ borderLeft: '1px solid rgba(255,255,255,0.06)',
                background: 'rgba(37,99,235,0.05)' }}>
              <a href="/ARA-Marketing/contact-us"
                className="px-5 py-2.5 rounded-full text-[12px] font-bold text-white
                  transition-all duration-200 hover:-translate-y-0.5"
                style={{ background: 'linear-gradient(135deg, #2563eb, #7c3aed)',
                  boxShadow: '0 4px 20px rgba(37,99,235,0.35)' }}>
                Get PRO+
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
