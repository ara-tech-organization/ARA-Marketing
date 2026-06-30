import { Globe, Search, Megaphone, Share2, MapPin, MessageCircle, Palette, Printer } from 'lucide-react'

const services = [
  { icon: Globe,         label: 'Website Development Packages' },
  { icon: Search,        label: 'Search Engine Optimization (SEO)' },
  { icon: Megaphone,     label: 'Digital Marketing Services' },
  { icon: Share2,        label: 'Social Media Management' },
  { icon: MapPin,        label: 'Google Business Profile Optimization' },
  { icon: MessageCircle, label: 'WhatsApp Business Automation' },
  { icon: Palette,       label: 'Branding & Graphic Design' },
  { icon: Printer,       label: 'Printing & Promotional Solutions' },
]

export default function PriceIntro() {
  return (
    <section id="price-packages" className="py-16 sm:py-20 bg-white">
      <div className="max-w-[1120px] mx-auto px-4 sm:px-6 md:px-8">

        {/* Header */}
        <div className="text-center mb-12 reveal">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-blue-50 text-blue-600
            border border-blue-100 rounded-full text-[11px] font-bold uppercase tracking-widest mb-4">
            <Globe size={11} /> Our Pricing Includes
          </span>
          <h2 className="text-[clamp(22px,3vw,34px)] font-bold text-slate-900 leading-tight mb-4">
            Everything Your Business Needs to Grow Online
          </h2>
          <p className="text-[15px] text-slate-500 max-w-[680px] mx-auto leading-relaxed">
            From professional website development and SEO services to digital marketing, branding,
            and printing solutions — we offer cost-effective packages that fit your needs and budget.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map(({ icon: Icon, label }, i) => (
            <div
              key={label}
              className={`reveal delay-${Math.min(i + 1, 6)} flex items-center gap-3 rounded-[16px] px-5 py-4 group
                transition-all duration-300 hover:-translate-y-1`}
              style={{
                background: 'rgba(37,99,235,0.04)',
                border: '1px solid rgba(37,99,235,0.1)',
              }}
            >
              <div className="w-9 h-9 rounded-[10px] flex items-center justify-center shrink-0
                bg-blue-600/10 group-hover:bg-blue-600/20 transition-colors duration-200">
                <Icon size={16} className="text-blue-600" />
              </div>
              <span className="text-[13px] font-semibold text-slate-700 leading-tight">{label}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
