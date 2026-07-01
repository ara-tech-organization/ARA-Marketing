import { Search, MessageCircle, Check } from 'lucide-react'

const seoFeatures = [
  'Google Business Profile Optimization',
  'Local Keyword Ranking',
  'Technical SEO',
  'On-Page & Off-Page SEO',
  'Monthly Reports',
]

const waFeatures = [
  'WhatsApp Catalog Setup',
  'Auto Reply Configuration',
  'Lead Capture System',
  'Appointment Booking',
  'Customer Follow-up Automation',
  'Broadcast & Campaigns',
]

export default function PriceSEO() {
  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-[1120px] mx-auto px-4 sm:px-6 md:px-8">

        {/* Header */}
        <div className="text-center mb-12 reveal">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-blue-50 text-blue-600
            border border-blue-100 rounded-full text-[11px] font-bold uppercase tracking-widest mb-4">
            <Search size={11} /> SEO &amp; Automation
          </span>
          <h2 className="text-[clamp(22px,3vw,34px)] font-bold text-slate-900 leading-tight mb-4">
            SEO &amp; Automation Packages
          </h2>
          <p className="text-[15px] text-slate-500 max-w-[600px] mx-auto leading-relaxed">
            Boost your local visibility and automate customer communication with our proven packages.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[820px] mx-auto">

          {/* Local SEO */}
          <div className="reveal delay-1 flex flex-col rounded-[24px] p-7 transition-all duration-300 hover:-translate-y-1"
            style={{ background: 'rgba(37,99,235,0.04)', border: '1.5px solid rgba(37,99,235,0.15)' }}>
            <div className="w-11 h-11 rounded-[14px] flex items-center justify-center mb-5"
              style={{ background: 'rgba(37,99,235,0.1)' }}>
              <Search size={20} className="text-blue-600" />
            </div>
            <h3 className="text-[18px] font-bold text-slate-900 mb-1">Local SEO Package</h3>
            <div className="flex items-baseline gap-1 mb-2">
              <span className="text-[34px] font-bold text-blue-600" style={{ letterSpacing: '-1px' }}>₹8,000</span>
              <span className="text-[14px] font-semibold text-slate-400">/month</span>
            </div>
            <p className="text-[12px] text-slate-400 mb-6 uppercase tracking-wider font-semibold">Starting from</p>
            <ul className="flex flex-col gap-2.5 flex-1">
              {seoFeatures.map(f => (
                <li key={f} className="flex items-center gap-2.5 text-[13.5px] text-slate-600">
                  <Check size={14} className="text-blue-600 shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
            <a
              href="/ARA-Marketing/contact-us"
              className="mt-7 w-full flex items-center justify-center py-3 rounded-full text-[13px]
                font-bold text-white bg-blue-600 hover:bg-blue-700 transition-all duration-200 hover:-translate-y-0.5"
            >
              Get Started
            </a>
          </div>

          {/* WhatsApp */}
          <div className="reveal delay-2 flex flex-col rounded-[24px] p-7 transition-all duration-300 hover:-translate-y-1"
            style={{ background: 'rgba(14,165,233,0.04)', border: '1.5px solid rgba(14,165,233,0.2)' }}>
            <div className="w-11 h-11 rounded-[14px] flex items-center justify-center mb-5"
              style={{ background: 'rgba(14,165,233,0.1)' }}>
              <MessageCircle size={20} style={{ color: '#0ea5e9' }} />
            </div>
            <h3 className="text-[18px] font-bold text-slate-900 mb-1">WhatsApp Business Setup &amp; Automation</h3>
            <div className="flex items-baseline gap-1 mb-2">
              <span className="text-[34px] font-bold" style={{ color: '#0ea5e9', letterSpacing: '-1px' }}>₹5,000</span>
            </div>
            <p className="text-[12px] text-slate-400 mb-6 uppercase tracking-wider font-semibold">One-time setup</p>
            <ul className="flex flex-col gap-2.5 flex-1">
              {waFeatures.map(f => (
                <li key={f} className="flex items-center gap-2.5 text-[13.5px] text-slate-600">
                  <Check size={14} style={{ color: '#0ea5e9' }} className="shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
            <a
              href="/ARA-Marketing/contact-us"
              className="mt-7 w-full flex items-center justify-center py-3 rounded-full text-[13px]
                font-bold text-white transition-all duration-200 hover:-translate-y-0.5"
              style={{ background: 'linear-gradient(135deg, #2563eb, #0ea5e9)', boxShadow: '0 4px 16px rgba(14,165,233,0.28)' }}
            >
              Get Started
            </a>
          </div>

        </div>
      </div>
    </section>
  )
}
