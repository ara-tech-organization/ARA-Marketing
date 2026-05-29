import { Frame, Image, BookOpen, CreditCard, FileText, Share2, Megaphone, Layers, Check, ArrowRight } from 'lucide-react'

const services = [
  {
    icon: Frame,
    title: 'Logo Design & Brand Identity Creation',
    keyword: 'Logo Design Services',
    desc: 'We are experts in creating unique corporate logo layouts in Thanjavur which help businesses to build a strong brand identity and trust.',
    features: ['Custom logo concepts', 'Brand colour palette', 'Typography selection', 'Brand style guide', 'Multiple file formats'],
    img: 'https://images.unsplash.com/photo-1634942537034-2531766767d1?w=560&h=380&fit=crop&auto=format&q=80',
    imgAlt: 'Logo Design and Brand Identity in Thanjavur',
    accent: '#2563eb',
  },
  {
    icon: Image,
    title: 'Banner & Advertisement Design',
    keyword: 'Creative Ad Design',
    desc: 'We design high-impact banners and advertisement creatives that capture attention and drive action. Every design is visually appealing and marketing focused.',
    features: ['Digital banners (all sizes)', 'Print-ready formats', 'Campaign creatives', 'Outdoor hoardings', 'Brand-aligned layouts'],
    img: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=560&h=380&fit=crop&auto=format&q=80',
    imgAlt: 'Creative Ad Design in Thanjavur',
    accent: '#7c3aed',
  },
  {
    icon: BookOpen,
    title: 'Brochure & Pamphlet Design',
    keyword: 'Brochure Design Services',
    desc: 'We create premium brochure layouts in thanjavur that capture attention and deliver your message clearly. We tailor every layout for impact.',
    features: ['Bi-fold & tri-fold layouts', 'A4 / A5 / DL formats', 'Print-ready PDF output', 'Full-colour illustrations', 'Catalogue design'],
    img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=560&h=380&fit=crop&auto=format&q=80',
    imgAlt: 'premium brochure layout in thanjavur',
    accent: '#7c3aed',
  },
  {
    icon: CreditCard,
    title: 'Business Card & Visiting Card Design',
    keyword: 'Business Card Design',
    desc: 'Your stationery materials are a reflection of your business identity. We design professional business cards, visiting cards and letterheads that enhance your brand image and gain the trust of clients.',
    features: ['Standard & premium finishes', 'Single & double-sided', 'Spot UV & foil options', 'Print-ready artwork', 'Digital card variants'],
    img: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=560&h=380&fit=crop&auto=format&q=80',
    imgAlt: 'Business Card Design in Thanjavur',
    accent: '#059669',
  },
  {
    icon: FileText,
    title: 'Letterhead Design & Corporate Stationery',
    keyword: 'Letterhead Design',
    desc: 'A consistent corporate stationery package reinforces professionalism and builds client trust. We design letterheads, envelopes, invoice templates and office stationery aligned with your brand.',
    features: ['Letterhead design', 'Envelope & stamp design', 'Invoice template', 'Corporate folder', 'Email signature'],
    img: 'https://images.unsplash.com/photo-1586281380117-5a60ae2050cc?w=560&h=380&fit=crop&auto=format&q=80',
    imgAlt: 'Letterhead Design in Thanjavur',
    accent: '#d97706',
  },
  {
    icon: Share2,
    title: 'Social Media Post Design',
    keyword: 'Social Media Posts',
    desc: 'Visuals are key to successful online marketing. We develop engaging social media creatives that enhance brand visibility and audience interaction across Instagram, Facebook, LinkedIn and more.',
    features: ['Instagram post & story', 'Facebook cover & ad', 'LinkedIn banner', 'WhatsApp promotional', 'Campaign template sets'],
    img: 'https://images.unsplash.com/photo-1611926653458-09294b3142bf?w=560&h=380&fit=crop&auto=format&q=80',
    imgAlt: 'Social Media Post Design in Thanjavur',
    accent: '#db2777',
  },
  {
    icon: Megaphone,
    title: 'Flyer & Poster Design',
    keyword: 'Flyer Design Services',
    desc: 'We also possess a team of professionals in flyer creation and designing in thanjavur designed to improve marketing reach and customer engagement.',
    features: ['Event & promotional flyers', 'A3 / A4 / A5 posters', 'Product launch designs', 'Retail POS designs', 'Offset-ready artwork'],
    img: 'https://images.unsplash.com/photo-1572021335469-31706a17aaef?w=560&h=380&fit=crop&auto=format&q=80',
    imgAlt: 'Business Flyer Layout in Thanjavur',
    accent: '#0891b2',
  },
  {
    icon: Layers,
    title: 'Graphic Design & Marketing Visuals',
    keyword: 'Graphic Design Services',
    desc: 'We are a top-rated creative agency in thanjavur with a wide range of creative services to enhance your brand presence.',
    features: ['Social media creatives', 'Advertisement designs', 'Promotional graphics', 'Marketing visuals', 'Branding templates'],
    img: 'https://images.unsplash.com/photo-1541535650810-10d26f5c2ab3?w=560&h=380&fit=crop&auto=format&q=80',
    imgAlt: 'Creative Design Agency in Thanjavur',
    accent: '#2563eb',
  },
]

export default function GDServices() {
  return (
    <section
      id="gd-services"
      className="relative overflow-hidden py-24 bg-white"
    >
      {/* Subtle dot bg */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(37,99,235,0.04) 1px, transparent 1px)',
          backgroundSize: '36px 36px',
        }}
      />

      <div className="relative max-w-[1200px] mx-auto px-4 sm:px-6 md:px-7">

        {/* Header */}
        <div className="text-center mb-14 reveal">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-blue-50 text-blue-600
            border border-blue-100 rounded-full text-[11px] font-bold uppercase tracking-widest mb-5">
            <Layers size={11} /> Our Branding Services
          </span>
          <h2 className="text-[clamp(22px,2.8vw,38px)] font-bold text-slate-900 leading-tight tracking-tight mb-4">
            Complete Visual Identity &amp;{' '}
            <span className="text-gradient-blue">Creative Design Solutions</span>
          </h2>
          <p className="text-[15px] text-slate-500 leading-relaxed max-w-xl mx-auto">
            We offer full-scale branding and graphic design services to help businesses
            build a strong market presence and brand recognition.
          </p>
        </div>

        {/* ── Service grid — 2-column cards with image top ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map(({ icon: Icon, title, keyword, desc, features, img, imgAlt, accent }, i) => (
            <div
              key={title}
              className={`reveal delay-${(i % 4) + 1} group relative bg-white rounded-2xl overflow-hidden border border-slate-100
                hover:shadow-2xl hover:-translate-y-2 transition-all duration-350`}
              style={{ boxShadow: '0 4px 20px rgba(37,99,235,0.07)' }}
            >
              {/* Image with overlay */}
              <div className="relative h-40 overflow-hidden">
                <img
                  src={img}
                  alt={imgAlt}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div
                  className="absolute inset-0"
                  style={{ background: `linear-gradient(180deg, ${accent}99 0%, ${accent}cc 100%)` }}
                />
                {/* Icon */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center"
                    style={{ background: 'rgba(255,255,255,0.2)', border: '1.5px solid rgba(255,255,255,0.35)' }}
                  >
                    <Icon size={26} className="text-white" />
                  </div>
                </div>
                {/* Accent bar bottom */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-1"
                  style={{ background: accent }}
                />
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="text-[13px] font-bold text-slate-800 leading-snug mb-1.5 group-hover:text-blue-700 transition-colors duration-200">
                  {title}
                </h3>
                <span
                  className="inline-block text-[9px] font-bold px-2 py-0.5 rounded-full mb-3"
                  style={{ background: accent + '15', color: accent }}
                >
                  {keyword}
                </span>
                <p className="text-[12px] text-slate-500 leading-[1.7] mb-4 line-clamp-3">{desc}</p>

                {/* Feature list */}
                <div className="space-y-1.5 mb-5">
                  {features.slice(0, 3).map((f) => (
                    <div key={f} className="flex items-center gap-2">
                      <div
                        className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0"
                        style={{ background: accent + '18' }}
                      >
                        <Check size={9} style={{ color: accent }} />
                      </div>
                      <span className="text-[11px] text-slate-500 font-medium">{f}</span>
                    </div>
                  ))}
                </div>

                <a
                  href="/ARA-Marketing/contact"
                  className="flex items-center gap-1.5 text-[11px] font-bold transition-all duration-200 group/link"
                  style={{ color: accent }}
                >
                  Get a Quote
                  <ArrowRight size={11} className="group-hover/link:translate-x-0.5 transition-transform duration-200" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <p className="text-center text-[13px] text-slate-400 mt-10 reveal">
          Our skilled branding team is the{' '}
          <span className="font-semibold text-blue-600">best graphic design service in Thanjavur</span>{' '}
          that businesses turn to when they want creative, professional, and high-impact design solutions.
        </p>

      </div>
    </section>
  )
}
