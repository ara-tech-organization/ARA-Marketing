import { Frame, BookOpen, Megaphone, CreditCard, Share2, Image, Layers } from 'lucide-react'
import logoImg       from '../../assets/GD/LogoDesign.png'
import pamphletImg   from '../../assets/GD/Pamphlet.png'
import socialImg     from '../../assets/GD/SocialMediaPost.png'
import flyerImg      from '../../assets/GD/Flyer&Poster Design.png'
import visualsImg    from '../../assets/GD/Visuals.png'
import visitingImg   from '../../assets/GD/Visitingcard.png'

const categories = [
  { label: 'Logo Designs',           icon: Frame,     color: '#2563eb', bg: '#dbeafe' },
  { label: 'Brochure Designs',       icon: BookOpen,  color: '#7c3aed', bg: '#ede9fe' },
  { label: 'Advertisement Creatives',icon: Image,     color: '#059669', bg: '#d1fae5' },
  { label: 'Social Media Campaigns', icon: Share2,    color: '#db2777', bg: '#fce7f3' },
  { label: 'Corporate Branding',     icon: Layers,    color: '#0891b2', bg: '#cffafe' },
  { label: 'Flyer & Poster Designs', icon: Megaphone, color: '#d97706', bg: '#fef3c7' },
]

const projects = [
  {
    label: 'Restaurant Brand Identity',
    tag: 'Logo Design',
    img: logoImg,
    alt: 'Professional Brand Logo Design in Thanjavur for Restaurant Brand',
  },
  {
    label: 'Corporate Brochure Design',
    tag: 'Brochure',
    img: pamphletImg,
    alt: 'Corporate Brochure Designs in Thanjavur - Corporate Identity',
  },
  {
    label: 'Social Media Campaign',
    tag: 'Social Media',
    img: socialImg,
    alt: 'Social Media Post Design in Thanjavur - Brand Campaign',
  },
  {
    label: 'Retail Flyer Design',
    tag: 'Flyer Design',
    img: flyerImg,
    alt: 'Business Flyer Layouts in Thanjavur - Retail Marketing',
  },
  {
    label: 'Educational Institution Branding',
    tag: 'Brand Identity',
    img: visualsImg,
    alt: 'Best Graphic Design Companies in Thanjavur - Educational Branding',
  },
  {
    label: 'Business Card Collection',
    tag: 'Business Cards',
    img: visitingImg,
    alt: 'Best Business Card Design in Thanjavur - Corporate Stationery',
  },
]

export default function GDPortfolio() {
  return (
    <section
      className="relative overflow-hidden py-24"
      style={{ background: 'linear-gradient(180deg, #f8faff 0%, #eff6ff 100%)' }}
    >
      {/* Wave top */}
      <svg className="absolute top-0 left-0 w-full pointer-events-none" viewBox="0 0 1200 60" preserveAspectRatio="none" style={{ height: 60 }}>
        <path d="M0,30 C200,60 400,0 600,30 C800,60 1000,0 1200,30 L1200,0 L0,0 Z" fill="rgba(255,255,255,0.9)" />
      </svg>

      <div className="relative max-w-[1200px] mx-auto px-4 sm:px-6 md:px-7">

        {/* Header */}
        <div className="text-center mb-12 reveal">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white text-blue-600
            border border-blue-100 rounded-full text-[11px] font-bold uppercase tracking-widest mb-5 shadow-sm">
            <Layers size={11} /> Portfolio
          </span>
          <h2 className="text-[clamp(22px,2.8vw,38px)] font-bold text-slate-900 leading-tight tracking-tight mb-4">
            Creative Branding Projects &amp;{' '}
            <span className="text-gradient-blue">Design Success Stories</span>
          </h2>
          <p className="text-[15px] text-slate-500 leading-relaxed max-w-2xl mx-auto">
            We've done branding projects for startups, local businesses, retail stores, restaurants,
            educational institutions and corporate brands across Thanjavur and beyond.
          </p>
        </div>

        {/* Category pills */}
        <div className="reveal flex flex-wrap justify-center gap-3 mb-10">
          {categories.map(({ label, icon: Icon, color, bg }) => (
            <div
              key={label}
              className="flex items-center gap-2 px-4 py-2 rounded-full border text-[12px] font-semibold transition-all duration-200 hover:-translate-y-0.5"
              style={{ background: bg, borderColor: color + '30', color }}
            >
              <Icon size={13} />
              {label}
            </div>
          ))}
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map(({ label, tag, img, alt }, i) => (
            <div
              key={label}
              className={`reveal delay-${(i % 4) + 1} group relative rounded-2xl overflow-hidden cursor-pointer`}
              style={{ boxShadow: '0 4px 20px rgba(37,99,235,0.08)' }}
            >
              <img
                src={img}
                alt={alt}
                loading="lazy"
                width="600"
                height="400"
                className="w-full h-52 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {/* Overlay */}
              <div
                className="absolute inset-0 flex flex-col justify-end p-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: 'linear-gradient(180deg, transparent 30%, rgba(30,58,138,0.85) 100%)' }}
              >
                <span className="text-[10px] font-bold text-blue-200 uppercase tracking-widest mb-1">{tag}</span>
                <p className="text-[14px] font-bold text-white">{label}</p>
              </div>
              {/* Tag chip (always visible) */}
              <div
                className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[10px] font-bold"
                style={{ background: 'rgba(37,99,235,0.9)', color: '#fff' }}
              >
                {tag}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <p className="text-center text-[13px] text-slate-400 mt-10 reveal">
          We are proud to be named among the{' '}
          top graphic design companies in thanjavur{' '}
          for offering creative, impactful and business-oriented design solutions.
        </p>

      </div>
    </section>
  )
}
