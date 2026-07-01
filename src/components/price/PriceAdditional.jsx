import { PhoneCall, Megaphone, Users, Palette, Video, Printer, BookOpen, Gift, Package } from 'lucide-react'

const additionalServices = [
  { icon: Megaphone, label: 'Meta Ads',            color: '#2563eb' },
  { icon: PhoneCall, label: 'Google Ads',           color: '#2563eb' },
  { icon: Users,     label: 'Influencer Marketing', color: '#0ea5e9' },
  { icon: Palette,   label: 'Branding & Design',    color: '#2563eb' },
  { icon: Video,     label: 'Video Production',     color: '#0ea5e9' },
]

const printingCategories = [
  {
    icon: Printer,
    title: 'Corporate Printing',
    color: '#2563eb',
    items: ['Visiting Cards', 'Letterheads', 'Envelopes', 'Company Profiles', 'Brochures'],
  },
  {
    icon: BookOpen,
    title: 'Educational Printing',
    color: '#0ea5e9',
    items: ['Student ID Cards', 'Staff ID Cards', 'Certificates', 'Report Cards', 'Prospectus', 'Admission Forms'],
  },
  {
    icon: Package,
    title: 'Promotional Materials',
    color: '#0ea5e9',
    items: ['Flex Banners', 'Roll-Up Standees', 'Event Backdrops', 'Posters', 'Flyers', 'Pamphlets', 'Vinyl Branding'],
  },
  {
    icon: Gift,
    title: 'Corporate Gifting & Branding',
    color: '#2563eb',
    items: ['Employee Kits', 'Notebooks', 'Mugs', 'T-Shirts', 'Caps', 'Lanyards', 'Gift Bags', 'Custom Merchandise'],
  },
]

export default function PriceAdditional() {
  return (
    <>
      {/* Additional Services */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-[1120px] mx-auto px-4 sm:px-6 md:px-8">

          <div className="text-center mb-12 reveal">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-blue-50 text-blue-600
              border border-blue-100 rounded-full text-[11px] font-bold uppercase tracking-widest mb-4">
              <Megaphone size={11} /> Additional Services
            </span>
            <h2 className="text-[clamp(22px,3vw,34px)] font-bold text-slate-900 leading-tight mb-4">
              Customised for Your Goals
            </h2>
            <p className="text-[15px] text-slate-500 max-w-[560px] mx-auto leading-relaxed">
              Need something specific? These services are priced based on your requirements. Contact us for a tailored quote.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {additionalServices.map(({ icon: Icon, label, color }, i) => (
              <div
                key={label}
                className={`reveal delay-${i + 1} flex flex-col items-center gap-3 rounded-[18px] px-5 py-6
                  text-center transition-all duration-300 hover:-translate-y-1 group`}
                style={{ background: `${color}08`, border: `1px solid ${color}22` }}
              >
                <div className="w-11 h-11 rounded-[13px] flex items-center justify-center"
                  style={{ background: `${color}15` }}>
                  <Icon size={20} style={{ color }} />
                </div>
                <div>
                  <p className="text-[13px] font-bold text-slate-800 mb-1">{label}</p>
                  <p className="text-[11px] font-semibold uppercase tracking-wider"
                    style={{ color }}>Contact for Quote</p>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-[12.5px] text-slate-400 mt-6 reveal">
            * Advertising budget will be charged separately for all ad campaigns.
          </p>

        </div>
      </section>

      {/* Printing & Branding */}
      <section className="py-16 sm:py-20" style={{ background: '#f0f9ff' }}>
        <div className="max-w-[1120px] mx-auto px-4 sm:px-6 md:px-8">

          <div className="text-center mb-12 reveal">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-widest mb-4"
              style={{ background: 'white', color: '#2563eb', border: '1px solid #bfdbfe', boxShadow: '0 2px 12px rgba(37,99,235,0.08)' }}>
              <Printer size={11} /> Printing &amp; Branding
            </span>
            <h2 className="font-bold text-slate-900 leading-tight mb-4"
              style={{ fontSize: 'clamp(22px,3vw,34px)' }}>
              Complete Printing &amp;{' '}
              <span style={{
                background: 'linear-gradient(135deg, #2563eb 0%, #0ea5e9 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>Branding Solutions</span>
            </h2>
            <p className="text-[15px] text-slate-500 max-w-[600px] mx-auto leading-relaxed">
              High-quality print materials and branded merchandise to make your business stand out everywhere.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {printingCategories.map(({ icon: Icon, title, color, items }, i) => (
              <div
                key={title}
                className={`reveal delay-${i + 1} flex flex-col rounded-[22px] p-6 bg-white transition-all duration-300 hover:-translate-y-1`}
                style={{ border: `1px solid ${color === '#0ea5e9' ? '#bae6fd' : '#bfdbfe'}`, boxShadow: '0 2px 12px rgba(37,99,235,0.06)' }}
              >
                {/* Top accent */}
                <div className="w-8 h-[3px] rounded-full mb-4" style={{ background: color }} />

                <div className="w-10 h-10 rounded-[12px] flex items-center justify-center mb-4"
                  style={{ background: `${color}15`, border: `1px solid ${color === '#0ea5e9' ? '#bae6fd' : '#bfdbfe'}` }}>
                  <Icon size={18} style={{ color }} />
                </div>

                <h3 className="text-[15px] font-bold text-slate-900 mb-4">{title}</h3>

                <ul className="flex flex-col gap-2">
                  {items.map(item => (
                    <li key={item} className="flex items-center gap-2 text-[12.5px] text-slate-500">
                      <div className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: color }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  )
}
