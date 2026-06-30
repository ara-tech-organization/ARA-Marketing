import { Sparkles, Package, Briefcase, Share2, Wind, CalendarDays, PlayCircle, Image } from 'lucide-react'
import brandingImg  from '../../assets/Video-editing/Branding-videos.webp'
import socialImg    from '../../assets/Video-editing/social-media.webp'
import corporateImg from '../../assets/Video-editing/corporate-films.webp'
import productImg   from '../../assets/Video-editing/product-add.webp'
import droneImg     from '../../assets/Video-editing/Drone-add.webp'
import eventImg     from '../../assets/Video-editing/Event-coverage.webp'

// Row 1: Branding(2) + Social(1)   = 3 cols
// Row 2: Corporate(1) + Product(1) + Drone(1) = 3 cols
// Row 3: Event Coverage full width  = 3 cols
const categories = [
  { label: 'Branding Videos',        icon: Sparkles,    color: '#7c3aed', count: '80+',  img: brandingImg,  alt: 'Branding video portfolio Thanjavur',     span: 'lg:col-span-2' },
  { label: 'Social Media Reels',     icon: Share2,      color: '#db2777', count: '120+', img: socialImg,    alt: 'Social media reels portfolio Thanjavur', span: 'lg:col-span-1' },
  { label: 'Corporate Films',        icon: Briefcase,   color: '#0891b2', count: '60+',  img: corporateImg, alt: 'Corporate film portfolio Thanjavur',     span: 'lg:col-span-1' },
  { label: 'Product Advertisements', icon: Package,     color: '#2563eb', count: '90+',  img: productImg,   alt: 'Product video portfolio Thanjavur',      span: 'lg:col-span-1' },
  { label: 'Drone Aerial Videos',    icon: Wind,        color: '#d97706', count: '40+',  img: droneImg,     alt: 'Drone aerial portfolio Thanjavur',       span: 'lg:col-span-1' },
  { label: 'Event Coverage Videos',  icon: CalendarDays,color: '#059669', count: '70+',  img: eventImg,     alt: 'Event coverage portfolio Thanjavur',     span: 'lg:col-span-3' },
]

export default function VEPortfolio() {
  return (
    <section className="relative py-20 lg:py-18 overflow-hidden" style={{ background: '#f8fafc' }}>

      <div className="absolute inset-0 pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(circle, rgba(37,99,235,0.05) 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
      <div className="absolute -top-28 -right-28 w-[440px] h-[440px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(124,58,237,0.09) 0%, transparent 65%)' }} />
      <div className="absolute -bottom-20 -left-20 w-[360px] h-[360px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(37,99,235,0.07) 0%, transparent 65%)' }} />

      <div className="relative max-w-[1200px] mx-auto px-4 sm:px-6 md:px-7">

        {/* Header */}
        <div className="text-center mb-12 reveal">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-widest mb-5"
            style={{ background: 'rgba(124,58,237,0.1)', border: '1px solid rgba(124,58,237,0.2)', color: '#7c3aed' }}>
            <Image size={11} /> Portfolio
          </span>
          <h2 className="text-[clamp(23px,3.6vw,45px)] font-bold leading-[1.1] tracking-tight mb-4" style={{ fontWeight: 700, color: '#0f172a' }}>
            Creative Video Samples, Reels &amp;{' '}
            <span style={{
              background: 'linear-gradient(135deg, #2563eb 0%, #7c3aed 100%)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
            }}>
              Project Highlights
            </span>
          </h2>
          <p className="text-[15px] leading-relaxed max-w-[580px] mx-auto" style={{ color: '#64748b' }}>
            Proud to be one of the best videography and editing services in Thanjavur — delivering visually compelling, business-centric video content.
          </p>
        </div>

        {/* Portfolio grid — no gaps, every row fills 3 cols */}
        <div className="reveal grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Row 1: Branding(2) + Social(1) */}
          {categories.slice(0, 2).map(({ label, icon: Icon, color, count, img, alt, span }) => (
            <PortfolioCard key={label} label={label} Icon={Icon} color={color} count={count} img={img} alt={alt} span={span} height={280} />
          ))}

          {/* Row 2: Corporate(1) + Product(1) + Drone(1) */}
          {categories.slice(2, 5).map(({ label, icon: Icon, color, count, img, alt, span }) => (
            <PortfolioCard key={label} label={label} Icon={Icon} color={color} count={count} img={img} alt={alt} span={span} height={240} />
          ))}

          {/* Row 3: Event Coverage full width */}
          {categories.slice(5).map(({ label, icon: Icon, color, count, img, alt, span }) => (
            <PortfolioCard key={label} label={label} Icon={Icon} color={color} count={count} img={img} alt={alt} span={span} height={220} />
          ))}
        </div>
      </div>
    </section>
  )
}

function PortfolioCard({ label, Icon, color, count, img, alt, span, height }) {
  return (
    <div
      className={`group relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl ${span}`}
      style={{ height, boxShadow: '0 8px 32px rgba(0,0,0,0.15)' }}
    >
      <img src={img} alt={alt} loading="lazy"
        className="w-full h-full object-cover absolute inset-0 transition-transform duration-700 group-hover:scale-105" />
      {/* Overlay */}
      <div className="absolute inset-0 transition-all duration-400"
        style={{ background: `linear-gradient(180deg, ${color}18 0%, rgba(5,13,30,0.72) 100%)` }} />
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400"
        style={{ background: `linear-gradient(180deg, ${color}38 0%, rgba(5,13,30,0.85) 100%)` }} />

      <div className="absolute inset-0 flex flex-col justify-between p-5">
        {/* Top row */}
        <div className="flex items-start justify-between">
          <div className="w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110"
            style={{ background: 'rgba(255,255,255,0.12)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.2)' }}>
            <Icon size={14} className="text-white" />
          </div>
          <div className="flex flex-col items-end px-3 py-2 rounded-xl"
            style={{ background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.18)' }}>
            <span className="text-[18px] font-black text-white leading-none">{count}</span>
            <span className="text-[9px] font-bold uppercase tracking-wider" style={{ color: 'rgba(255,255,255,0.55)' }}>Projects</span>
          </div>
        </div>

        {/* Bottom label */}
        <div>
          <div className="flex items-center gap-1.5 mb-1.5 -translate-y-1 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-350">
            <PlayCircle size={11} style={{ color }} />
            <span className="text-[10px] font-bold uppercase tracking-widest" style={{ color }}>View Samples</span>
          </div>
          <p className="text-[15px] font-bold text-white leading-snug">{label}</p>
        </div>
      </div>
    </div>
  )
}
