import { Sparkles, Package, Briefcase, Share2, Wind, CalendarDays, PlayCircle, Image } from 'lucide-react'

const categories = [
  { label: 'Branding Videos',       icon: Sparkles,     color: '#7c3aed', count: '80+',  img: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=500&fit=crop&auto=format&q=80', alt: 'Branding video portfolio Thanjavur', wide: true },
  { label: 'Social Media Reels',    icon: Share2,        color: '#db2777', count: '120+', img: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=500&h=500&fit=crop&auto=format&q=80', alt: 'Social media reels portfolio Thanjavur', wide: false },
  { label: 'Corporate Films',       icon: Briefcase,    color: '#0891b2', count: '60+',  img: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=500&h=420&fit=crop&auto=format&q=80', alt: 'Corporate film portfolio Thanjavur', wide: false },
  { label: 'Product Advertisements', icon: Package,     color: '#2563eb', count: '90+',  img: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=500&h=420&fit=crop&auto=format&q=80', alt: 'Product video portfolio Thanjavur', wide: false },
  { label: 'Event Coverage Videos', icon: CalendarDays, color: '#059669', count: '70+',  img: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&h=420&fit=crop&auto=format&q=80', alt: 'Event coverage portfolio Thanjavur', wide: true },
  { label: 'Drone Aerial Videos',   icon: Wind,         color: '#d97706', count: '40+',  img: 'https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=500&h=420&fit=crop&auto=format&q=80', alt: 'Drone aerial portfolio Thanjavur', wide: false },
]

const gradBlue = {
  background: 'linear-gradient(135deg,#2563eb,#7c3aed)',
  WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
}

export default function VEPortfolio() {
  return (
    <section className="relative py-24 overflow-hidden"
      style={{ background: 'linear-gradient(160deg, #eff6ff 0%, #f0f7ff 50%, #e0f2fe 100%)' }}>

      {/* Dot grid */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(rgba(37,99,235,0.07) 1.5px, transparent 1.5px)', backgroundSize: '34px 34px' }} />

      {/* ── Double circle – top right ── */}
      <div className="absolute -top-20 -right-20 w-[380px] h-[380px] rounded-full border border-blue-200/30 pointer-events-none" />
      <div className="absolute -top-10 -right-10 w-[240px] h-[240px] rounded-full border border-blue-300/22 pointer-events-none animate-[spin_32s_linear_infinite]" />

      {/* ── Double circle – bottom left ── */}
      <div className="absolute -bottom-16 -left-16 w-[300px] h-[300px] rounded-full border border-violet-200/25 pointer-events-none animate-[spin_28s_linear_infinite_reverse]" />
      <div className="absolute -bottom-8 -left-8 w-[180px] h-[180px] rounded-full border border-violet-300/18 pointer-events-none" />

      {/* Orb */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[300px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(147,197,253,0.18) 0%, transparent 65%)' }} />

      <div className="relative max-w-[1200px] mx-auto px-7">

        {/* ── Header ── */}
        <div className="text-center mb-12 reveal">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white/80 text-blue-600
            border border-blue-200 rounded-full text-[11px] font-bold uppercase tracking-widest mb-5 shadow-sm">
            <Image size={11} /> Portfolio
          </span>
          <h2 className="text-[clamp(26px,3.5vw,46px)] font-bold text-slate-900 leading-[1.1] tracking-tight mb-4">
            Creative Video Samples, Reels &amp;{' '}
            <span style={gradBlue}>Project Highlights</span>
          </h2>
          <p className="text-[15px] text-slate-500 leading-relaxed max-w-2xl mx-auto">
            We are proud to be one of the providers of the best videography and editing in Thanjavur, delivering high-quality visuals for diverse industries.
          </p>
        </div>

        {/* ── Portfolio layout: flex rows ── */}
        <div className="reveal flex flex-col gap-4">

          {/* Row 1: wide card + tall card */}
          <div className="flex flex-col sm:flex-row gap-4">
            {categories.slice(0, 2).map(({ label, icon: Icon, color, count, img, alt, wide }) => (
              <PortfolioCard key={label} label={label} Icon={Icon} color={color} count={count} img={img} alt={alt}
                style={{ flex: wide ? '2' : '1', minHeight: 280 }} />
            ))}
          </div>

          {/* Row 2: three equal cards */}
          <div className="flex flex-col sm:flex-row gap-4">
            {categories.slice(2, 5).map(({ label, icon: Icon, color, count, img, alt }) => (
              <PortfolioCard key={label} label={label} Icon={Icon} color={color} count={count} img={img} alt={alt}
                style={{ flex: '1', minHeight: 240 }} />
            ))}
          </div>

          {/* Row 3: one card */}
          <div className="flex gap-4">
            {categories.slice(5).map(({ label, icon: Icon, color, count, img, alt }) => (
              <PortfolioCard key={label} label={label} Icon={Icon} color={color} count={count} img={img} alt={alt}
                style={{ flex: '1', minHeight: 220 }} />
            ))}
          </div>

        </div>

      </div>
    </section>
  )
}

function PortfolioCard({ label, Icon, color, count, img, alt, style }) {
  return (
    <div
      className="group relative rounded-3xl overflow-hidden cursor-pointer transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl"
      style={{ ...style, boxShadow: '0 8px 32px rgba(37,99,235,0.10)' }}
    >
      <img src={img} alt={alt} loading="lazy"
        className="w-full h-full object-cover absolute inset-0 transition-transform duration-700 group-hover:scale-108" />

      {/* Base overlay */}
      <div className="absolute inset-0 transition-all duration-400"
        style={{ background: `linear-gradient(180deg, ${color}15 0%, rgba(10,15,40,0.68) 100%)` }} />
      {/* Hover overlay */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400"
        style={{ background: `linear-gradient(180deg, ${color}35 0%, rgba(10,15,40,0.80) 100%)` }} />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-between p-5">
        {/* Top */}
        <div className="flex items-start justify-between">
          <div className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110"
            style={{ background: 'rgba(255,255,255,0.14)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.22)' }}>
            <Icon size={16} className="text-white" />
          </div>

          <div className="flex flex-col items-end px-3 py-2 rounded-xl"
            style={{ background: 'rgba(255,255,255,0.12)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.20)' }}>
            <span className="text-[18px] font-black text-white leading-none">{count}</span>
            <span className="text-[9px] font-bold uppercase tracking-wider" style={{ color: 'rgba(255,255,255,0.55)' }}>Projects</span>
          </div>
        </div>

        {/* Bottom */}
        <div>
          <div className="flex items-center gap-2 mb-1 -translate-y-1 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-350">
            <PlayCircle size={12} style={{ color: 'rgba(255,255,255,0.65)' }} />
            <span className="text-[10px] font-bold uppercase tracking-widest" style={{ color: 'rgba(255,255,255,0.65)' }}>View Samples</span>
          </div>
          <p className="text-[15px] font-bold text-white leading-snug">{label}</p>
        </div>
      </div>
    </div>
  )
}
