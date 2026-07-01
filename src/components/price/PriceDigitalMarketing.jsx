import { Megaphone, Check, X, Zap, Star } from 'lucide-react'

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

function FeatureRow({ label, value, accent }) {
  const included = value !== false
  return (
    <div className="flex items-center gap-3 py-2.5"
      style={{ borderBottom: '1px solid #f1f5f9' }}>
      <div className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center"
        style={{ background: included ? `${accent}18` : '#f1f5f9' }}>
        {included
          ? <Check size={11} style={{ color: accent }} />
          : <X size={10} className="text-slate-300" />}
      </div>
      <span className="flex-1 text-[12.5px]" style={{ color: included ? '#334155' : '#cbd5e1' }}>
        {label}
      </span>
      {typeof value === 'string' && (
        <span className="text-[11.5px] font-bold px-2 py-0.5 rounded-md"
          style={{ background: `${accent}12`, color: accent }}>
          {value}
        </span>
      )}
    </div>
  )
}

export default function PriceDigitalMarketing() {
  return (
    <section className="py-16 sm:py-20 relative overflow-hidden" style={{ background: '#f0f9ff' }}>

      {/* subtle glow orbs */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[300px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse,rgba(219,234,254,0.6) 0%,transparent 70%)' }} />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[300px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse,rgba(186,230,253,0.5) 0%,transparent 70%)' }} />

      <div className="relative max-w-[960px] mx-auto px-4 sm:px-6 md:px-8">

        {/* ── Header ── */}
        <div className="text-center mb-12 reveal">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-widest mb-4"
            style={{ background: 'white', color: '#2563eb', border: '1px solid #bfdbfe', boxShadow: '0 2px 12px rgba(37,99,235,0.08)' }}>
            <Megaphone size={11} /> Digital Marketing
          </span>
          <h2 className="font-bold text-slate-900 leading-tight mb-4"
            style={{ fontSize: 'clamp(22px,3vw,34px)' }}>
            Digital Marketing{' '}
            <span style={{ background: 'linear-gradient(135deg,#2563eb,#0ea5e9)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              Packages
            </span>
          </h2>
          <p className="text-[15px] text-slate-500 max-w-[600px] mx-auto leading-relaxed">
            Comprehensive social media and digital marketing management to grow your brand online every month.
          </p>
        </div>

        {/* ── Plan Cards ── */}
        <div className="reveal grid grid-cols-1 sm:grid-cols-2 gap-5 items-start">

          {/* PRO Card */}
          <div className="rounded-2xl overflow-hidden bg-white transition-all duration-300 hover:-translate-y-1"
            style={{ border: '1px solid #dbeafe', boxShadow: '0 4px 20px rgba(37,99,235,0.08)' }}>

            {/* plan header */}
            <div className="px-6 pt-7 pb-6" style={{ borderBottom: '1px solid #f1f5f9' }}>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-7 h-7 rounded-lg flex items-center justify-center"
                  style={{ background: '#dbeafe' }}>
                  <Zap size={13} style={{ color: '#2563eb' }} />
                </div>
                <span className="text-[11px] font-bold uppercase tracking-widest text-blue-600">PRO</span>
              </div>
              <div className="flex items-end gap-1.5 mb-1">
                <span className="text-[38px] font-black text-slate-900 leading-none tracking-tight">₹35,000</span>
                <span className="text-[13px] text-slate-400 font-medium mb-1">/month</span>
              </div>
              <p className="text-[12px] text-slate-400">Perfect for growing brands</p>
            </div>

            {/* features */}
            <div className="px-6 py-4">
              {features.map(f => <FeatureRow key={f.label} label={f.label} value={f.pro} accent="#2563eb" />)}
            </div>

            {/* CTA */}
            <div className="px-6 pb-6 pt-2">
              <a href="/ARA-Marketing/contact-us"
                className="block w-full text-center py-3 rounded-xl text-[13px] font-bold text-blue-600 transition-all duration-200 hover:text-blue-700"
                style={{ border: '1px solid #bfdbfe', background: '#eff6ff' }}>
                Get Started with PRO
              </a>
              <p className="text-[11px] text-slate-400 text-center mt-3">* Ad budget charged separately</p>
            </div>
          </div>

          {/* PRO+ Card */}
          <div className="rounded-2xl overflow-hidden relative bg-white transition-all duration-300 hover:-translate-y-2"
            style={{ border: '1.5px solid #bae6fd', boxShadow: '0 16px 48px rgba(14,165,233,0.14)' }}>

            {/* top accent */}
            <div className="h-[3px]" style={{ background: 'linear-gradient(90deg,#2563eb,#0ea5e9)' }} />

            {/* best value badge */}
            <div className="absolute top-4 right-4">
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-bold text-white"
                style={{ background: 'linear-gradient(135deg,#2563eb,#0ea5e9)' }}>
                <Star size={9} fill="currentColor" /> Best Value
              </span>
            </div>

            {/* plan header */}
            <div className="px-6 pt-7 pb-6" style={{ borderBottom: '1px solid #f1f5f9' }}>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-7 h-7 rounded-lg flex items-center justify-center"
                  style={{ background: '#e0f2fe' }}>
                  <Zap size={13} style={{ color: '#0ea5e9' }} />
                </div>
                <span className="text-[11px] font-bold uppercase tracking-widest" style={{ color: '#0ea5e9' }}>PRO+</span>
              </div>
              <div className="flex items-end gap-1.5 mb-1">
                <span className="text-[38px] font-black text-slate-900 leading-none tracking-tight">₹50,000</span>
                <span className="text-[13px] text-slate-400 font-medium mb-1">/month</span>
              </div>
              <p className="text-[12px] text-slate-400">Full-scale digital domination</p>
            </div>

            {/* features */}
            <div className="px-6 py-4">
              {features.map(f => <FeatureRow key={f.label} label={f.label} value={f.proPlus} accent="#0ea5e9" />)}
            </div>

            {/* CTA */}
            <div className="px-6 pb-6 pt-2">
              <a href="/ARA-Marketing/contact-us"
                className="block w-full text-center py-3 rounded-xl text-[13px] font-bold text-white transition-all duration-200 hover:opacity-90 hover:-translate-y-0.5"
                style={{ background: 'linear-gradient(135deg,#2563eb,#0ea5e9)', boxShadow: '0 6px 24px rgba(37,99,235,0.28)' }}>
                Get Started with PRO+
              </a>
              <p className="text-[11px] text-slate-400 text-center mt-3">* Ad budget charged separately</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
