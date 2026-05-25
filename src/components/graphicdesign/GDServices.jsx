import { useState } from 'react'
import {
  Frame, Image, BookOpen, CreditCard, FileText, Share2,
  Megaphone, Layers, ArrowRight, Check
} from 'lucide-react'

const services = [
  {
    id: 'logo',
    icon: Frame,
    title: 'Logo Design & Brand Identity',
    shortDesc: 'Unique logos that define your brand personality',
    fullDesc:
      'Your logo is the face of your business. Our designers create unique and memorable logos that reflect the personality of your brand and your industry. Every logo is created with strategic thinking, so it works across digital and print platforms.',
    features: ['Custom logo concepts', 'Brand colour palette', 'Typography selection', 'Brand style guide', 'Multiple file formats'],
    keyword: 'Best Professional Logo Design in Thanjavur',
  },
  {
    id: 'banner',
    icon: Image,
    title: 'Banner & Advertisement Design',
    shortDesc: 'Eye-catching banners for digital and print',
    fullDesc:
      'We design high-impact banners and advertisement creatives that capture attention and drive action. From digital display ads to large-format print banners, every piece is crafted for maximum visibility and brand impact.',
    features: ['Digital banners (all sizes)', 'Print-ready formats', 'Campaign creatives', 'Outdoor hoardings', 'Brand-aligned layouts'],
    keyword: 'Best Advertisement Design in Thanjavur',
  },
  {
    id: 'brochure',
    icon: BookOpen,
    title: 'Brochure & Pamphlet Design',
    shortDesc: 'Compelling brochures that communicate your services',
    fullDesc:
      'A brochure or pamphlet is a powerful marketing tool that successfully communicates your services and offers. We create the best brochure design in Thanjavur that captures attention and delivers your message clearly.',
    features: ['Bi-fold & tri-fold layouts', 'A4 / A5 / DL formats', 'Print-ready PDF output', 'Full-colour illustrations', 'Pamphlet & catalogue design'],
    keyword: 'Best Brochure Design in Thanjavur',
  },
  {
    id: 'card',
    icon: CreditCard,
    title: 'Business Card & Visiting Card',
    shortDesc: 'Professional cards that make lasting impressions',
    fullDesc:
      'Your stationery materials are a reflection of your business identity. We design professional business cards, visiting cards and letterheads that enhance your brand image and help your business maintain a consistent professional identity.',
    features: ['Standard & premium finishes', 'Single & double-sided', 'Spot UV & foil options', 'Print-ready artwork', 'Digital card variants'],
    keyword: 'Best Business Card Design in Thanjavur',
  },
  {
    id: 'letterhead',
    icon: FileText,
    title: 'Letterhead & Corporate Stationery',
    shortDesc: 'Complete stationery package for your brand',
    fullDesc:
      'A consistent corporate stationery package reinforces professionalism and builds client trust. We design letterheads, envelopes, invoice templates and office stationery that align perfectly with your brand identity.',
    features: ['Letterhead design', 'Envelope & stamp design', 'Invoice template', 'Corporate folder design', 'Email signature design'],
    keyword: 'Corporate Stationery Design in Thanjavur',
  },
  {
    id: 'social',
    icon: Share2,
    title: 'Social Media Post Design',
    shortDesc: 'Scroll-stopping creatives for social platforms',
    fullDesc:
      'Visuals are key to successful online marketing on social media. We develop engaging creatives that enhance brand visibility and audience interaction. Our social media ad creatives help improve engagement and brand awareness across all platforms.',
    features: ['Instagram post & story', 'Facebook cover & ad', 'LinkedIn banner', 'WhatsApp promotional', 'Campaign template sets'],
    keyword: 'Social Media Creative Design in Thanjavur',
  },
  {
    id: 'flyer',
    icon: Megaphone,
    title: 'Flyer & Poster Design',
    shortDesc: 'Marketing materials that widen your reach',
    fullDesc:
      'We possess a team of professionals in the best business flyer design in Thanjavur designed to improve marketing reach and customer engagement. Every flyer and poster is designed to be visually appealing and marketing-focused.',
    features: ['Event & promotional flyers', 'A3 / A4 / A5 posters', 'Product launch designs', 'Retail POS designs', 'Offset-ready artwork'],
    keyword: 'Best Business Flyer Design in Thanjavur',
  },
  {
    id: 'graphic',
    icon: Layers,
    title: 'Graphic Design & Marketing Visuals',
    shortDesc: 'Complete graphic solutions for all your needs',
    fullDesc:
      'We are the best graphic design company in Thanjavur with a wide range of creative services to enhance your brand presence. From promotional graphics to branding templates, we deliver consistent and high-quality design solutions.',
    features: ['Social media creatives', 'Advertisement designs', 'Promotional graphics', 'Marketing visuals', 'Branding templates'],
    keyword: 'Best Graphic Design Company in Thanjavur',
  },
]

export default function GDServices() {
  const [active, setActive] = useState(0)
  const svc = services[active]
  const Icon = svc.icon

  return (
    <section id="gd-services" className="relative overflow-hidden py-24 bg-white">
      {/* Subtle radial gradient */}
      <div
        className="absolute top-0 right-0 w-[600px] h-[600px] pointer-events-none"
        style={{ background: 'radial-gradient(circle at top right, rgba(219,234,254,0.4) 0%, transparent 65%)' }}
      />

      <div className="relative max-w-[1200px] mx-auto px-7">

        {/* Header */}
        <div className="text-center mb-12 reveal">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-blue-50 text-blue-600
            border border-blue-100 rounded-full text-[11px] font-bold uppercase tracking-widest mb-5">
            <Layers size={11} /> Our Branding Services
          </span>
          <h2 className="text-[clamp(22px,2.8vw,38px)] font-bold text-slate-900 leading-tight tracking-tight mb-4">
            Complete Visual Identity &amp;{' '}
            <span className="text-gradient-blue">Creative Design Solutions</span>
          </h2>
          <p className="text-[15px] text-slate-500 leading-relaxed max-w-2xl mx-auto">
            We offer full-scale branding and graphic design services to help businesses build a
            strong market presence and brand recognition across Thanjavur and beyond.
          </p>
        </div>

        {/* Tab + Panel layout */}
        <div className="reveal grid lg:grid-cols-[320px_1fr] gap-6 items-start">

          {/* Service tab list */}
          <div className="flex flex-col gap-2">
            {services.map((s, i) => {
              const TabIcon = s.icon
              return (
                <button
                  key={s.id}
                  onClick={() => setActive(i)}
                  className={`flex items-center gap-3 px-4 py-3.5 rounded-2xl text-left transition-all duration-250 border
                    ${active === i
                      ? 'bg-blue-600 text-white border-blue-600 shadow-lg shadow-blue-600/25'
                      : 'bg-white text-slate-600 border-blue-50 hover:bg-blue-50 hover:border-blue-200'
                    }`}
                >
                  <div className={`w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-250
                    ${active === i ? 'bg-white/20' : 'bg-blue-50'}`}>
                    <TabIcon size={17} className={active === i ? 'text-white' : 'text-blue-600'} />
                  </div>
                  <div className="min-w-0">
                    <p className={`text-[13px] font-bold leading-tight truncate ${active === i ? 'text-white' : 'text-slate-800'}`}>
                      {s.title}
                    </p>
                    <p className={`text-[11px] mt-0.5 truncate ${active === i ? 'text-blue-100' : 'text-slate-400'}`}>
                      {s.shortDesc}
                    </p>
                  </div>
                </button>
              )
            })}
          </div>

          {/* Service detail panel */}
          <div
            key={svc.id}
            className="bg-white rounded-3xl border border-blue-100 overflow-hidden"
            style={{ boxShadow: '0 16px 60px rgba(37,99,235,0.08)' }}
          >
            {/* Gradient top bar */}
            <div className="h-1.5" style={{ background: 'linear-gradient(90deg, #1d4ed8, #38bdf8)' }} />

            <div className="p-8">
              <div className="flex items-start gap-5 mb-6">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0"
                  style={{ background: 'linear-gradient(135deg, #2563eb, #38bdf8)' }}
                >
                  <Icon size={26} className="text-white" />
                </div>
                <div>
                  <h3 className="text-[20px] font-bold text-slate-900 leading-tight mb-1">{svc.title}</h3>
                  <span className="inline-block text-[11px] font-semibold text-blue-600 bg-blue-50 px-2.5 py-0.5 rounded-full">
                    {svc.keyword}
                  </span>
                </div>
              </div>

              <p className="text-[15px] text-slate-500 leading-[1.85] mb-7">{svc.fullDesc}</p>

              <div className="mb-8">
                <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-3">What's Included</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2.5 gap-x-4">
                  {svc.features.map((f) => (
                    <div key={f} className="flex items-center gap-2.5">
                      <div className="w-5 h-5 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0">
                        <Check size={11} className="text-blue-600" />
                      </div>
                      <span className="text-[13px] text-slate-600 font-medium">{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-full
                  text-sm font-semibold shadow-md shadow-blue-600/20 hover:bg-blue-500 transition-all duration-300"
              >
                Get a Quote <ArrowRight size={15} />
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
